package swengs.fooddb.controller;

import swengs.fooddb.dto.UserDTO;
import swengs.fooddb.dto.UserProfileDTO;
import swengs.fooddb.facade.UserFacade;
import swengs.fooddb.facade.UserProfileFacade;
import swengs.fooddb.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserProfileFacade userProfileFacade;

    @GetMapping("/dto/profiles/{id}")
    UserProfileDTO getById(@PathVariable Long id) {
        return userProfileFacade.getById(id);
    }

    @PostMapping("/dto/profiles")
    UserProfileDTO create(@RequestBody @Valid UserProfileDTO dto) {
        return userProfileFacade.create(dto);
    }

    @PutMapping("/dto/profiles/{id}")
    UserProfileDTO update(@RequestBody @Valid UserProfileDTO dto, @PathVariable Long id) {
        return userProfileFacade.update(id, dto);
    }
}
