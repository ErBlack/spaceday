<script>
export let center;
export let duration;
</script>
<animateTransform attributeName="transform" type="rotate" from="0 {center} {center}" to="360 {center} {center}" dur="{duration}s" repeatDur="indefinite"/>