import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './router/router';
import { UserContextProvider } from './context/userContext';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <header></header>
        <main>
          <Container>
            <Router />
          </Container>
        </main>
        <footer></footer>
      </UserContextProvider>
    </div>
  );
}

export default App;
