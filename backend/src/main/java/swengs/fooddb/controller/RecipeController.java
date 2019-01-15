package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.RecipeDTO;
import swengs.fooddb.facade.RecipeFacade;

import javax.validation.Valid;

@RestController
public class RecipeController {

    @Autowired
    private RecipeFacade recipeFacade;

    @GetMapping("/dto/recipes/{id}")
    RecipeDTO getById(@PathVariable Long id) {
        return recipeFacade.getById(id);
    }

    @PostMapping("/dto/recipes")
    RecipeDTO create(@RequestBody @Valid RecipeDTO dto) {
        return recipeFacade.create(dto);
    }

    @PutMapping("/dto/recipes/{id}")
    RecipeDTO update(@RequestBody @Valid RecipeDTO dto, @PathVariable Long id) {
        return recipeFacade.update(id, dto);
    }
}
