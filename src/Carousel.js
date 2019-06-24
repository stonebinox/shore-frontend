import React, { Component } from 'react';
import './Carousel.css';

export class Carousel extends Component {
    render() {
        return (
            <div className="container-fluid product-carousel">
                <div id="productCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#productCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#productCarousel" data-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="/images/coffee.jpg" alt="Coffee" style={{ width: "100%" }} />
                            <div className="carousel-caption">
                                Rejuvenating ingredients to keep it nourished.<br/><br/>
                                <button type="button" className="button">Discover more</button>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/goatmilk.jpg" alt="Vanilla" style={{ width: "100%" }} />
                            <div className="carousel-caption">
                                Pamper yourself with the best hand-crafted soap.<br/><br/>
                                <button type="button" className="button">Discover more</button>                      
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/greentea-goatmilk.jpg" alt="Greentea" style={{ width: "100%" }} />
                            <div className="carousel-caption">
                                Heal dark spots and tanned skin naturally.<br/><br/>
                                <button type="button" className="button">Discover more</button>                      
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/packaging.jpg" alt="Shore Packaging" style={{ width: "100%" }} />
                            <div className="carousel-caption">
                                Say goodbye to acne and oily skin.<br/><br/>
                                <button type="button" className="button">Discover more</button>                      
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#productCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#productCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}