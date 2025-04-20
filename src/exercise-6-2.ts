export class Group {
  group: any[];

  constructor() {
    this.group = [];
  }

  add(val: any) {
    if (!this.has(val)) this.group.push(val);
  }

  delete(val: any) {
    if (this.has(val)) {
      this.group = this.group.filter((item) => item !== val);
    }
  }

  has(val: any): boolean {
    return this.group.findIndex((item) => item === val) !== -1;
  }

  static from(iterable: Iterable<any>) {
    const group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


