// import
const express = required('express');
const app = express();
const PORT = 8080;

// Listener
app.listen(
        PORT,
        () => console.log(`Server ready at http://localhost:${PORT}`)
);