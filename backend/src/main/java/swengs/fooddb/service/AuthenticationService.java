package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.User;
import swengs.fooddb.model.UserRepository;

import java.util.List;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    public User findByName(String name) {
        return userRepository.findByUsername(name);
    }

    public User getAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        findByName(currentUserName);
        return findByName(currentUserName);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

}