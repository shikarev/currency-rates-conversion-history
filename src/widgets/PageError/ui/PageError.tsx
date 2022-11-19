import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
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
      <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>
        Обновить страницу
      </Button>
    </div>
  )
}

export { PageError }
