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
  private _brand: string
  private _size: number
  private _resolution:  string
  private _connections: string[]
  private _connectedTo?: string
constructor(n: string, h: number, w: string, x: string[]) {
    console.log(`Creating tv ${n}`);
    this._brand = n;
    this._size = h;
    this._resolution = w;
    this._connections = x;
  }
  turnOn(): void{
    console.log(`${this._brand, this._size, this._resolution, this._connections, this._connectedTo}: bagaça ligada`);
  }
  get connectedTo(): string | undefined {
    return this._connectedTo;
  }
  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const novaTv = new Tv('Toshiba', 50, 'HD', ['HDMI', 'Ethernet', 'Wifi'])
// console.log(novaTv.brand, novaTv.size, novaTv.resolution, novaTv.connections);
novaTv.turnOn();
novaTv.connectedTo = 'Wi-Fi';
console.log('Connected to: ', novaTv.connectedTo);