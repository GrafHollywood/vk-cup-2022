import React from 'react';
import styles from './FolderButton.module.css';

export interface IFolderButtonProps {
  text: string;
  active?: boolean;
}

export const FolderButton = ({
  active = false,
  ...props
}: IFolderButtonProps) => {
  const buttonClass = `${styles['button']} ${
    active ? styles['button-active'] : styles['button-idle']
  }`;
  return (
    <button className={buttonClass}>
      <span className={styles['label']}>{props.text}</span>
    </button>
  );
};
