import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <img src="logo/logo.png" alt="mail.ru logo" className={styles['logo']} />
      <img
        src="logo/logo-small.png"
        alt="mail.ru logo"
        className={styles['logo-small']}
      />
    </header>
  );
};
