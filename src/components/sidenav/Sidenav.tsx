import React from 'react';
import styles from './Sidenav.module.css';
import { Button, FolderButton } from '../../shared';

export const Sidenav = () => {
  return (
    <aside className={styles['sidenav']}>
      <Button text="Написать письмо" />
      <FolderButton text="Входящие" active />
      <FolderButton text="Важное" />
      <FolderButton text="Отправленные" />
      <FolderButton text="Черновики" />
      <FolderButton text="Архив" />
      <FolderButton text="Спам" />
      <FolderButton text="Корзина" />
    </aside>
  );
};
