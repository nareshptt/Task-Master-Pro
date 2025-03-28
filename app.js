const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/Home", (req, res) => {
    res.render("index", );
});
app.get("*", (req, res) => {
    res.status(404).render("Error"); // Make sure "error.ejs" exists in the "views" folder
});



// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
