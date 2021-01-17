import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kritika from './../images/Kritika.webp'

export default function Testimonials() {
    return (
        <Carousel className="bg-secondary" data-aos="fade-up">
            <Carousel.Item>
                <Row className="justify-content-center align-items-center my-5">
                    <Col sm={3}>
                        <img src={Kritika} alt="testimony" className="rounded-circle m-4" height="185px" width="185px"/>
                    </Col>
                    <Col sm={7} className="pr-5">
                        <p className="text-center text-primary">
                            "I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs." <br/>
                            Weight loss is a part of my motivation to eat right but it's not the only reason that I am doing this. For me, it's about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, I've also lost weight.”
                        </p>
                        <p className="text-right text-primary mt-5">
                            <h3 className="font-weight-bold">
                                -Kritika
                            </h3>
                        </p>
                    </Col>
                </Row>
            </Carousel.Item>
            {/* <Carousel.Item>
                
            </Carousel.Item>
            <Carousel.Item>
                
            </Carousel.Item> */}
        </Carousel>
    )
}
