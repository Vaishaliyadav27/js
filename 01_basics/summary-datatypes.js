// primitive
// 7types boolean symbol undefined null number string bigInt

// reference(non primitive)
// array function object

const id =symbol('123')
cons newid=symbol('123')
console.log(id===newid);
// output false

const score=100
const scorevalue=100.3
cosole.log(typeof score)
// number

const myfunction=function();
console.log(typeof myfunction)
// function

const outsideTemp=false
console.log(typeof outsideTemp)
// object

const heros=["saktiman","cvb","ttyu"]
console.log(typeof heros)
// object


// stack and heap
let myname="vaishali"
let anothername="myname"
anothername="vishu"
cosole.log(myname)
console.log(anothername)
// vaishali
// vishu

let user1={email:"vaishali@23"
upi:23@ert}
user2=user1
user2.email="vaishaliyadav@23"
console.log(user1.email)
console.log(user2.email)
// vaishaliyadav@23
// vaishaliyadav@23
