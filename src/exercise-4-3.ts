interface ListNode {
  value: number;
  rest: ListNode | null;
}
export function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  return {
    value: arr[0],
    rest: arrayToList(arr.slice(1)),
  };
}

console.log("arrayToList: ", arrayToList([1, 2, 3]));

export function listToArray(list: ListNode | null): number[] {
  const temp = [];

  if (!list) return [];

  temp.push(list.value, ...listToArray(list.rest));

  return temp;

  // allternative solution
  // const temp = [];

  // while (list) {
  //   temp.push(list.value);
  //   list = list?.rest;
  // }

  // return temp;
}

console.log(
  "listToArray: ",
  listToArray({
    value: 1,
    rest: { value: 2, rest: { value: 3, rest: null } },
  })
);

export function prepend(value: number, list: ListNode | null): ListNode {
  return { value, rest: list };
}

console.log("prepend: ", prepend(10, prepend(20, null)));

export function nth(list: ListNode | null, index: number): number | undefined {
  if (!list) return undefined;

  if (index === 0) return list.value;

  return nth(list.rest, index - 1);
}

console.log(
  "nth: ",
  nth(
    {
      value: 1,
      rest: { value: 2, rest: { value: 3, rest: null } },
    },
    2
  )
);
