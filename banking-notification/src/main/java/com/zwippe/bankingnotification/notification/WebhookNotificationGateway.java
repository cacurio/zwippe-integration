package com.zwippe.bankingnotification.notification;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public class WebhookNotificationGateway implements NotifyTransactionGateway {

    private static final String COMPLETED_ENDPOINT = "http://localhost:3000/transactions/completed";
    private static final String REJECTED_ENDPOINT = "http://localhost:3000/transactions/failed";

    private static final Map<String, String> ENDPOINT_MAP = new HashMap<String, String>() {
        {
            put(TransactionTypeEnum.APPROVED.toString(), COMPLETED_ENDPOINT);
            put(TransactionTypeEnum.REJECTED.toString(), REJECTED_ENDPOINT);
        }
    };

    public WebhookNotificationGateway() {
    }

    @Override
    public void sendNotification(NotifyTransactionEntity message) throws JsonProcessingException {
        String endpoint = ENDPOINT_MAP.get(message.getStatus());
        if (endpoint != null) {
            sendMessage(message.toJson(), endpoint);
        } else {
            System.out.println("No endpoint found for status: " + message.getStatus());
        }

    }

    private void sendMessage(String message, String endpoint) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> entity = new HttpEntity<>(message, headers);
            restTemplate.postForEntity(REJECTED_ENDPOINT, entity, String.class);
        } catch (Exception e) {
            System.out.println("Error sending notification: " + e.getMessage());
        }
    }
}
