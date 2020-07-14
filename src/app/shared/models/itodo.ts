import { ITodoElement } from './';

export interface ITodo {
    new: ITodoElement[];
    inProgress: ITodoElement[];
    done: ITodoElement[];
}
