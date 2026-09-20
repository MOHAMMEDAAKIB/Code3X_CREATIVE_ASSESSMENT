import Login from './pages/loginPage';
import DashboardPage from './pages/dasebord';

function App() {
  return window.location.pathname === '/dashboard' ? <DashboardPage /> : <Login />;
}

export default App;