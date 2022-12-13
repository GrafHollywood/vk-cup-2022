import React from 'react';
import styles from './FolderButton.module.css';

export interface IFolderButtonProps {
  text: string;
  icon: 'inbox' | 'folder' | 'sent' | 'draft' | 'archive' | 'spam' | 'trash';
  active?: boolean;
}

export const FolderButton = ({
  active = false,
  ...props
}: IFolderButtonProps) => {
  const buttonClass = `${styles['button']} ${
    active ? styles['button-active'] : styles['button-idle']
  }`;
  const iconSrс = `icons/icon-${props.icon}.svg`;
  return (
    <button className={buttonClass}>
      <img src={iconSrс} />
      <span className={styles['label']}>{props.text}</span>
    </button>
  );
};
