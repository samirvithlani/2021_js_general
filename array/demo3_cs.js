var rs = [100, 1000, 20, 25, 500, 5, 550, 10000, 150000]

console.log("before", rs)

//rs = rs.sort()

/* function acc(a,b){

    return b -a;
} */
//rs = rs.sort(acc)

/* rs.sort(function acc(a,b){

    return a - b;
}) */


rs.sort((a, b) => a - b)

console.log("sorted", rs)