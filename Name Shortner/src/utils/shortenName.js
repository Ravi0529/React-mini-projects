export const shortenName = (name, maxLength) => {
    if (name.length <= maxLength) return name;
    return `${name.substring(0, maxLength - 5)}...`;
};
