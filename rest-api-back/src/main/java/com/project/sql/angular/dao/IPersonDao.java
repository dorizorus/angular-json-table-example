package com.project.sql.angular.dao;

import com.project.sql.angular.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonDao extends JpaRepository<Person, Integer> {
}
