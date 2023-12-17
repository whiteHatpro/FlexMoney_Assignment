import express from "express";
import mongoose from "mongoose";
import batchRouter from "./routes/batch-routes";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", router);
app.use("/api/batch/", batchRouter);

  mongoose.connect
  (
      'mongodb+srv://mohakSrivas:YpFIwt9ERo9zIe6j@cluster0.pmkfwop.mongodb.net/'
  )
  .then(()=> app.listen(8000))
  .then(() =>
      console.log("Connected database, listening on port 5000")
  )
  .catch((err) =>console.log(err));
;
