import React from 'react';
import styles from './Button.module.css';

export interface IButtonProps {
  text: string;
}

export const Button = (props: IButtonProps) => {
  return (
    <button className={styles['button']}>
      <span className={styles['label']}>{props.text}</span>
    </button>
  );
};
