import React, {useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';

function StepsChallengePage(props) {
    const [stepsTaken, setStepsTaken] = useState(0);
    const [stepGoal, setStepGoal] = useState(0);

    return(
        <div>
            <Col lg={10}>
                <ProgressBar striped>

                </ProgressBar>
            </Col>
            <div>
                <Col lg={5}>

                </Col>
                <Col lg={5}>
                    You've taken
                    <br/> {stepsTaken}
                    <br/> out of
                    <br/> {stepGoal}
                    <br/> steps!
                </Col>
            </div>
            <Col lg={5}>

            </Col>
        </div>
    );
}

export default StepsChallengePage;