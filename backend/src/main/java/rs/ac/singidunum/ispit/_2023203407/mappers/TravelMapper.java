package rs.ac.singidunum.ispit._2023203407.mappers;

import rs.ac.singidunum.ispit._2023203407.dto.TravelDto;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;

public class TravelMapper {
    public static TravelDto toDto(Travel travel) {
        TravelDto travelDto = new TravelDto();
        travelDto.setId(travel.getId());
        travelDto.setDriverId(travel.getDriver().getId());
        travelDto.setCarId(travel.getCar().getId());
        travelDto.setCreatedAt(travel.getCreatedAt().toString());
        travelDto.setUpdatedAt(travel.getUpdatedAt().toString());
        travelDto.setDistance(travel.getDistance());

        travelDto.setCar(CarMapper.toDto(travel.getCar()));
        travelDto.setDriver(DriverMapper.toDto(travel.getDriver()));
        return travelDto;
    }

    public static Travel toEntity(TravelDto travelDto) {
        Travel travel = new Travel();
        travel.setDistance(travelDto.getDistance());
        return travel;
    }
}
