import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Weather from './Weather/Weather';
import App from './App';

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/weather"
          element={
            <Weather />
          }
        />
        <Route
          path="/login"
          element={
            <App />
          }
        />
        <Route path="*" element={<Navigate to="/weather" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
