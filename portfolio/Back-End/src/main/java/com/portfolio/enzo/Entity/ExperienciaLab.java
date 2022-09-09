
package com.portfolio.enzo.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class ExperienciaLab {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String desripcionE;
    
    //creo los constructores

    public ExperienciaLab() {
    }

    public ExperienciaLab(String nombreE, String desripcionE) {
        this.nombreE = nombreE;
        this.desripcionE = desripcionE;
    }
    
    //creo los getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDesripcionE() {
        return desripcionE;
    }

    public void setDesripcionE(String desripcionE) {
        this.desripcionE = desripcionE;
    }
    
}
