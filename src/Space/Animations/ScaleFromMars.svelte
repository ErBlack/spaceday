<script>
import {
    FROM_MARS,
    MARS_SCALE_FACTOR
} from './animations.js'
</script>
<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="scale"
    dur="110s"
    calcMode="spline"
    keySplines="0 1 1 1;0 0 1 1;"
    values="{MARS_SCALE_FACTOR * 1.688};10;1"
    repeatCount="1"
/>