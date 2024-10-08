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

        window.onload = startTyping;