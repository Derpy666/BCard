// *** Navbar Links *** //
const about: string = "About";
const favCards: string = "Favourites";
const myCards: string = "My Cards";

const guestLinks: string[] = [about];
const userLinks: string[] = [...guestLinks, favCards];
const bizLinks: string[] = [...userLinks, myCards];
const adminLinks: string[] = [...bizLinks];

export { guestLinks, userLinks, bizLinks, adminLinks };
