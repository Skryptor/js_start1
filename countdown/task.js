const p = document.getElementById("main");
        let timerId;

        function formatTime(seconds) {
            return new Date(seconds * 1000).toISOString().substr(11, 8);
        }

        function startTimer() {
            if (timerId) clearInterval(timerId);
            let totalSeconds = 5;

            p.textContent = formatTime(totalSeconds);

            timerId = setInterval(() => {
                totalSeconds--;

                if (totalSeconds <= 0) {
                    clearInterval(timerId);
                    p.textContent = formatTime(0);
                    alert("Вы победили в конкурсе!");
                    document.getElementById("downloadLink").click();

                } else {
                    p.textContent = formatTime(totalSeconds);
                }
            }, 1000);
        }

        startTimer();
        document.getElementById("refresh").addEventListener("click", startTimer);