export const Controls = {
    get up() {
        return (keyControls.up && !keyControls.down) || (mouseControls.up);
    },
    get left() {
        return keyControls.left && !keyControls.right || (mouseControls.left);
    },
    get right() {
        return keyControls.right && !keyControls.left || (mouseControls.right);
    },
    get down() {
        return keyControls.down && !keyControls.up;
    }
}

const keyControls = {
    up: false,
    left: false,
    right: false,
    down: false
}

const mouseControls = {
    up: false,
    left: false,
    right: false
}

const onmousedown = ({clientX, clientY}) => {
    const { innerWidth, innerHeight } = window;

    if (clientY < innerHeight / 2) {
        mouseControls.up = true;
    } else if (clientX < innerWidth / 2) {
        mouseControls.left = true;
    } else {
        mouseControls.right = true;
    }
}

const onmouseup = () => {
    mouseControls.up = false;
    mouseControls.left = false;
    mouseControls.right = false;
}


const onkeydown = ({key}) => {
    switch (key) {
        case 'ArrowUp':
            keyControls.up = true;
            break;
        case 'ArrowDown':
            keyControls.down = true;
            break;
        case 'ArrowLeft':
            keyControls.left = true;
            break;
        case 'ArrowRight':
            keyControls.right = true;
            break;
    }
}

const onkeyup = ({key}) => {
    switch (key) {
        case 'ArrowUp':
            keyControls.up = false;
            break;
        case 'ArrowDown':
            keyControls.down = false;
            break;
        case 'ArrowLeft':
            keyControls.left = false;
            break;
        case 'ArrowRight':
            keyControls.right = false;
            break;
    }
}

const ontouch = ({touches}) => {
    if (touches.length === 0) {
        mouseControls.up = false;
        mouseControls.left = false;
        mouseControls.right = false;
    } else {
        const { innerWidth, innerHeight } = window;

        Array.prototype.forEach.call(touches, ({clientX, clientY}) => {
            if (clientY < innerHeight / 2) {
                mouseControls.up = true;
            } else if (clientX < innerWidth / 2) {
                mouseControls.left = true;
            } else {
                mouseControls.right = true;
            }
        })
    }
}

const oncontextmenu = () => false;

Object.assign(document.body, {
    onmousedown,
    onmouseup,
    onkeydown,
    onkeyup,
    ontouchstart: ontouch,
    ontouchend: ontouch,
    oncontextmenu
});