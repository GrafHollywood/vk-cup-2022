import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Header } from '../components/header/Header';
import { Sidenav } from '../components/sidenav/Sidenav';
import { LetterList } from '../components/letter-list/LetterList';
import { useHttp } from '../hooks';
import { ILetter } from '../interfaces/letter.interface';

function App() {
  const [letters, setLetters] = useState<ILetter[]>([]);
  const { request, loading, error } = useHttp();
  useEffect(() => {
    request<ILetter[]>('/api').then((data) => setLetters(data));
  }, []);

  const showList = () => {
    if (error) return <span>{error}</span>;
    if (loading) return <span>Loading</span>;
    return <LetterList letters={letters} />;
  };

  return (
    <>
      <Header />
      <main className={styles['content']}>
        <Sidenav />
        {showList()}
      </main>
    </>
  );
}

export default App;
