import axios, { AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetState<T> = Dispatch<SetStateAction<T>>


export function useBookApi<T>(method: Method, path: string): [T | undefined, SetState<T | undefined>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    CryptoApi(
      method,
      path,
      (data_: T) => setData(data_)
    )
  }, [method, path])

  return [data, setData];
}


export function CryptoApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
  const binancePriceUrl = 'https://api.binance.com/api/v3/trades'

  axios({
    method: method,
    url: `${binancePriceUrl}/${path}`,
    headers: { Authorization: 'Bearer 1234567890' },
    data
  })
    .then((response: AxiosResponse<T>) => callback(response.data))
}