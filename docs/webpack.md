- The browser configuration is going to take the code that lives at /src/browser/index.js, run it through the babel-loader (which will run it through the env and react presets), then spit out the modified, bundled code at /public/bundle.js. The __isBrowser__ line is going to add a property (__isBrowser__) to the global namespace so we know we’re rendering on the browser.

- The server configuration is similar. It’s going to take the code that lives at /src/server/index.js, run it through the same babel-loader, then it’s going to split it out at ./server.js. The externals line makes it so the servers node_modules aren’t bundled with it. target tells webpack to compile for usage in a “Node.js like environment” and also helps externals know what to ignore (built in node modules like path, fs, etc).


- e final client code is going to be put at public/bundle.js and the final server code will be put at the root server.js.


 three items we were going to need first.

- A React component - even just a basic one that renders “Hello World” for now.
- A server which spits back our basic React component after it’s wrapped it in some HTML structure.
- A React app which is going to pick up from where the server-rendered HTML left off and add in any event listeners to the existing markup where needed.
