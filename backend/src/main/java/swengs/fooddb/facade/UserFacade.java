package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.UserDTO;
import swengs.fooddb.model.Profile;
import swengs.fooddb.model.User;
import swengs.fooddb.service.UserService;

@Service()
@Transactional
public class UserFacade {

    @Autowired
    private UserService userService;

    // ---------------------------------------------------------------------------------

    void mapDtoToEntity(UserDTO dto, User entity) {
        Profile profile = userService.getProfile(entity);
        profile.setFirstName(dto.getFirstName());
        profile.setLastName(dto.getLastName());
        profile.setDayOfBirth(dto.getDayOfBirth());
        profile.setGender(dto.getGender());
        profile.setDescription(dto.getDescription());
        entity.setProfile(profile);
    }


    private void mapEntityToDto(User entity, UserDTO dto) {
        Profile profile = userService.getProfile(entity);
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setFirstName(profile.getFirstName());
        dto.setLastName(profile.getLastName());
        dto.setDayOfBirth(profile.getDayOfBirth());
        dto.setGender(profile.getGender());
        dto.setDescription(profile.getDescription());
    }

    public UserDTO update(Long id, UserDTO dto) {
        User entity = userService.findById(id).get();
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

    public void delete(Long id) {
        userService.delete(id);
    }
}