import { environmentVariableOrThrow } from "@duplojs/server-utils";
import { DPE } from "@duplojs/utils";

export const envs = await environmentVariableOrThrow(
	{
		ENVIRONMENT: DPE.literal(["DEV", "PROD"]),
	},
	{ paths: [] },
);
