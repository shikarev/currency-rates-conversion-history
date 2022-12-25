import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { userActions, userReducer } from './model/slice/userSlice'
import { UserResponse, ResultStatus, UserSchema } from './model/types/user'

export {
  userReducer,
  userActions,
  UserSchema,
  UserResponse,
  ResultStatus,
  getUserAuthData,
}
