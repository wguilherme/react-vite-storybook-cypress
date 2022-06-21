import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'
import {Button, Typography, Box} from '@mui/material'


export function EchartsRadar(){
  
  const [radarChartValues, setRadarChartValues] = useState([[700,550,800],[300, 660, 880],[450, 450, 380]])
  const [radarChartOptions, setRadarChartOptions] = useState({
    shape: 'circle',
    colors: '',
    customStyle: false
  })
  

  const customStyles = radarChartOptions.customStyle ? {
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
          color: '#F9BC3C50'
        },
        {
          offset: 1,
          color: '#03B3F050'
        }
      ]),
    },
  } : ''

  const option = {
    title: {},
    tooltip: {},
    legend: {
      data: ['Grupo A', 'Grupo B','Grupo C' ]
    },
    grid: {
      // top: '10%',
      left: 0,
      right: 0,
      bottom:0
    },
    radar: {
      shape: radarChartOptions.shape,
      center: ['50%', '50%'],
      indicator: [
          { name: 'Environmental', max: 1000},
          { name: 'Social', max: 1000},
          { name: 'Governance', max: 1000}
      ]
    },
    series: [{
      name: 'Label A',
      type: 'radar',
      data : [
        {
          value :[...radarChartValues[0]],
          name : 'Grupo A',
          ...customStyles
       
        },
          {
          value : [...radarChartValues[1]],
          name : 'Grupo B',
          ...customStyles
        },
          {
          value : [...radarChartValues[2]],
          name : 'Grupo C',
          ...customStyles
        }
      ]
    }]
  };

  function handleRandomValues(){
    const newRadarChartValues =[
      [Math.random()*1000,Math.random()*1000,Math.random()*1000],
      [Math.random()*1000,Math.random()*1000,Math.random()*1000],
      [Math.random()*1000,Math.random()*1000,Math.random()*1000],
    ]
    setRadarChartValues(newRadarChartValues)
  }

  function handleToggleShape(){

    const newRadarChartOptions = {
      ...radarChartOptions,
      shape: radarChartOptions.shape === 'triangle' ? 'circle' : 'triangle',
    }
    setRadarChartOptions(newRadarChartOptions)
  }

  function handleToggleStyle(){
    const newRadarChartOptions = {
      ...radarChartOptions,
      customStyle:!radarChartOptions.customStyle,
    }
    setRadarChartOptions(newRadarChartOptions)
  }

  return <>  
  <Box sx={{border: '1px dashed #cccccc', p:3}}>

  
    <ReactECharts option={option} style={{ height: 450 }} />

    <Box sx={{border: '1px dashed #ccc', p:3}}>

    <Typography variant="subtitle2">Ações</Typography>
    <Button size="small" variant="outlined" onClick={handleRandomValues}> Randomizar valores</Button>


    <Typography variant="subtitle2" mt={3} onClick={handleToggleStyle}>Alterar gráfico</Typography>

  
    <Button size="small" onClick={handleToggleShape} disabled={radarChartOptions.shape === 'triangle'}>Triangulo</Button>
    <Button size="small"  onClick={handleToggleShape} disabled={radarChartOptions.shape === 'circle'}>Círculo</Button>
    <Button size="small"  onClick={handleToggleStyle}>Alterar estilo</Button>
    </Box>
    </Box>

  </>
  }