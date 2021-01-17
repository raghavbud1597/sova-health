import React from 'react';
import FoodNutrition from './../images/food-nutrition.webp';
import News from './../images/news.webp';
import Hiw from './../images/hiw-summary.webp'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoalCard from '../common/GoalCard';
import Partners from '../images/partners.webp';
import Testimonials from '../common/Testimonials';
 
export default function Home() {
    return (
        <div className="home my-5">
            <section className="banner bg-primary py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} sm={12}>
                            <h1 className="banner-heading">
                                Discover a Healthier You
                            </h1>
                            <h4 className="text-white mt-5">
                                Get a personalized nutrition program based on your lifestyle, habits and blood analysis.
                            </h4>
                            <Button variant="light" className="font-weight-bold mt-5">
                                <h5 className="p-2 m-0">Learn More</h5>
                            </Button>
                        </Col>
                        <Col md={6} sm={12}>
                            <img src={FoodNutrition} alt="nutrition" className="banner-image"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-secondary py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <h1 className="text-primary text-center mb-5">
                                REDEFINE YOUR RELATIONSHIP WITH FOOD
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={8} md={3}>
                            <div className="bg-white rounded">
                                <h4 className="text-primary text-center py-2">No Diet Charts</h4>
                            </div>
                        </Col>
                        <Col sm={8} md={3}>
                            <div className="bg-white rounded">
                                <h4 className="text-primary text-center py-2">No Restrictive Diets</h4>
                            </div>
                        </Col>
                        <Col sm={8} md={3}>
                            <div className="bg-white rounded">
                                <h4 className="text-primary text-center py-2">
                                    No Staying Hungry
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5">
                <Container>
                    <h1 className="text-primary text-center mb-5">WE HELP YOU ACHIEVE YOUR HEALTH GOALS</h1>
                    <Row className="align-items-center justify-content-between my-5">
                        <Col sm={5} md={3}>
                            <GoalCard 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={5} md={3}>
                            <GoalCard 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={5} md={3}>
                            <GoalCard 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-between my-5">
                        <Col sm={5} md={3}>
                            <GoalCard 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={5} md={3}>
                            <GoalCard 
                                title="Blood Biometer Analysis"
                                desc="Get a scientific explanation for how specific biomakers affect your body and what foods can be used to improve them."
                            />
                        </Col>
                        <Col sm={5} md={3}>
                            <GoalCard 
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
                        <Col sm={12} md={8}>
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
                    <h1 className="text-primary text-center mb-5">
                        HOW IT WORKS?
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <img src={Hiw} alt="How it works" className="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5">
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
                    <h1 className="text-primary text-center mb-5">
                        OUR PARTNERS
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={10}>
                            <img src={Partners} alt="Partners List" className="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <h1 className="text-primary text-center mb-5">
                        AS SEEN IN
                    </h1>
                    <Row className="justify-content-center">
                        <Col sm={12} md={10}>
                            <img src={News} alt="Partners List" className="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
