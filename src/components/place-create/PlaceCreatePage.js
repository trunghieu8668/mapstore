import React from 'react';
import PlaceCreateCard from './PlaceCreateCard'
import { PlaceCreateUIProvider } from '../../components/place-create/PlaceCreateUIContext'

const PlaceCreatePage = () => {
  return (
    <PlaceCreateUIProvider>
      <PlaceCreateCard />
    </PlaceCreateUIProvider>
  );
};

export default PlaceCreatePage;