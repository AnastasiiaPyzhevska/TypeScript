namespace Utility {
    export namespace Fees {
        export function calculateFee(daysLate: number) {
            return daysLate * 0.25;
        }
    }
    export function maxBookAllowed( age: number): number {
        return age<12?3:10;
    }

    function privateFunc(): void {
        console.dir('This is a private function');
    }
}