function countScores(input) {
 
    let firstMatchResult = input[0];
    let secondMatchResult = input[1]; 
    let thirdMatchResult = input[2];
 
    let winMatches = 0;
    let lostMatches = 0;
    let drawMatches = 0;
 
    let matchScore1 = firstMatchResult.substring(0, 1);
    let matchScore2 = firstMatchResult.substring(2, 3);
 
 
    if (matchScore1 > matchScore2) {
        winMatches++;
    }
    else if (matchScore1 < matchScore2) {
        lostMatches++;
    }
    else {
        drawMatches++;
    }
 
    matchScore1 = secondMatchResult.substring(0, 1);
    matchScore2 = secondMatchResult.substring(2, 3);
 
 
    if (matchScore1 > matchScore2) {
        winMatches++;
    }
    else if (matchScore1 < matchScore2) {
        lostMatches++;
    }
    else {
        drawMatches++;
    }
 
    matchScore1 = thirdMatchResult.substring(0, 1);
    matchScore2 = thirdMatchResult.substring(2, 3);
 
    if (matchScore1 > matchScore2) {
        winMatches++;
    }
    else if (matchScore1 < matchScore2) {
        lostMatches++;
    }
    else {
        drawMatches++;
    }
 
    console.log("Team won " + winMatches + " games.");
    console.log("Team lost " + lostMatches + " games.");
    console.log("Drawn games: " + drawMatches);
}

countScores(["3:1" , "0:2" , " 0:0"])