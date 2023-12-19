interface MyInterface {
    doSomething(): void;
    doAnotherThing(): void;
    calculateSum(a: number, b: number): number;
}
class MyClass implements MyInterface {
    doSomething() {
        console.log('Doing something...');
    }
    doAnotherThing() {
        console.log('Doing Another Thing...');
    }
    calculateSum(a: number, b: number): number {
        return a + b;
    }
}
let myObj = new MyClass();
myObj.doSomething();
myObj.doAnotherThing();
console.log(myObj.calculateSum(5, 10));
