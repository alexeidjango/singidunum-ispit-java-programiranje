package rs.ac.singidunum.ispit._2023203407.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.dto.CarDto;
import rs.ac.singidunum.ispit._2023203407.entities.Car;
import rs.ac.singidunum.ispit._2023203407.exceptions.ResourceAlreadyExists;
import rs.ac.singidunum.ispit._2023203407.mappers.CarMapper;
import rs.ac.singidunum.ispit._2023203407.repositories.CarRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/cars")
@RequiredArgsConstructor
public class CarController {
    private final CarRepository carRepository;

    @GetMapping
    public List<CarDto> getCars() {
        return carRepository.findAll(Sort.by(Sort.Direction.DESC, "id"))
                .stream().map(CarMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<CarDto> createCar(@RequestBody CarDto model) throws ResourceAlreadyExists {
        try {
            Car savedCarEntity = carRepository.save(CarMapper.toEntity(model));
            return ResponseEntity.ok().body(CarMapper.toDto(savedCarEntity));
        } catch (DataIntegrityViolationException e) {
            throw new ResourceAlreadyExists("Vozilo sa ovim tablicama već postoji.");
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<CarDto> updateCar(@PathVariable("id") Long carId, @RequestBody CarDto model) {
        Car carEntity = carRepository.findById(carId).orElseThrow();
        carEntity.setLicensePlate(model.getLicensePlate());
        carEntity.setModel(model.getModel());
        Car savedCarEntity = carRepository.save(carEntity);
        return ResponseEntity.ok().body(CarMapper.toDto(savedCarEntity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable("id") Long carId) {
        Car carEntity = carRepository.findById(carId).orElseThrow();
        carRepository.delete(carEntity);
        return ResponseEntity.ok("Car deleted.");
    }
}
