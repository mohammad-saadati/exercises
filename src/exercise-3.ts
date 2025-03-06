function chessBoard (num: number) {
	let str = "";

	for(let i = 0; i < num; i++) {
		for(let j = 0; j <= num; j++) {
			if ( j === num) 
				str += "\n"
			else if(j % 2 === 0)
				str += " "
			else 
				str += "#"
		}
	}
	return str;
}

console.log(chessBoard(8))

export { chessBoard };