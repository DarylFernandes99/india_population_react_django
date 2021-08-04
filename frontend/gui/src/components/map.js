import React, { useEffect } from 'react'
import keplerGlReducer from 'kepler.gl/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { taskMiddleware } from 'react-palm/tasks'
import { Provider, useDispatch } from 'react-redux'
import KeplerGl from "kepler.gl"
import { addDataToMap } from "kepler.gl/actions"
import data from '../assets/population.json'
import config from '../assets/config.json'

const reducers = combineReducers({
    keplerGl: keplerGlReducer
})

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware))

const handleLogout = event => {
    event.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('userID')
    localStorage.removeItem('expirationDate')
    window.location.href = "/"
}

function NavBar () {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">India Population</a>
                </div>
                <ul class="nav navbar-nav">
                    
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/dashboard"><span class="glyphicon glyphicon-user"></span>Profile</a></li>
                    <li><a href="javascript:void(0)" onClick={event => handleLogout(event)}><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

function KeplerMap () {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            addDataToMap({
                datasets: {
                    info: {
                        label: "India Population",
                        id: "population"
                    },
                    data
                },
                options: {
                    centerMap: true,
                    readOnly: false,
                    keepExistingConfig: false
                },
                config
            })
        )
    }, [dispatch, data])

    return (
        <KeplerGl
            id="population"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
            width={window.innerWidth}
            height={window.innerHeight}
        />
    )
}

export default function Map() {
    return (
        <Provider store={store}>
            <NavBar />
            <KeplerMap />
        </Provider>
    )
}