package com.project.sql.angular.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.project.sql.angular.view.MyJsonView;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(MyJsonView.Person.class)
    private int id;
    @JsonView(MyJsonView.Person.class)
    private String name;

    @OneToMany(mappedBy = "owner")
    @JsonView(MyJsonView.Person.class)
    private Set<Vehicle> vehicles;

}
