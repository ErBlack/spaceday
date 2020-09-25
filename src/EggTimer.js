export const eggStart = new Date('2020-09-27T09:00:00.000Z');

export const isAvailable = () => eggStart < Date.now();