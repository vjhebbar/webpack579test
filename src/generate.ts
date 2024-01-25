
function generate() {

    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com", config).then(async (res: Response) => {

        const jokeElement = document.getElementById("joke");
        if (jokeElement) {
            const body = await res.json();
            jokeElement.innerHTML = body.data.joke
        }
    })
}

export default generate;