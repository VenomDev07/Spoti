import {v2 as cloudinary} from 'cloudinary';

const CLOUDINARY_CLOUD_NAME = 'dznprzizg'
const CLOUDINARY_API_KEY = '275372123726342'
const CLOUDINARY_API_SECRET = 'JcqYVupGEZSHzLKBuRNzqAKaNr8'

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

export { cloudinary };