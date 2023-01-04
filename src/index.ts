// console.dir('Hello');
// let a: number=20;
// if (a<50) {
//     a+=10;
// }

// let user: [number, string] = [1, 'Nastya'];

// enum Size { Small =1, Medium, Large}
// let mySize: Size = Size.Medium;
// console.dir(mySize);

// type Employee = {
//     readonly id: number;
//     name: string;
//     retire: (date: Date) => void;
// };

// let employee: Employee = {
//     id: 1,
//     name: '',
//     retire: (date: Date) => {
//         console.dir(date);
//     }
// };
// employee.name = 'Nastya';

// function kgToLbs(weight: number | string): number {
//     if (typeof weight === 'number')
//         return weight*2;
//     else
//         return parseInt(weight)*2;

// }
// kgToLbs(10);
// kgToLbs('10kg');

// interface Rect {
//     readonly id: string;
//     color?: string;
//     size: {
//         width: number;
//         height: number;
//     };
// }

// let rect1: Rect = {
//     id: '123',
//     color: 'black',
//     size: {
//         width: 100,
//         height: 100
//     }
// };

// let rect2: Rect = {
//     id: '1234',
//     size: {
//         width: 200,
//         height: 200
//     }
// };
// rect2.color = 'red';

// // function times (arr: number[], times?: number):  number[] {
// //     let newArr: number[] = [];

// //     if (times === undefined) {
// //         return [...arr, ...arr];
// //     }

// //     while (times > 0) {
// //         newArr = [...newArr, ...arr];
// //         times--;
// //     }

// //     return newArr;
// // }

// // console.dir(times([1,2,3],));
// // console.dir(times([1,2,3],2));
// // console.dir(times([1,2,3],4));
// // console.dir(times([1,2,3],1));
// // console.dir(times([1,2,3],4));


// // function logger (data: string [] , serviceInfo = {serviceName: 'global', serviceId: 1}): Object {
// //     let obj = {};
// //     data.forEach(function (value, i) {
// //         obj[serviceInfo.serviceId + '-' + i] = '[' + serviceInfo.serviceName + ']' + '' + value;
// //     });
// //     return obj;
// // }

// // console.dir(logger(['Wrong email', 'Wrong password', 'Success login'], {serviceName: 'auth_service', serviceId: 3}));
// // console.dir(logger(['Fatal error', 'Data corrupted']));

// // function everyNth (arr: number [], nth?: number): number[] {
// //     return nth ? arr.filter(item => item % nth === 0) : arr;
// // }

// // console.dir(everyNth([1, 2, 3, 4, 5, 6]));
// // console.dir(everyNth([1, 2, 3, 4, 5, 6],3));
// // console.dir(everyNth([1, 2, 3, 4, 5, 6],2));
// // console.dir(everyNth([1, 2, 3, 4, 5, 6],5));


// function getDaysToNewYear(currentData: Date | string ): number{
//     const newYearDay: Date = new Date(2023,0,1);
//     const oneDayinMillisec: number = 24*60*60*1000;
//     if (typeof(currentData) === 'string'){
//         currentData = new Date(currentData.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
//         // const currentStrDay = new Date(currentData);
//         return Math.floor((newYearDay.getTime() - currentData.getTime()) / oneDayinMillisec);
//     } else {
//         return Math.floor((newYearDay.getTime() - currentData.getTime()) / oneDayinMillisec);
//     }
// }
// // console.dir(getDaysToNewYear(new Date(2022, 12, 31))); // 1
// // console.dir(getDaysToNewYear(new Date(2022, 5, 15))); // 200

// console.dir(getDaysToNewYear(new Date('12-31-2022'))); // 1
// console.dir(getDaysToNewYear(new Date(2022, 5, 15))); // 200
// console.dir(getDaysToNewYear(new Date(2013, 2, 8))); // 3586

// // console.dir(getDaysToNewYear('22.04.2020')); // 994

// console.dir(getDaysToNewYear('31.12.2022')); // 1
// console.dir(getDaysToNewYear('22.10.2022')); // 71
// console.dir(getDaysToNewYear('03.05.2021')); // 608


// function lastToFirst (str: string): string {
//     let middleChar = str.substring(1, str.length -1);
//     return str.length <=1 ? str : str.charAt(str.length-1)+middleChar + str.charAt(0);
// }

// // console.dir(lastToFirst('loop')); // pool;
// // console.dir(lastToFirst('ab')); // ba;
// // console.dir(lastToFirst('a')); // a;


