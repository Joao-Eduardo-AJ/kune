'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type CounterContext = {
  count: number
}

const CounterContext = createContext<CounterContext | null>(null)

type AnimatedCounterRootProps = {
  children: React.ReactNode
  from: number
  time: number
  to: number
}

function easeOut(time: number) {
  return 1 - Math.pow(1 - time, 3)
}

export function Root({ children, from, time, to }: AnimatedCounterRootProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTimestamp: number | null = null
    let frameId: number

    function onStep(timestamp: number) {
      if (startTimestamp === null) startTimestamp = timestamp

      const elapsedTime = timestamp - startTimestamp
      const normalizedTime = Math.min(elapsedTime / time, 1)
      const easedTime = easeOut(normalizedTime)

      const currentValue = from + (to - from) * easedTime
      setCount(currentValue)

      if (elapsedTime < time) {
        frameId = window.requestAnimationFrame(onStep)
      }
    }

    frameId = window.requestAnimationFrame(onStep)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [from, time, to])

  return (
    <CounterContext.Provider value={{ count }}>
      {children}
    </CounterContext.Provider>
  )
}

function useCounter() {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('useCounter must be inside CounterContextProvider')
  }

  return context
}

export function Value() {
  const { count } = useCounter()

  return Math.floor(count)
}
