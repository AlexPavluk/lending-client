import axiosClient from '../axios';

const getAllPosts = async () => {
  const response = await axiosClient.get('posts');

  return response;
}

export default getAllPosts;