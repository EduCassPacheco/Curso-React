import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nomeTeste="Eduardo"
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nomeTeste}/>
      <br/>
      <Pessoa nome="Rodry" idade="23" profissao="Programador" foto=""/>
    </div>
  );
}

export default App;
