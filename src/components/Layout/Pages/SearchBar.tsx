import React from 'react'
import { Input, Space } from 'antd';

const { Search } = Input;


const onSearch: (value: any) => void = value => console.log(value);

export function SearchBar() {
  return (

    <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

    </Space>

  )
}
