package rs.ac.singidunum.ispit._2023203407.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.ReadOnlyProperty;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TravelDto {

    @ReadOnlyProperty
    private Long id;

    @ReadOnlyProperty
    private String createdAt;

    @ReadOnlyProperty
    private String updatedAt;

    @NotNull
    @Min(0)
    private Double distance;

    @NotNull
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY, required = true)
    private Long carId;

    @NotNull
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY, required = true)
    private Long driverId;

    @ReadOnlyProperty
    private CarDto car;

    @ReadOnlyProperty
    private DriverDto driver;
}
