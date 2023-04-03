package com.mycompany.myapp.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DemandeMapperTest {

    private DemandeMapper demandeMapper;

    @BeforeEach
    public void setUp() {
        demandeMapper = new DemandeMapperImpl();
    }
}
