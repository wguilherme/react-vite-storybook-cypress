import useWebSocket from 'react-use-websocket';
import Header from './../components/HeaderPage'
import {useState, useEffect} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { fetchGecko } from '../services/crypto/coingecko/fetchGecko';
import { formatDate } from '../util/formatDate';
import Echarts, {EChartsOption} from 'echarts-for-react';
import * as echarts from 'echarts'
import { DynamicEcharts } from '../components/molecule/echart/dynamicRandomMath';
import { EchartsRadar } from '../components/molecule/echart/radar';
import { EchartRadar5Indicators } from '../components/molecule/echart/radar5Indicators';


const etheriumGeckoUrl = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=10&interval=3d'
const bitcoinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10&interval=3d'
const bitcoinTetherUrl = 'https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=10&interval=3d'

export function CryptoWatch(){
  const [binanceWs, setBinanceWs] = useState<any>(null)
  const [binanceWs2, setBinanceWs2] = useState<any>(null)
  const [binanceWs3, setBinanceWs3] = useState<any>(null)

  const [etheriumHistory, setEtheriumHistory] = useState<any>([])
  const [bitcoinHistory, setBitcoinHistory] = useState<any>([])
  const [tetherHistory, setTetherHistory] = useState<any>([])

  useEffect(()=>{
    const fetchGeckoCoinsHistory = async ()=> {
      const fetchEtherium = await fetchGecko(etheriumGeckoUrl)
      
      
      const newEtheriumHistory = await Promise.all(fetchEtherium?.prices?.map((item:any)=>{
        return {
          date: formatDate(item[0]),
          price: item[1].toFixed(2)
        }
      }))
      setEtheriumHistory(newEtheriumHistory)

      const fetchBitcoin = await fetchGecko(bitcoinGeckoUrl)
      const newBitcoinHistory = await Promise.all(fetchBitcoin?.prices?.map((item:any)=>{
        return {
          date: formatDate(item[0]),
          price: item[1].toFixed(2)
        }
      }))
      setBitcoinHistory(newBitcoinHistory)
      
      
      const fetchTether = await fetchGecko(bitcoinTetherUrl)
      const newTetherHistory = await Promise.all(fetchTether?.prices?.map((item:any)=>{
        return {
          date: formatDate(item[0]),
          price: item[1].toFixed(2)
        }
      }))
      setTetherHistory(newTetherHistory)
    }
    fetchGeckoCoinsHistory()
  },[])

  
  const { lastJsonMessage: lastJsonMessage3 } = useWebSocket(`wss://stream.binance.com:9443/ws/dogeusdt@ticker`, {
    onMessage: () => {
      if (lastJsonMessage3) {
        setBinanceWs3(lastJsonMessage3)
      }
    },
    onError: (event:any) => console.log(event.message),
    shouldReconnect: () => true,
    reconnectInterval: 3000

  })
  const { lastJsonMessage: lastJsonMessage2 } = useWebSocket(`wss://stream.binance.com:9443/ws/solusdt@ticker`, {
    onMessage: () => {
      if (lastJsonMessage2) {
        setBinanceWs2(lastJsonMessage2)
      }
    },
    onError: (event:any) => console.log(event.message),
    shouldReconnect: () => true,
    reconnectInterval: 3000

  })

  const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/btcusdt@ticker`, {
    onMessage: () => {
      if (lastJsonMessage) {

        setBinanceWs(lastJsonMessage)
      }
    },
    onError: (event:any) => console.log(event.message),
    shouldReconnect: () => true,
    reconnectInterval: 3000

  })

  const historyOptions: EChartsOption = {

    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    legend: {
      data:['Etherium', 'Bitcoin', 'Tether']
    },

    xAxis: {
      type: 'category',
      data: etheriumHistory.map((item:any)=>item.date),
      boundaryGap: true,
      name: 'Moeda'


    },
    yAxis: {
      type: 'value',
      // max: 1200,
      min: 900,
      name: 'Preço'
    },
    series: [
      {
        data: etheriumHistory.map((item:any)=>item.price*1.5),
        type: 'bar',
        smooth: true,
        name: 'Etherium'
        
      }, 
      {
        data: bitcoinHistory.map((item:any)=>item.price*0.1),
        type: 'line',
        name: 'Bitcoin',
        color: '303F9F',
        smooth: true,
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          color: 'transparent',          
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#F9BC3C'
            },
            {
              offset: 1,
              color: '#03B3F0'
            }
          ]),
        },
      },
      {
        name: 'Tether',
        data: tetherHistory.map((item:any)=>(item.price)*1000),
        type: 'line',
        smooth: true,
      },
    ],
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    tooltip: {
      trigger: 'axis',
    },

  };


  if(!etheriumHistory && !bitcoinHistory) return <h2>Carregando...</h2>
  else return(

    <>
    <Header title="Charts" />   

    
    <Grid container spacing={6}>
      <Grid item xs={8}>
      <Typography variant="h5" mb={5}>Etherium, Bitcoin and Tether - Dados coletados via HTTP consumindo a API do CoinGecko</Typography>
        <Echarts style={{ height: 400 }} option={historyOptions} />
      </Grid>
      <Grid item xs={4}>
      <Typography variant="h5" mb={5}>Gráfico Radar - 3 indicativos</Typography>
        <EchartsRadar/>
      </Grid>
    </Grid>


    <Typography variant="h5" mt={5} mb={5}>Gráfico dinâmico realtime com dados aleatórios</Typography>

    <DynamicEcharts/>


    <Typography variant="h5" mt={5} mb={5}>Gráfico em tempo real consumindo Websocket da Binance</Typography>
    <Box>


     {JSON.stringify(binanceWs, null, 2)}
     {JSON.stringify(binanceWs2, null, 2)}
     {JSON.stringify(binanceWs3, null, 2)}

    <EchartRadar5Indicators indicator1={binanceWs} indicator2={binanceWs2} indicator3={binanceWs3}/>

    </Box>
    </>

    

  )
}