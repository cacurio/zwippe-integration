package com.zwippe.bankingnotification.notification;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class NotifyTransactionEntity {

    private Integer externalId;
    private String status;
    private String account;
    private Double amount;

    public NotifyTransactionEntity(Integer externalId, String status, String account, Double amount) {
        this.externalId = externalId;
        this.status = status;
        this.account = account;
        this.amount = amount;
    }

    public Integer getExternalId() {
        return externalId;
    }

    public String getStatus() {
        return status;
    }

    public String getAccount() {
        return account;
    }

    public Double getAmount() {
        return amount;
    }

    public String toJson() throws JsonProcessingException {
        final ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(this);
    }

}
