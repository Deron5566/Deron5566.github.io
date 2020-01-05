function startTime() {
    var d = new Date();
    document.getElementById("Clock").innerHTML = d.toLocaleDateString();
    document.getElementById("Clock").innerHTML += d.toLocaleTimeString();
    setTimeout(startTime, 100);
}
