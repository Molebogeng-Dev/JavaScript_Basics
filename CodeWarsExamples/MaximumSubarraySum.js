let ls = [2, 1, 3, -4, 1, 2, -1, 5, 4]

let cal = (list) => { 

    let rule = list.map((num) => num>=0 ? true:false) 

    if(rule.includes(false)){
        let count = 0
        let sum = (num) => num >= 0 ? count+=num : count+=0
        list.forEach(sum)
        console.log(count)
    }
    else{
        let count = 0
        let sum = (num) => count+=num
        list.forEach(sum)
        console.log(count)
    }

    // let maxNum = Math.max(...ls)
    // let range = maxNum + ls.indexOf(maxNum)
    // let newls = ls.slice(ls.indexOf(maxNum), range)
    // let count = 0
    // let sum = (ls) => count+=ls
    // newls.forEach(sum)


    // console.log(`${count} (Sum of [${newls}])`)
}

cal(ls)


function maxSequence(arr) {
    let currentSum = 0;
    let maxSum = 0;

    for (let num of arr) {
        currentSum += num;

        if (currentSum < 0) {
            currentSum = 0;
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Output: 6 (Sum of [4, -1, 2, 1])