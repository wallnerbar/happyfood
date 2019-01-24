package swengs.fooddb.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface GroceryRepository extends PagingAndSortingRepository<Grocery, Long>, JpaRepository<Grocery, Long>, CrudRepository<Grocery, Long> {
    List<Grocery> findAllByUser(Long user);
}