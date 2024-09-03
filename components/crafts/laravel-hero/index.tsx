import React from 'react'
import LaravelLogo from './logo'
import LaravelRevealText from './reveal-text'
import LaravelTitle from './title'

const LaravelHero = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <LaravelLogo />
      <LaravelRevealText />
      <LaravelTitle />
    </div>
  )
}

export default LaravelHero