package swengs.fooddb.controller;

import swengs.fooddb.dto.UserDTO;
import swengs.fooddb.facade.UserFacade;
import swengs.fooddb.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserFacade userFacade;

    @GetMapping("/dto/profiles/{id}")
    UserDTO getById(@PathVariable Long id) {
        return userFacade.getById(id);
    }

    @PostMapping("/dto/profiles")
    UserDTO create(@RequestBody @Valid UserDTO dto) {
        return userFacade.create(dto);
    }

    @PutMapping("/dto/profiles/{id}")
    UserDTO update(@RequestBody @Valid UserDTO dto, @PathVariable Long id) {
        return userFacade.update(id, dto);
    }
}
