import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kritika from './../images/Kritika.webp'
import Parneeta from './../images/PARNEETA.webp'
import Sid from './../images/sid.webp'
import axios from 'axios'

export default function Testimonials() {
    const [testimonyList, setTestimonyList] = useState([]);
    useEffect(async () => {
        // const result = await axios(
        //   'https://hn.dummy.com/api/v1/search?query=redux',
        // );

        // setTestimonyList(result.data);
     
        setTestimonyList([
            {
                "id": 1,
                "image": Kritika,
                "name": "Kritika",
                "message": 'I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs. Weight loss is a part of my motivation to eat right but its not the only reason that I am doing this. For me, its about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, Ive also lost weight.'
            },
            {
                "id": 2,
                "image": Parneeta,
                "name": "Parneeta",
                "message": 'I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs. Weight loss is a part of my motivation to eat right but its not the only reason that I am doing this. For me, its about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, Ive also lost weight.'
            },
            {
                "id": 3,
                "image": Sid,
                "name": "Siddhant",
                "message": 'I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs. Weight loss is a part of my motivation to eat right but its not the only reason that I am doing this. For me, its about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, Ive also lost weight.'
            }
        ]);
      },[]);

    return (
        <Carousel className="bg-secondary" data-aos="fade-up">
            {console.log(testimonyList)}
            {testimonyList.map((testimony) => (
                <Carousel.Item>
                    {console.log(testimony)}
                    <Row className="justify-content-center align-items-center my-5 text-center">
                        <Col sm={12} md={3}>
                            <img src={testimony.image} alt="testimony" className="rounded-circle m-4" height="185px" width="185px"/>
                        </Col>
                        <Col sm={12} md={7} className="pr-5">
                            <p className="text-center text-primary px-sm-5">
                                {testimony.message}
                            </p>
                            <p className="text-right text-primary mt-5">
                                <h3 className="font-weight-bold">
                                    -{testimony.name}
                                </h3>
                            </p>
                        </Col>
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
