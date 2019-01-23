package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Profile;
import swengs.fooddb.model.ProfileRepository;
import swengs.fooddb.model.User;
import swengs.fooddb.model.UserRepository;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileRepository profileRepository;

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User entity) {
        return userRepository.save(entity);
    }

    public void delete(Long id) {
        User user = findById(id).get();
        if (user.getProfile() != null){
            profileRepository.delete(user.getProfile());
        }
        userRepository.deleteById(id);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getUser(Long id) {
        User entity = findById(id).get();
        return entity;
    }

    public Set<User> getUsers(Set<Long> dtos) {
        Set<User> entities = new HashSet<>();
        if (dtos != null) {
            dtos.forEach((dto) -> entities.add(userRepository.findById(dto).get()));
        }
        return entities;
    }

    public Profile getProfile(User entity) {
        if (entity.getProfile() == null) {
            Profile profile = new Profile();
            profile.setUser(entity);
            profileRepository.save(profile);
            entity.setProfile(profile);
            save(entity);
        }
        return entity.getProfile();
    }
}