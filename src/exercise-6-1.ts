export class Vec {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  plus(vec: Vec): Vec {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec: Vec): Vec {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
