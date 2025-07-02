package rs.ac.singidunum.ispit._2023203407.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rs.ac.singidunum.ispit._2023203407.entities.Car;

import java.util.Arrays;

public interface CarRepository extends JpaRepository<Car, Long> {
    @Query("SELECT c FROM Car c JOIN c.travels t GROUP BY c HAVING SUM(t.distance) - c.lastServiceDistance >= :distanceDelta")
    java.util.List<Car> findCarsWithTravelDistanceGreaterThanLastService(long distanceDelta);
}
