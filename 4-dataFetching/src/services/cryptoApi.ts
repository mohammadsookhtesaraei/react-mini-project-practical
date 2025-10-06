
import axios from "axios";

const API_KEY = "CG-3ebo5VJVAykgSkoJqMpC2fLN";
const api = axios.create({ baseURL: "https://api.coingecko.com/api/v3" });

//  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
const getCoinList = async (page: string, currency: string) => {
    try {
        const { data } = await api.get("/coins/markets", {
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

    }

}

export {getCoinList};
