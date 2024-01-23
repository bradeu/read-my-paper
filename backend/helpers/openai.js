const apiURL = process.env.API_URL;
const apiKey = process.env.API_KEY;

async function fetchData(prompt) {
    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{
                role: "user",
                content: ` Write me a summary from these data: ${prompt}`
            }],
            max_tokens: 5
        })
    });
    const data = await response.json()
    console.log(data)
};