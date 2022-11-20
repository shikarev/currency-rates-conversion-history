import { Button } from '@mui/material'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>Произошла непредвиденная ошибка</p>
      <Button
        variant="outlined"
        color="primary"
        onClick={reloadPage}
      >
        Обновить страницу
      </Button>
    </div>
  )
}

export { PageError }
