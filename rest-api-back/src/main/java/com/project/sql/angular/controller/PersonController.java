package com.project.sql.angular.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.project.sql.angular.dao.IPersonDao;
import com.project.sql.angular.model.Person;
import com.project.sql.angular.view.MyJsonView;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class PersonController {

    IPersonDao iPersonDao;

    public PersonController(IPersonDao iPersonDao) {
        this.iPersonDao = iPersonDao;
    }

    @GetMapping("/test/all")
    @JsonView(MyJsonView.Person.class)
    public List<Person> getAllPersons(){
        return iPersonDao.findAll();
    }
}
