export const fetchNames = async (count = 10) => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    console.log(data);
    return data.results.map(user => `${user.name.first} ${user.name.last}`);
};
