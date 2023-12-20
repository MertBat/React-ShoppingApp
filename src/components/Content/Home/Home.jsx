import React from 'react'
import { Slider} from './Slider/Slider'
import { Prominent } from './Prominent/Prominent'
import Styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={Styles.home}>
        <Slider></Slider>
        <Prominent></Prominent>
    </div>
  )
}
