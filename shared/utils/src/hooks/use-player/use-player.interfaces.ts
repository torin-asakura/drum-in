import { SetStateAction } from 'react'
import { Dispatch }       from 'react'

export type UsePlayerType = (songUrl?: string | null) => {
  playSong: boolean
  setPlaySong: Dispatch<SetStateAction<boolean>>
}
