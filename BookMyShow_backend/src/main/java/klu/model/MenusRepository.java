package klu.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenusRepository extends JpaRepository<Menus, Long>{

}