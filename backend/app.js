import express from "express";

const app = express();
const port = 3000;

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "...";

async function fetchData(prompt) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            prompt: 
            ` Write me a summary from these data:
            ${prompt}`,
            max_tokens: 5
        })
    });
    const data = await response.json()
    console.log(data)
};

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/", (req, res) => {
    fetchData(req.body);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});