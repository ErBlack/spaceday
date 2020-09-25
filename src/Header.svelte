<script>
import { startGame, GameState } from './Space/Game';
import clicker from './clicker';
import { initSound } from './ost';
import { isAvailable } from './EggTimer';

	let active = GameState.active;

	GameState.addEventListener('change:active', ({value}) => active = value);

const onClick = clicker(6, 250, () => {
  if (isAvailable() || location.search === '?debug') {
    startGame();
    initSound();
  }
});

</script>
<style>
h1 {
    font-family: "Bungee Shade";
    font-size: 4em;
    text-align: center;
}

.rocket {
    border: none;
    background-color: transparent;
    background-image: url("/spaceday/rocket.png");
    background-size: contain;
    background-position: center;
    display: inline-block;
    background-repeat: no-repeat;
    margin: 0;
    width: 1em;
    height: 1.5em;
    line-height: 1em;
    white-space: pre;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
}

.title {
  display: inline-block;
}

.active .rocket {
  animation: launch 3s ease-out;
  animation-fill-mode: forwards;
}
.active .title {
  animation: fade .3s ease-out .3s;
  animation-fill-mode: forwards;
}

@media all and (max-width: 550px) {
  h1 {
    font-size: 10vw;
  }
}

@keyframes launch {
  0% {
    transform: translateY(0) scale(1);
  }
  10% {
    transform: translateY(5px) scale(1.2);
  }
  99% {
    transform: translateY(-1000px) scale(1.2);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
<h1 class="{active ? 'active' : 'inactive'}"><button class="rocket" on:click={onClick} on:touchstart={onClick}>⠀</button> <span class="title">Space Day</span></h1>