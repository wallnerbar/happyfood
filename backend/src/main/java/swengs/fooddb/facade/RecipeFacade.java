package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.RecipeDTO;
import swengs.fooddb.model.Recipe;
import swengs.fooddb.service.RecipeService;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecipeFacade {

    @Autowired
    private RecipeService recipeService;

    public RecipeDTO getById(Long id) {
        Recipe entity = recipeService.findById(id).get();
        RecipeDTO dto = new RecipeDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

    private void mapEntityToDto(Recipe entity, RecipeDTO dto) {
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setRecipeDescription(entity.getRecipeDescription());
        dto.setComplexity(entity.getComplexity());
        dto.setCookingTime(entity.getCookingTime());
        dto.setCategory(entity.getCategory());
        dto.setAmount(entity.getAmount());
    }

    void mapDtoToEntity(RecipeDTO dto, Recipe entity) {
        entity.setTitle(dto.getTitle());
        entity.setRecipeDescription(dto.getRecipeDescription());
        entity.setComplexity(dto.getComplexity());
        entity.setCookingTime(dto.getCookingTime());
        entity.setCategory(dto.getCategory());
        entity.setAmount(dto.getAmount());

    }

    public RecipeDTO create(RecipeDTO dto) {
        Recipe entity = recipeService.getRecipe(new Recipe());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(recipeService.save(entity), dto);
        return dto;
    }

    public RecipeDTO update(Long id, RecipeDTO dto) {
        Recipe entity = recipeService.getRecipe(recipeService.findById(id).get());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(recipeService.save(entity), dto);
        return dto;
    }

}
