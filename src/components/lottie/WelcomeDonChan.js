import React, { useEffect, useState } from "react"
import Lottie from "react-lottie"
import * as animationData from "../../animations/welcome_data.json"

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const WelcomeDonChan = ({ width, height }) => {
  const [ play, setPlay ] = useState(false)
  useEffect(() => {
    setTimeout(() => setPlay(true), 1000)
  }, [])

  return (
    <div>
      <Lottie
        id='welcome-donchan'
        options={defaultOptions}
        height={height}
        width={width}
        isPaused={!play}
      />
    </div>
  )
}

export default WelcomeDonChan
