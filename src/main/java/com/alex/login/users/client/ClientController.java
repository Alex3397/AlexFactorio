package com.alex.login.users.client;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/clients")
@AllArgsConstructor
public class ClientController {

    private ClientService clientService;

    @GetMapping()
    public List<Client> findAllClients() {
        List<Client> clients = clientService.findClients();
        return clients;
    }

    @GetMapping(path = "/{id}")
    public Optional<Client> findClientById(@PathVariable Long id) {
        Optional<Client> client = clientService.findClientById(id);
        return client;
    }

    @GetMapping(path = "/xml", produces = MediaType.APPLICATION_XML_VALUE)
    public List<Client> findAllClientsXML() {
        List<Client> clients = clientService.findClients();
        return clients;
    }

    @GetMapping(path = "/xml/{id}", produces = MediaType.APPLICATION_XML_VALUE)
    public Optional<Client> findClientByIdXML(@PathVariable Long id) {
        Optional<Client> client = clientService.findClientById(id);
        return client;
    }

}
