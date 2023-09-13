import './App.css';
import Counter from "./components/Counter";
import { Header } from "./components/Header";
import { UserForm } from './components/UserForm';
import { useSelector } from 'react-redux';
import { UserProfile } from './components/UserProfile';
import { Auth } from './components/Auth';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <UserForm />
      <Counter />
    </div>
  );
}

export default App;
