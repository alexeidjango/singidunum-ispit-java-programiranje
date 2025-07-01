package rs.ac.singidunum.ispit._2023203407.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.ispit._2023203407.dto.TravelDto;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;
import rs.ac.singidunum.ispit._2023203407.mappers.TravelMapper;
import rs.ac.singidunum.ispit._2023203407.repositories.TravelRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/travels")
@CrossOrigin
@RequiredArgsConstructor
public class TravelController {
    private final TravelRepository travelRepository;


    @GetMapping
    public List<TravelDto> getTravels() {
        return travelRepository.findAll().stream().map(TravelMapper::toDto).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<Travel> createTravel(@RequestBody Travel model) {
        Travel travelEntity = new Travel();
        travelEntity.setDistance(model.getDistance());
        Travel savedTravel = travelRepository.save(travelEntity);
        return ResponseEntity.ok().body(savedTravel);
    }

}
