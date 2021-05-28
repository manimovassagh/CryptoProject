import React, { ReactElement } from 'react';
import { Coin } from '../components/types/Types'
import { useCryptoApi } from '../components/CustomHooks/CryptoApi'
import { MainLayout } from '../components/Layout/Sidebar'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
export default function App(): ReactElement {

  const [coins] = useCryptoApi<Coin[]>('GET', 'api/v3/ticker/bookTicker')

  console.log(coins)
  if (!coins) { return <LoadingSpinner /> }

  return (
    <>
      <MainLayout />
    </>
  )
}

