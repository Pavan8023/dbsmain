function findSum() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let sum = document.getElementById("sum").value;
    let total = 0;
    if (sum > 1000) {
        alert("Your limit has exceeded.")
        exit()
    }
    for (let i = 1; i < sum; i++) {
        if (i % a === 0 || i % b === 0) {
            total += i;
        }
    }
    document.getElementById("result").innerText = "Sum of multiples of " + a + " & " + b + " is: " + total;
}