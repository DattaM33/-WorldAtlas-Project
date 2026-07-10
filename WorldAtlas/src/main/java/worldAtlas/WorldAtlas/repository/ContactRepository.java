package worldAtlas.WorldAtlas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import worldAtlas.WorldAtlas.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
