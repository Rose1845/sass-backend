import express from "express";

const app = express();

app.get("/", async (req, res) => {
  return res.status(200).json({ message: "OKAY" });
});
app.all('*',(_,res)=>{
  return res.sendStatus(405)
})

export default app;
