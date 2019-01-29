const { bookCardView } = require('./book-card.js')
const { arrify } = require('./util-arrify.js')
// Returns a list of BookCards
module.exports.libraryBooksView = (render, model) => render(
  model,
  ':libraryBooks'
)`<main class="Library" id="Library">
  <div class="Library-books">${arrify(model.books).map(book =>
    bookCardView(render, book)
  )}</div>
</main>`
