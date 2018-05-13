import constants, { SIGNIN } from 'constants/actionTypes'

function auth(state = {
  userData: null
}, action) {
  const { payload, type } = action
  switch (type) {
    case SIGNIN.SUCCESS:
      return {
        ...state,
        userData: payload
      }
    case constants.SIGN_OUT:
      return {
        ...state,
        userData: null
      }
    default:
      return state
  }
}

export default auth
