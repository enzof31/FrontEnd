
package com.portfolio.enzo.Controller;

import com.portfolio.enzo.Entity.Persona;
import com.portfolio.enzo.Interface.IntPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class PersonaController {
    @Autowired 
            private IntPersonaService intPersonaService;
    
    @GetMapping("/persona/ver")
    public List<Persona> verPersona(){
        return intPersonaService.verPersona();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/persona/crear")
    public String crearPersona(@RequestBody Persona persona){
        intPersonaService.crearPersona(persona);
        return "La persona se creó correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/persona/borrar/{id}")
    public String borrarPersona(@PathVariable Long id){
        intPersonaService.borrarPersona(id);
        return "La persona se eliminó correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/persona/editar/{id}")
    public Persona editarPersona(@PathVariable Long id, @RequestParam("nombre") String nuevoNombre, 
            
            @RequestParam("apellido") String nuevoApellido, 
            @RequestParam("img") String nuevoImg){
        
        Persona persona = intPersonaService.buscarPersona(id);
        
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        
        intPersonaService.crearPersona(persona);
        return persona;
    }
    
    @GetMapping("/persona/traer/perfil")
    public Persona findPersona(){
        return intPersonaService.buscarPersona((long) 1);
    }
}
