package rs.ac.singidunum.ispit._2023203407.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.ReadOnlyProperty;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {

    @ReadOnlyProperty
    private Long id;

    @NotNull
    @Length(min = 3,  max = 15)
    private String licensePlate;

    @NotNull
    @NotBlank
    private String model;

    @ReadOnlyProperty
    private String createdAt;

    @ReadOnlyProperty
    private String updatedAt;

    @ReadOnlyProperty
    private Double distance;

    @NotNull
    private Double lastServiceDistance;
}
