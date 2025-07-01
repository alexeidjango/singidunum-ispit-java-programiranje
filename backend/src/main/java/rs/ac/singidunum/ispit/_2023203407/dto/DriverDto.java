package rs.ac.singidunum.ispit._2023203407.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DriverDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String jmbg;
    private String createdAt;
    private String updatedAt;
}
