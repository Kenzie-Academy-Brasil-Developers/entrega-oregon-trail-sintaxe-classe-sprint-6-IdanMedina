class Traveler {
    constructor(name){
   this.nome = name;
   this.food = 1;
   this.isHealthy = true;
}
hunt(){ 
    this.food = this.food + 2
}
eat(){
    if(this.food > 0){
      this.food = this.food - 1
}
    if(this.food <= 0){
      this.isHealthy = false}
}
}

class Wagon {
    constructor(capacity, passengers){
        this.capacity = capacity;
        this.passengers = [];
    }
    getAvailableSeatCount(){
        let seatAvailable = this.capacity - this.passengers.length;
        return seatAvailable
    }
    join(traveler){
        if(this.getAvailableSeatCount() > 0){
        this.passengers.push(traveler)
    }
}
    shouldQuarantine(){
        for(let i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].isHealthy == false){return true}    
        }
        return false
  /*       this.passengers.forEach((element) => {
         if(element.isHealthy === false){return true}
            return false
     }
        ) */
    }
    totalFood(){
        let total = 0;
        this.passengers.forEach((traveler) => {
           total += traveler.food
            }
            )
        return total
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);


