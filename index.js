// Import Express.js
const express = require("express")
// Import body-parser (to handle parameters more easily)
const bodyParser =require( 'body-parser')

var app = express()

// Indicate to Express.js that you're using an additional plugin to treat parameters
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",function(request,response){
response.send("Hello World!")
})

app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});


//The code below creates a GET route with these parameters:
//1 - The route where the code will be executed
//2 - The function containing the code to execute
app.get('/index.html', (request, response) => {
// The string we want to display on http://localhost:3000
response.send('Welcome on the books API! Take a breath and start using it!')
})

// Static variable containing your books
let bookList = [
  'Make Time: How to Focus on what Matters Every Day',
  'The Power Of Habit',
]

// Replace the route name
app.get('/books', (request, response) => {
  // The function will return your bookList in a JSON
  // Sample: { allBooks: ["Make Time: How to Focus on what Matters Every Day", "The Power Of Habit"]}
  return response.json({ allBooks: bookList })
})

app.post('/books', (request, response) => {
  // We get the parameter 'name' from the body
  const bookName = request.body.name

  // We check if the book list includes the new book
  // If it is, we return 'false'
  if (bookList.includes(bookName)) return response.json({ success: false })

  // Otherwise, we add the new book in the list and return 'true'
  bookList.push(bookName)
  return response.json({ success: true })
})