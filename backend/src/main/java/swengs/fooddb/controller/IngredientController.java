package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.IngredientDTO;
import swengs.fooddb.facade.IngredientFacade;

import javax.validation.Valid;

@RestController
public class IngredientController {

    @Autowired
    private IngredientFacade ingredientFacade;

    @GetMapping("/dto/ingredients/{id}")
    IngredientDTO getById(@PathVariable Long id) {
        return ingredientFacade.getById(id);
    }

    @PostMapping("/dto/ingredients")
    IngredientDTO create(@RequestBody @Valid IngredientDTO dto) {
        return ingredientFacade.create(dto);
    }

    @PutMapping("/dto/ingredients/{id}")
    IngredientDTO update(@RequestBody @Valid IngredientDTO dto, @PathVariable Long id) {
        return ingredientFacade.update(id, dto);
    }
}
