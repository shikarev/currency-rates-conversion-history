import { LoginModal } from 'features/AuthByUsername'
import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Button } from '@mui/material'
import Arrow from 'shared/assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    navigate('login')
  }, [dispatch, navigate])

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
