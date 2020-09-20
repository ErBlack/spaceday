export default function clicker(targetCount, timeout, callback) {
    let timeoutId;
    let count = 0;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => count = 0, timeout);

        if (count === targetCount) callback.apply(this, args);

        count++;
    }
}