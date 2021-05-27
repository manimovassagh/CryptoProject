import React, { ReactElement } from 'react';
import LoadingSpinner from './shared/LoadingSpinner';
import '../components/shared/LoadingSpinner';

export default function App(): ReactElement {

  return (
    <div className="spinner">just check
      <LoadingSpinner />
    </div>
  )
}
