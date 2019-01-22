package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.ProfileDTO;
import swengs.fooddb.model.Profile;
import swengs.fooddb.service.MediaService;
import swengs.fooddb.service.ProfileService;
import swengs.fooddb.model.Gender;

@Service()
@Transactional
public class ProfileFacade {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private MediaService mediaService;

    void mapDtoToEntity(ProfileDTO dto, Profile entity) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setGender(dto.getGender());
        entity.setDescription(dto.getDescription());
        entity.setPictures(dto.getPictures());
    }

    private void mapEntityToDto(Profile entity, ProfileDTO dto) {
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setGender(entity.getGender());
        dto.setDescription(entity.getDescription());
        dto.setPictures(entity.getPictures());
    }

    public ProfileDTO update(Long id, ProfileDTO dto) {
        Profile entity = profileService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(profileService.save(entity), dto);
        return dto;
    }

    public ProfileDTO create(ProfileDTO dto) {
        Profile entity = new Profile();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(profileService.save(entity), dto);
        return dto;
    }

    public ProfileDTO getById(Long id) {
        Profile entity = profileService.findById(id).get();
        ProfileDTO dto = new ProfileDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}