// type User = {
//     name: string;
//     login: string;
//     surname?: string;
//     type: string;
//     contractorCompanyName?: string;
//     address?: { officeId: number; placeId: number };
// };

// type Users = User[];

// type GroupedUsers = {
//     employees: Users;
//     contractors: Users;
// };


// const users: Users = [
//     {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: { officeId: 123, placeId: 1222 }, },
//     {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft', },
//     {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: { officeId: 222, placeId: 333 }, },
//     {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple', },
// ];

// function groupOrgUsers (users: Users): GroupedUsers {
//     return {
//         employees: users.filter(user=>user.type.toLowerCase() === 'employee'),
//         contractors: users.filter(user=>user.type.toLowerCase() === 'contractor')
//     };
// }
// groupOrgUsers(users);

// // console.dir(groupOrgUsers(users));


enum VehicleStatus {
    STOP = 'STOP',
    WORK = 'WORK',
}

interface FuelConsumptionInterface {
    start: number;
    work: number;
}

interface BaseVehicleInterface {
    readonly modelName: string;
    readonly vendorName: string;
    readonly fuel: number;

    startEngine(): void;

    stopEngine(): void;

    getEngineStatus(): VehicleStatus;

    // Your implementation here
}

interface CarInterface {

    drive();

    park();

    // Your implementation here
}

class BaseVehicle implements BaseVehicleInterface{
    modelName: string;
    vendorName: string;
    tankCapacity: number;
    fuelConsumption: FuelConsumptionInterface;
    fuel: number;
    status: VehicleStatus;
    interval: any;

    constructor(
        modelName: string,
        vendorName: string,
        tankCapacity: number,
        fuelConsumption: FuelConsumptionInterface,) {
        this.modelName = modelName;
        this.vendorName = vendorName;
        this.tankCapacity = tankCapacity;
        this.fuelConsumption = fuelConsumption;
        this.fuel=0;
        this.status = VehicleStatus.STOP;
    }

    startEngine(): void {
        if (this.fuel === 0 || this.fuel<this.fuelConsumption.start){
            throw new Error ('Not enough fuel');
        } else {
            this.status = VehicleStatus.WORK;
            this.fuel = this.fuel - this.fuelConsumption.start;
            this.interval = setInterval(() => {
                if ( this.fuel <= this.fuelConsumption.work){
                    throw new Error ('Ooops..not enough fuel to move');
                }
                this.fuel = this.fuel-this.fuelConsumption.work;
            }, 1000);
        };
    }

    refuel(): void {
        if (this.fuel === 0) {
            this.fuel=this.tankCapacity;
        }
    }

    stopEngine(): void {
        this.status = VehicleStatus.STOP;
        clearInterval(this.interval);
    }

    getEngineStatus(): VehicleStatus {
        console.dir(this.status);
        return this.status;
    }
}


class Car extends BaseVehicle implements CarInterface {
    constructor (
        modelName: string,
        vendorName: string,
        tankCapacity: number,
        fuelConsumption: FuelConsumptionInterface,) {
        super(modelName, vendorName, tankCapacity, fuelConsumption);
    }

    drive(){
        this.startEngine();
    }

    park() {
        this.stopEngine();
    }
}

// const instance = new Car('Lanos', 'Daewoo', 10, {start: 1, work: 1});
// // instance.drive();
// instance.refuel();
// instance.getEngineStatus();
// instance.drive();
// instance.getEngineStatus();
// setTimeout(()=> {
//     instance.park();
//     instance.getEngineStatus();
// }, 10000);


/*
* Task 2: Counter singleton
*/

class Counter {
    count: number = 0;
    private static instance: Counter;

    static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }

    static destroy(): void {
        this.instance.count = 0;
    }
    increase(): void {
        this.count += 1;

    }
    decrease(): void {
        this.count -= 1;

    }
    getState(): number {
        return this.count;
    }
}

// const count1 = Counter.instance.getInstance();
// count1.destroy();
// count1.getState();
// count1.increase();
// count1.increase();
// count1.increase();
// count1.decrease();
// count1.decrease();
// count1.getState();
const instance1 = Counter.getInstance();
const instance2 = Counter.getInstance();
Counter.destroy();
instance1.increase();
instance1.increase();
console.log(instance1.getState()); // 2;

// console.log(instance2.getState()); // 1;
// instance2.increase();
// console.log(instance1.getState()); // 2;
// console.log(instance2.getState()); // 2;
// Counter.destroy();
// Counter.getInstance().getState(); // 0

// console.log(instance1.getState()); // 2;
// console.log(instance2.getState()); // 2;



