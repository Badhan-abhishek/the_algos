export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpEl = Math.floor(Math.sqrt(breaks.length));

    let i = jumpEl;

    for (; i < breaks.length; i += jumpEl) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpEl;

    for (let j = 0; j < jumpEl && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

