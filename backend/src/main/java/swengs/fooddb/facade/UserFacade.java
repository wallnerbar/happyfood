package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.UserDTO;
import swengs.fooddb.model.User;
import swengs.fooddb.model.UserProfile;
import swengs.fooddb.service.UserService;

@Service
@Transactional
public class UserFacade {

    @Autowired
    private UserService userService;

    void mapDtoToEntity(UserDTO dto, User entity) {
        UserProfile profile = entity.getUserProfile();
        entity.setUsername(dto.getUsername());
        profile.setFirstName(dto.getFirstName());
        profile.setLastName(dto.getLastName());
        profile.setGender(dto.getGender());
        profile.setDescription(dto.getDescription());
        entity.setUserProfile(profile);
    }

    private void mapEntityToDto(User entity, UserDTO dto) {
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setFirstName(entity.getUserProfile().getFirstName());
        dto.setLastName(entity.getUserProfile().getLastName());
        dto.setGender(entity.getUserProfile().getGender());
        dto.setDescription(entity.getUserProfile().getDescription());
    }

    public UserDTO update(Long id, UserDTO dto) {
        User entity = userService.getProfile(userService.findById(id).get());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userService.save(entity), dto);
        return dto;
    }

    public UserDTO create(UserDTO dto) {
        User entity = userService.getProfile(new User());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userService.save(entity), dto);
        return dto;
    }

    public UserDTO getById(Long id) {
        User entity = userService.findById(id).get();
        UserDTO dto = new UserDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

}
