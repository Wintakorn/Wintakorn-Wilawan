document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.Contauner_Item');
    const elements1 = document.querySelectorAll('.content');
    const elements2 = document.querySelectorAll('.Container');
    // const elements3 = document.querySelectorAll('.about-image');

    function checkPosition() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Checking if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });

        elements1.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Checking if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
        elements2.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Checking if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }
    //     elements3.forEach(element => {
    //         const position = element.getBoundingClientRect();
            
    //         // Checking if element is in viewport
    //         if (position.top < window.innerHeight && position.bottom >= 0) {
    //             element.classList.add('visible');
    //         }
    //     });
    // }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    
    // Initial check
    checkPosition();
});
