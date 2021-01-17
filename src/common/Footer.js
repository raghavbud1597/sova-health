import React from 'react'
import Facebook from './../images/facebok.webp'
import Insta from './../images/insta.webp'
import Twitter from './../images/twitter.webp'
import Youtube from './../images/youtube.webp'
import Call from './../images/Call.webp'
import Email from './../images/Email.webp'
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap'
import SocialMedia from './SocialMedia'

export default function Footer() {
    return (
        <Container>
            <footer className="footer pt-5">
                <Row className="justify-content-between py-4">
                    <Col sm={3}>
                        <p className="font-weight-bold mb-5">
                            Just good content. No spam. <br/> Sign up for our newsletter
                        </p>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your Email" className="rounded-0"/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="rounded-pill p-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={3}>
                        <Row className="mb-5">
                            <img src={Call} alt="Call" height="18px" width="18px" className="mr-4"/>
                            <a href="tel:+919811574691">+91 9811 574 691</a>
                        </Row>
                        <Row>
                            <img src={Email} alt="Email" height="18px" width="20px" className="mr-4"/>
                            <a href="mailto:support@sova.health">support@sova.health</a>
                        </Row>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center my-4">
                    <SocialMedia link="https://www.facebook.com/SovaNutrition/" src={Facebook}/>
                    <SocialMedia link="https://www.instagram.com/sova_health/" src={Insta}/>
                    <SocialMedia link="https://twitter.com/sovahealth" src={Twitter}/>
                    <SocialMedia link="https://www.youtube.com/channel/UCQACeaXNRC_H3S9KcxWsg3w" src={Youtube}/>                    
                </Row>
                <Row>
                    <Col>
                        <p className="text-uppercase text-center">WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED</p>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}
