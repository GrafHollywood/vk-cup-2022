import React from 'react';
import styles from './App.module.css';
import { Header } from '../components/header/Header';

function App() {
  return (
    <div className={styles['App']}>
      <Header />
    </div>
  );
}

export default App;
