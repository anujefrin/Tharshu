function nextPage(num) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById("page" + num).classList.add('active');
}

/* Heavy sparkles */
for (let i = 0; i < 150; i++) {
    let sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(sparkle);
}

/* Stars from bottom to top */
for (let i = 0; i < 70; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDelay = Math.random() * 6 + "s";
    document.body.appendChild(star);
}
