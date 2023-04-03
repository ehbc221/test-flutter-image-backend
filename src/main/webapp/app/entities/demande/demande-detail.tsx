import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './demande.reducer';

export const DemandeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const demandeEntity = useAppSelector(state => state.demande.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="demandeDetailsHeading">
          <Translate contentKey="testapiimageApp.demande.detail.title">Demande</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{demandeEntity.id}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="testapiimageApp.demande.image">Image</Translate>
            </span>
          </dt>
          <dd>
            {demandeEntity.image ? (
              <div>
                {demandeEntity.imageContentType ? (
                  <a onClick={openFile(demandeEntity.imageContentType, demandeEntity.image)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {demandeEntity.imageContentType}, {byteSize(demandeEntity.image)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="photo">
              <Translate contentKey="testapiimageApp.demande.photo">Photo</Translate>
            </span>
          </dt>
          <dd>
            {demandeEntity.photo ? (
              <div>
                {demandeEntity.photoContentType ? (
                  <a onClick={openFile(demandeEntity.photoContentType, demandeEntity.photo)}>
                    <img src={`data:${demandeEntity.photoContentType};base64,${demandeEntity.photo}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {demandeEntity.photoContentType}, {byteSize(demandeEntity.photo)}
                </span>
              </div>
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/demande" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/demande/${demandeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DemandeDetail;
