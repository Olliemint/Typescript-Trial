let id: number = 5;
 
console.log('ID:', id);

let company: string = 'MintTech'

let isPublished: boolean = true

let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true,'hello']


let person: [number,string,boolean] = [1,'hello', true]

let employee: [number,string][]

employee =[
    [1,'oliver'],
    [2, 'maiyo'],
    [3,'kipkoech'],
    [4, 'koech']
    

]

console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee[3]);

// union
let pid: string | number

pid: "22"

// enum
  enum compass{
      east = 1,
      west,
      north,
      south,
  }

  console.log(compass);

  enum compass2{
    east = 'E',
    west = 'W',
    north = 'N',
    south = 'S',
}

console.log(compass2);

  
// objects
  type User = {
      id:number
      name: string
  }
  const user: User = {
      id:1,
      name:'oliver'

  }

//   type assertion
 let cid: any = 1
// let customerId = <number> cid

 let customerId = cid as number
 
// functions
function add(x:number,y:number): number{
    return x + y
}

console.log(add(5,20));

function log(greetings: string | number): void{
    alert(greetings);
    
}

// prompt ("hello oliver, Hows tyscript taking you? ")

// interface function
interface addFunc{
    (x: number,y:number):number
}

   
    const sum: addFunc = (x: number, y:number): number => x + y
    const sub: addFunc = (x: number, y:number): number => x - y


console.log(sub(10,5));

// classes
 class Person{
        id: number
        name: string

        constructor (id:number, name:string){
            this.id = id
            this.name = name
        }
        register() {
            return `${this.name} with id ${this.id} is now registred`
        }
 }

 const Oliver = new Person(2256,'Ollie')
 const Lilly = new Person(2334, 'SKYLER')

//  console.log(Oliver.register());
//  console.log(Lilly.register());


// subclass
 class Employee extends Person{
     position: string

     constructor(id:number, name:string, position: string) {
         super(id,name)
         this.position = position
     }
 }

 const Emp = new Employee(3555, 'Josco jj', 'Developer')

 console.log(Emp.register());
 
// generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(['oliver','mida','trevv','nosha'])


 
 
stringArray.push('dunk')
numArray.push(6)