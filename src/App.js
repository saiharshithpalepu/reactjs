import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
       {/* <Greet name='Harshith' heroname='superman'/>
       <Greet name='Giridhar' heroname='spiderman'/>
      
      <Welcome name='Harshith'/>  
      <Hello/> */}
      {/* <Message/> */}
      <Greet name='Nikhil' heroname='batman'/>
      <Counter/>
    </div>
  );
}

export default App;
