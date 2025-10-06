import { useEffect, useState } from "react"
import { getCoinList ,type Coin } from "./services/cryptoApi"
import Card from "./components/module/Card";



const App = () => {

  const [coin,setCoin]=useState<Coin[]>([]);

  useEffect(()=>{
    const fetchCoin=async()=>{
     try{
      const res=await getCoinList("1","usd");
      setCoin(res);
      
     }catch(error:unknown){
      if(error instanceof Error){
        console.log(error.message);
      }
     }
    }

    fetchCoin()
  },[]);

  const data=coin.slice(0,4);
  console.log(data);

  return (
    <div className="bg-slate-900 font-sans text-white font-normal h-dvh flex justify-center pt-8">
    <div className="flex items-start gap-5">
      {data.map((coin)=>(
        <Card key={coin.id} {...coin} />
      ))}
    </div>
    </div>
  )
}

export default App