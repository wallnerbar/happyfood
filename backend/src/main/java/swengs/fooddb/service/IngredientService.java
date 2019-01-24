package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Ingredient;
import swengs.fooddb.model.IngredientRepository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

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

    public Set<Ingredient> getIngredientSet(Set<Long> dtos) {
        Set<Ingredient> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(ingredientRepository.findById(dto).get()));
        }
        return entities;
    }

}

