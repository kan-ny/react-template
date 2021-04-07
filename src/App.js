import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import HomeScreen from './HomeScreen';
function App() {
  return (

    // App
    <div className="App"> 
      {/* App-header */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Container maxWidth="md">

          <HomeScreen></HomeScreen>

        </Container>
        
        
        </header>
    </div>
  );
}

export default App;
