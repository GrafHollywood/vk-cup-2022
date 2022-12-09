import React from 'react';
import { ILetter } from '../../interfaces/letter.interface';
import styles from './LetterList.module.css';

export interface ILetterListProps {
  letters: ILetter[];
}

export const LetterList = (props: ILetterListProps) => {
  const renderList = () =>
    props.letters.map((letter, i) => (
      <div key={i}>
        {letter.author.name} {letter.author.surname} {letter.folder}
        {letter.title}
      </div>
    ));
  return <div className={styles['list']}>{renderList()}</div>;
};
