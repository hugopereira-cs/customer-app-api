import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

const startSerever = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
};

startSerever();
