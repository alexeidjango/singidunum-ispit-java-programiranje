package rs.ac.singidunum.ispit._2023203407.mappers;

import rs.ac.singidunum.ispit._2023203407.dto.DriverDto;
import rs.ac.singidunum.ispit._2023203407.entities.Driver;

public class DriverMapper {
    public static Driver toEntity(DriverDto driverDto) {
        Driver driver = new Driver();
        driver.setFirstName(driverDto.getFirstName());
        driver.setLastName(driverDto.getLastName());
        driver.setJmbg(driverDto.getJmbg());
        return driver;
    }

    public static DriverDto toDto(Driver driver) {
        DriverDto driverDto = new DriverDto();
        driverDto.setFirstName(driver.getFirstName());
        driverDto.setLastName(driver.getLastName());
        driverDto.setJmbg(driver.getJmbg());
        driverDto.setId(driver.getId());
        driverDto.setCreatedAt(driver.getCreatedAt().toString());
        driverDto.setUpdatedAt(driver.getUpdatedAt().toString());
        return driverDto;
    }
}
