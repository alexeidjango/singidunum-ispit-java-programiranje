package rs.ac.singidunum.ispit._2023203407.mappers;

import rs.ac.singidunum.ispit._2023203407.dto.CarDto;
import rs.ac.singidunum.ispit._2023203407.entities.Car;

public class CarMapper {
    public static Car toEntity(CarDto carDto) {
            Car car = new Car();
            car.setModel(carDto.getModel());
            car.setLicensePlate(carDto.getLicensePlate());
            return car;
        }

        public static CarDto toDto(Car car) {
            CarDto carDto = new CarDto();
            carDto.setId(car.getId());
            carDto.setModel(car.getModel());
            carDto.setLicensePlate(car.getLicensePlate());
            carDto.setCreatedAt(car.getCreatedAt().toString());
            carDto.setUpdatedAt(car.getUpdatedAt().toString());
            return carDto;
        }
}
