const DIMENSIONS = {
    mercury: {
        distance: 57909000 * 1.5,
        size: 4879.4
    },
    venus: {
        distance: 108160000 * 1.5,
        size: 12103.6
    },
    earth: {
        distance: 149600000 * 1.5,
        size: 12756.3
    },
    mars: {
        distance: 227990000 * 1.5,
        size: 6792.4
    },
    jupiter: {
        distance: 778360000 * 1.2,
        size: 142984
    },
    saturn: {
        distance: 1443500000,
        size: 120536
    },
    uranus: {
        distance: 1872400000,
        size: 51118
    },
    neptune: {
        distance: 4498400000 / 2,
        size: 49528
    },
};

export const SYSTEM_RADIUS_PX = 2500;
const SYSTEM_BORDER_PX = SYSTEM_RADIUS_PX - (SYSTEM_RADIUS_PX / 8);
const BIGGEST_PLANET_PX = SYSTEM_RADIUS_PX / 20;
const FAREST_PLANET_PX = SYSTEM_BORDER_PX - (SYSTEM_RADIUS_PX / 50);
const PLANET_SIZE_COEFFICIENT = BIGGEST_PLANET_PX / DIMENSIONS.jupiter.size;
const PLANET_DISTANCE_COEFFICIENT = FAREST_PLANET_PX / DIMENSIONS.neptune.distance

const {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune
} = Object.keys(DIMENSIONS).reduce((acc, key) => {
    const {
        distance,
        size
    } = DIMENSIONS[key];
    const size_px = Math.round(size * PLANET_SIZE_COEFFICIENT);

    acc[key] = {
        size: size_px,
        x: SYSTEM_BORDER_PX - Math.round(distance * PLANET_DISTANCE_COEFFICIENT),
        y: SYSTEM_RADIUS_PX - size_px / 2
    }

    return acc;
}, {});

export {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune
};