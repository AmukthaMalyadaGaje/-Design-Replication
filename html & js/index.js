/*let username
document.getElementById("id2").onclick=function(){

username=document.getElementById("id1").value
console.log(username)
document.getElementById("myLabel").innerHTML=username;
}
let age=0
if(age>=18)
console.log("you are an adult!!")
else if (age<=0)
console.log("you are not born yet!!")
else
console.log("you ar a child!!")
let on=false;
if(on)
console.log("you are online")
if(!on)
console.log("you are not online")
document.getElementById("id2").onclick==function(){
if(document.getElementById("mycheckbox").checked==true){
console.log("you are graduated!!")
}
else{
console.log("you are under gaduation")
}}

console.log("hai")*/
/*let username

    document.getElementById('submit').onclick = function () {
        username = document.getElementById('name').value


        const g = document.getElementById('graduated')
        const v = document.getElementById('visa')
        const m = document.getElementById('master')
        const p = document.getElementById('paypal')
        if (g.checked) {
            console.log(username + ' ,you are graduated')
        }
        if (v.checked) {
            console.log('you are using visa card')
        }
        else if (m.checked) {
            console.log('you are using Master card')
        }
        else if (p.checked) {
            console.log('you are using PayPal card')
        }

        else {
            console.log('you need to select payment type')
        }

    }

let arr=[2,8,6,5];
let tot=arr.slice(1,arr.length).reduce(sum,0);

arr.forEach(print);

function sum(total,element){
    return total+element;
}
//console.log(tot);
function print(element){
    console.log(element)
}*/
// )let points = [40, 100, 2, 5, 25, 10];
// points.sort((a, b)=>b - a);
// console.log(points)
// let store=new Map([
//     ['t-shirt',20],['jeans',40]
// ])
// store.set('jacket',30)
// store.forEach((key,val) => {
//     console.log(`${key} is of worth ${val}`)
// });
// console.log()
// store.delete('jacket')
// store.forEach((key,val) => {
//     console.log(`${key} is of worth ${val}`)
// });
// console.log(store.get('jacket')
// console.log(store.has('jacket'))
// const car={
//     model:'ferrari',colour:'black',
//     drive:function(){
//         console.log("you are driving this car")
//     }
// }
// car.model='lamborgini '
// console.log(car.model)
// console.log(car.drive())
// const arr=[2,6,4,6];
// arr.foreach()
// function print(...arr)
// class Animal{
//     alive=true;
//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`)
//     }
// }
// class rabbit extends Animal{

//     name='rabbit';
//     run(){
//         console.log(`this ${this.name} is running`)
//     }
// }
// class fish extends Animal{

//     name='fish';
//     swim(){
//         console.log(`this ${this.name} is swimming`)
//     }
// }
// const a =new Animal();
// const f =new fish();
// const r =new rabbit();
// console.log(a.alive);
// r.eat()
// r.sleep()
// f.sleep()
// h.swim() --->throws an error as h is not any object declared
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
// }
// class rabbit extends Animal{
//     constructor(name,age,runspeed){
//         // this.name=name;
//         // this.age=age;
//         super(name,age);
//         this.runspeed=runspeed
//     }
// }
// class fish extends Animal{
//     constructor(name,age,swimspeed){
//         // this.name=name;
//         // this.age=age;
//         super(name,age);
//         this.swimspeed=swimspeed
//     }
// }
// //must call super() constructor in derived class before accessing the 'this


// const r =new rabbit('rabbit',1,40)
// const f =new rabbit('fish',2,80)
// // const r =new rabbit('rabbit',1,40)
// console.log(r.name)
// console.log(f.name)



//---->PASSING OBJECTS AS PARAMETERS


// class car{
//     constructor(model,year,color){
//         this.model=model
//         this.year=year;
//         this.color=color
//     }
// }
// const car1=new car("mustang",2023,'black');
// const car2=new car("ferrari",2023,'grayBlack');
// const car3=new car("Lamborgini",2023,'MatteBlack');

