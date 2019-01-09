package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Ingredients;
import swengs.fooddb.model.IngredientsRepository;

import java.util.Optional;

@Service()
public class IngredientsService {

    @Autowired
    private IngredientsRepository ingredientsRepository;

    public Optional<Ingredients> findById(Long id) {
        return ingredientsRepository.findById(id);
    }

    public Ingredients save(Ingredients entity) {
        return ingredientsRepository.save(entity);
    }

    public Ingredients getIngredients(Ingredients entity) {
        return entity;
    }



}
