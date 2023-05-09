const path= require('path');

//exports the router to the other modules
module.exports= (app) => {
    //handles when the user visits a page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));

    });

    //sends user to home page if no matching route is found
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}