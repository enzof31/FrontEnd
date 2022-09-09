
package com.portfolio.enzo.Interface;

import com.portfolio.enzo.Entity.Persona;
import java.util.List;


public interface IntPersonaService {
    
    public List<Persona> verPersona();
    
    public void crearPersona(Persona persona);
    
    public void borrarPersona(Long id);
    
    public Persona buscarPersona(Long id);
}
