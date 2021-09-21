import Styles from './App.module.scss';

console.log('one');
var ww = process.env.NODE_ENV.trim.toLowerCase();
if (ww === 'production') {
  console.log('Another one');
} else {
  console.log('test');
}

const App = () => <div className={Styles.container}>Hello React!</div>;

export default App;
