const { exec } = require('child_process');

// Start the backend server
const backend = exec('nodemon server.js', { cwd: __dirname });

// Log backend output
backend.stdout.on('data', (data) => {
    console.log(`Backend: ${data}`);
});

backend.stderr.on('data', (data) => {
    console.error(`Backend Error: ${data}`);
});

// Start the frontend server
const frontend = exec('npm start', { cwd: `${__dirname}/../frontend` });

// Log frontend output
frontend.stdout.on('data', (data) => {
    console.log(`Frontend: ${data}`);
});

frontend.stderr.on('data', (data) => {
    console.error(`Frontend Error: ${data}`);
});