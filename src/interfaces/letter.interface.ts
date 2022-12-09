import { IDocument } from './document.interface';
import { IUser } from './user.interface';

export interface ILetter {
  author: IUser;
  folder?: TFolders;
  text: string;
  title: string;
  date: Date;
  important: boolean;
  read: boolean;
  bookmark: boolean;
  doc?: IDocument;
  to: IUser[];
}

export type TFolders =
  | 'Важное'
  | 'Отправленные'
  | 'Черновики'
  | 'Архив'
  | 'Спам'
  | 'Корзина';
