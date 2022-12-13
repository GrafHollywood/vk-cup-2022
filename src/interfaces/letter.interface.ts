import { IDocument } from './document.interface';
import { IUser } from './user.interface';

export interface ILetter {
  author: IUser;
  folder?: TFolders;
  text: string;
  title: string;
  date: string;
  important: boolean;
  read: boolean;
  bookmark: boolean;
  doc?: IDocument;
  flag?: TFlags;
  to: IUser[];
}

export type TFolders =
  | 'Важное'
  | 'Отправленные'
  | 'Черновики'
  | 'Архив'
  | 'Спам'
  | 'Корзина';

export type TFlags =
  | 'Рассылки'
  | 'Социальные сети'
  | 'Путешевствия'
  | 'Билеты'
  | 'Финансы'
  | 'Регистрации'
  | 'Заказы'
  | 'Штрафы и налоги';
