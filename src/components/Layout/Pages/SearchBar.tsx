import React from 'react'
import { Input } from 'antd';

const { Search } = Input;




export function SearchBar() {
  // const [searchTerm, setSearchTerm] = useState<string>()
  return (
    <Search placeholder="input search text" onChange={(e) => console.log(e.target.value)} style={{ width: 200 }} />
  )
}
