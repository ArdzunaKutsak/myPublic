document.addEventListener("DOMContentLoaded", function() {
    let generationButton = document.querySelector('.generation')

    function startGame() {

        let randomNumberList = [];
        let cardDesk = document.querySelector('.card-desk');
        let row = document.querySelector('.row').value
        let column = document.querySelector('.column').value
        let restartButton = document.querySelector('.restart-btn')
        let amountPair = row * column / 2;
        let amountCard = row * column;
        let value1;
        let value2;
        restartButton.style.display = 'none';

        for (i = 0; i < amountCard;) {
            let value = Math.floor(Math.random() * amountPair + 1);
            if (!randomNumberList.find((i) => i === value) || randomNumberList.reduce(function(sum, current) {
                    if (current === value) {
                        sum += 1;
                    }
                    return sum
                }, 0) < 2) {
                randomNumberList.push(value);
                ++i;
            }
        }

        if (parseInt(row) * parseInt(column) % 2 !== 0)
            alert("Количество эелементов должно быть чётным");
        else {
            document.querySelectorAll('.card-row').forEach((e) => {
                cardDesk.removeChild(e)
            })
            for (j = 0; j < parseInt(row); j++) {
                let cardRow = document.createElement('div');
                cardRow.classList.add('card-row');
                cardDesk.append(cardRow);
                for (i = 0; i < parseInt(column); i++) {
                    let newCard = document.createElement('li');
                    newCard.classList.add('card');
                    cardRow.append(newCard);
                    newCard.value = randomNumberList.pop()
                    newCard.addEventListener('click', function() {
                        newCard.style.transform = 'rotateY(0deg)'
                        newCard.classList.add('open')
                        newCard.textContent = newCard.value
                        setTimeout(() => { newCard.textContent = newCard.value }, 200)
                        if (value2) {
                            value1 = newCard.value;
                            value2 = null;
                        } else if (!value1)
                            value1 = newCard.value;
                        else if (value1) {
                            value2 = newCard.value;
                            if (value2 && value1 !== value2) {
                                document.querySelectorAll('.open').forEach(function(e) {
                                    value1 = value2 = null
                                    e.classList.remove('open')
                                    setTimeout(() => {
                                        e.style.transform = 'rotateY(180deg)'
                                        setTimeout(() => { e.textContent = null; }, 100)
                                    }, 800)
                                })
                            } else if (value2 && value1 === value2) {

                                document.querySelectorAll('.open').forEach(function(e) {
                                    if (e.value === value1) {
                                        e.classList.add('done')
                                        e.classList.remove('open')
                                        let countDone = 0;
                                        document.querySelectorAll('.done').forEach(() => {
                                            ++countDone
                                        })
                                        if (countDone === amountCard) {

                                            restartButton.style.display = 'block';
                                            restartButton.addEventListener('click', startGame)
                                        } else countDone = 0;
                                    }
                                })
                                value1 = null
                                value2 = undefined
                            }
                        }
                    })
                }
            }
        }
    }
    generationButton.addEventListener('click', (b) => {
        b.preventDefault();
        startGame();
    })
});