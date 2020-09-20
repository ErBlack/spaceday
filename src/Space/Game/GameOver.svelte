<script>
    import { GameState, startGame, finishGame } from './';
    import pluralize from '../../pluralize.js';

    let { landStatus } = GameState;


    GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);

    const getStatusMessage = ({
        wrongPlace,
        wrongSpeed,
        wrongHorizontalSpeed,
        landSpeed
    }) => {
        const messages = [];
        const crater = Math.ceil(landSpeed * 83.3);

        if (wrongSpeed) {
            let prepend = 'Диаметр';
            let append = '';
            let speed = '';

            if (crater > 800) {
                append = ', его видно из космоса';
                speed = ' на огромной скорости';
            } else if (crater > 200) {
                append = ', его видно на спутниковых снимках';
                speed = ' на высокой скорости';
            } else {
                prepend = 'Рассчетный диаметр';
                speed = ' на скорости, превышающей конструктивно допустимую';
            }

            messages.push(`<p>Корабль врезался в поверхность планеты${speed}. ${prepend} образовавшегося кратера ${pluralize(crater, ['метр', 'метра', 'метров'])}${append}.</p>`);
        }

        if (wrongHorizontalSpeed && crater < 800) {
            messages.push('<p>Боковые перегрузки при приземлении превысили конструктивные ограничения.</p>');
        }

        if (wrongPlace && crater < 800) {
            messages.push('<p>Грунт в выбранной точке приземления не выдержал массы корабля.</p>');
        }

        return messages.join('');
    }
</script>
<style>
.gameOver {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 21em;
    margin: auto;
    z-index: 12;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    color: #fff;
    padding: 1em;
    border: solid 1px #fff;
    text-shadow: 0 0 1em rgba(0,0,0,.7);
    background-color: rgba(0,0,0,.1);
    opacity: 0;
    animation: in .3s ease-out forwards 1s;
}

button {
    background-color: transparent;
    padding: .3em 1.2em;
    border: solid 1px #fff;
    border-radius: 3px;
    color: inherit;
    margin: 0 .25em;
    transition: background-color;
}

button:hover {
    background-color: rgba(255,255,255,.1);
}

button:active {
    background-color: rgba(255,255,255,.2);
}

.buttonset {
    text-align: center;
}

h2 {
    margin-top: 0;
}

@keyframes in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
{#if landStatus && !landStatus.success}
<div class="gameOver">
    <h2>Катастрофа</h2>
    {@html getStatusMessage(landStatus)}
    <p>Ещё раз?</p>
    <div class="buttonset">
        <button type="button" on:click={startGame}>Да</button>
        <button type="button" on:click={finishGame}>Нет</button>
    </div>
</div>
{/if}