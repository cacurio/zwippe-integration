package com.zwippe.bankingnotification.notification;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface NotifyTransactionGateway {
    void sendNotification(NotifyTransactionEntity message) throws JsonProcessingException;
}
