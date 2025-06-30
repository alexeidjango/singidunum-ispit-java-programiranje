package rs.ac.singidunum.ispit._2023203407.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.entity.Car;
import rs.ac.singidunum.ispit._2023203407.entity.Driver;
import rs.ac.singidunum.ispit._2023203407.repository.CarRepository;
import rs.ac.singidunum.ispit._2023203407.repository.DriverRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/drivers")
@CrossOrigin
@RequiredArgsConstructor
public class DriverController {
    private final DriverRepository driverRepository;

    @GetMapping
    public List<Driver> getDrivers() {
        return driverRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Driver> createDriver(@RequestBody Driver model) {
        Driver driverEntity = new Driver();
        driverEntity.setJmbg(model.getJmbg());
        driverEntity.setFirstName(model.getFirstName());
        driverEntity.setLastName(model.getLastName());
        Driver savedDriverEntity = driverRepository.save(driverEntity);
        return ResponseEntity.ok().body(savedDriverEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Driver> updateDriver(@PathVariable("id") Long driverId, @RequestBody Driver model) {
        Driver driverEntity = driverRepository.findById(driverId).orElseThrow();
        driverEntity.setJmbg(model.getJmbg());
        driverEntity.setFirstName(model.getFirstName());
        driverEntity.setLastName(model.getLastName());
        Driver savedDriverEntity = driverRepository.save(driverEntity);
        return ResponseEntity.ok().body(savedDriverEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDriver(@PathVariable("id") Long driverId) {
        Driver driverEntity = driverRepository.findById(driverId).orElseThrow();
        driverRepository.delete(driverEntity);
        return ResponseEntity.ok("Driver deleted.");
    }
}
