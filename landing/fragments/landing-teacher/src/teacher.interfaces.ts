import { TeacherDataProps } from '@globals/data/src'

export interface TeacherBlockProps {
  playSong: boolean
  setPlaySong: (newState: boolean) => any
  teacherData?: TeacherDataProps
}
