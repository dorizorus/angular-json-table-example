package com.project.sql.angular.controller;

import com.project.sql.angular.dao.IVehicleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class VehicleController {

    IVehicleDao iVehicleDao;

    @Autowired
    public VehicleController(IVehicleDao iVehicleDao) {
        this.iVehicleDao = iVehicleDao;
    }
}
