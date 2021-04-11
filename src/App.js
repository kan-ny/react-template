import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (

    // App
    <Router>

    <div className="App"> 
      {/* App-header */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Container maxWidth="md">

          <HomeScreen></HomeScreen>

        </Container>
        
        
        </header>
    </div>
    </Router>
  );
}

export default App;
