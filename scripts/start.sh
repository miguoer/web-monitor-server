# cross-env BUILD_ENV=development ts-node  --respawn --transpile-only --project ./tsconfig.json  ./app.ts

cross-env BUILD_ENV=development PORT=8000 ts-node   --project ./tsconfig.json ./app.ts