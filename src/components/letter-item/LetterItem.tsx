import React from 'react';
import { ILetter } from '../../interfaces/letter.interface';
import styles from './LetterItem.module.css';

export interface ILetterItemProps {
  letter: ILetter;
}

export const LetterItem = ({ letter }: ILetterItemProps) => {
  const author = `${letter.author.name} ${letter.author.surname}`;
  const renderAvatar = (avatar: string | undefined) => {
    if (avatar) return <img src={avatar} className={styles['avatar']} />;
    return <div className={styles['avatar']}>{letter.author.name[0]}</div>;
  };
  return (
    <div className={styles['letter']}>
      <div className={styles['read']}></div>
      {renderAvatar(letter.author.avatar)}
      <span className={styles['author']}>{author}</span>
      <span className={styles['icon']}></span>
      <span className={styles['title']}>{letter.title}</span>
      <span className={styles['text']}>{letter.text}</span>
    </div>
  );
};
