package com.project.sql.angular.dao;

import com.project.sql.angular.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVehicleDao extends JpaRepository<Vehicle, Integer> {
}
