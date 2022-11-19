import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

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
      onClick={onThrow}
    >
      пробрость ошибку
    </Button>
  )
}

export { BugButton }