// // displayInfo(car1)
// // displayInfo(car2)
// // changecolor(car3,'DarkBlack')
// // displayInfo(car3)
// // function displayInfo(c){
// //     console.log(c.model)
// //     console.log(c.year)
// //     console.log(c.color)
// // }
// // function changecolor(car,color){
// //     car.color=color
// // }
// const cars=[car1,car2,car3];
// cars.forEach(car=>console.log(car.model))


// try{
//     console.lag()
// }

// catch(err){
//     console.log(err)
// }
// try{
//     let x=window.prompt("enetr a numbner");
//     x=Number(x);
//     if(isNaN(x))throw "that wasn't a number!!"
//     if(x=='')throw "that wasn't a number!!"
//     console.log(`${x}is a number`)
// }

// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("this always executes")
// }

// setTimeout(firstfunc,500);
// setTimeout(secfunc,6000);
// setTimeout(thirdfunc,5000);
// // firstfunc =>window.alert("Namastey")
// function firstfunc(){
//     alert("Namastey")
// }

// function secfunc(){
// alert("how are you Mr/Ms?")
// }
// // secfunc => window.alert("how are you Mr/Ms?")
// function thirdfunc(){
//  alert("See you Soon!!")
// }
// let date=new Date();
// //date =date.toLocaleString;
// console.log(date)


// const prom = new Promise((res,rej)=>{
//     let fileLoaded = false;
//     if(fileLoaded){
//         res('file loaded');

//     }
//     else{
//         rej('file not found')
//     }
// })
// prom.then(value=>console.log(value)).catch(err=>console.log(err))

// console.log(document.title)
// document.title="Amuktha Malyada"
// console.log(document.location)
// // document.location='http://www.naukri.com'
// document.body.style.backgroundColor='skyblue'
// // console.log(document.title)
// // let obj = document.getElementsByName('card')
// // obj.forEach(crd=>{
// //     if(crd.checked){
// //         console.log(crd.value)
// //     }
// // })
// // obj.style.backgroundColor='lightgreen'

// let veg=document.getElementsByTagName("li")

// veg[1].style.backgroundColor='orange'

// let element=document.querySelector('li')
// element.style.backgroundColor='orange'
// let element = document.querySelector('#vegetables')
// let parent=element.parentElement;
// parent.style.backgroundColor='orange'
// let head=document.getElementById('top')
// head.style.backgroundColor='skyblue'
// let ele = document.querySelector('#vegetables')
// let p=ele.nextElementSibling;
// p.style.backgroundColor='skyblue'
// let e = document.querySelector('#fruits')
// let pa=e.children[2];
// pa.style.backgroundColor='skyblue'
// let z=document.querySelector('#pastries')
// let child=Array.from(z.children)
// child.forEach(child=>child.style.backgroundColor='white')
// let element=document.querySelector("#fruits")
// const ne=document.createElement('li')
// ne.textContent='Kiwi'
// element.append(ne)
// // const e=document.querySelector('#fruits')
// // const d=e.children[3]
// // d.style.backgroundColor='orange'
// let e = document.querySelector('#vegetables')
// let pa=e.children[2];
// pa.style.backgroundColor='skyblue'
//  element.insertBefore(ne,element.getElementsByTagName('li')[2])
// element.insertBefore(ne,element.getElementsByTagName('li')[1])
// const title=document.getElementById('top')
// title.style.backgroundColor='#254949'
// title.style.color='rgb(10,200,350)'
// title.style.fontFamily='consolas'
// title.style.textAlign='center'
// title.style.border='3px solid'
// title.style.display='block'
// const ele=document.getElementById('mydiv')
// ele.onclick=dosomething;
// ele.onload=dosomething;
// ele.onchange=dosomething;
// ele.onmouseover=dosomething;
// ele.onmousedown=dosomething;
