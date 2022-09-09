
package com.portfolio.enzo.Repository;

import com.portfolio.enzo.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntPersonaRepository extends JpaRepository<Persona, Long> {
    
}
