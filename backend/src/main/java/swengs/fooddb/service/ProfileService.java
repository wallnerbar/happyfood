package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Profile;
import swengs.fooddb.model.ProfileRepository;

import java.util.Optional;

@Service()
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Optional<Profile> findById(Long id) {
        return profileRepository.findById(id);
    }

    public Profile save(Profile entity) {
        return profileRepository.save(entity);
    }
}
