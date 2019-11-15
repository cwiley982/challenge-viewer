import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChallengeList from './ChallengeList.js';
import StepsChallengePage from './StepsChallengePage.js';

function App() {
    const [challenges, setChallenges] = useState([{'name':'steps', 'complete':false},{'name':'games', 'complete':true}]);

    return (
        <div className="App">
            <body>
                <ChallengeList challenges={challenges}/>
                <StepsChallengePage/>
            </body>
        </div>
    );
}

export default App;
