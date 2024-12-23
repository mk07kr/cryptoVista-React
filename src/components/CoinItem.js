import React from 'react'
import { numberFormat } from './numberFormat';


import './coins.css'

const CoinItem = (props) => {
  return (
    <div className='coin-row'> 
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img className='coin-image' src={props.coins.image} alt=''/>
            <p className='coin-nick-name'>{props.coins.symbol.toUpperCase()}</p>
        </div>

        <p>{numberFormat(props.coins.current_price)}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>{numberFormat(props.coins.total_volume)}</p>
        <p className='hide-mobile'>{numberFormat(props.coins.market_cap)}</p>
    </div>
  )
}

export default CoinItem