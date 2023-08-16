import Footer from "./components/footer";
import Header from "./components/header";
import styles from './app.module.css'
import Stepper from "./components/common/stepper/Stepper";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles['main-body']}>
        <Stepper />
      </div>
      <Footer />
    </div>
  );
}

export default App;
