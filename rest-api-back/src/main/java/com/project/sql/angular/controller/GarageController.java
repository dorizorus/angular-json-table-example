package com.project.sql.angular.controller;

import com.project.sql.angular.dao.IGarageDao;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GarageController {

    IGarageDao iGarageDao;

    public GarageController(IGarageDao iGarageDao) {
        this.iGarageDao = iGarageDao;
    }
}
