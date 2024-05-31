const quiz = [
  {
      "question": "What is Node.js?",
      "options": ["A JavaScript library for building user interfaces.", "A JavaScript runtime built on Chrome's V8 JavaScript engine.", "A database management system.", "A CSS framework."],
      "answer": "A JavaScript runtime built on Chrome's V8 JavaScript engine."
    },
    {
      "question": "Which of the following is the correct command to install Node.js?",
      "options": ["npm install node", "sudo apt-get install node", "download and install from the official website", "brew install nodejs"],
      "answer": "download and install from the official website"
    },
    {
      "question": "How do you create a new Node.js project?",
      "options": ["node new project", "npm init", "node init", "npm create"],
      "answer": "npm init"
    },
    {
      "question": "Which core module in Node.js is used for performing file operations?",
      "options": ["fs", "http", "url", "path"],
      "answer": "fs"
    },
    {
      "question": "Which command is used to install a package globally in Node.js?",
      "options": ["npm install -g package-name", "npm install package-name", "npm global package-name", "npm -g package-name"],
      "answer": "npm install -g package-name"
    },
    {
      "question": "Which of the following is true about Node.js?",
      "options": ["It is synchronous by default.", "It is asynchronous and event-driven.", "It is used for front-end development.", "It does not support JSON."],
      "answer": "It is asynchronous and event-driven."
    },
    {
      "question": "How do you export a module in Node.js?",
      "options": ["module.exports = myModule;", "export myModule;", "module.export = myModule;", "exports = myModule;"],
      "answer": "module.exports = myModule;"
    },
    {
      "question": "Which method is used to read the contents of a file asynchronously in Node.js?",
      "options": ["fs.readFile", "fs.readFileSync", "fs.read", "fs.readAsync"],
      "answer": "fs.readFile"
    },
    {
      "question": "Which of the following is NOT a built-in module in Node.js?",
      "options": ["http", "crypto", "fs", "jQuery"],
      "answer": "jQuery"
    },
    {
      "question": "What does the 'require' function do in Node.js?",
      "options": ["Loads and executes a JavaScript file", "Defines a new module", "Imports a module", "Compiles JavaScript code"],
      "answer": "Imports a module"
    },
    {
      "question": "Which statement is used to include modules in Node.js?",
      "options": ["include", "import", "require", "fetch"],
      "answer": "require"
    },
    {
      "question": "How do you start a Node.js application?",
      "options": ["node start app.js", "node run app.js", "node app.js", "start app.js"],
      "answer": "node app.js"
    },
    {
      "question": "Which of the following is used to handle asynchronous operations in Node.js?",
      "options": ["Callbacks", "Promises", "Async/Await", "All of the above"],
      "answer": "All of the above"
    },
    {
      "question": "What is the default scope of modules in Node.js?",
      "options": ["Global", "Local to each module", "Application-wide", "User-wide"],
      "answer": "Local to each module"
    },
    {
      "question": "Which module is used to create a web server in Node.js?",
      "options": ["web", "network", "http", "server"],
      "answer": "http"
    },
    {
      "question": "Which command is used to install Express in a Node.js project?",
      "options": ["npm install express", "npm get express", "npm put express", "npm add express"],
      "answer": "npm install express"
    },
    {
      "question": "How do you handle uncaught exceptions in Node.js?",
      "options": ["process.on('uncaughtException')", "process.catch('exception')", "try/catch", "throw new Exception"],
      "answer": "process.on('uncaughtException')"
    },
    {
      "question": "What is npm in Node.js?",
      "options": ["Node Project Manager", "Node Package Manager", "Network Package Manager", "New Project Manager"],
      "answer": "Node Package Manager"
    },
    {
      "question": "How can you check the installed version of Node.js?",
      "options": ["node --version", "node -v", "npm --version", "Both A and B"],
      "answer": "Both A and B"
    },
    {
      "question": "Which file is typically used to define a Node.js project's metadata?",
      "options": ["index.js", "app.js", "package.json", "config.json"],
      "answer": "package.json"
    },
    {
      "question": "Which object in Node.js is used to manage the environment settings?",
      "options": ["process.env", "env.process", "environment", "global"],
      "answer": "process.env"
    },
    {
      "question": "Which method is used to create a new instance of an EventEmitter in Node.js?",
      "options": ["new events()", "new EventEmitter()", "events.create()", "EventEmitter.new()"],
      "answer": "new EventEmitter()"
    },
    {
      "question": "What does the 'fs.writeFile' method do in Node.js?",
      "options": ["Reads a file", "Writes a file asynchronously", "Deletes a file", "Writes a file synchronously"],
      "answer": "Writes a file asynchronously"
    },
    {
      "question": "What is the purpose of the 'path' module in Node.js?",
      "options": ["To handle and transform file paths", "To provide HTTP utilities", "To manage user sessions", "To perform cryptographic operations"],
      "answer": "To handle and transform file paths"
    },
    {
      "question": "How do you install a specific version of a package using npm?",
      "options": ["npm install package@version", "npm get package@version", "npm add package@version", "npm put package@version"],
      "answer": "npm install package@version"
    },
    {
      "question": "Which of the following is a correct way to define a route in an Express application?",
      "options": ["app.get('/route', callback)", "app.route('/route', callback)", "app.getRoute('/route', callback)", "app.on('/route', callback)"],
      "answer": "app.get('/route', callback)"
    },
    {
      "question": "What is the purpose of the 'util' module in Node.js?",
      "options": ["To provide utility functions", "To manage network connections", "To handle HTTP requests", "To parse URLs"],
      "answer": "To provide utility functions"
    },
    {
      "question": "Which Node.js module provides the 'createServer' method?",
      "options": ["fs", "http", "url", "net"],
      "answer": "http"
    },
    {
      "question": "What does 'npm start' do in a Node.js project?",
      "options": ["Starts the Node.js REPL", "Runs the start script defined in package.json", "Installs dependencies", "Updates npm to the latest version"],
      "answer": "Runs the start script defined in package.json"
    },
    {
      "question": "Which method in Node.js can be used to send an HTTP request?",
      "options": ["http.request", "http.send", "http.post", "http.get"],
      "answer": "http.request"
    },
    {
      "question": "What does the 'os' module provide in Node.js?",
      "options": ["Operating system-related utility methods and properties", "File system-related methods", "Network-related methods", "HTTP-related methods"],
      "answer": "Operating system-related utility methods and properties"
  },
  {
      "question": "Which method is used to parse a URL string in Node.js?",
      "options": ["url.parse()", "url.format()", "url.resolve()", "url.convert()"],
      "answer": "url.parse()"
  },
  {
      "question": "Which module in Node.js is used to create child processes?",
      "options": ["child_process", "process_child", "child", "process"],
      "answer": "child_process"
  },
  {
      "question": "What is the purpose of the 'dns' module in Node.js?",
      "options": ["To perform DNS resolution functions", "To manage data streams", "To handle HTTP requests", "To work with file paths"],
      "answer": "To perform DNS resolution functions"
  },
  {
      "question": "Which of the following is a REPL command to save the current Node.js REPL session?",
      "options": [".save", ".store", ".archive", ".log"],
      "answer": ".save"
  },
  {
      "question": "How do you handle promises in Node.js?",
      "options": ["then", "catch", "finally", "All of the above"],
      "answer": "All of the above"
  },
  {
      "question": "What does the 'http.createServer' method return?",
      "options": ["An instance of http.Server", "An instance of http.Client", "An instance of http.Request", "An instance of http.Response"],
      "answer": "An instance of http.Server"
  },
  {
      "question": "What does the 'util.promisify' function do in Node.js?",
      "options": ["Converts a callback-based function to a promise-based one", "Converts a synchronous function to an asynchronous one", "Creates a new utility function", "Handles promise rejections"],
      "answer": "Converts a callback-based function to a promise-based one"
  },
  {
      "question": "Which command is used to uninstall a package in Node.js?",
      "options": ["npm uninstall package-name", "npm remove package-name", "npm delete package-name", "npm discard package-name"],
      "answer": "npm uninstall package-name"
  },
  {
      "question": "How do you create a buffer in Node.js?",
      "options": ["Buffer.from()", "Buffer.create()", "Buffer.new()", "Buffer.make()"],
      "answer": "Buffer.from()"
  },
  {
      "question": "What is the default file extension for a Node.js module?",
      "options": [".node", ".js", ".json", ".mod"],
      "answer": ".js"
  },
  {
      "question": "Which core module is used to compress data in Node.js?",
      "options": ["zlib", "compress", "zip", "gzip"],
      "answer": "zlib"
  },
  {
      "question": "How can you handle errors in an asynchronous function using async/await?",
      "options": ["Using try/catch blocks", "Using finally blocks", "Using onerror blocks", "Using throw blocks"],
      "answer": "Using try/catch blocks"
  },
  {
      "question": "What is the event loop in Node.js?",
      "options": ["A mechanism that handles asynchronous callbacks", "A function that processes HTTP requests", "A method for creating new threads", "A method for reading files"],
      "answer": "A mechanism that handles asynchronous callbacks"
  },
  {
      "question": "How do you stop a running Node.js server?",
      "options": ["server.close()", "server.stop()", "server.exit()", "server.terminate()"],
      "answer": "server.close()"
  },
  {
      "question": "Which module in Node.js provides cryptographic functionalities?",
      "options": ["crypto", "hash", "security", "encrypt"],
      "answer": "crypto"
  },
  {
      "question": "What does the 'path.join' method do in Node.js?",
      "options": ["Joins all given path segments together", "Resolves a sequence of paths", "Normalizes a path", "Returns the directory name"],
      "answer": "Joins all given path segments together"
  },
  {
      "question": "How do you set an environment variable in Node.js?",
      "options": ["process.env.VAR_NAME = 'value'", "env.set('VAR_NAME', 'value')", "process.setEnv('VAR_NAME', 'value')", "env.VAR_NAME = 'value'"],
      "answer": "process.env.VAR_NAME = 'value'"
  },
  {
      "question": "Which method is used to decode a JSON string in Node.js?",
      "options": ["JSON.parse()", "JSON.decode()", "JSON.stringify()", "JSON.convert()"],
      "answer": "JSON.parse()"
  },
  {
      "question": "How do you watch for changes in a file using the 'fs' module?",
      "options": ["fs.watchFile()", "fs.monitorFile()", "fs.observeFile()", "fs.trackFile()"],
      "answer": "fs.watchFile()"
  }
]

export default quiz