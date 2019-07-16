import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const url = 'https://reqres.in/api'
const MySwal = withReactContent(Swal)

export function checkAuth() {
    return(dispatch) => {
        let auth = false

        if (localStorage.getItem('ikp:rradmin')) {
            auth = {
                user_id: '1',
                name: 'User Admin',
            }
        }
        
        dispatch({type: 'CHECK_AUTH', auth})
    }
}

export function login(user) {
    return(dispatch) => {
        axios.post(url+'/login', user)
            .then((res) => {
                localStorage.setItem('ikp:rradmin', res.data.token)

                const auth = {
                    user_id: '1',
                    name: 'User Admin',
                }
                dispatch({type: 'AUTH_LOGIN', auth, res})
            }).catch(err => {
                dispatch({type: 'AUTH_LOGIN_ERR', err})
            })
    }
}

export function logout() {
    return(dispatch) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "Logout",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
                localStorage.removeItem('ikp:rradmin')

                dispatch({type: 'AUTH_LOGOUT'})               
            }
          })
    }
}