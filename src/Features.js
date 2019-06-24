import React, { Component } from 'react';
import './Features.css';

export class Features extends Component {
    render() {
        return (
            <div className="container-fluid features">
                <h3 className="text-center">Welcome to the soapery</h3>
                <p className="description">Made with love, everything we do is ‘for you, by hand’.</p>
                <div className="feature-list">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon leaf">
                                        <i className="glyphicon glyphicon-leaf"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>100% Organic</h4>
                                    <br/>
                                    <p>All materials are quality approved, hand-picked, and absolutely organic</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon hand">
                                        <i className="fas fa-hand-paper"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>Truly Handmade</h4>
                                    <br/>
                                    <p>Exclusive and unique products that are carefully chosen for all our clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon feather">
                                        <i className="fas fa-feather-alt"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>HYPOALLERGENIC</h4>
                                    <br/>
                                    <p>Only fresh, pure and organic materials are used to help you avoid allergy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon packed">
                                        <i className="fas fa-gift"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>BEAUTIFULLY PACKED</h4>
                                    <br/>
                                    <p>Enjoy colorful and nice packagings that are perfect for gifts and occasions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon coins">
                                        <i className="fas fa-coins"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>BONUS PROGRAM</h4>
                                    <br/>
                                    <p>Our reglar customers receive pleasant bonuses upon further purchases</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row feature">
                                <div className="col-sm-5">
                                    <div className="icon dolly">
                                        <i className="fas fa-dolly"></i>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h4>Free Shipping</h4>
                                    <br/>
                                    <p>No matter what you order, we will be glad to deliver it to you for free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}