package com.zwippe.bankingnotification.consumer;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.zwippe.bankingnotification.notification.NotifyTransactionGateway;
import com.zwippe.bankingnotification.notification.NotifyTransactionEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class consumerService {

    @Autowired
    NotifyTransactionGateway notifyTransactionGateway;

    @KafkaListener(topics = "transactions", groupId = "my-group", clientIdPrefix = "my-consumer")
    public void consumeMessage(String message) {
        System.out.println("Message received: " + message);
        try {
            TransactionEvent transactionEvent = TransactionEvent.fromJson(message);
            NotifyTransactionEntity notification = new NotifyTransactionEntity(
                    transactionEvent.getId(),
                    transactionEvent.getStatus(),
                    transactionEvent.getAccountNumber(),
                    transactionEvent.getAmount());

            notifyTransactionGateway.sendNotification(notification);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }
}
