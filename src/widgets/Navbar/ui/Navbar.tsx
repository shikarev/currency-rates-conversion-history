import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Button } from '@mui/material'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData)

  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        color="primary"
        variant="outlined"
        sx={{ width: '130px' }}
        disableRipple
        onClick={onLogout}
      >
        Выход
      </Button>
    </div>
  )
}

export { Navbar }
