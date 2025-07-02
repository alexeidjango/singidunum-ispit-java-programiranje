package rs.ac.singidunum.ispit._2023203407.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;

import java.util.Arrays;
import java.util.List;

public interface TravelRepository extends JpaRepository <Travel, Long> {
    List<Travel> findAllByCarId(Long carId, Sort createdAt);
}
