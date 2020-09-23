export default function encrypt(string) {
    return string
        .split('')
        .map((letter, i) => {
            return String.fromCharCode(letter.charCodeAt(0) + 16 + i) +
                ((i === string.length - 1) || (i + 1) % 4 ? '' : '-');
        })
        .join('');
}

function decrypt(string) {
    return string
        .replace(/-/g, '')
        .split('')
        .map((letter, i) => {
            return String.fromCharCode(letter.charCodeAt(0) - 16 - i);
        })
        .join('')
}

window.checkCode = s => new Date(Number(`${decrypt(s)}0`)).toISOString();