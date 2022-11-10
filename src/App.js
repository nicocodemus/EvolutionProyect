import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
//import Greeting from './components/pures/greeting';
//import Greetingf from './components/pures/greetingf';
//import TaskListComponent from './components/container/task_list';
//import AContact from './components/container/aContact';
//import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="nicolas"></Greeting> */}
        {/* <Greetingf name="nico">

        </Greetingf> */}
        {/* componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent>

        <AContact></AContact> */}

        {/**ejemplo de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre='martin'>
        {/**todo lo que este aqui adentro es tratado como propos .children en cualquier componente*/}
          <h3>
            este  contendiio del prop.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
