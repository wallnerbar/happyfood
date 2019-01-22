package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import swengs.fooddb.dto.AuthenticationDTO;
import swengs.fooddb.facade.AuthenticationFacade;

import javax.validation.Valid;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationFacade authenticationFacade;

    @PostMapping("/dto/authentication/users")
    AuthenticationDTO create(@RequestBody @Valid AuthenticationDTO dto, UriComponentsBuilder ucBuilder) {
        return authenticationFacade.create(dto);
    }

    @GetMapping("/dto/authentication/auth")
    AuthenticationDTO getAuth() {
        return authenticationFacade.getAuth();
    }
}