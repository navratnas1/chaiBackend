const express = require("express");
const image = require("./models");
const multer = require("multer");

const app = express();

// Define your routes and middleware here
const upload = multer({ dest: "uploads/" });

app.post("/images", upload.single("image"), async (req, res) => {
  try {
    const newImage = new image({
      name: req.body.name,
      image: req.file.path,
    });
    await newImage.save();
    res.status(201).send(newImage);
  } catch (error) {
    res.status(400).send(error);
  }
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://nuvrtn:Unatlas!9@multerupload.flnmwdu.mongodb.net/?retryWrites=true&w=majority&appName=MulterUpload", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
