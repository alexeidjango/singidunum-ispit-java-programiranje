package rs.ac.singidunum.ispit._2023203407.mappers;

import rs.ac.singidunum.ispit._2023203407.dto.CarDto;
import rs.ac.singidunum.ispit._2023203407.entities.Car;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;

import java.util.List;

public class CarMapper {
    public static Car toEntity(CarDto carDto) {
        Car car = new Car();
        car.setModel(carDto.getModel());
        car.setLicensePlate(carDto.getLicensePlate());
        car.setLastServiceDistance(carDto.getLastServiceDistance());
        return car;
    }

    public static CarDto toDto(Car car) {
        CarDto carDto = new CarDto();
        carDto.setId(car.getId());
        carDto.setModel(car.getModel());
        carDto.setLicensePlate(car.getLicensePlate());
        carDto.setCreatedAt(car.getCreatedAt().toString());
        carDto.setUpdatedAt(car.getUpdatedAt().toString());
        carDto.setLastServiceDistance(car.getLastServiceDistance());
        List<Travel> travels = car.getTravels();
        Double distance = travels != null ? car.getTravels().stream().map((travel) -> travel.getDistance() * 1.0).reduce(0.0, Double::sum) : 0.0;
        carDto.setDistance(distance);
        return carDto;
    }
}
