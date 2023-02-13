import isEmpty from "lodash";
import createPost from "./api/createPost";
import createCards from "./cards";

const handleFormSubmit = async (e) => {
  console.log('handleFormSubmit');
  e.preventDefault();
  const formData = new FormData(form);
  const inputsAray = document.querySelectorAll('._req');
  const inputImage = document.getElementById("photo");
  const errorsAray = [];
 formData.append('picture', inputImage.files[0]);
  

  inputsAray.forEach((input) => {
    if (input.value === '') {
      input.classList.add('_error');
      errorsAray.push(input.name);
    } else {
      input.classList.remove('_error');
    }
  });

  if (isEmpty(errorsAray)) {
    const post = await createPost(formData);
    console.log(post);
    if (post.status == 200) {
     createCards([post.data]); 
    }
  }
  

 

  // form.reset();
};

export default handleFormSubmit;