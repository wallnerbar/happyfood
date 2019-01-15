package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Ingredient;
import swengs.fooddb.model.IngredientRepository;

import java.util.Optional;

@Service()
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public Optional<Ingredient> findById(Long id) {
        return ingredientRepository.findById(id);
    }

    public Ingredient save(Ingredient entity) {
        return ingredientRepository.save(entity);
    }

    public Ingredient getIngredients(Ingredient entity) {
        return entity;
    }



}

