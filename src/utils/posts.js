export const setNewPost = (objPost) => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const newPosts = [...posts, objPost];
    localStorage.setItem('posts', JSON.stringify(newPosts));
}

export const getPosts = () => localStorage.getItem('posts');
