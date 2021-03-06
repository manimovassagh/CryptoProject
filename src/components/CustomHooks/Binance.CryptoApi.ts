import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetState<T> = Dispatch<SetStateAction<T>>


export function useBinanceCryptoApi<T>(method: Method, path: string): [T | undefined, SetState<T | undefined>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    BinancecryptoApi(
      method,
      path,
      (data_: T) => setData(data_)
    )
  }, [method, path])
  return [data, setData];
}

export function BinancecryptoApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
  const basicCryptoRefrenceUrl = 'https://thingproxy.freeboard.io/fetch/http://api.binance.com'
  ///api/v3/trades
  // const linki=https://cors-anywhere.herokuapp.com/https://api.binance.com/api/v3/ticker/bookTicker
  axios({
    method: method,
    url: `${basicCryptoRefrenceUrl}/${path}`,
    headers: { Authorization: 'Bearer 1234567890' },
    data
  })
    .then((response: AxiosResponse<T>) => callback(response.data))
}