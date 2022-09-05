# cloud-function-ts-test

Functions Framework: https://cloud.google.com/functions/docs/functions-framework?hl=ja

## Setup

Install `gcloud` command (in macOS)

```
$ brew install --cask google-cloud-sdk
```

Create new project by `gts`

see: https://github.com/GoogleCloudPlatform/functions-framework-nodejs/blob/master/docs/typescript.md

1. Use [gts](https://github.com/google/gts) to configure Typescript.

   ```sh
   npx gts init
   ```

2. Install the required packages:

   ```sh
   npm install @google-cloud/functions-framework
   npm install @types/express concurrently nodemon --save-dev
   ```

3. Add a `start` script to `package.json`, passing in the `--source` flag to
   point to the compiled code directory (configured by `gts` in this example).
   Also add a `watch` script to use for development:

   ```js
     "scripts": {
       "start": "functions-framework --source=build/src/ --target=helloWorld",
       "watch": "concurrently \"tsc -w\" \"nodemon --watch ./build/ --exec npm run start\"",
       ...
     }
   ```

4. Replace the contents of `src/index.ts` with:

   ```ts
   import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

   export const helloWorld: HttpFunction = (req, res) => {
     res.send('Hello, World');
   };
   ```

## Development

Run in local

```
make run
```

Then, started the process.

```
[22:21:32] Starting compilation in watch mode...
[0]
[1]
[1] > start
[1] > functions-framework --source=build/src/ --target=helloWorld
[1]
[1] Serving function...
[1] Function: helloWorld
[1] Signature type: http
[1] URL: http://localhost:8080/
[0] [22:21:34] Found 0 errors. Watching for file changes.
[0]
[1] [nodemon] restarting due to changes...
[1] [nodemon] starting `npm run start`
[1]
[1] > start
[1] > functions-framework --source=build/src/ --target=helloWorld
[1]
[1] Serving function...
[1] Function: helloWorld
[1] Signature type: http
[1] URL: http://localhost:8080/
```

## Deploy

```
make deploy
```

=> https://us-central1-cloud-functions-test-361611.cloudfunctions.net/helloWorld
