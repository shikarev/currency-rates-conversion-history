import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

// компонент для тестирования
const BugButton = () => {
  const [error, setError] = useState(false)

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onThrow}
    >
      пробрость ошибку
    </Button>
  )
}

export { BugButton }
