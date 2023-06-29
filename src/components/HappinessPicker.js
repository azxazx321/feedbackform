import React from 'react'

export default function HappinessPicker(props) {
    const emojiScores = ['😦', '😂', '😐', '🙂', '😍']
    const {getScore, score} = props
    
  // const changeBg = () => {
  //   console.log(score)
  // }
    
    const lists = emojiScores.map((emoji, index) => {
        return <td 
                    key={index}
                    onClick = {
                      () =>{ getScore(index)                    } 
                    }       
                  style={{ backgroundColor: score === index ? 'blue' : '', 
                      border: '1px solid black' 
                }}
        >
            {emoji}
            </td>
        
    }
    )
  return (
    <div>

        <table>
          <tbody>
          <tr >
          {lists}

          </tr>
          </tbody>

        </table>
    </div>
  )
}
