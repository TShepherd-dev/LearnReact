import {useState} from 'react';

export default function UserWelcome({ user, metrics }) {
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <div className="user-welcome">
      <h2>Welcome, {fullName}</h2>
      <p>You have {metrics.TotalModulesTaken} modules taken.</p>
    </div>
  );
}