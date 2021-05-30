import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CryptoDetails } from '../Pages/CryptoDetails'
import { CryptoList } from '../Pages/CryptoList'

export function Switcher() {
  return (
    <Switch>
      <Route exact path="/">
        <CryptoList />
      </Route>
      {/*ask armin later what is this for??? component={CryptoDetails} */}
      <Route path="/details/:symbol" component={CryptoDetails}>
        <CryptoDetails />
      </Route>
    </Switch>
  )
}
