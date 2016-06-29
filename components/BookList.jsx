var BookList = ({videos, handleBookEntryTitleClick}) => (
  <div className="book-list-media">
      <BookListEntry
        key={book.etag}
        book={book}
        handleBookEntryTitleClick={handleBookEntryTitleClick}
      />
    )
  </div>
);