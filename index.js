import express from "express"

const PORT = 3000
const app = express()


app.get("/", (req, res) => {
    return res.status(200).json({ message: "Luquinhas" })
})

app.post("/api/client", (req, res) => {
    const body = req.body
    console.log(body);

    return res.status(200).json({ message: "Rota do cliente" })
})

app.listen(PORT, () => {
    console.log("Server is running!");
});