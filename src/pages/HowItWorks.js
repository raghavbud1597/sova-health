import React from 'react';
import Hdiw from './../images/hdiw.webp';
import Hiw_v from './../images/hiw_v.webp';
import P1 from './../images/p1.webp';
import P2 from './../images/p2.webp';
import P3 from './../images/p3.webp';
import Hiw_Banner from './../images/hiw_banner.webp';
import Button from 'react-bootstrap/Button';
import Testimonials from './../common/Testimonials'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';


export default function HowItWorks() {
    return (
        <div className="my-5">
            <section className="banner bg-secondary py-5">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} sm={12}>
                            <h1 className="text-primary font-weight-bold" data-aos="fade-up">
                                Truly Personalized Nutrition starts with a Blood-Test
                            </h1>
                            <h4 className="text-primary mt-5" data-aos="fade-up">
                                At home collection of blood sample & analysis for 60+ parameters. Based on your health reports, our nutritionists will guide you with nutritional & lifestyle advice.
                            </h4>
                            <Button variant="primary" className="font-weight-bold mt-5" data-aos="fade-up">
                                <h5 className="p-2 m-0">View Our Plans</h5>
                            </Button>
                        </Col>
                        <Col md={4} sm={12}>
                            <img src={Hiw_Banner} alt="Hiw_Banner" className="w-100 h-100" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        HOW DOES IT WORK?
                    </h1>
                    <Row className="justify-content-center" >
                        <Col>
                            <img src={Hdiw} alt="HOW DOES IT WORK" className="w-100 d-none d-sm-none d-md-block" data-aos="fade-up"/>
                            <img src={Hiw_v} alt="HOW DOES IT WORK" className="w-100 d-block d-sm-block d-md-none" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        THE SOVA HEALTH PROMISE
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={4}>
                            <img src={P1} alt="HOW DOES IT WORK" className="w-100" data-aos="fade-up"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <img src={P2} alt="HOW DOES IT WORK" className="w-100" data-aos="fade-up"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <img src={P3} alt="HOW DOES IT WORK" className="w-100" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5 bg-primary">
                <Container>
                    <h1 className="text-secondary text-center mb-5" data-aos="fade-up">
                        WE LET THE RESULTS SPEAK FOR THEMSELVES HERE’S WHAT OUR PAST USERS HAVE TO SAY:
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12}>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
