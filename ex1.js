function check() {
    let weight = document.getElementById('weight').value;
    if (weight > 20) {
        alert("Overweight baggage! Please remove some weight.");
        document.getElementById('removed').style.display = 'inline';
        document.getElementById('remB').style.display = 'inline';
    } else {
        alert("Baggage weight is acceptable.");
    }
}
function remove() {
    let weight = document.getElementById('weight').value;
    let toRemove = document.getElementById('removed').value;
    if (toRemove >= weight) {
        alert("You cannot remove more weight than the baggage weight.");
    } else {
        let newWeight = weight - toRemove;
        document.getElementById('weight').value = newWeight;
        alert("New baggage weight: " + newWeight + " kg");
        if (newWeight <= 20) {
            alert("Baggage weight is now acceptable.");
            document.getElementById('removed').style.display = 'none';
            document.getElementById('remB').style.display = 'none';
        }
    }
}