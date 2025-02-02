import { User } from "./usersDB.ts";


// Mocks user store, ideally this would be a database


// load initial users
import {USERS} from "./usersDB.ts";

// TODO: add new user to usersDB

export const getUser = (email: string):User|null =>{
    return USERS.find(user => user.email === email) || null;
}

