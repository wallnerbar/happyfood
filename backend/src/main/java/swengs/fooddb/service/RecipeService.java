package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.model.Recipe;
import swengs.fooddb.model.RecipeRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service()
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;


    public Optional<Recipe> findById(Long id) {
        return recipeRepository.findById(id);
    }

    public Recipe getRecipe(Recipe entity) {
        return entity;
    }

    public Recipe save(Recipe entity) {
        return recipeRepository.save(entity);
    }

}
