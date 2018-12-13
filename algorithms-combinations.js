var start = [1,7,2,4,8,3];
function getnerateCombinations(set, combinationSize){
	let cursors = [...new Array(combinationSize).keys()];
	var combos = walkCombinations(set, cursors, cursors.length - 1);
	combos.push(set.splice(0, combinationSize));
	console.log(combos);
}
function walkCombinations(set, cursors, currentIndex, combos = []){
	if(cursors[currentIndex] < set.length - 1 && cursors[currentIndex] + 1 != cursors[currentIndex+1] ){
		cursors[currentIndex]++;
		combos.push(cursors.map(cursor => start[cursor]));
		walkCombinations(set, cursors.slice(), currentIndex, combos);
		if(currentIndex > 0){
			walkCombinations(set, cursors, currentIndex - 1, combos);
    	}
		return combos;
    }
	
}
getnerateCombinations(start, 4);
