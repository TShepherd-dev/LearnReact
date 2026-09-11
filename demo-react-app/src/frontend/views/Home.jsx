import { useState } from 'react';
import TeamGreeting from '../components/TeamGreeting.jsx';
import MyTraining from '../components/MyTraining.jsx';
import Pagination from '../components/Pagination.jsx';
import MembersAddUser from '../components/MembersAddUser.jsx';
import CauseCrash from '../components/CauseCrash.jsx';

const initialForm = {
    firstName: '',
    showCompleted: false,
};

export default function Home() {
  const [count, onPage] = useState(1);

  const [userForm, setUserForm] = useState(initialForm);

  return (
    <div>
      <h2>Home</h2>
      
      <TeamGreeting /><br/>
      <MyTraining /><br/>
      <br/>
      <p>Count: {count}</p>
      <Pagination start={count} total={100} pageSize={13} onPage={onPage} /><br/>
      <br/>

      <MembersAddUser userForm={userForm} setUserForm={setUserForm} />
      UserName: {userForm.firstName ?? ""}<br/>
      Show Completed: {userForm.showCompleted ? "Yes" : "No"}<br/>

      <br/>

      <CauseCrash /><br/>

      <br/>
      <b>End of Home Component</b>
    </div>
  );
}