export const columns = [
  {
    title: 'Logo',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Price €',
    dataIndex: 'current_price',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
    key: 'current_price',
  },
  {
    title: 'Ranking',
    dataIndex: 'market_cap_rank',
    key: 'market_cap_rank',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Market Capitalization',
    dataIndex: 'market_cap',
    key: 'market_cap',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Highest Price(24h)',
    dataIndex: 'high_24h',
    key: 'high_24h',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Lowest Price(24h)',
    dataIndex: 'low_24h',
    key: 'low_24h',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Price Change(24h)',
    dataIndex: 'price_change_24h',
    key: 'price_change_24h',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Price Change %(24h)',
    dataIndex: 'price_change_percentage_24h',
    key: 'price_change_percentage_24h',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'All Time Hight %',
    dataIndex: 'ath_change_percentage',
    key: 'ath_change_percentage',
    sorter: {
      compare: (a: any, b: any) => a.current_price - b.current_price,
      multiple: 3,
    },
  },
  {
    title: 'Trade Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
];