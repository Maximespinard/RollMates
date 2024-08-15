import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import CommunitiesPage from '@/pages/communities/CommunitiesPage';
import NotFoundPage from './custom/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
