import './App.css';
import Menu from './components/Menu';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import StyleSheet from './components/StyleSheet';
import FormComponent from './components/FormComponent';



function App() {
  return (
    <div className="App">
      <Menu name="saiful" lastName="saif" />
      {/* <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      <ParentComponent />
      {/* <UserGreeting /> */}
      {/* <StyleSheet /> */}
      <FormComponent />

    </div>
  );
}

export default App;
