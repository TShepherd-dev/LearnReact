import {useState} from 'react';

export default function TeamGreeting() {
    const [userName, setUserName] = useState('Timbo');

    return (
        <div className="team-greeting">
            <h2>Welcome to the Team, {userName}!</h2>
        </div>
    );
}