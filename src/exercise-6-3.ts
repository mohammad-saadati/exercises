export class Group {
  private group: any[];

  constructor() {
    this.group = [];
  }

  add(val: any) {
    if (!this.has(val)) {
      this.group.push(val);
    }
  }

  delete(val: any) {
    this.group = this.group.filter((item) => item !== val);
  }

  has(val: any): boolean {
    return this.group.includes(val);
  }

  static from(iterable: Iterable<any>): Group {
    const group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }

  // ✅ Make the Group class iterable by implementing [Symbol.iterator]
  [Symbol.iterator]() {
    let index = 0;
    const members = this.group;

    return {
      next(): IteratorResult<any> {
        if (index < members.length) {
          return { value: members[index++], done: false };
        } else {
          return { done: true } as IteratorResult<any>;
        }
      }
    };
  }
}

// ✅ Testing the class
const group = Group.from(["a", "b", "c"]);

// Iterate using for...of loop
for (let value of group) {
  console.log(value);
}

console.log(Symbol.iterator)
console.log(Symbol.iterator)
console.log(Symbol.iterator)
// → a
// → b
// → c
