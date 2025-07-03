package rs.ac.singidunum.ispit._2023203407.dto;

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
public class DriverDto {

    @ReadOnlyProperty
    private Long id;

    @NotNull
    @NotBlank
    @Length(max = 255)
    private String firstName;

    @NotNull
    @NotBlank
    @Length(max = 255)
    private String lastName;

    @NotNull
    @Length(min = 13, max = 13)
    private String jmbg;

    @ReadOnlyProperty
    private String createdAt;

    @ReadOnlyProperty
    private String updatedAt;
}
