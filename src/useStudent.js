import { useState } from 'react'

export default function useStudent() {
  const [id, setId] = useState(0)

  const setPrevStudent = () => {
    if (id > 0) setId((prevId) => --prevId)
    else if (id === 0) setId(3)
  }

  const setAfterStudent = () => {
    if (id < 3) setId((prevId) => ++prevId)
    else if (id === 3) setId(0)
  }

  return [id, setPrevStudent, setAfterStudent]
}
