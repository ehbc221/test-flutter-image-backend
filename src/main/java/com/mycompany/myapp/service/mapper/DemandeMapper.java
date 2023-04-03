package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.Demande;
import com.mycompany.myapp.service.dto.DemandeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Demande} and its DTO {@link DemandeDTO}.
 */
@Mapper(componentModel = "spring")
public interface DemandeMapper extends EntityMapper<DemandeDTO, Demande> {}
