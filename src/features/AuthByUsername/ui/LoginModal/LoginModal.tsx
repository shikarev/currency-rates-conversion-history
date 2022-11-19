import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginFormAsync />
    </Modal>
  )
}

export { LoginModal }
