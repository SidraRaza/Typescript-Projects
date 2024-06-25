import inquirer from "inquirer"

class Player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecreases(){
        let fuel=this.fuel-25
        this.fuel=fuel;
    }
    fuelIncrease(){
        this.fuel=100
    }
}
class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecreases(){
        let fuel=this.fuel-25
        this.fuel=fuel;
    }
}


let player=await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Please Enter Your Name"
    }
])

let opponent=await inquirer.prompt([
    {
        name:"select",
        type:"list",
        choices:["Skeleton","Alien","Zombie"],
        message:"Select Your Opponent"
    }
])

let p1=new Player(player.name)
let o1=new Opponent(opponent.name)

do{
    if(opponent.select=="Skeleton"){
        let ask=await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What Would You Like To Do?",
                choices:["Attack","Drink portion","Run For Your Life.. "]
            }
        ])
        if(ask.opt=="Attack"){
            let num=Math.floor(Math.random()*2)
            if(num>0){
                p1.fuelDecreases()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);

                
            }
            if(num<=0){
                o1.fuelDecreases()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);  
            }
        }
        if(ask.opt=="Drink portion"){
          p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel Is ${p1.fuel} `);
            
          }
        }
    
    }

while(true)
