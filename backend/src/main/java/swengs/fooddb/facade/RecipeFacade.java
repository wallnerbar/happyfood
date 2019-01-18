package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.RecipeDTO;
import swengs.fooddb.model.Recipe;
import swengs.fooddb.model.User;
import swengs.fooddb.service.RecipeService;
import swengs.fooddb.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecipeFacade {

    @Autowired
    private UserService userService;

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
        dto.setUnit(entity.getUnit());
        dto.setAmount(entity.getAmount());
        dto.setFavoriteRecipe(entity.isFavoriteRecipe());
        dto.setMedia(entity.getPictures());
    }

    void mapDtoToEntity(RecipeDTO dto, Recipe entity) {
        entity.setTitle(dto.getTitle());
        entity.setRecipeDescription(dto.getRecipeDescription());
        entity.setComplexity(dto.getComplexity());
        entity.setCookingTime(dto.getCookingTime());
        entity.setCategory(dto.getCategory());
        entity.setUnit(dto.getUnit());
        entity.setAmount(dto.getAmount());
        entity.setFavoriteRecipe(dto.isFavoriteRecipe());
        entity.setPictures(dto.getMedia());

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

    public List<RecipeDTO> getMyFavorites() {
        String username = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        User user = userService.findByUsername(username);
        Set<Recipe> recipes = user.getFavorites();
        return recipes.stream().map((r) -> {
            RecipeDTO dto = new RecipeDTO();
            mapEntityToDto(r, dto);
            return dto;
        }).collect(Collectors.toList());
    }
}
