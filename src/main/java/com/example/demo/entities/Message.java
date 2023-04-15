package com.example.demo.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@EqualsAndHashCode(callSuper = true)
@Document
@Data
public class Message extends BaseEntity{
    @DocumentReference
    private User author;
    @DocumentReference
    private User receiver;

    private boolean seen = false;
    private String text;
}
