const folder = document.getElementById('folder');
        const letter = document.getElementById('letter');
        const folderContainer = document.getElementById('folderContainer');
        const secretReveal = document.getElementById('secretReveal');
        let isOpen = false;
        let isBig = false;
        let clickCount = 0;
        
        folder.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (!isOpen) {
                folder.classList.add('open');
                isOpen = true;
                clickCount++;
                
                
                createSparkles();
                
            } else if (isOpen && !isBig) {
                folder.classList.add('big');
                isBig = true;
                clickCount++;
                

                if (clickCount >= 2) {
                    setTimeout(() => {
                        secretReveal.classList.add('active');
                    }, 800);
                }
                
            } else {

                folder.classList.remove('big');
                folder.classList.remove('open');
                isOpen = false;
                isBig = false;
            }
        });
        
        function createSparkles() {
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.setProperty('--tx', `${Math.random() * 80 - 40}px`);
                sparkle.style.setProperty('--ty', `${Math.random() * 80 - 40}px`);
                sparkle.style.animationDelay = `${Math.random() * 2}s`;
                folderContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 3000);
            }
        }
        
        function closeSecret() {
            secretReveal.classList.remove('active');
        }
        
        // Add hover effect
        folder.addEventListener('mouseenter', () => {
            folder.style.transform = 'translateY(-5px)';
        });
        
        folder.addEventListener('mouseleave', () => {
            if (!isOpen) {
                folder.style.transform = 'translateY(0)';
            }
        });
        
        // Initial animation
        setTimeout(() => {
            folder.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                folder.style.transform = 'translateY(0)';
            }, 300);
        }, 1000);
        
        // Add continuous subtle animation
        setInterval(() => {
            if (!isOpen) {
                folder.style.transform = 'translateY(-2px)';
                setTimeout(() => {
                    if (!isOpen) folder.style.transform = 'translateY(0)';
                }, 500);
            }
        }, 3000);