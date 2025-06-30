package rs.ac.singidunum.ispit._2023203407.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.entity.Car;
import rs.ac.singidunum.ispit._2023203407.repository.CarRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cars")
@CrossOrigin
@RequiredArgsConstructor
public class CarController {
    private final CarRepository carRepository;

    @GetMapping
    public List<Car> getCars() {
        return carRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car model) {
        Car carEntity = new Car();
        carEntity.setLicensePlate(model.getLicensePlate());
        carEntity.setModel(model.getModel());
        Car savedCarEntity = carRepository.save(carEntity);
        return ResponseEntity.ok().body(savedCarEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable("id") Long carId, @RequestBody Car model) {
        Car carEntity = carRepository.findById(carId).orElseThrow();
        carEntity.setLicensePlate(model.getLicensePlate());
        carEntity.setModel(model.getModel());
        Car savedCarEntity = carRepository.save(carEntity);
        return ResponseEntity.ok().body(savedCarEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable("id") Long carId) {
        Car carEntity = carRepository.findById(carId).orElseThrow();
        carRepository.delete(carEntity);
        return ResponseEntity.ok("Car deleted.");
    }
}
