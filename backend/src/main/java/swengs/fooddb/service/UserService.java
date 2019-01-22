package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.ProfileRepository;
import swengs.fooddb.model.User;
import swengs.fooddb.model.UserRepository;

import java.util.Optional;

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

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Versuch User einbinden
/*
    public User getProfile(User entity)  {
        if (entity.getUser() == null) {
            User user = new User();
            user.setUser(entity);
            userRepository.save(user);
            entity.setUser(user);
            save(entity);
        }
        return entity.getUser();
    }
    */
}
