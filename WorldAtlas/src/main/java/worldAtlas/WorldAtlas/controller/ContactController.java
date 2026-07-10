package worldAtlas.WorldAtlas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import worldAtlas.WorldAtlas.entity.Contact;
import worldAtlas.WorldAtlas.entity.Contact;
import worldAtlas.WorldAtlas.service.ContactService;


@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactService service;

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {

        return service.save(contact);


    }

}