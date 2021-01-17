import React from 'react';
import Card from 'react-bootstrap/Card';

export default function GoalCard({
        title = '',
        desc = '',
        image = ''
    }) {
    return (
        <Card style={{ width: '100%' }} className="text-primary text-center shadow-sm rounded-lg my-5" data-aos="fade-up">
            <Card.Body>
                <img src={image} alt="icon" height="60px" width="60px"/>
                <Card.Title className="font-weight-bold">
                    {title}
                </Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
