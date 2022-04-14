const uno = "Ejercicio 1"
const dos = "Ejercicio 2"
const tres = "Ejercicio 3"
const cuatro = "Ejercicio 4"
const espacio = " \n  "


console.log(uno)
class Vec {
    constructor (x,y){
       this.x = x;
       this.y = y;
    }

    get length(){return this.calcRoot()}
    plus(a){ return `Vec{x:${this.x + a.x}, y:${this.y + a.y }}`};
    minus(a){ return `Vec{x:${this.x - a.x}, y:${this.y - a.y }}`};
    calcRoot(){return Math.sqrt(this.x * this.x + this.y * this.y) }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
console.log(espacio);
console.log(dos);

console.log(espacio);
console.log(dos);

class Group{
    constructor(){
        this.members = []
    }

    add(a){if(!this.has(a)){this.members.push(a)}}
    has(a){return this.members.includes(a)}
    delete(a){this.members = this.members.filter(b => b !== a );}

    static from(collection){
        let array = new Group;
        for(let item of collection){array.add(item)}
        return array
    }
}

let group = Group.from([10, 20]);
   console.log(group.has(10))
   // → true
  console.log(group.has(30));
  //  // → false
  group.add(10);
  group.add(10);
 group.delete(10);
 console.log(group.has(10))
 

   console.log(espacio);
   console.log(tres);

   class Group2 {
     constructor(){
         this.members = [];
     }
     add(a){ if(!this.has(a))
         {return this.members.push(a)} }
     has(a){ return this.members.includes(a);
     }      // borre el delete ya que no era necesario  
     static from(arr){ 
         let array = new Group2;
         for (let item of arr) {
         array.add(item); //se utiliza add (metodo interno) por que es un objeto
          }
         return array
         }
     [Symbol.iterator](){return new GroupIterator(this)}   
 }
 class GroupIterator {
     constructor(x){
         this.groupx = x;    // se debe meter el valor dentro de una propiedad del this
         this.position = 0;               
     }
     next(){
         if( this.position >= this.groupx.members.length){
             return {done: true}}
         else {let result = {value:this.groupx.members[this.position],
             done:false}
         this.position++ ;
         return result;
         }  
     }
 }
 for (let value of Group2.from(["a", "b", "c"])) {
     console.log(value);
   }


   console.log(espacio);
   console.log(cuatro);



 let map = {one: true, two: true, hasOwnProperty: true};

 console.log(Object.prototype.hasOwnProperty.call(map, "one"));

 //let borrow = {hasOwnProperty(a){return a == "one"}};

 //map = Object.create(borrow);
 
 
 // Fix this call
 //console.log(map.hasOwnProperty("one"));
 // → true

