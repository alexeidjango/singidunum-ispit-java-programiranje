package rs.ac.singidunum.ispit._2023203407.mappers;

import rs.ac.singidunum.ispit._2023203407.dto.TravelDto;
import rs.ac.singidunum.ispit._2023203407.entities.Travel;

public class TravelMapper {
    public static TravelDto toDto(Travel travel) {
        TravelDto travelDto = new TravelDto();
        travelDto.setId(travel.getId());
        return travelDto;
    }

    public static Travel toEntity(TravelDto travelDto) {
        Travel travel = new Travel();
        travel.setId(travelDto.getId());
        return travel;
    }
}
