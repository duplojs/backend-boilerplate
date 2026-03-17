#!/bin/bash

set -e

tsc -p ./business/domains/tsconfig.json
tsc -p ./business/applications/tsconfig.json

tsc -p ./interfaces/adapters/tsconfig.json
tsc -p ./interfaces/http/tsconfig.json
tsc -p ./interfaces/commands/tsconfig.json
tsc -p ./interfaces/tsconfig.json