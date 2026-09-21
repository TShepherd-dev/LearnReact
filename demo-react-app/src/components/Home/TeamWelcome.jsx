
export default function TeamWelcome({user}) {
    return (
        <div className="team-greeting">
            <h2>Welcome to the Team, {user.firstName} {user.lastName}!</h2>
        </div>
    );
}