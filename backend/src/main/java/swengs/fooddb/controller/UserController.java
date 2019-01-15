package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.ProfileDTO;
import swengs.fooddb.facade.ProfileFacade;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private ProfileFacade profileFacade;

    @GetMapping("/dto/profiles/{id}")
    ProfileDTO getById(@PathVariable Long id) {
        return profileFacade.getById(id);
    }

    @PostMapping("/dto/profiles")
    ProfileDTO create(@RequestBody @Valid ProfileDTO dto) {
        return profileFacade.create(dto);
    }

    @PutMapping("/dto/profiles/{id}")
    ProfileDTO update(@RequestBody @Valid ProfileDTO dto, @PathVariable Long id) {
        return profileFacade.update(id, dto);
    }
}
