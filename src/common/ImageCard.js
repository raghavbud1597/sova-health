import React from 'react'
import Card from 'react-bootstrap/Card'

export default function ImageCard({
    src,
    desc="",
    title=""
}) {
    return (
        <Card className="bg-dark">
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title className="font-weight-bold">{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
