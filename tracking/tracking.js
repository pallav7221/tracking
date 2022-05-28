let button = document.querySelector("#button>input");

let orderStatus = document.querySelector(".orderStatus");
var data = fetch('http://localhost:3000/users/1')
    .then((x) => x.json())
    .then((x) => {
        console.log(x)
    })

button.addEventListener("click", () => {

    let orderno = document.querySelector(".input-data>input").value;
    let emailOrNumber = document.querySelector("#email").value;

    if (orderno == "987654321" && emailOrNumber == "1@gmail.com") {
        event.preventDefault();
        orderStatus.innerHTML = ""
        let box = document.createElement("div")
        box.setAttribute("class", "popUp");
        let image = document.createElement("img")

        setTimeout(() => {
            image.src = "../images/processing.jpg"
            box.append(image)
            orderStatus.append(box)
            setTimeout(() => {
                image.src = "../images/shipped.jpg"
                box.append(image)
                orderStatus.append(box)
                setTimeout(() => {
                    image.src = "../images/inTransit.jpg"
                    box.append(image)
                    orderStatus.append(box)
                    setTimeout(() => {
                        image.src = "../images/delivered.jpg"
                        box.append(image)
                        orderStatus.append(box)
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)




    }
    else {
        alert("Wrong details")
    }

})

