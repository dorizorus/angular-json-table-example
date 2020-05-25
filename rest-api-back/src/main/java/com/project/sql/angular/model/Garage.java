package com.project.sql.angular.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.project.sql.angular.view.MyJsonView;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Garage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(MyJsonView.Person.class)
    private int id;

    @OneToOne
    @JoinColumn(name = "id_vehicle", referencedColumnName = "id")
    private Vehicle vehicle;
}
