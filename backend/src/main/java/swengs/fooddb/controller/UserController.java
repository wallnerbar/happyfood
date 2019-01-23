package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.UserDTO;
import swengs.fooddb.facade.UserFacade;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserFacade userFacade;

    @GetMapping("/dto/users/{id}")
    UserDTO getById(@PathVariable Long id) {
        return userFacade.getById(id);
    }

    @PutMapping("/dto/users/{id}")
    UserDTO update(@RequestBody @Valid UserDTO dto, @PathVariable Long id) {
        return userFacade.update(id, dto);
    }
}