const API_URL = "https://api.openai.com/v1/chat/completions";

async function fetchData(prompt) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
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