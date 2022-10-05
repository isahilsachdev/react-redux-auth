import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Weather from './Weather/Weather';
import App from './App';

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/weather' element={<Weather />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
