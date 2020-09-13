<script>
	import Space from './Space/Space.svelte';
    import Timer from './Timer.svelte';
	import Links from './Links.svelte';
	import Twitter from './Twitter.svelte';
	
	const start = new Date('2020-10-17T11:00:00.000Z');
</script>
<style>
	.ribbon { display: none; }
</style>
<Space/>
<div class="ribbon">
	Приглашаю на день рождения
	{start.toLocaleString().slice(0, -3)}
	Приходите через
	<Timer start={start}/>
	<br/>
	Проспект Александровской Фермы 8
	<div class="address">
		7 парадная, 22 этаж, кв. 1268
	</div>
	<br/>
	<Links/>
	<br/>
	<footer>
		<Twitter/>
	</footer>
</div>