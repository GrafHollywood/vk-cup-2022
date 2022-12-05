import React from 'react';
import styles from './App.module.css';
import { Header } from '../components/header/Header';
import { Sidenav } from '../components/sidenav/Sidenav';
import { LetterList } from '../components/letter-list/LetterList';

function App() {
  return (
    <>
      <Header />
      <main className={styles['content']}>
        <Sidenav />
        <LetterList />
      </main>
    </>
  );
}

export default App;
