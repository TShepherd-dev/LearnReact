export default function MembersAddUser({ userForm, setUserForm }) {
    const causeCrash = () => {
        throw new Error("This is a deliberate crash");
    };
    return (
        <div>
            Cause a crash: <button onClick={causeCrash}>Cause Crash</button>
        </div>
        
    );
}