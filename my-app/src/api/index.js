import axios from 'axios';

export const fetchPosts = () => axios.get('https://jsonplaceholder.typicode.com/users');

export const fetchAlbums = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);

export const fetchPhotos = (albumId) => axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);