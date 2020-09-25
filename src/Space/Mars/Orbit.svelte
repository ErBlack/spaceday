<script>
import { atmosphereRadius } from './Mars.js'

export let duration;
</script>
<animateTransform attributeName="transform" type="rotate" from="0 {atmosphereRadius} {atmosphereRadius}" to="-360 {atmosphereRadius} {atmosphereRadius}" dur="{duration}s" repeatDur="indefinite"/>