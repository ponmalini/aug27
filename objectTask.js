//use object.getprototypeof(obj)to find the prototype of an object
let personProto={
    display(){
        return `My name is ${this.name} and ${this.age} years old.`;
    }
}
let person=Object.create(personProto);
person.age=22;
person.name="Prasanna";
console.log(person.display());


//use object.is(obj1,obj2)to check if two objects are the same
let duplicatePerson=person;
duplicatePerson.age=11;

console.log(Object.is(person,duplicatePerson));
if(Object.is(person,duplicatePerson))
{
    console.log("Both Objects are same");
}
    