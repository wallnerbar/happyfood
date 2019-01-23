package swengs.fooddb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swengs.fooddb.dto.AuthenticationDTO;
import swengs.fooddb.facade.AuthenticationFacade;
import swengs.fooddb.facade.UserFacade;
import swengs.fooddb.model.Grocery;
import swengs.fooddb.service.GroceryService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class GroceryController {

    @Autowired
    private GroceryService groceryService;

    @GetMapping("/dto/grocery/{id}")
    List<Grocery> getAllByUser(@PathVariable Long id) {
        return groceryService.findAllByUser(id);
    }

    @DeleteMapping("/dto/grocery/{id}")
    void deleteGrocery(@PathVariable Long id) {
        groceryService.delete(id);
    }

    @PostMapping("/dto/grocery")
    void addGrocery(@Valid Grocery dto) {
        groceryService.save(dto);
    }
}