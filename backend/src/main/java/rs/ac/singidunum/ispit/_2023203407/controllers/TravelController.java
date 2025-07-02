package rs.ac.singidunum.ispit._2023203407.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.dto.TravelDto;
import rs.ac.singidunum.ispit._2023203407.entities.Car;
import rs.ac.singidunum.ispit._2023203407.entities.Driver;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;
import rs.ac.singidunum.ispit._2023203407.mappers.TravelMapper;
import rs.ac.singidunum.ispit._2023203407.repositories.CarRepository;
import rs.ac.singidunum.ispit._2023203407.repositories.DriverRepository;
import rs.ac.singidunum.ispit._2023203407.repositories.TravelRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/travels")
@RequiredArgsConstructor
public class TravelController {
    private final TravelRepository travelRepository;
    private final CarRepository carRepository;
    private final DriverRepository driverRepository;


    @GetMapping
    public List<TravelDto> getTravels() {
        return travelRepository.findAll().stream().map(TravelMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<TravelDto> createTravel(@RequestBody TravelDto dto) {
        Travel travelEntity = TravelMapper.toEntity(dto);
        Car car = carRepository.findById(dto.getCarId()).orElseThrow();
        Driver driver = driverRepository.findById(dto.getDriverId()).orElseThrow();
        travelEntity.setDriver(driver);
        travelEntity.setCar(car);
        Travel savedTravel = travelRepository.save(travelEntity);
        return ResponseEntity.ok().body(TravelMapper.toDto(savedTravel));
    }
}
