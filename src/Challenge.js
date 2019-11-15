import React from 'react';
import {Alert, Col} from 'react-bootstrap/';

function Challenge(props) {
    return (
        <Col lg={6}>
            <Alert variant={props.done ? "success" : "secondary"}>
                {props.name}
            </Alert>
        </Col>
    );
}

export default Challenge;