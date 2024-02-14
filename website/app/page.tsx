import Navbar from "./components/navbar";
import styles from "./styles/page.module.css"

import * as React from 'react';

const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <h1>Test</h1>
    </div>
  )
};

export default Home;
