const thankYouText = "thank you for contacting adveirne";
        const mainText = "we are under maintenance";
        const brochureText = "till then check our brochure, or talk to our project manager.";
        
        function typeWriter(text, elementId, delay, callback) {
            let i = 0;
            const element = document.getElementById(elementId);
            element.textContent = ""; 
            const interval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    callback();
                }
            }, delay);
        }

        function showButtons() {
            document.querySelectorAll('.button').forEach(button => {
                button.classList.add('show'); 
            });
        }

        function startTyping() {
            document.getElementById('content').style.opacity = 1; 
            typeWriter(thankYouText, 'thankYouText', 75, () => {
                typeWriter(mainText, 'mainText', 75, () => {
                    typeWriter(brochureText, 'brochureText', 75, () => {
                        showButtons(); 
                    });
                });
            });
        }
        window.onload = function() {
            setTimeout(startTyping, 3700); 
        };

        setTimeout(function() {
            document.querySelector('.svg1').classList.add('final');
            document.querySelector('.svg2').classList.add('final');
            document.querySelector('.svg3').classList.add('final');
        }, 3200); 

        setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('slide-up');}, 3600);

        setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.display = 'none'; }, 6100);