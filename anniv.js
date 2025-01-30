
const anniversaryDate = new Date(2023, 0, 23); 

function updateCountdown() {
    const now = new Date();
    const timeDifference = now - anniversaryDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik
    `;
}


function showMessage() {
    document.getElementById("message").style.display = "block";
    document.getElementById("photo").style.animation = "none"; 
}

// Update countdown setiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown(); 