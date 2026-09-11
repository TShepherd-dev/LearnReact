export default function MembersAddUser({ userForm, setUserForm }) {
    return (
        <div>
            Members Add User Component<br/>
            <input
                name="firstName"
                id="firstName"
                value={userForm.firstName ?? ""}
                maxLength={20}
                onChange={(e) => setUserForm({ 
                    ...userForm, 
                    firstName: e.target.value 
                })}
            /><br/>
            <input
                name="showCompleted"
                id="showCompleted"
                type="checkbox"
                checked={userForm.showCompleted ?? false}
                onChange={(e) => setUserForm({ 
                    ...userForm, 
                    showCompleted: e.target.checked 
                })}
            />
        </div>
        
    );
}