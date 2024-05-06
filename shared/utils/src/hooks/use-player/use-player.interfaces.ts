import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export type usePlayerType = (songUrl?: string | null) => {
  playSong: boolean
  setPlaySong: Dispatch<SetStateAction<boolean>>
}
