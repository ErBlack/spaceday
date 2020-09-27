<script>
import { SYSTEM_RADIUS_PX, sun } from '../dimensions.js';
import random from '../../random';
const { centerX, size } = sun;
export let duration;
</script>
<animateTransform attributeName="transform" type="rotate" from="0 {centerX + size} 0" to="360 {centerX + size} 0" dur="{duration}s" repeatDur="indefinite" begin="{-random(0, 360)}"/>