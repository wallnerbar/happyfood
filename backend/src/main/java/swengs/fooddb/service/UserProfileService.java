package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.UserProfile;
import swengs.fooddb.model.UserProfileRepository;

import java.util.Optional;

@Service()
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public Optional<UserProfile> findById(Long id) {
        return userProfileRepository.findById(id);
    }

    public UserProfile save(UserProfile entity) {
        return userProfileRepository.save(entity);
    }
}

