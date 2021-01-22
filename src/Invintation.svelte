<script>
    import Timer from './Timer.svelte';
	import Links from './Links.svelte';
	import Twitter from './Twitter.svelte';
	import Header from './Header.svelte';
	import { GameState } from './Space/Game';

	import { isAvailable, eggStart } from './EggTimer';

	let active = GameState.active;

	GameState.addEventListener('change:active', ({value}) => active = value);

	const start = new Date('2020-10-17T11:00:00.000Z');
</script>
<style>
	.invintation {
		position: absolute;
		color: #fff;
		left: 0;
		right: 0;
		max-width: 600px;
		height: 100%;
		margin: auto;
		padding: 50px 25px;
		box-sizing: border-box;
		z-index: 1;
		text-shadow: 0 0 1em rgba(0,0,0,.4);
		font-family: 'Yanone Kaffeesatz', sans-serif;
		overflow: auto;
	}

	section {
		font-size: 1.6em;
		line-height: 1.3em;
	}

	.address {
		font-size: .8em;
		line-height: 1em;
		margin: 0;
	}

	a {
		color: #fff;
		border-bottom: dotted #ffffff 1px;
		text-decoration: none;
	}

	.invintation_game_active section {
		animation: fade .3s ease-out .3s;
		animation-fill-mode: forwards;
	}

	.invintation_game_active {
		user-select: none;
		pointer-events: none;
	}

	@keyframes fade {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(10px);
			opacity: 0;
		}
	}
</style>
<div class="invintation invintation_game_{active ? 'active' : 'inactive'}">
	<Header/>
	{#if !isAvailable()}
	<section>
		Приглашаю на день рождения
		{start.getDate()} октября
		<br/>
		приходите в любое время с 14:00 до 21:00
		<br/>
		{#if isAvailable()}
		Начало через <Timer start={start}/>
		{/if}
		{#if !isAvailable()}
		<br/>
		🥚 Пасхалка заработает через <Timer start={eggStart}/>
		{/if}
		<br>
		<br/>
		<a href="https://yandex.ru/maps/-/CCQxr8VeOC">
			Проспект Александровской Фермы 8<br>
			<span class="address">
				7 парадная, 22 этаж, кв. 1268
			</span>
		</a>
		<br/><br/>
		<Links/>
	</section>
	{/if}
</div>