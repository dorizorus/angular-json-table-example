package com.project.sql.angular.dao;

import com.project.sql.angular.model.Garage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGarageDao extends JpaRepository<Garage, Integer> {
}
