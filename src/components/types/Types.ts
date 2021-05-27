
export interface Filter {
  filterType: string;
  minPrice: string;
  maxPrice: string;
  tickSize: string;
  multiplierUp: string;
  multiplierDown: string;
  avgPriceMins?: number;
  minQty: string;
  maxQty: string;
  stepSize: string;
  minNotional: string;
  applyToMarket?: boolean;
  limit?: number;
  maxNumOrders?: number;
  maxNumAlgoOrders?: number;
}

export interface Coin {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: string[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: Filter[];
  permissions: string[];
}



