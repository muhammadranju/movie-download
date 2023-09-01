const http = require("http");
const app = require("../app/app");
const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// ngrok http --domain=emu-integral-akita.ngrok-free.app 3000
