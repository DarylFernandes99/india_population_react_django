import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

const arr = ['Username', 'Password']

export class Login extends Component {
    render() {

        let errorMessage = null
        if (this.props.error) {
            errorMessage = (<p>{this.props.error.message}</p>)
        }

        const handleSubmit = event => {
            event.preventDefault()
            const uname = event.target.elements.username.value
            const pwd = event.target.elements.password.value
            this.props.onAuth(uname, pwd)
        }

        return (
            <div className="container">
                <h1>Login Page</h1><br/>
                {errorMessage}
                <div className="row">
                    <form onSubmit={event => handleSubmit(event)} className="form-horizontal">
                        {
                            arr.map((val) => 
                                <div className="form-group" key={val.toLowerCase()}>
                                    <label className="control-label col-sm-2" htmlFor={val.toLowerCase()}>{val}</label>
                                    {
                                        val.toLowerCase().includes('password')
                                        ?<div className="col-sm-10">
                                            <input type="password" size="50" className="form-control" id={val.toLowerCase()} required/>
                                        </div>
                                        :<div className="col-sm-10">
                                            <input type="text" size="50" className="form-control" id={val.toLowerCase()} />
                                        </div>
                                    }
                                </div>
                            )
                        }
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-offset col-sm">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="reset" className="btn btn-default">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset col-sm">
                                Don't Have an Account? <a href="/register">Register here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (uname, pwd) => dispatch(actions.authLogin(uname, pwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)