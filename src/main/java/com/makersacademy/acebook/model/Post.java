package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;

    @CreationTimestamp
    private Timestamp stamp;

    private Post() {}

    public Post(String content) { // This constructor only gets used for writing content to the db
        this.content = content;
    }

    public String getStamp() {
        String stampString =  this.stamp.toString();
        String day = stampString.substring(8, 10);
        String month = stampString.substring(5, 7);
        String year = stampString.substring(0, 4);
        String hour = stampString.substring(11, 13);
        String minute = stampString.substring(14, 16);
        return day + "/" + month + "/" + year + " at " + hour + "." + minute;
    }

}
