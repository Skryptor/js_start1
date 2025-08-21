const img = document.getElementById("img");
            const clicer = document.getElementById("clicer");
            const speed = document.getElementById("clickSpeed");

            let isEnlarged  = true;
            let clicerCount = 0;
            let lastClick = 0;

            img.onclick = () => {
                const now = Date.now();

                if(lastClick > 0){
                    const timeDiff = (now - lastClick) / 1000;
                    const clickPerSecond = 1 / timeDiff;

                    speed.textContent = `Скорость кликов ${clickPerSecond}`
                };
                
                lastClick = now
                clicerCount++
                clicer.textContent = `Всего кликов ${clicerCount}`;
                if (isEnlarged) {
                    img.width *= 1.3;
                    img.height *= 1.3;
                }
                else{
                    img.width /= 1.3;
                    img.height /= 1.3;
                };
                isEnlarged = !isEnlarged;
            
            };