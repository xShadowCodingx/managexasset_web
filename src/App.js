import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AssetsMain from './pages/Assets/AssetsMain/AssetsMain';
import AssetIndividual from './pages/Assets/AssetIndividual/AssetIndividual';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='assets' element={<AssetsMain />} />
        <Route path='assets/record' element={<AssetIndividual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
