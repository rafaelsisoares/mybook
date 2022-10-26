export const setNewUser = (objUser) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const newUsers = [...users, objUser];
    localStorage.setItem('users', JSON.stringify(newUsers));
}

export const getUsers = () => localStorage.getItem('users');

export const setUserOnline = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const userOnline = users.find((user) => user.email === email && user.password === password);
    localStorage.setItem('userOnline', JSON.stringify(userOnline));
}

export const getUserOnline = () => localStorage.getItem('userOnline');

export const resetUserOnline = () => localStorage.setItem('userOnline', JSON.stringify({}));