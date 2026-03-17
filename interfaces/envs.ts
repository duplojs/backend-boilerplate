import { environmentVariableOrThrow } from "@duplojs/server-utils";

export const envs = environmentVariableOrThrow(
	{},
	{ paths: [] },
);
