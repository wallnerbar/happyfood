package swengs.fooddb.dto;

import swengs.fooddb.model.Gender;
import swengs.fooddb.model.Media;

import java.util.HashSet;
import java.util.Set;

public class ProfileDTO {

    private Long id;
    //private String username;
    private String firstName;
    private String lastName;
    private Gender gender;
    private String description;
    private Set<Media> pictures = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Media> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Media> pictures) {
        this.pictures = pictures;
    }
}

