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
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';



function App() {
  return (
    <div className="App">
      <Menu name="saiful" lastName="saif" />
      {/* <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <StyleSheet /> */}
      {/* <FormComponent /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="joker" />
      </ErrorBoundary> */}
      <ClickCounter />
    </div>
  );
}

export default App;
