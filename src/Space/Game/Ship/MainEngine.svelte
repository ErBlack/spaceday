<script>
import preload from '../../../preloadImage';
import {
    SHIP_WIDTH,
    SHIP_HEIGHT,
    MAIN_ENGINE_WIDTH,
    MAIN_ENGINE_HEIGHT,
    FRICTION_ENGINE_WIDTH,
} from '../constants';

preload('/spaceday/main.gif');

const mainX = FRICTION_ENGINE_WIDTH + (SHIP_WIDTH - MAIN_ENGINE_WIDTH) / 2;
const mainY = SHIP_HEIGHT - 8;

</script>
<image xlink:href="/spaceday/main.gif" width="{MAIN_ENGINE_WIDTH}" height="{MAIN_ENGINE_HEIGHT}" x="{mainX}" y="{mainY}"/>
