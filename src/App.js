import './App.css';
import Router from './router/router';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <header></header>
        <main>
          <Router />
        </main>
        <footer></footer>
      </AuthContextProvider>
    </div>
  );
}

export default App;
