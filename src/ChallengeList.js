import React from 'react';
import Challenge from './Challenge.js';
import ListGroup from 'react-bootstrap/ListGroup';

function ChallengeList(props) {
    return (
        <ListGroup>
            {props.challenges.map(challenge => <Challenge name={challenge.name} done={challenge.complete}/>)}
        </ListGroup>
    );
}

export default ChallengeList;