import React from 'react';
import { ILetter } from '../../interfaces/letter.interface';
import { LetterItem } from '../letter-item/LetterItem';
import styles from './LetterList.module.css';

export interface ILetterListProps {
  letters: ILetter[];
}

export const LetterList = (props: ILetterListProps) => {
  const renderList = () =>
    props.letters.map((letter, i) => <LetterItem key={i} letter={letter} />);
  return (
    <div className={styles['list']}>
      <div className={styles['list-container']}>{renderList()}</div>
    </div>
  );
};
