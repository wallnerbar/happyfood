package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.AuthenticationDTO;
import swengs.fooddb.model.User;
import swengs.fooddb.service.AuthenticationService;
import swengs.fooddb.service.UserService;

import java.util.ArrayList;
import java.util.List;

@Service()
@Transactional
public class AuthenticationFacade {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private UserService userService;

    void mapDtoToEntity(AuthenticationDTO dto, User entity) {
        entity.setUsername(dto.getUsername());
        if (dto.getPassword() != null) {
            entity.setPassword(encoder.encode(dto.getPassword()));
        }
        entity.setAdmin(dto.isAdmin());
    }

    private void mapEntityToDto(User entity, AuthenticationDTO dto) {
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setAdmin(entity.isAdmin());
    }

    public AuthenticationDTO create(AuthenticationDTO dto) {
        User entity = new User();
        dto.setAdmin(false);
        mapDtoToEntity(dto, entity);
        mapEntityToDto(userService.save(entity), dto);
        return dto;
    }

    public AuthenticationDTO getById(Long id) {
        User entity = userService.findById(id).get();
        AuthenticationDTO dto = new AuthenticationDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

    public AuthenticationDTO getAuth() {
        User entity = authenticationService.getAuthentication();
        AuthenticationDTO dto = new AuthenticationDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

    public List<AuthenticationDTO> getAll() {
        List<AuthenticationDTO> dtos = new ArrayList<>();
        authenticationService.findAll().forEach(entity -> {
            AuthenticationDTO dto = new AuthenticationDTO();
            mapEntityToDto(entity, dto);
            dtos.add(dto);
        });
        return dtos;
    }
}