package rs.ac.singidunum.ispit._2023203407.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.ac.singidunum.ispit._2023203407.entities.Car;

import java.util.Arrays;

public interface CarRepository extends JpaRepository<Car, Long> {
}
