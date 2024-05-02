import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-sphere-a6pu.onrender.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`posts/${id}/like`, {userId: userId});
export const deletePost = (id) => API.delete(`/posts/${id}`);