import express from "express";

const app = express();

app.get('/api/hello', (req: express.Request, res: express.Response)=> {
    console.log('RESPOND!');
    res.send('sneeze World');
})

app.get('/api/bye', (req: express.Request, res: express.Response)=> {
    console.log('RESPOND!');
    res.send('Goodbye World');
})

const port: number = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
