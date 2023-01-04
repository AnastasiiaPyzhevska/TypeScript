import { ReferenceItem, UL, RefBook, Shelf}  from './classes';
import { Category } from './enum';
import { purge, printRefBook, getBooksByCategoryPromise, getBooksByCategory, getObjectProperty , calcTotalPages, createCustomer, createCustomerId, getAllBooks, getBookTitlesByCategory, logBookTitles, logFirstAvailable, printBook, setDefaultConfig, logCategorySearch, getTitles, logSearchResults } from './functions';
import { Book, Librarian, TOptions, Logger, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdateBook } from './types';
import {Library} from './classes/library';
import { logMethod } from './decorators';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// console.dir(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// getBookTitlesByCategory(Category.TypeScript);
// console.dir(getBookAuthorByIndex(0));
// calcTotalPages();

// Task 03.01

// const myID: string = createCustomerId('Ann', 10);
// console.dir(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerId;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// console.dir(idGenerator('Boris', 20));


// Task 03.02


// createCustomer('Ann');
// createCustomer('Ann, 20');
// createCustomer('Ann, 20, Dnipro');

// console.dir(getBookTitlesByCategory());
// console.dir(getBookTitlesByCategory(Category.CSS));

// logFirstAvailable();



// console.dir(getBookById(1));



// console.dir(checkoutBooks('noName customer', ...[1,3,4]));



// console.dir(getTitles(true));
// console.dir(getTitles(false));
// console.dir(getTitles(1, true));
// console.dir(getTitles('Lea Verou'));



// console.dir(bookTitleTransform('Learn Type Script'));
// console.dir(bookTitleTransform(123));



// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged: (reason: string) => console.dir(`Damaged: ${reason}`)
//     markDamaged (reason: string) {
//         console.dir(`Damaged: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// // Task 04.02
// const logDamage: Logger = (reason: string) => console.dir(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: '1234@example.com',
//     numBooksPublished: 2
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: '5678@example.com',
//     department: 'Classic',
//     assistCustomer: null
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.dir(getProperty(myBook, 'title'));
// console.dir(getProperty(myBook, 'markDamaged'));

// Task 05.01
// const ref = new ReferenceItem( 1,'Learn TS', 2022); // не працює з абстракт
// console.dir(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.dir(ref.publisher);
// console.dir(ref.getId());

// Task 05.02, Task 05.03
// const refBook: RefBook = new RefBook(1,'Learn TS', 2022, 2);
// refBook.printItem();
// console.dir(refBook);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TS');

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'annexample@com.ua',
//     id: 1,
//     title: 'uknown'
// };



// const options: TOptions = { duration:20};
// const options2 = setDefaultConfig(options);
// console.dir(options);
// console.dir(options2);
// console.dir(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1,'Learn TS', 2022, 2);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = false;

// if(flag) {
//     import ('./classes')
//         .then(o=> {
//             const reader = new o.Reader;
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.dir(reader);
//         })
//         .catch(err => console.dir(err))
//         .finally(() => console.dir('Complete'));
// }

// if(flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader;
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.dir(reader);
// };


// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     name: 'Ann',
//     address: 'street1',
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result1 = purge(inventory);
// console.dir(result1);
// const result2 = purge([1,2,3]);
// console.dir(result2);


// Task 07.02 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf= new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.dir(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     {title: 'Programming Language Monthly', publisher: 'Code Mags'},
//     {title: 'Literaly Fiction Quarterly', publisher: 'College Press'},
//     {title: 'Five Points', publisher: 'GSU'},
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.dir(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.dir(magazineShelf.find('Five Points'));
// console.dir(getObjectProperty(inventory[1], 'title'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdateBook = {
//     id:1,
//     pages: 100
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian['a'] = 1;
// // UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// console.dir(favoriteLibrarian);
// favoriteLibrarian['printLibrarian']();


// Task 08.03
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// Task 08.04
// const refBook: RefBook = new RefBook(1,'Learn TS', 2022, 2);
// refBook.printItem();

// Task 08.05
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TS');

// Task 08.06
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistCustomer('Boris', 'Learn TS');
// console.log(favoriteLibrarian);

// Task 08.07
// const refBook: RefBook = new RefBook(1,'Learn TS', 2022, 2);
// refBook.copies = 10;
// console.log(refBook.copies);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);

// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');