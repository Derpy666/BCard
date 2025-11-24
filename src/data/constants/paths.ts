// ** Paths ** //
const base: string = 'https://bcard-api.onrender.com';
const users = base + '/users';
const cards = base + '/cards';

export const paths = {
    cards: cards,
    users: users,

    login: `${users}/login`,
};
