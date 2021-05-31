import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CoingeckoList } from '../Pages/CoingeckoList'
import { CryptoDetails } from '../Pages/CryptoDetails'
import { CryptoList } from '../Pages/CryptoList'

export function Switcher() {
  return (
    <Switch>
      <Route exact path="/" >
        <CryptoList />
      </Route>
      <Route exact path="/coingeckodetails/:id" >
        <CryptoDetails />
      </Route>
      {/*ask armin later what is this for??? component={CryptoDetails} */}
      <Route exact path="/binance" >
        <CoingeckoList />
      </Route>
      <Route path="/details/:symbol" >
        <CryptoDetails />
      </Route>
    </Switch>
  )
}
