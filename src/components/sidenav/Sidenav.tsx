import React from 'react';
import styles from './Sidenav.module.css';
import { Button, FolderButton } from '../../shared';

export const Sidenav = () => {
  return (
    <aside className={styles['sidenav']}>
      <Button text="Написать письмо" />
      <FolderButton text="Входящие" active icon="inbox" />
      <FolderButton text="Важное" icon="folder" />
      <FolderButton text="Отправленные" icon="sent" />
      <FolderButton text="Черновики" icon="draft" />
      <FolderButton text="Архив" icon="archive" />
      <FolderButton text="Спам" icon="spam" />
      <FolderButton text="Корзина" icon="trash" />
    </aside>
  );
};
