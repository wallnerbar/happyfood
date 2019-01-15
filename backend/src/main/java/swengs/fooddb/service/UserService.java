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

    /*public UserProfile getProfile(User entity)  {
        if (entity.getUserProfile() == null) {
            UserProfile profile = new UserProfile();
            profile.setUser(entity);
            userProfileRepository.save(profile);
            entity.setUserProfile(profile);
            save(entity);
        }
        return entity.getUserProfile();
    }*/
}
