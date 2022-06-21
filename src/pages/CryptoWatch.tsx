import useWebSocket from 'react-use-websocket';
import Header from './../components/HeaderPage'
import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import { fetchGecko } from '../services/crypto/coingecko/fetchGecko';
import { formatDate } from '../util/formatDate';
import Echarts, {EChartsOption} from 'echarts-for-react';
import { DynamicEcharts } from '../components/molecule/echart/dynamicRandomMath';

const etheriumGeckoUrl = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m'

export function CryptoWatch(){
  const [data, setData] = useState<any>(null)
  const [symbol, setSymbol] = useState<any>("eosusdt")

  const [etheriumHistory, setEtheriumHistory] = useState<any>([])

  useEffect(()=>{
    const fetchEtheriumFromGecko = async (url:string)=> {
      const result = await fetchGecko(url)
      
      const newEtheriumHistory = await Promise.all(result?.prices?.map((item:any)=>{
        return {
          date: formatDate(item[0]),
          price: item[1].toFixed(2)
        }
      }))
      setEtheriumHistory(newEtheriumHistory)
    }
    fetchEtheriumFromGecko(etheriumGeckoUrl)
  },[])


  // const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker`, {
  //   onMessage: () => {
  //     if (lastJsonMessage) {
  //       console.log('get', lastJsonMessage);
  //       setData(lastJsonMessage)
  //     }
  //   },
  //   onError: (event:any) => alert(event.message),
  //   shouldReconnect: () => true,
  //   reconnectInterval: 3000

  // })

  const etheriumHistoryOptions: EChartsOption = {

    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: etheriumHistory.map((item:any)=>item.date),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: etheriumHistory.map((item:any)=>item.price),
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },

  };

  console.log('ehteriumData', etheriumHistory)
  if(!etheriumHistory) return <h2>Carregando...</h2>
  else return(

    <>
    <Header title="Charts" />

    <Typography variant="h4">Etherium now!</Typography>

    <Echarts option={etheriumHistoryOptions} />


    <Typography variant="h4">Random math realtime chart</Typography>

    <DynamicEcharts/>

    {/* <Box>
      <Typography>
        Métricas
      </Typography>

      <p>{data?.c}</p>
      <p>{data?.P}</p>

    </Box> */}
    </>

    

  )
}