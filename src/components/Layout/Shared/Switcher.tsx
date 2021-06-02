import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoingeckoDescription from '../Pages/CoingeckoDescription'
import { CoingeckoDetails } from '../Pages/CoingeckoDetails'
import { CoingeckoList } from '../Pages/CoingeckoList'
import { CryptoDetails } from '../Pages/CryptoDetails'
import { CryptoList } from '../Pages/CryptoList'

export function Switcher() {
  return (
    <Switch>
      <Route exact path="/">
        <CoingeckoList />
      </Route>
      <Route exact path="/coingeckodetails/:id/description" >
        <CoingeckoDescription />
      </Route>
      <Route exact path="/coingeckodetails/:id" >
        <CoingeckoDetails />
      </Route>
      <Route exact path="/binance" >
        <CryptoList />
      </Route>
      <Route path="/details/:symbol" >
        <CryptoDetails />
      </Route>
    </Switch>
  )
}
