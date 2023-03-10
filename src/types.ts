import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

// export type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };


export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;


export type BookRequiredFields = Required<Book>;
export type UpdateBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;

export type CreateCustomerFunctionType = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequireProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type BookRequiredProps = RequireProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, Tprops extends keyof T> = {
    [prop in keyof T as Exclude<prop, Tprops>]: T[prop];
};

type BookRequiresPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType =RemoveProps<Book, BookRequiredProps>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type UnArr<T> = T extends Array<infer R> ? R : never;

type pr = UnArr<Unpromisify<ReturnType< typeof getBooksByCategoryPromise>>>;