export const shortenName = (name) => {
    if (name.length <= 7) return name;
    return `${name.substring(0, 7)}...`;
};
