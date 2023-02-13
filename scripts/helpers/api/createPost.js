import axiosClient from '../axios';

const createPost = async (data) => {
 const res = await axiosClient.post('posts', data);

 return res;
}

export default createPost;