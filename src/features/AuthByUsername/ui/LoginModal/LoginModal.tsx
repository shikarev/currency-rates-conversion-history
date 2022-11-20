import { Box, Modal, Typography } from '@mui/material'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        className={cls.LoginModal}
      >
        <Box
          sx={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            background: '#1A237E',
            height: '60px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Typography variant="h5" noWrap>
            Вход в личный кабинет
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Suspense fallback={<Loader />}>
            <LoginFormAsync />
          </Suspense>
        </Box>
      </Box>
    </Modal>
  )
}

export { LoginModal }
