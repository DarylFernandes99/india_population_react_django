import React, { useEffect, useState } from 'react'
import server from './server'
import axios from 'axios'

function Dashboard() {
    const arr = ['Name', 'Username', 'Email', 'DOB', 'Phone', 'Address 1', 'Address 2', 'City', 'State', 'Country']
    const [disable, setDisable] = useState(true)
    const [user, setUser] = useState({})
    const [userID, setUserID] = useState(localStorage.getItem('userID'))

    useEffect(() => {
        axios.get(server + "api/" + userID)
            .then((res) => {
                setUser(res.data)
                document.getElementById(arr[0].toLowerCase().replace(/ /g, "")).value = res.data.name
                document.getElementById(arr[1].toLowerCase().replace(/ /g, "")).value = res.data.uname
                document.getElementById(arr[2].toLowerCase().replace(/ /g, "")).value = res.data.email
                document.getElementById(arr[3].toLowerCase().replace(/ /g, "")).value = res.data.dob
                document.getElementById(arr[4].toLowerCase().replace(/ /g, "")).value = res.data.phone
                document.getElementById(arr[5].toLowerCase().replace(/ /g, "")).value = res.data.add1
                document.getElementById(arr[6].toLowerCase().replace(/ /g, "")).value = res.data.add2
                document.getElementById(arr[7].toLowerCase().replace(/ /g, "")).value = res.data.city
                document.getElementById(arr[8].toLowerCase().replace(/ /g, "")).value = res.data.state
                document.getElementById(arr[9].toLowerCase().replace(/ /g, "")).value = res.data.country
            })
    }, [disable])

    const handleSubmit = event => {
        const name = event.target.elements.name.value
        const uname = event.target.elements.username.value
        const email = event.target.elements.email.value
        const dob = event.target.elements.dob.value
        const phone = event.target.elements.phone.value
        const add1 = event.target.elements.address1.value
        const add2 = event.target.elements.address2.value
        const city = event.target.elements.city.value
        const state = event.target.elements.state.value
        const country = event.target.elements.country.value

        axios.put(server + "api/" + userID + "/", {
            name: name,
            uname: uname,
            email: email,
            dob: dob,
            pwd: user.pwd,
            phone: phone,
            add1: add1,
            add2: add2,
            city: city,
            state: state,
            country: country,
        })
            .then((res) => alert("Updation Successfull"))
            .catch((err) => alert("Error: " + err))
    }

    const handleLogout = event => {
        localStorage.removeItem('token')
        localStorage.removeItem('userID')
        localStorage.removeItem('expirationDate')
    }

    return (
        <div className="container">
            <h1>Dashboard</h1><br/>
            <div className="row">
                <form action="/dashboard" onSubmit={(event) => handleSubmit(event)} className="form-horizontal">
                    {
                        arr.map((val) =>
                            <div className="form-group" key={val.toLowerCase().replace(/ /g, "")}>
                                <label className="col-sm-3">{val}</label>
                                &nbsp;&nbsp;&nbsp;
                                {
                                    val.toLowerCase().includes('address')
                                    ?<div className="col-sm-8">
                                        <textarea rows="3" col="50" className="form-control" id={val.toLowerCase().replace(/ /g, "")} placeholder={val} disabled={disable}/>
                                    </div>
                                    :<input className="col-sm-3" htmlFor={val.toLowerCase().replace(/ /g, "")} placeholder={val} id={val.toLowerCase().replace(/ /g, "")} disabled={disable}/>
                                }
                            </div>
                        )
                    }
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-offset col-sm">
                                <button className="btn btn-default"  onClick={(event) => {setDisable(!disable); disable && event.preventDefault()}}>{disable ? 'Edit' : 'Submit'}</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {
                                    disable
                                    ?<button type="submit" onClick={(event) => handleLogout(event)} className="btn btn-default">Logout</button>
                                    :<button className="btn btn-default" onClick={(event) => {setDisable(!disable); event.preventDefault()}}>Cancel</button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
                <h4 className="text-center"><a href="/" className="href">Show Map</a></h4>
            </div>
        </div>
    )
}

export default Dashboard
