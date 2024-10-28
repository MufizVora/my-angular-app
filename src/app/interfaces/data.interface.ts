export interface Students{
    id: number,
    name: string,
    phone: string,
    age: string,
    languages: Array<string>   
}

interface Order{
    OrderType: string,
    Price: number,
    Volume: number
}

export interface OrderBook{
    BuyOrders: Array<Order>,
    CreatedTimestampUtc: string,
    SellOders: Array<Order>
}

interface Prices{
    bid: string,
    ask: string,
    last: string,
}

export interface LatestPrice{
    status: string,
    prices: {
        btc: Prices,
        ltc: Prices,
        doge: Prices
    }
}