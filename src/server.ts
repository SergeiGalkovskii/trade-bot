import * as express from "express";
import { router } from "./api/router";

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/", router);
app.listen(port, err => {
    if (err) {
        console.log("Error ", err);
    }
    console.log("Server is listening on", 3000);
})
