import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';



export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name,
        this.totalCapacityKg = totalCapacityKg
    }
    sumMass(items: Payload[]): number{
        let sum: number = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        console.log(sum);
        return sum;
        
    }
    currentMassKg():number {
        let massAstronaut = this.sumMass(this.astronauts);
        let massCargo = this.sumMass(this.cargoItems);
        return massAstronaut + massCargo;
    }
    canAdd(item: Payload):boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true
        }
        else {
            false
        }
    }
    addCargo(cargo: Cargo):boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true
        }
        else {
            return false
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true
        }
        else{
            return false
        }
    }
}