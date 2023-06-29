import React, { useEffect, useState } from 'react'
import HappinessPicker from './HappinessPicker'

export default function OverallFeedback() {
    const [foodScore, setFoodScore] = useState(0);
    const [serviceScore, setServiceScore] = useState(0);
    const [valueScore, setValueScore] = useState(0);
   const getFoodScore = (index) => {
    setFoodScore(index)
    
   }
   const getSericeScore = (index) => {
    setServiceScore(index)
   }
   const getValueScore = (index) => {
    setValueScore(index)
   }




  return (
    <div>
        <div>
        Food
        <HappinessPicker getScore={getFoodScore} score={foodScore}/>
        </div>
        <div>
        service
        <HappinessPicker getScore={getSericeScore} score={serviceScore}/>
        </div>
        <div>
        Value
        <HappinessPicker getScore={getValueScore} score={valueScore}/>
        </div>
       Total score: {foodScore+serviceScore+valueScore}/12

    </div>
  )
}
