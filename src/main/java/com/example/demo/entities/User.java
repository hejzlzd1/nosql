package com.example.demo.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Document
@Data
public class User extends BaseEntity{
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    private Date dateOfBirth;
    private Address address;

    @DBRef
    private Set<User> friends;

    @DBRef
    private Set<Like> likes;

    @DBRef
    private Set<Comment> comments;

    @DBRef
    private Set<Post> posts;

}
