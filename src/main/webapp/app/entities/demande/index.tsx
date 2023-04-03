import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Demande from './demande';
import DemandeDetail from './demande-detail';
import DemandeUpdate from './demande-update';
import DemandeDeleteDialog from './demande-delete-dialog';

const DemandeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Demande />} />
    <Route path="new" element={<DemandeUpdate />} />
    <Route path=":id">
      <Route index element={<DemandeDetail />} />
      <Route path="edit" element={<DemandeUpdate />} />
      <Route path="delete" element={<DemandeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DemandeRoutes;
