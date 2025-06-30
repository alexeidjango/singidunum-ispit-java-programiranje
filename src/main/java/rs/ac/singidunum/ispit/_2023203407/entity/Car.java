package rs.ac.singidunum.ispit._2023203407.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"license_plate", "vin_number"}))
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Please provide valid license number.")
    private String licensePlate;

    @NotBlank(message = "Please provide valid car model.")
    private String model;

    @NotBlank(message = "Please provide valid VIN number")
    private String vinNumber;

    @PositiveOrZero(message = "Mileage cannot be negative.")
    private Integer mileage;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Travel> travels;
}
