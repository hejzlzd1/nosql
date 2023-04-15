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
public class Post extends BaseEntity{
    @DocumentReference
    private User author;
    private String text;
    private String attachmentPath = null;
    @DBRef
    private Set<Like> likes;
    @DBRef
    private Set<Comment> comments;
}
