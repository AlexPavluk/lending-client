const cardsData = data => {
    return `
                    <div class = "users__card">
                        <div class = "users__img">
                        <img class = "users__img" src="${'http://localhost:7255/static/'}${data.picture}" alt="salvador">
                        
                        </div>
                        <div class = "users__name">
                            ${data.name}
                        </div>
                        <div class = "users__contacts">
                            <p> ${data.role} </p>
                            <p> ${data.email}</p>
                            <p>${data.phone}</p>
                        </div>
                    </div>
            `

}

const createCards = (data) => {
    data.forEach(item => {
        document.getElementById("users__card").innerHTML += cardsData(item);
    });
}


export default createCards;