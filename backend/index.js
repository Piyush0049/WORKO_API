import app from "./app.js";
import connectToDb from "./config/db.js";

connectToDb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
});
