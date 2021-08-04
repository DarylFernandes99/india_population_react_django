import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class error extends Component {
    render() {
        return (
            <div>
                <h1>404 Error</h1>
                <Link to="/">
                    <button type="button">
                        Back Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default error
