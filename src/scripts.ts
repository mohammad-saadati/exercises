// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

export interface Script {
  name: string;
  ranges: [number, number][];
  direction: "ltr" | "rtl" | "ttb";
  year: number;
  living: boolean;
  link: string;
}

export const SCRIPTS: Script[] = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  },
  // ... all other scripts from the original file ...
  {
    name: "Zanabazar Square",
    ranges: [[72192, 72264]],
    direction: "ltr",
    year: 1700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mongolian_writing_systems#Horizontal_square_script"
  }
];

/**
 * Returns the script object for a given character code, or null if not found
 */
export function characterScript(code: number): Script | null {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

/**
 * Counts items in an array by a grouping function
 */
export function countBy<T>(items: any[], groupName: (item: any) => T): {name: T, count: number}[] {
  const counts: {[key: string]: {name: T, count: number}} = {};
  
  for (const item of items) {
    const name = groupName(item);
    const stringKey = String(name);
    if (!counts[stringKey]) counts[stringKey] = {name, count: 0};
    counts[stringKey].count++;
  }
  
  return Object.values(counts);
}