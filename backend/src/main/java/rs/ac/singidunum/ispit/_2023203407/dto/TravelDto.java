package rs.ac.singidunum.ispit._2023203407.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.ReadOnlyProperty;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TravelDto {
    private Long id;
    private String createdAt;
    private String updatedAt;
    private Double distance;

    @NotNull
    private Long carId;

    @NotNull
    private Long driverId;

    @ReadOnlyProperty
    private CarDto car;

    @ReadOnlyProperty
    private DriverDto driver;
}
