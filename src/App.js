import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <CustomButton text="Clique Aqui" onClick={handleClick} />

    </div>
  );
}

export default App;
