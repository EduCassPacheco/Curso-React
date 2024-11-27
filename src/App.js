import './App.css';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  const nomeTeste="Eduardo"
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
