const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});
});

http.listen(process.env.PORT || 3000, () => {
	console.log("Listening to port 3000")
});
