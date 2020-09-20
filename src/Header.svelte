<script>
import { startGame, GameState } from './Space/Game';
import clicker from './clicker';

	let active = GameState.active;

	GameState.addEventListener('change:active', ({value}) => active = value);

const onClick = clicker(0, 250, startGame);

</script>
<style>
h1 {
    font-family: "Bungee Shade";
    font-size: 4em;
    text-align: center;
}

.rocket {
    background-image: url("/spaceday/rocket.png");
    background-size: contain;
    background-position: center;
    display: inline-block;
    background-repeat: no-repeat;
    width: 1em;
    height: 1.5em;
    line-height: 1.4em;
    white-space: pre;
    user-select: none;
    cursor: pointer;
    user-select: none;
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
<h1 class="{active ? 'active' : 'inactive'}"><span class="rocket" on:click={onClick} on:touchstart={onClick}>⠀</span> <span class="title">Space Day</span></h1>