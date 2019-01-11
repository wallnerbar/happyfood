package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.UserProfileDTO;
import swengs.fooddb.model.UserProfile;
import swengs.fooddb.service.MediaService;
import swengs.fooddb.service.UserProfileService;

@Service()
@Transactional
public class UserProfileFacade {

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private MediaService mediaService;

    void mapDtoToEntity(UserProfileDTO dto, UserProfile entity) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setGender(dto.getGender());
        entity.setDescription(dto.getDescription());
        entity.setPictures(dto.getMedia());
    }

    private void mapEntityToDto(UserProfile entity, UserProfileDTO dto) {
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setGender(entity.getGender());
        dto.setDescription(entity.getDescription());
        dto.setMedia(entity.getPictures());
    }

    public UserProfileDTO update(Long id, UserProfileDTO dto) {
        UserProfile entity = userProfileService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userProfileService.save(entity), dto);
        return dto;
    }

    public UserProfileDTO create(UserProfileDTO dto) {
        UserProfile entity = new UserProfile();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userProfileService.save(entity), dto);
        return dto;
    }

    public UserProfileDTO getById(Long id) {
        UserProfile entity = userProfileService.findById(id).get();
        UserProfileDTO dto = new UserProfileDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
