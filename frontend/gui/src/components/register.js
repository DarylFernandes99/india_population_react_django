import React, { Component } from 'react'
import axios from 'axios'
import server from './server'
import { Redirect } from 'react-router-dom'

const arr = ['Name', 'Username', 'Email', 'Password', 'Confirm Password', 'DOB', 'Phone', 'Address 1', 'Address 2', 'City', 'State', 'Country']

export class Register extends Component {

    handleSubmit = (event) => {
		event.preventDefault()
        const name = event.target.elements.name.value
        const uname = event.target.elements.username.value
        const email = event.target.elements.email.value
        const pwd = event.target.elements.password.value
        const confPwd = event.target.elements.confirmpassword.value
        const dob = event.target.elements.dob.value
        const phone = event.target.elements.phone.value
        const add1 = event.target.elements.address1.value
        const add2 = event.target.elements.address2.value
        const city = event.target.elements.city.value
        const state = event.target.elements.state.value
        const country = event.target.elements.country.value
        if (pwd === confPwd) {
            axios.post(server + "api/", {
                name: name,
                uname: uname,
                email: email,
                pwd: pwd,
                dob: dob,
                phone: phone,
                add1: add1,
                add2: add2,
                city: city,
                state: state,
                country: country,
            })
                .then((res) => {
					alert("Registration Completed. Login to view your Details")
					window.location.href = "/"
				})
                .catch((err) => alert("Error: " + err))
        } else {
            alert('Passwords do not match!!')
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Registration Page</h1><br/>
                <div className="row">
                    <form onSubmit={(event) => this.handleSubmit(event)} className="form-horizontal">
                        {
                            arr.map((val) => 
                                <div className="form-group" key={val.toLowerCase().replace(/ /g, "")}>
                                    <label className="control-label col-sm-4" htmlFor={val.toLowerCase().replace(/ /g, "")}>{val}</label>
                                    {
                                        val.toLowerCase().includes('password')
                                        ?<div className="col-sm-8">
                                            <input type="password" size="50" placeholder="Required" className="form-control" id={val.toLowerCase().replace(/ /g, "")} required/>
                                        </div>
                                        : val.toLowerCase().includes('dob')
                                            ?<div className="col-sm-8">
                                                <input type="date" size="50" className="form-control" id={val.toLowerCase().replace(/ /g, "")} required/>
                                            </div>
                                            :val.toLowerCase().includes('email')
                                                ?<div className="col-sm-8">
                                                    <input type="email" size="50" className="form-control" placeholder="Required" id={val.toLowerCase().replace(/ /g, "")} required/>
                                                </div>
                                                :val.toLowerCase().includes('phone')
                                                    ?<div className="col-sm-8">
                                                        <input type="tel" pattern="[0-9]{10}" placeholder="Required" required size="50" className="form-control" id={val.toLowerCase().replace(/ /g, "")} />
                                                    </div>
                                                    :val.toLowerCase().includes('address 1')
                                                        ?<div className="col-sm-8">
                                                            <textarea required rows="3" col="20" className="form-control" placeholder="Required" id={val.toLowerCase().replace(/ /g, "")} />
                                                        </div>
                                                        :val.toLowerCase().includes('address 2')
                                                            ?<div className="col-sm-8">
                                                                <textarea rows="3" col="20" className="form-control" id={val.toLowerCase().replace(/ /g, "")} placeholder="Optional" />
                                                            </div>
                                                            :<div className="col-sm-8">
                                                                <input type="text" size="50" className="form-control" id={val.toLowerCase().replace(/ /g, "")} placeholder="Required" required/>
                                                            </div>
                                    }
                                </div>
                            )
                        }
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-offset col-sm">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="reset" className="btn btn-default">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset col-sm">
                                Already Have an Account? <a href="/login">Login here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
