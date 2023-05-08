import * as express from 'express';
import path from 'path';

const app = express();
const publicPath = path.join(__dirname, "dist");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

// Define a route handler for the default home page
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
