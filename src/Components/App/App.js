import Styles from './App.module.scss';
import reactImg from '../../../public/assets/react.png';

const App = () => {
  return (
    <div className={Styles.container}>
      Hello React!

      <img src={reactImg} alt="some" />
    </div>
  )
};

export default App;