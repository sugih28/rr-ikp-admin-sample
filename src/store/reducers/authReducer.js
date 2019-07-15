const initState = {
    auth: false,
    loginErr: false,
    message: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHECK_AUTH':
            return {
                ...state,
                auth: action.auth
            }

        case 'AUTH_LOGIN':
            return {
                ...state,
                auth: action.auth,
                loginErr: false,
                message: null
            }

        case 'AUTH_LOGIN_ERR':
            return {
                ...state,
                loginErr: true,
                message: 'Gagal Login'
            }

        case 'AUTH_LOGOUT':
            console.log('You are Logged Out ')
            return {
                ...state,
                auth:false
            }

        default:
            return state
    }
}

export default authReducer