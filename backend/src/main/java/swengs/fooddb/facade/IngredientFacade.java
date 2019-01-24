package swengs.fooddb.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swengs.fooddb.dto.IngredientDTO;
import swengs.fooddb.model.Ingredient;
import swengs.fooddb.service.IngredientService;

@Service
@Transactional
public class IngredientFacade {

    @Autowired
    private IngredientService ingredientService;

    public IngredientDTO getById(Long id) {
        Ingredient entity = ingredientService.findById(id).get();
        IngredientDTO dto = new IngredientDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }

    private void mapEntityToDto(Ingredient entity, IngredientDTO dto) {
        dto.setId(entity.getId());
        dto.setIngredientName(entity.getIngredientName());
        dto.setAmount(entity.getAmount());
        dto.setUnit(entity.getUnit());
    }

    void mapDtoToEntity(IngredientDTO dto, Ingredient entity) {
        entity.setIngredientName(dto.getIngredientName());
        entity.setAmount(dto.getAmount());
        entity.setUnit(dto.getUnit());
    }

    public IngredientDTO create(IngredientDTO dto) {
        Ingredient entity = ingredientService.getIngredients(new Ingredient());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(ingredientService.save(entity), dto);
        return dto;
    }

    public IngredientDTO update(Long id, IngredientDTO dto) {
        Ingredient entity = ingredientService.getIngredients(ingredientService.findById(id).get());
        mapDtoToEntity(dto, entity);
        mapEntityToDto(ingredientService.save(entity), dto);
        return dto;
    }
}
