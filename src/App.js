import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'


function App() {
  return (
    <div className="App">
       {/* <Greet name='Harshith' heroname='superman'/>
       <Greet name='Giridhar' heroname='spiderman'/>
       <Greet name='Nikhil' heroname='batman'/>
      <Welcome name='Harshith'/>  
      <Hello/> */}
      <Message/>
    </div>
  );
}

export default App;
