import app from "./app";

app.listen(process.env.APP_PORT, () => {
  console.log(`🚀server running on:${process.env.APP_BASEURL}${process.env.APP_PORT}`);
});