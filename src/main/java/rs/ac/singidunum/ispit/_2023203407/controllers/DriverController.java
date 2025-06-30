package rs.ac.singidunum.ispit._2023203407.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.dto.DriverDto;
import rs.ac.singidunum.ispit._2023203407.entities.Driver;
import rs.ac.singidunum.ispit._2023203407.mappers.DriverMapper;
import rs.ac.singidunum.ispit._2023203407.repositories.DriverRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/drivers")
@CrossOrigin
@RequiredArgsConstructor
public class DriverController {
    private final DriverRepository driverRepository;

    @GetMapping
    public List<DriverDto> getDrivers() {
        return driverRepository.findAll().stream().map(DriverMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<DriverDto> createDriver(@RequestBody DriverDto model) {
        Driver driverEntity = DriverMapper.toEntity(model);
        Driver savedDriverEntity = driverRepository.save(driverEntity);
        return ResponseEntity.ok().body(DriverMapper.toDto(savedDriverEntity));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DriverDto> updateDriver(@PathVariable("id") Long driverId, @RequestBody DriverDto model) {
        Driver driverEntity = driverRepository.findById(driverId).orElseThrow();
        driverEntity.setJmbg(model.getJmbg());
        driverEntity.setFirstName(model.getFirstName());
        driverEntity.setLastName(model.getLastName());
        Driver savedDriverEntity = driverRepository.save(driverEntity);
        return ResponseEntity.ok().body(DriverMapper.toDto(savedDriverEntity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDriver(@PathVariable("id") Long driverId) {
        Driver driverEntity = driverRepository.findById(driverId).orElseThrow();
        driverRepository.delete(driverEntity);
        return ResponseEntity.ok("Driver deleted.");
    }
}
