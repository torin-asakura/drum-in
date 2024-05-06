import { useEffect }     from 'react'
import { useState }      from 'react'
import { useRef }        from 'react'

import { usePlayerType } from './use-player.interfaces'

export const usePlayer: usePlayerType = (songUrl) => {
  const [playSong, setPlaySong] = useState<boolean>(false)
  const songElement = useRef<HTMLAudioElement | undefined>()

  useEffect(() => {
    if (typeof window !== 'undefined' && songUrl !== undefined) {
      songElement.current = new Audio(songUrl || '')
    }

    return () => {
      if (typeof window !== 'undefined') {
        songElement.current?.pause()
        songElement.current = undefined
      }
    }
  }, [songUrl])

  useEffect(() => {
    if (playSong) {
      songElement?.current?.play()
    } else {
      songElement?.current?.pause()
    }
  }, [playSong])

  return { playSong, setPlaySong }
}
