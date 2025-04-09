// Simple user authentication system
const users = []; // In-memory user storage

function register(username, password) {
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return { error: 'User already exists' };
    }
    const newUser = { username, password, isAvailable: false };
    users.push(newUser);
    return newUser;
}

function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return { error: 'Invalid credentials' };
    }
    return user;
}

function setUserAvailability(username, isAvailable) {
    const user = users.find(user => user.username === username);
    if (user) {
        user.isAvailable = isAvailable;
    }
}

module.exports = { register, login, setUserAvailability };
