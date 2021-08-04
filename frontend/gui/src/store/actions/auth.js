import * as actionTypes from './actionTypes'
import axios from 'axios'
import server from '../../components/server'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucess = (token) => {
    return {
        type: actionTypes.AUTH_SUCESS,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userID')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expdate => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expdate * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        // console.log("Entered Login")
        dispatch(authStart())
        axios.get(server + "api/")
            .then(res => {
                // console.log("Entered then")
                let bool = false
                let token
                res.data.map(
                    user => {
                        // console.log(user)
                        if (user.uname === username && user.pwd === password) {
                            token = 0
                            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                            localStorage.setItem('token', token)
                            localStorage.setItem('expirationDate', expirationDate)
                            localStorage.setItem('userID', user.id)
                            bool = true
                        }
                    }
                )
                if (bool) {
                    dispatch(authSucess(token))
                    dispatch(checkAuthTimeout(3600))
                    window.location.href = "/"
                } else {
                    dispatch(authFail("Incorrect Username/Password"))
                    alert("Wrong Username or Password")
                }
            })
            .catch((err) => {
                dispatch(authFail(err))
            })
    }
}

export const authSignup = (username, fname, lname, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post(server + "api/", {})
            .then(res => {
                const token = 0
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSucess(token))
                dispatch(checkAuthTimeout(3600))
            })
            .catch((err) => {
                dispatch(authFail(err))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token === undefined) {
            dispatch(authLogout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authSucess(token))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}