import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pures/greeting';
//import Greetingf from './components/pures/greetingf';
import TaskListComponent from './components/container/task_list';
import AContact from './components/container/aContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="nicolas"></Greeting> */}
        {/* <Greetingf name="nico">

        </Greetingf> */}
        {/* componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>

        <AContact></AContact>
        
      </header>
    </div>
  );
}

export default App;
