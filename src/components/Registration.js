import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Registration.css'

export default class Registration extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className="outer-box">
                    <div className="header">
                        <h1> Registration Form </h1>
                    </div>

                    <div className="form">
                        
                    </div>

                    <div className="footer">
                        <p>Already have a account?<a href="#">Log In</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

