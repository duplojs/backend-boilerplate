import { createHub, routeStore } from "@duplojs/http";
import { createHttpServer } from "@duplojs/http/node";

import "./routes";

const hub = createHub({
	environment: "DEV",
});

hub.register(routeStore.getAll());

await createHttpServer(hub, {
	host: "localhost",
	port: 1506,
});
