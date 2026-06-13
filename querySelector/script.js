function show() {
    const message = document.querySelector("h3.text.update");
    const button = document.getElementById("myButton"); // or use querySelector("#myButton")
    const image = document.querySelector("img");

    let secretReveled = message.innerHTML === "Secret revealed!";

    console.log(document.querySelector("#myInput").value)

    if (!secretReveled) {
        message.innerHTML = "Secret revealed!";
        button.innerHTML = "Hide secret!";
        image.src = "/logo.png";
    } else {
        message.innerHTML = "***************";
        button.innerHTML = "Show secret!";
        image.src = "/icon-wildfly.png";
    }
}
