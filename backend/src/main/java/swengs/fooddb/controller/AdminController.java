package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.AuthenticationDTO;
import swengs.fooddb.facade.AuthenticationFacade;
import swengs.fooddb.facade.UserFacade;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private UserFacade userFacade;

    @Autowired
    private AuthenticationFacade authenticationFacade;

    @GetMapping("/dto/admin/users")
    List<AuthenticationDTO> getAllUsers() {
        return authenticationFacade.getAll();
    }

    @DeleteMapping("/dto/admin/users/{id}")
    void deleteUser(@PathVariable Long id) {
        userFacade.delete(id);
    }
}