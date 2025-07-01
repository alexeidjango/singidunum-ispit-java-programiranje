package rs.ac.singidunum.ispit._2023203407.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    private Long id;
    private String licensePlate;
    private String model;
    private String createdAt;
    private String updatedAt;
    private Double distance;
}
