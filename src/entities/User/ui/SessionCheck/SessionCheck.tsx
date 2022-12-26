import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { useEffect } from 'react'
import { userActions } from 'entities/User'

const SessionCheck = () => {
  const dispatch = useAppDispatch()

  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

  useEffect(() => {
    if (user) {
      dispatch(userActions.setAuthData(JSON.parse(user)))
    }
  }, [dispatch, user])

  return null
}

export default SessionCheck
