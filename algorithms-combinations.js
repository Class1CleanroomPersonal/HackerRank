var start = [1,7,2,4,8,3];
function generateCombinations(set, combinationSize){
	set = set.slice();
	if (combinationSize < 1 || combinationSize > set.length - 1) {
		return [set];
	}
	let cursors = [...new Array(combinationSize).keys()];
	var combinations = walkCombinations(set, cursors, cursors.length - 1);
	combinations.push(set.splice(0, combinationSize));
	return combinations;
}
function walkCombinations(set, cursors, currentIndex, combinations = []){
	if(cursors[currentIndex] < set.length - 1 && cursors[currentIndex] + 1 != cursors[currentIndex+1] ){
		cursors[currentIndex]++;
		combinations.push(cursors.map(cursor => start[cursor]));
		walkCombinations(set, cursors.slice(), currentIndex, combinations);
		if(currentIndex > 0){
			walkCombinations(set, cursors, currentIndex - 1, combinations);
    	}
		return combinations;
    }
	
}
generateCombinations(start, 4);
/*----------------------------------------------------------------------------*/
function generatePairs(set, pairs = []) {
    set = set.slice();
    const member = set.shift();
    for (let subSetMember of set) {
        pairs.push([member, subSetMember]);
    }

    if (set.length > 1) {
        generatePairs(set, pairs);
    }

    return pairs;
}
