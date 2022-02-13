const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/gilgamesh.html");
});
app.listen(8080, function () {
    console.log("Server is running on localhost8080");
});

function btnprimary()
{
    alert("Gilgamesh disini")
}
function btnsuccess(){
    alert("Pantengin terus yak!")
}
