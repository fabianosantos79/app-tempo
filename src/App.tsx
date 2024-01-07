import './App.css';
import Section from './components/Section';
import Header from './components/Header';

function App() {

  return (
    <main>
      <Header/>
      <h1>Previsão do Tempo</h1>
      <h5>Coloque abaixo o nome da cidade e clique em pesquisar.</h5>
      <Section />
    </main>
  );
}

export default App;
