function toastTest() {
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');

    btn1.addEventListener('click', () => {
        Toastify({
            text: "Testeando Toast",
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #1500ff, #320052)'
            }    
        }).showToast();
    });

    btn2.addEventListener('click', () => {
        Toastify({
            text: "Click me too",
            duration: 4000,
            gravity: 'top',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #ff00bb,  #c70000)',
                color: '#000000'
            },
            onClick: () => {
                Toastify({
                    gravity: 'bottom',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit optio voluptas, fugiat dignissimos quasi eaque officia numquam labore saepe maiores doloremque autem dolor hic alias recusandae odit pariatur facilis eveniet.',
                    duration: 2000,
                    position: 'left'
                }).showToast()
            }    
        }).showToast();
    });

    btn3.addEventListener('click', () => {
        Toastify({
            text: "Testeando Toast",
            duration: 10000,
            gravity: 'top',
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #02002d,  #070083)',
                color: '#ffffff'
            }    
        }).showToast();
    });
}

toastTest();