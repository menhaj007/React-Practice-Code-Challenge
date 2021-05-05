import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.displaySushi.map(sushi => <Sushi key={sushi.id} sushiData={sushi} eatSushi={props.eatSushi} consumedSushi={props.consumedSushi}/>) }
        
        {/* { props.displaySushi.map((sushi) => <Sushi key={sushi.id} sushiData={sushi} eatSushi={eatSushi} eatenSushi={eatenSushi}  />) } */}
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer