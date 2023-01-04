/* eslint-disable no-underscore-dangle */
// import *as Interfaces from './interfaces';

import { timeout } from '../decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.dir('Creating a new ReferenceItem..');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    #id: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(
        id: number,
        public title: string,
        protected year: number) {
        console.dir('Creating a new ReferenceItem..');
        this.#id = id;
    }

    // @timeout(2000)
    printItem(): void {
        console.dir(`${this.title} was published in ${this.year}`);
        console.dir(ReferenceItem.department);
        console.dir(Object.getPrototypeOf(this).constructor.department);
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export {ReferenceItem};
