import React, { Component } from 'react';
import './Features.css';

export class Features extends Component {
    render() {
        return (
            <div className="container features">
                <h3 className="text-center">Welcome to the soapery</h3>
                <p className="description">Made with love, everything we do is ‘for you, by hand’.</p>
                <div className="feature-list">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon">
                                        <i className="glyphicon glyphicon-leaf"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>100% Organic</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}