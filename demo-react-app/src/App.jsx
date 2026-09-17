import { BrowserRouter, Routes, Route } from 'react-router';
import { ShellLayout } from './_shell/ShellLayout';
import { ShellCtxProvider } from './_shell/ShellCtxProvider.jsx';

import Home from './views/frontend/Home/Home.jsx';
import MyTraining from './views/frontend/MyTraining/MyTraining.jsx';
import Admin from './views/admin/Admin/Admin.jsx';
import AdminDashboard from './views/admin/Dashboard/Dashboard.jsx';

export default function App() {
  return (
    <ShellCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ShellLayout />}>
            <Route index element={<Home />} />
            <Route path="my-training" element={<MyTraining />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShellCtxProvider>
  );
}