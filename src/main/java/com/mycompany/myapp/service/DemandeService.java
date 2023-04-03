package com.mycompany.myapp.service;

import com.mycompany.myapp.service.dto.DemandeDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.mycompany.myapp.domain.Demande}.
 */
public interface DemandeService {
    /**
     * Save a demande.
     *
     * @param demandeDTO the entity to save.
     * @return the persisted entity.
     */
    DemandeDTO save(DemandeDTO demandeDTO);

    /**
     * Updates a demande.
     *
     * @param demandeDTO the entity to update.
     * @return the persisted entity.
     */
    DemandeDTO update(DemandeDTO demandeDTO);

    /**
     * Partially updates a demande.
     *
     * @param demandeDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<DemandeDTO> partialUpdate(DemandeDTO demandeDTO);

    /**
     * Get all the demandes.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<DemandeDTO> findAll(Pageable pageable);

    /**
     * Get the "id" demande.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<DemandeDTO> findOne(Long id);

    /**
     * Delete the "id" demande.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
