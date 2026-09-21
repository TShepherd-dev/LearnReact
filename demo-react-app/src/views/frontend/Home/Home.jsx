import { useState, useEffect } from 'react';
import { mockHome } from '../../../mock/api.js'

import TeamWelcome from '../../../components/Home/TeamWelcome.jsx';
import UserWelcome from '../../../components/Home/UserGreeting.jsx';
import WhatsHot from '../../../components/Home/WhatsHot.jsx';


export default function Home() {
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mockHome().then((data) => {
      setPayload(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading…</p>;

  return (
    <main>
      <UserWelcome user={payload.user} metrics={payload.metrics} />
      {payload.user.isManager &&
        <TeamWelcome user={payload.user} />}
      <WhatsHot whatsHotModules={payload.whatsHotModules} />
    </main>
  );
}