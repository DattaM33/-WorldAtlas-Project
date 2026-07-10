package worldAtlas.WorldAtlas.serviceImp;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import worldAtlas.WorldAtlas.entity.Contact;
import worldAtlas.WorldAtlas.repository.ContactRepository;
import worldAtlas.WorldAtlas.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository repository;

    @Override
    public Contact save(Contact contact) {
        return repository.save(contact);
    }

}