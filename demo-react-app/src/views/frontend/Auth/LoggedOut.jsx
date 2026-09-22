import { Link } from 'react-router';

export default function LoggedOut() {
  return (
    <>
      <div>Logged out successfully.</div><br/><br/>
      <Link to="\login"> Login again</Link>
    </>
  );
}