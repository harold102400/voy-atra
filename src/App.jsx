import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './router/router';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <header></header>
        <main>
          <Router />
        </main>
        <footer></footer>
      </UserContextProvider>
    </div>
  );
}

export default App;
