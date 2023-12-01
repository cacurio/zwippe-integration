package com.zwippe.bankingnotification.consumer;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TransactionEvent {
    private Integer id;
    private String status;
    private String accountNumber;
    private Double amount;

    public TransactionEvent(
            @JsonProperty("id") Integer id,
            @JsonProperty("status") String status,
            @JsonProperty("account") String accountNumber,
            @JsonProperty("amount") String amount) {
        this.id = id;
        this.status = status;
        this.accountNumber = accountNumber;
        this.amount = Double.valueOf(amount);
    }

    public Integer getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public Double getAmount() {
        return amount;
    }

    public static TransactionEvent fromJson(String json) throws JsonMappingException, JsonProcessingException {
        final ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, TransactionEvent.class);
    }

}
