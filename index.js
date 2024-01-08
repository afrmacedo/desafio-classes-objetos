class hero {
  constructor (name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }

  attack() {
    if (this.type === "Guerreiro") {
      console.log(`O ${this.name} atacou usando espada`)
    } else if (this.type === "Mago") {
      console.log(`O ${this.name} atacou usando magia`)
    } else if (this.type === "Monge") {
      console.log(`O ${this.name} atacou usando artes marciais`)
    } else if (this.type === "Ninja") {
      console.log(`O ${this.name} atacou usando shuriken`)
    }
  } 
}

let hero1 = new hero("Goku", 30, "Guerreiro")
let hero2 = new hero("Vegeta", 32, "Mago")
let hero3 = new hero("Gohan", 18, "Monge")
let hero4 = new hero("Trunks", 20, "Ninja")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()