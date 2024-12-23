import React, {useEffect} from 'react'
import axios from 'axios'

const Converter = () => {

  const url = `https://api.exchangeratesapi.io/latest`


    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


  return (
    <div>
      <div>
        <input type="number" className="input" />
        <select>

        </select>

        <div className="equals">=</div>

        <input type="number" className="input" />
        <select>
          <options>BTC</options>
          <options>ETH</options>
        </select>

      </div>
      
    </div>
  )
}

export default Converter