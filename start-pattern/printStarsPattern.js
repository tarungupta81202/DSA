function allStars() {
    console.log('\n');
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < 4; j++) {
            row += "*";
        }
        console.log(row);
    }
}

allStars()

function incrementalStars() {
    console.log('\n');
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

incrementalStars()

function incrementalStarsSameNumRow() {
    console.log('\n');
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row);
    }
}

incrementalStarsSameNumRow()

function decrementStars() {
    console.log('\n');
    
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= 5-i+1; j++) {
            row += '*';
        }
        console.log(row);
    }
}

decrementStars()

function decrementStarsNum() {
    console.log('\n');
    
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= 5-i+1; j++) {
            row += j;
        }
        console.log(row);
    }
}

decrementStarsNum()

function decrementStarsNumSame() {
    console.log('\n');
    
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= 5-i+1; j++) {
            row += i;
        }
        console.log(row);
    }
}

decrementStarsNumSame()

