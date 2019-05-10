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
                            <img src="/images/the-heart.jpg" alt="Chicago" style={{ width: "100%" }} />
                            <div class="carousel-caption">
                                Rejuvenating ingredients to heal the skin and keep it nourished.<br/><br/>
                                <button type="button" className="button">Discover more</button>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/milky-way-menthol.jpg" alt="Milky Way - Menthol" style={{ width: "100%" }} />
                            <div class="carousel-caption">
                                Pamper yourself with the best hand-crafted soap.<br/><br/>
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