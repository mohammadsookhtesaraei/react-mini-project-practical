
// نکته اومدیم از پارامز داخل اکسیوس استفاده کردیم دیتارو از ای پی ها همینجا متد گت زدیم و تابه رو اکسپورت کردیم

import axios from "axios";

const API_KEY = "CG-3ebo5VJVAykgSkoJqMpC2fLN";
const api = axios.create({ baseURL: "https://api.coingecko.com/api/v3" });

export interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}


//  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
const getCoinList = async (page: string, currency: string): Promise<Coin[]> => {
    try {
        const { data } = await api.get<Coin[]>("/coins/markets", {
            params: {
                vs_currency: currency,
                order: "market_cap_desc",
                per_page: 20,
                page,
                x_cg_demo_api_key: API_KEY,
            }
        })
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }

        return []

    }

}

export {getCoinList};
