
package com.portfolio.enzo.Service;

import com.portfolio.enzo.Entity.Persona;
import com.portfolio.enzo.Interface.IntPersonaService;
import com.portfolio.enzo.Repository.IntPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImplementPersonaService implements IntPersonaService  {
    
    @Autowired
    IntPersonaRepository intPersonaRepository;

    @Override
    public List<Persona> verPersona() {
        List<Persona> persona = intPersonaRepository.findAll();
        return persona;
    }

    @Override
    public void crearPersona(Persona persona) {
        intPersonaRepository.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        intPersonaRepository.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
        Persona persona = intPersonaRepository.findById(id).orElse(null);
        return persona;
    }

   
}
