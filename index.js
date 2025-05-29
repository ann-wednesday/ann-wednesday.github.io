// Set the target date
const targetDate = new Date('2025-04-14Z10:13:00');

function updateTime() {
    const now = new Date();
    const timeElapsed = now - targetDate;

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    document.getElementById('time').innerText = 
        `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
}

const interval = setInterval(updateTime, 1000);
updateTime();