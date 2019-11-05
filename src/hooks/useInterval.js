import { useEffect, useState } from 'react'

const useInterval = (initialDateTime, onTickValueGetter, intervalMs = 1000) => {
  const [dateTime, setDateTime] = useState(initialDateTime)

  const onTick = () => {
    setDateTime(onTickValueGetter())
  }

  useEffect(() => {
    const timerID = setInterval(onTick, intervalMs)
    return () => {
      clearInterval(timerID)
    }
  })

  return dateTime
}

export default useInterval
