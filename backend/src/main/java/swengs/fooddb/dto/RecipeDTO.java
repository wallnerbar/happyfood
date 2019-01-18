package swengs.fooddb.dto;

import swengs.fooddb.model.Complexity;
import swengs.fooddb.model.CategoryType;
import swengs.fooddb.model.Amount;
import swengs.fooddb.model.Media;

import java.util.Set;

public class RecipeDTO {

    private long id;
    private String title;
    private String recipeDescription;
    private Complexity complexity;
    private String cookingTime;
    private CategoryType category;
    private int unit;
    private Amount amount;
    private Set<Media> media;
    private boolean favoriteRecipe = true;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRecipeDescription() {
        return recipeDescription;
    }

    public void setRecipeDescription(String recipeDescription) {
        this.recipeDescription = recipeDescription;
    }

    public Complexity getComplexity() {
        return complexity;
    }

    public void setComplexity(Complexity complexity) {
        this.complexity = complexity;
    }

    public String getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(String cookingTime) {
        this.cookingTime = cookingTime;
    }

    public CategoryType getCategory() {
        return category;
    }

    public void setCategory(CategoryType category) {
        this.category = category;
    }

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

    public Set<Media> getMedia() {
        return media;
    }

    public void setMedia(Set<Media> media) {
        this.media = media;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public boolean isFavoriteRecipe() {
        return favoriteRecipe;
    }

    public void setFavoriteRecipe(boolean favoriteRecipe) {
        this.favoriteRecipe = favoriteRecipe;
    }
}
