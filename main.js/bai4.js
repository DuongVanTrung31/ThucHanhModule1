class Animal {
    name
    weight
    constructor(name ,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return `Name: ${this.getName()} and Weight: ${this.getWeight()}`
    }
}
let objAnimal1 = new Animal()
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal();
objAnimal2.setName('Mouse');
objAnimal2.getWeight(1);