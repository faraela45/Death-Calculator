document.addEventListener("DOMContentLoaded", function() {
    let backgroundAudio = document.getElementById("background-audio");
    let screamerAudio = document.getElementById("screamer-audio");
    let screamer = document.getElementById("screamer");
    let form = document.getElementById("death-form");
    let scaryText = document.getElementById("scary-text");

    // Автостарт страшной музыки
    setTimeout(() => {
        backgroundAudio.play();
    }, 1000);

    // Периодическое изменение текста (жуткий эффект)
    setInterval(() => {
        let messages = [
            "Ты точно готов?",
            "Не нажимай...",
            "Они уже рядом...",
            "Смерть неизбежна...",
            "Последний шанс уйти..."
        ];
        let randomIndex = Math.floor(Math.random() * messages.length);
        scaryText.innerText = messages[randomIndex];
    }, 5000);

    // При отправке формы показываем скример
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        setTimeout(() => {
            screamer.style.display = "block";
            screamerAudio.play();

            setTimeout(() => {
                screamer.style.display = "none";
            }, 2000);
        }, 3000);
    });
});