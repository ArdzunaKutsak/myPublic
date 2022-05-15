document.addEventListener("DOMContentLoaded", function() {
    let loremText = document.querySelector('.lorem');
    let loremList = loremText.textContent.split('');
    let secondList = loremText.textContent.split('');
    const play = document.querySelector('.play');
    const audio = document.querySelector('.audio');
    const body = document.body;
    loremText.textContent = '';
    const width = window.screen.availWidth - 10

    play.addEventListener('click', function() {
        if (document.getElementsByTagName('audio').length === 0) {
            setInterval(() => {
                let letter = loremList.shift();
                if (letter) loremText.textContent += letter



            }, 1)
            const dropping = setInterval(() => {
                const drop = document.createElement('div');
                drop.classList.add('drop-letter');
                drop.textContent = secondList.shift();
                drop.style.left = Math.random() * width + 'px'
                body.prepend(drop);

            }, 500)
            const audio = document.createElement('audio');
            audio.src = './frontend.mp3';
            audio.autoplay = true;
            body.append(audio)
        }

    })
})