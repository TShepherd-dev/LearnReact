export default function MembersAddUser({ userForm, setUserForm }) {
    const causeCrash = () => {
        alert("About to cause a crash");
        throw new Error("This is a deliberate crash");
    };
    return (
        <div>
            Cause a crash: <button onClick={causeCrash}>Cause Crash</button>
        </div>
        
    );
}