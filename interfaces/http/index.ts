import { createHub, routeStore } from "@duplojs/http";
import { createHttpServer } from "@duplojs/http/node";
import { envs } from "@envs";

import "./routes";

const hub = createHub({
	environment: envs.ENVIRONMENT,
});

hub.register(routeStore.getAll());

await createHttpServer(hub, {
	host: "localhost",
	port: 1506,
});
