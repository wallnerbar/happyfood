package swengs.fooddb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swengs.fooddb.model.Grocery;
import swengs.fooddb.model.GroceryRepository;

import java.util.List;
import java.util.Optional;

@Service()
public class GroceryService {

    @Autowired
    private GroceryRepository groceryRepository;

    public Optional<Grocery> findById(Long id) {
        return groceryRepository.findById(id);
    }

    public Grocery save(Grocery entity) {
        return groceryRepository.save(entity);
    }

    public void delete(Long id) {
        Grocery grocery = findById(id).get();
        groceryRepository.deleteById(id);
    }

    public List<Grocery> findAll() {
        return groceryRepository.findAll();
    }

    public List<Grocery> findAllByUser(Long id) {
        return groceryRepository.findAllByUser(id);
    }
}
