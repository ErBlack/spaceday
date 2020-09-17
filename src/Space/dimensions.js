export const SYSTEM_RADIUS_PX = 2500;

const DIMENSIONS = {
    sun: {
        distance: 0,
        size: SYSTEM_RADIUS_PX / 5
    },
    mercury: {
        distance: 57909000 * 1.5,
        realSize: 4879.4
    },
    venus: {
        distance: 108160000 * 1.5,
        realSize: 12103.6
    },
    earth: {
        distance: 149600000 * 1.5,
        realSize: 12756.3
    },
    mars: {
        distance: 227990000 * 1.5,
        realSize: 6792.4
    },
    jupiter: {
        distance: 778360000 * 1.2,
        realSize: 142984
    },
    saturn: {
        distance: 1443500000,
        realSize: 120536
    },
    uranus: {
        distance: 1872400000,
        realSize: 51118
    },
    neptune: {
        distance: 4498400000 / 2,
        realSize: 49528
    },
};

const SYSTEM_BORDER_PX = SYSTEM_RADIUS_PX - (SYSTEM_RADIUS_PX / 8);
const BIGGEST_PLANET_PX = SYSTEM_RADIUS_PX / 20;
const FAREST_PLANET_PX = SYSTEM_BORDER_PX - (SYSTEM_RADIUS_PX / 50);
const PLANET_SIZE_COEFFICIENT = BIGGEST_PLANET_PX / DIMENSIONS.jupiter.realSize;
const PLANET_DISTANCE_COEFFICIENT = FAREST_PLANET_PX / DIMENSIONS.neptune.distance

const {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    sun
} = Object.keys(DIMENSIONS).reduce((acc, key) => {
    const {
        distance,
        realSize
    } = DIMENSIONS[key];
    const size = realSize ? Math.round(realSize * PLANET_SIZE_COEFFICIENT) : DIMENSIONS[key].size;
    const r = size / 2;
    const offset = Math.round(distance * PLANET_DISTANCE_COEFFICIENT);
    const x = SYSTEM_BORDER_PX - Math.round(distance * PLANET_DISTANCE_COEFFICIENT);
    const y = -r;

    acc[key] = {
        size,
        x,
        y,
        r,
        offset,
        centerX: x - r
    }

    return acc;
}, {});

const prepare = ((dx, dy) => (p) => {
    p.x += dx;
    p.centerX += dx;
    p.y += dy;

    return p;
})(-mars.x -mars.r, mars.r);

[
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    sun,
].map(prepare);


export {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    sun
};