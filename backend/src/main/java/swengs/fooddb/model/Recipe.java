package swengs.fooddb.model;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.*;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String recipeDescription;

    @Enumerated(EnumType.STRING)
    private Complexity complexity;

    private String cookingTime;

    @Enumerated(EnumType.STRING)
    private CategoryType category;

    private boolean favoriteRecipe = true;

    @Version
    @JsonIgnore
    private long version;

    @ManyToMany
    @JoinTable(name = "ingredient_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private Set<Ingredient> ingredients;

    @ManyToMany
    @JoinTable(name = "user_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> users;

    @ManyToMany
    @JoinTable(name = "user_favorites_recipe",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> favorites;

    @ManyToMany
    @JoinTable(name = "recipe_pictures",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "pictures_id")
    )
    private Set<Media> pictures = new HashSet<>();

    public Recipe() {
    }

    public Recipe(String title, String recipeDescription, String cookingTime) {
        this.title = title;
        this.recipeDescription = recipeDescription;
        this.cookingTime = cookingTime;
    }

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

    public Set<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Set<User> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<User> favorites) {
        this.favorites = favorites;
    }

    public Set<Media> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Media> pictures) {
        this.pictures = pictures;
    }

    public boolean isFavoriteRecipe() {
        return favoriteRecipe;
    }

    public void setFavoriteRecipe(boolean favoriteRecipe) {
        this.favoriteRecipe = favoriteRecipe;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recipe recipe = (Recipe) o;
        return id == recipe.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", recipeDescription='" + recipeDescription + '\'' +
                ", complexity=" + complexity +
                ", cookingTime='" + cookingTime + '\'' +
                ", category=" + category +
                ", version=" + version +
                '}';
    }
}
