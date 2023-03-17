class Person {
    name: string;
    height: number;
    weight: number;
  
    constructor(n: string, h: number, w: number) {
      console.log(`Creating person ${n}`);
      this.name = n;
      this.height = h;
      this.weight = w;
    }
  
    sleep() {
      console.log(`${this.name}: zzzzzzz`);
    }
  }
  
  const p1 = new Person('Maria', 171, 58);
  const p2 = new Person('João', 175, 66);
  console.log(p1.name, p1.height, p1.weight);
  console.log(p2.name, p2.height, p2.weight);
  p1.sleep();
  p2.sleep();
  
  /*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 66
  Maria: zzzzzzz
  João: zzzzzzz
  */

class Tv {
brand: string
size: number
resolution:  string
connections: string[]
connectedTo?: string
constructor(n: string, h: number, w: string, x: string[]) {
    console.log(`Creating tv ${n}`);
    this.brand = n;
    this.size = h;
    this.resolution = w;
    this.connections = x;
  }
  turnOn(): void{
    console.log(`${this.brand, this.size, this.resolution, this.connections, this.connectedTo}: bagaça ligada`);
  }
}

const novaTv = new Tv('Toshiba', 50, 'HD', ['HDMI', 'Ethernet', 'Wifi'])
console.log(novaTv.brand, novaTv.size, novaTv.resolution, novaTv.connections);
novaTv.turnOn();