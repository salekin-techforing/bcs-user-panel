//Problem 1
function seerToMon(seer) {
    if (seer < 0 || typeof seer != 'number')
        return 'Invalid input!';
    let mon = seer / 40;
    return mon;
}
console.log('Mon: ' + seerToMon(400));

//Problem 2
function totalSales(shirts, shoes, pants) {
    if (shirts < 0 || shoes < 0 || pants < 0)
        return 'Please do not provide negative value!';

    if (typeof shirts != 'number' || typeof shoes != 'number' || typeof pants != 'number')
        return 'Only real numbers are acceptable!';

    const shirtPrice = 100,
        shoePrice = 200,
        pantPrice = 500;
    let sales = shirtPrice * shirts + shoePrice * shoes + pantPrice * pants;
    return sales;
}
console.log('Total Sales: ' + totalSales(2, 5, 3));

//Problem 3
function deliveryCost(shirts) {

    if (shirts < 0 || typeof shirts != 'number')
        return 'Invalid input!';

    let totalCost = 0;

    if (shirts <= 100)
        totalCost = shirts * 100;
    else if (shirts > 100 && shirts <= 200)
        totalCost = (shirts - 100) * 80 + 100 * 100;
    else if (shirts > 200)
        totalCost = (shirts - 200) * 50 + 100 * 80 + 100 * 100;

    return totalCost;
}
console.log('Total delivery cost: ' + deliveryCost(300));


//Problem 4
function perfectFriend(friends) {
    if (typeof friends != 'object')
        return 'Please provide a list of names';

    for (var i = 0; i < friends.length; i++) {
        if (typeof friends[i] != "string") {
            return 'Invalid input!';
        }
    }
    for (const friendName of friends) {
        if (friendName.length == 5)
            return friendName;
    }
    return 'Not Found!';
}
let arr = ['abir', 'robin', 'pranto', 'jubair'];
console.log('Perfect Friend Name: ' + perfectFriend(arr));