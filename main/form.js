document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', formSend);


    //button.addEventListener('click', fetchReq, false);


    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);
        const errorsAray = [];



        if (errorsAray.length == 0) {
            // axios.post('http://localhost:7255/api/posts/', {
            //     firstName: 'Fred',
            //     lastName: 'Flintstone'
            // }).then(function (response) {
            //     console.log(response);
            // }).catch(function (error) {
            //     console.log(error);
            // });


            //  fetch('http://localhost:7255/api/posts/', {
            //     method: 'POST',
            //     body: formData
            // }).then((res) => res.json())
            // .then((data) => {
            //     console.log(data)
            //     data.forEach(function (item) {
            //         output += `
            //   <div class="users__card">
            //         <div class="users__img">
            //            ${item.picture}
            //         </div>
            //         <div class="users__name">
            //                ${item.name}
            //         </div>
            //         <div class="users__contacts">
            //             <p> ${item.role} </p>
            //             <p> ${item.email}</p>
            //             <p>${item.phone}</p>
            //         </div>
            //     </div> 
            // `
            //     })

            // })
            // .catch((error) => {
            //     console.log(`Error Fetching data : ${error}`)
            //     document.getElementById("users").appendChild(node);
            // });
            // return false;
        }

        if (errorsAray.length == 0) {
                const rawResponse = await fetch('http://localhost:7255/api/posts/', {
                  method: 'POST',
                //   headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                //   },
                  body: formData
                });
                const content = await rawResponse.json();

                console.log(content);

        

        fetch("http://localhost:7255/api/posts/",
            {
                body: formData,
                method: "post"
            }
        )

        }

        if (errorsAray.length == 0) {
            fetch('http://localhost:7255/api/posts/')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            data.forEach(function (item) {
              output += `
              <div class="users__card">
                    <div class="users__img">
                       ${item.picture}
                    </div>
                    <div class="users__name">
                           ${item.name}
                    </div>
                    <div class="users__contacts">
                        <p> ${item.role} </p>
                        <p> ${item.email}</p>
                        <p>${item.phone}</p>
                    </div>
                </div> 
            `
            })
            
          })
          .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
            document.getElementById('country').innerHTML = 'Error Loading Data'
          })
        }
    }
});



