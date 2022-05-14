document.addEventListener("DOMContentLoaded", function() {
    const gameField = document.querySelector('.game')
    const body = document.body;
    body.append(gameField);
    const defButton = document.querySelector('.defupgrade');
    const speedButton = document.querySelector('.speedupgrade');

    // let currentCity;
    // let startCity;
    // body.addEventListener('click', (event) => {
    //     const drag = Drag();

    //     const area = event.path[1].children[0].children[0];
    //     if (event.path[1].classList.contains('player-city') && currentCity !== event.path[1]) {
    //         currentCity = startCity;
    //         document.querySelectorAll('.area').forEach((each) => each.style.display = 'none')
    //         area.style.display = 'block'
    //         startCity = event.path[1];
    //         setDragStartPosition(drag, startCity, event.path[0])
    //     }
    //     console.log(startCity, event.path[1])
    //     if (startCity !== event.path[1] && event.path[1].classList.contains('city') && isPath(startCity, event.path[1])) {
    //         setDragEndPosition(drag, event.path[1])
    //     } else {
    //         currentCity = null;
    //         document.querySelectorAll('.area').forEach((each) => each.style.display = 'none')

    //         // }
    //         // event.path[1]
    //     }
    // })

    function Drag() {
        const drag = document.createElement('div')
        drag.classList.add('drag')
        return drag
    }

    function isPath(startCity, endCity) {
        let isPath = false;
        document.querySelectorAll('.line').forEach(
            (line) => {
                if (line.getAttribute('x1') == centerElem(startCity).x && line.getAttribute('y1') == centerElem(startCity).y && line.getAttribute('x2') == centerElem(endCity).x && line.getAttribute('y2') == centerElem(endCity).y ||
                    line.getAttribute('x2') == centerElem(startCity).x && line.getAttribute('y2') == centerElem(startCity).y && line.getAttribute('x1') == centerElem(endCity).x && line.getAttribute('y1') == centerElem(endCity).y) {
                    isPath = true
                }
            }
        )
        return isPath
    }

    function Timeout(elem, timer) {
        let timeout = 1000;
        if (elem.classList.value.split(' ').includes('empty-city')) timeout = 2000;
        elem.children[1].textContent = parseInt(elem.children[1].textContent) + 1;
        timer(elem);
        return timeout;

    }

    function setArmyCounter() {
        document.querySelectorAll(`.city`).forEach(elem => {
            dragArmy(elem);
            let timeout = 1000;
            let timer = setTimeout(function Timeout() {
                if (elem.classList.value.split(' ').includes('empty-city')) timeout = 2000;
                else if (elem.classList.value.split(' ').includes('player-city')) timeout = 1000;
                elem.children[1].textContent = parseInt(elem.children[1].textContent) + 1;
                timer = setTimeout(Timeout, timeout);
            }, timeout)
        })
    }
    setArmyCounter()

    function setDragStartPosition(drag, startCity, startPoint) {
        document.querySelectorAll('.area').forEach((e) => {
            e.style.display = 'none';
        })
        startCity.querySelector('.area').style.display = 'block';
        // let drag = Drag();
        let x = startCity.getBoundingClientRect().x;
        let y = startCity.getBoundingClientRect().y;
        drag.textContent = startCity.textContent;
        startPoint.textContent = 0;
        drag.style.position = 'absolute';
        drag.style.left = (x + 30) + 'px';
        drag.style.top = (y + 30) + 'px';
        body.append(drag)
            // return drag
    }

    function setDragEndPosition(drag, endCity) {
        x = endCity.getBoundingClientRect().x;
        y = endCity.getBoundingClientRect().y;
        drag.classList.add('drag-move');
        drag.style.left = (x + 30) + 'px';
        drag.style.top = (y + 30) + 'px';
        const dieTimer = setTimeout(() => {
            if (endCity.classList.value.split(' ').includes('player-city')) {
                Move(drag, endCity)
            } else Attack(drag, endCity, 'player');
            drag.remove()
        }, 1500)
    }

    var click = 0

    function displayUpgrades(click) {

    }

    function dragArmy(from) {

        from.addEventListener("mouseup", function startFunc(event) {
            let startCity = event.path[1];
            let drag = Drag()

            if (startCity.classList.value.split(' ').includes('player-city')) {

                console.log()
                if (click === 0) {
                    click = 1;
                    setDragStartPosition(drag, startCity, event.path[0]);
                    body.addEventListener('mousedown', function(e) {
                        console.log('here')
                        let endCity = e.path[1];
                        if (startCity !== endCity && endCity.classList.value.split(' ').includes('city') && isPath(startCity, endCity)) {
                            console.log(isPath(startCity, endCity))
                            setDragEndPosition(drag, endCity)
                        } else {
                            startCity.children[1].textContent = parseInt(startCity.children[1].textContent) + parseInt(drag.textContent)
                            drag.remove()
                        }

                    }, { once: true })

                    return
                }
                click = 0;
            }

        })
    }



    function Attack(army, def, who) {
        def.children[1].textContent -= army.textContent;
        if (def.children[1].textContent < 0) {
            def.children[1].textContent = Math.abs(parseInt(def.children[1].textContent));
            def.classList.remove('empty-city');
            def.classList.remove('enemy-city');
            if (who === 'player') {
                def.classList.add('player-city');
                return
            }
            def.classList.remove('player-city');
            def.classList.add('enemy-city');


        }
    }

    function Move(army, def) {
        def.children[1].textContent = parseInt(def.children[1].textContent) + parseInt(army.textContent)
    }





    function elemPosition(elem) {
        let pos = {
            top: window.pageYOffset + elem.getBoundingClientRect().top,
            left: window.pageXOffset + elem.getBoundingClientRect().left,
            right: window.pageXOffset + elem.getBoundingClientRect().right,
            bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
        };
        return pos;
    }

    function centerElem(elem) {
        let width = elem.offsetWidth;
        let height = elem.offsetHeight;
        let centerX = width / 2 + elemPosition(elem).left;
        let centerY = height / 2 + elemPosition(elem).top;
        return {
            y: centerY,
            x: centerX
        };

    }
    const playerCity = document.querySelector('.player-city');
    const city01 = document.querySelector('.city-01');
    const city02 = document.querySelector('.city-02');
    const city03 = document.querySelector('.city-03');
    const city04 = document.querySelector('.city-04');
    const city05 = document.querySelector('.city-05');

    const line00 = document.querySelector('.line-00');
    const line01 = document.querySelector('.line-01');
    const line02 = document.querySelector('.line-02');
    const line03 = document.querySelector('.line-03');
    const line04 = document.querySelector('.line-04');
    const line05 = document.querySelector('.line-05');
    const line06 = document.querySelector('.line-06');

    drawLine(line00, playerCity, city01);
    drawLine(line01, playerCity, city02);
    drawLine(line02, city01, city03);
    drawLine(line03, city02, city03);
    drawLine(line04, city03, city04);
    drawLine(line05, city04, city05);
    drawLine(line06, city03, city05);

    function drawLine(line, startCity, endCity) {
        line.setAttribute('x1', centerElem(startCity).x);
        line.setAttribute('y1', centerElem(startCity).y);
        line.setAttribute('x2', centerElem(endCity).x);
        line.setAttribute('y2', centerElem(endCity).y);
    }



    /* ARTIFICAL INTELLECT */

    function Think() {
        const enemyCitys = document.querySelectorAll('.enemy-city');
        enemyCitys.forEach((enemyCity) => makeDecide(getAim(enemyCity), enemyCity))
    }

    function getAim(enemyCity) {
        let aims = []
        document.querySelectorAll('.city').forEach(
            (elem) => {
                if (isPath(enemyCity, elem)) aims.push(elem)
            }
        )
        return aims
    }
    // console.log(aims)

    function makeDecide(aims, enemyCity) {
        // console.log(aims)
        aims.forEach(
            (elem) => {
                // console.log(parseInt(enemyCity.children[1].textContent))
                if (parseInt(elem.children[1].textContent) < parseInt(enemyCity.children[1].textContent)) {
                    console.log('ATTACK!')
                    let drag = Drag()
                    let x = enemyCity.getBoundingClientRect().x;
                    let y = enemyCity.getBoundingClientRect().y;
                    drag.textContent = enemyCity.textContent;
                    enemyCity.children[1].textContent = 0;
                    drag.style.position = 'absolute';
                    drag.style.left = (x + 30) + 'px';
                    drag.style.top = (y + 30) + 'px';
                    body.append(drag)
                    x = elem.getBoundingClientRect().x;
                    y = elem.getBoundingClientRect().y;
                    drag.classList.add('drag-move');
                    drag.style.left = (x + 30) + 'px';
                    drag.style.top = (y + 30) + 'px';
                    const enemyAttack = setTimeout(() => {
                        if (!elem.classList.value.split(' ').includes('enemy-city')) {
                            Attack(drag, elem, 'enemy')
                        } else Move(drag, elem)
                        drag.remove()
                    }, 1500)
                    return
                }
            }
        )
    }

    const AIDecide = setInterval(Think, 6000)




    // function createPath(from, fromIndex, to, toIndex) {

    //     let child = whatElems(from, fromIndex, to, toIndex);
    //     let childFrom = child.from;
    //     let childTo = child.to;
    //     render(childFrom, childTo);

    // }

    // function whatElems(from, fromIndex, to, toIndex) {
    //     let child = {
    //         from: from.children[fromIndex],
    //         to: to.children[toIndex]
    //     }
    //     return child;
    // }

    // function createDiv() {
    //     let div = document.createElement('div');
    //     div.classList.add('harmony');
    //     document.body.append(div);
    //     return div;
    // }

    // function createPathAndPush(from, fromIndex, to, toIndex) {
    //     createPath(from, fromIndex, to, toIndex);
    //     paths.push([from, fromIndex, to, toIndex]);
    // }
})