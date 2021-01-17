import React from 'react';
import FoodNutrition from './../images/food-nutrition.webp';
import News from './../images/news.webp';
import Hiw from './../images/hiw-summary.webp';
import Cross from './../images/cross.webp';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoalCard from '../common/GoalCard';
import Partners from '../images/partners.webp';
import Testimonials from '../common/Testimonials';
import TestTube from './../images/test-tube.png';
 
export default function Home() {
    return (
        <div className="home my-5">
            <section className="banner bg-primary py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} sm={12} sm={{ order: 2 }} md={{ order: 1 }}>
                            <h1 className="banner-heading" data-aos="fade-up">
                                Discover a Healthier You
                            </h1>
                            <h4 className="text-white mt-5" data-aos="fade-up">
                                Get a personalized nutrition program based on your lifestyle, habits and blood analysis.
                            </h4>
                            <Button variant="light" className="font-weight-bold mt-5" data-aos="fade-up">
                                <h5 className="p-2 m-0">Learn More</h5>
                            </Button>
                        </Col>
                        <Col md={6} sm={12} sm={{ order: 1 }} md={{ order: 2 }}>
                            <img src={FoodNutrition} alt="nutrition" className="banner-image" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-secondary py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                                REDEFINE YOUR RELATIONSHIP WITH FOOD
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={8} md={3}>
                            <Row className="bg-white rounded mr-1 align-items-center justify-content-center w-100 my-1" data-aos="fade-up">
                                <img src={Cross} alt="Cross" height="50px" width="40px" />
                                <h4 className="text-primary text-center p-1 mb-0">No Diet Charts</h4>
                            </Row>
                        </Col>
                        <Col sm={8} md={4}>
                            <Row className="bg-white rounded mr-1 align-items-center justify-content-center w-100 my-1" data-aos="fade-up">
                                <img src={Cross} alt="Cross" height="50px" width="40px" />
                                <h4 className="text-primary text-center p-1 mb-0">No Restrictive Diets</h4>
                            </Row>
                        </Col>
                        <Col sm={8} md={3}>
                            <Row className="bg-white rounded align-items-center justify-content-center w-100 my-1" data-aos="fade-up">
                                <img src={Cross} alt="Cross" height="50px" width="40px" />
                                <h4 className="text-primary text-center p-1 mb-0">
                                    No Staying Hungry
                                </h4>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5">
                <Container>
                    <h1 className="text-primary text-center mb-5">WE HELP YOU ACHIEVE YOUR HEALTH GOALS</h1>
                    <Row className="align-items-center justify-content-md-between justify-content-sm-center">
                        <Col sm={8} md={3}>
                            <GoalCard 
                                image={TestTube}
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={8} md={3}>
                            <GoalCard 
                                image={TestTube}
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={8} md={3}>
                            <GoalCard 
                                image={TestTube}
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-md-between justify-content-sm-center">
                        <Col sm={8} md={3}>
                            <GoalCard 
                                image={TestTube}
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={8} md={3}>
                            <GoalCard 
                                image={TestTube}
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={8} md={3}>
                            <GoalCard
                                image={TestTube} 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8} data-aos="fade-up">
                            <iframe 
                                title="Welcome to Sova health"
                                width="100%" 
                                height="400px"
                                src="https://www.youtube.com/embed/-3O3TVzbEJ8" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        HOW IT WORKS?
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <img src={Hiw} alt="How it works" className="w-100" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        WHAT OUR CUSTOMERS SAY
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12}>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        OUR PARTNERS
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={10}>
                            <img src={Partners} alt="Partners List" className="w-100" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5" data-aos="fade-up">
                        AS SEEN IN
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={10}>
                            <img src={News} alt="Partners List" className="w-100" data-aos="fade-up"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
