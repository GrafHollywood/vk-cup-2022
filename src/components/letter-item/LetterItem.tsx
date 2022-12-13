import React from 'react';
import { ILetter } from '../../interfaces/letter.interface';
import { LetterFlagIcon } from '../../shared/letter-flag-icon/LetterFlagIcon';
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

  const renderIcon = () => {
    if (letter.important) return <img src="icons/icon-error.svg" />;
    if (letter.bookmark) return <img src="icons/icon-bookmark.svg" />;
    return null;
  };

  const titleClassName = letter.read
    ? styles['title']
    : `${styles['title']} ${styles['non-read']}`;

  const authorClassName = letter.read
    ? styles['author']
    : `${styles['author']} ${styles['non-read']}`;

  const getDate = () => {
    const date = new Date(letter.date);
    // const now = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className={styles['letter']}>
      <div className={styles['read']}>
        {letter.read ? null : <div className={styles['read-mark']}></div>}
      </div>
      {renderAvatar(letter.author.avatar)}
      <span className={authorClassName}>{author}</span>
      <span className={styles['icon']}>{renderIcon()}</span>
      <span className={titleClassName}>{letter.title}</span>
      <span className={styles['text']}>{letter.text}</span>
      {letter.flag ? (
        <span className={styles['flag']}>
          <LetterFlagIcon flag={letter.flag} />
        </span>
      ) : null}
      {letter.doc ? (
        <span className={styles['attach']}>
          <img src="icons/icon-attach.svg" />
        </span>
      ) : null}
      <span className={styles['date']}>{getDate()}</span>
    </div>
  );
};
