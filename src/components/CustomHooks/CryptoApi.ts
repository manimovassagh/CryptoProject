import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetState<T> = Dispatch<SetStateAction<T>>


export function useCryptoApi<T>(method: Method, path: string): [T | undefined, SetState<T | undefined>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    cryptoApi(
      method,
      path,
      (data_: T) => setData(data_)
    )
  }, [method, path])
  return [data, setData];
}


export function cryptoApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
  const binancePriceUrl = 'https://cors-anywhere.herokuapp.com/https://api1.binance.com'

  axios({
    method: method,
    url: `${binancePriceUrl}/${path}`,
    headers: { Authorization: 'Bearer 1234567890' },
    data
  })
    .then((response: AxiosResponse<T>) => callback(response.data))
}