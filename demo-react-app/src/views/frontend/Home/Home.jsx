import { useState, useEffect } from 'react';
import { mockHome } from '../../../mock/api.js'

import TeamWelcome from '../../../components/Home/TeamWelcome.jsx';
import UserWelcome from '../../../components/Home/UserGreeting.jsx';
import WhatsHot from '../../../components/Home/WhatsHot.jsx';


export default function Home() {
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = (triggerError = false) => {
    setIsLoading(true);
    setError(null);
    mockHome({ shouldFail: triggerError })
      .then(setPayload)
      .catch(setError)
      .finally(() => setIsLoading(false));
  };
  useEffect(() => { load(); }, []);

  if (isLoading) return <p>Loading…</p>;
  if (error) return (
    <div>
      <p>Something went wrong.</p>
      <button onClick={() => load(false)}>Retry</button>
    </div>
  );
  if (!payload.whatsHotModules.length) return (
    <p>No "what's hot" modules yet.</p>
  );

  return (
    <main>
      <button onClick={() => load(true)}>Trigger Error Reload</button>
      <UserWelcome user={payload.user} metrics={payload.metrics} />
      {payload.user.isManager &&
        <TeamWelcome user={payload.user} />}
      <WhatsHot whatsHotModules={payload.whatsHotModules} />
    </main>
  );
}