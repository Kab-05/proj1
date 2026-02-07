document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");

    let canSpawn = true;

    // NO button behavior
    noBtn.addEventListener("mouseenter", () => {
        noBtn.classList.add("shake");

        if (!canSpawn) return;
        canSpawn = false;

        spawnEvilFaces();

        // Move button randomly
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        setTimeout(() => (canSpawn = true), 300);
    });

    noBtn.addEventListener("mouseleave", () => {
        noBtn.classList.remove("shake");
    });

    // YES button celebration
    yesBtn.addEventListener("click", () => {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            document.body.innerHTML = `
                <h1 style="color:white;font-size:3rem">
                    Best decision ever 💍❤️
                </h1>
            `;
        }, 400);
    });

    // Evil emoji generator
    function spawnEvilFaces() {
        for (let i = 0; i < 6; i++) {
            const face = document.createElement("div");
            face.className = "evil-face";
            face.textContent = "😈";

            face.style.left = Math.random() * window.innerWidth + "px";
            face.style.top = Math.random() * window.innerHeight + "px";

            document.body.appendChild(face);
            setTimeout(() => face.remove(), 1000);
        }
    }
});
