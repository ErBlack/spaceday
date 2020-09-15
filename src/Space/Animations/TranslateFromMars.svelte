<script>
import {
    FROM_MARS,
    PLANETARY_DURATION,
    PLANETARY_SPLINES
} from './animations.js'
</script>
<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    dur="{PLANETARY_DURATION}"
    calcMode="spline"
    keySplines="{PLANETARY_SPLINES}"
    values="{FROM_MARS.translate.join(';')}"
    repeatCount="indefinite"
/>