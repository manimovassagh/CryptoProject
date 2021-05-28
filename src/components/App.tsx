import React, { ReactElement } from 'react';
import { Coin } from '../components/types/Types'
import { Spin } from 'antd';
import { useCryptoApi } from '../components/CustomHooks/CryptoApi'
import { SideBar } from '../components/Layout/Sidebar'

export default function App(): ReactElement {

  // const [coins, setCoins] = useCryptoApi<Coin[]>('GET', '')

  // if (!coins) { return <Spin /> }

  return (
    <div >

      <SideBar />
    </div>
  )
}

