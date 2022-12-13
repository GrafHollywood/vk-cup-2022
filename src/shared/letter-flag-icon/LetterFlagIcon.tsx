import React from 'react';
import { TFlags } from '../../interfaces/letter.interface';

export interface ILetterFlagIconProps {
  flag: TFlags;
}

export const LetterFlagIcon = ({ flag }: ILetterFlagIconProps) => {
  const iconSrc = {
    'Рассылки': 'mailings',
    'Социальные сети': 'users',
    'Путешевствия': 'plane',
    'Билеты': 'ticket',
    'Финансы': 'money',
    'Регистрации': 'key',
    'Заказы': 'shopping',
    'Штрафы и налоги': 'government',
  };
  const src = `icons/flags/${iconSrc[flag]}.svg`;
  return <img src={src} />;
};
