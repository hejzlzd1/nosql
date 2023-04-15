package com.example.demo.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Document
@Data
public class Comment extends BaseEntity{
    @DocumentReference
    private User author;

    @DocumentReference
    private Post post;

    private String text;
    private boolean flaggedAsSpam = false;
    @DBRef
    private Set<Comment> replies;
}
