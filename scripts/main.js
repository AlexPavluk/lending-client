import { isEmpty } from 'lodash';
import getAllPosts from './helpers/api/getAllPosts';
import createCards from './helpers/cards';
import handleFormSubmit from './helpers/form';


document.addEventListener('DOMContentLoaded', async () => {
  const posts = await getAllPosts();
  const form = document.querySelector('form');

  form.addEventListener('submit', handleFormSubmit);
  
  console.log('posts', posts);
  if (!isEmpty(posts.data)) {
    createCards(posts.data);
  }
});
