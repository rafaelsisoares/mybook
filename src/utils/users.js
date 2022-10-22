export const setNewUser = (objUser) => {
    const users = localStorage.getItem('users');
    const newUsers = [...users, objUser];
    localStorage.setItem('users', newUsers);
}

export const getUsers = () => localStorage.getItem('users');

export const setUserOnline = (email, password) => {
    const users = localStorage.getItem('users');
    const userOnline = users.find((user) => user.email === email && user.password === password);
    localStorage.setItem('userOnline', userOnline);
}

export const getUserOnline = () => localStorage.getItem('userOnline');

export const resetUserOnline = () => localStorage.setItem('userOnline', {});