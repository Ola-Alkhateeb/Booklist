/* START SOLUTION */
var BookEntry = ({book,  handleBookEntryTitleClick}) => (
  <div className="book-list-entry">
    <div className="media-left media-middle">
     <img className="media-object"alt="" />
    </div>
    <div className="media-body">
      <div 
        className="book-list-entry-title"
        onClick={() => handleBookEntryTitleClick(book)}
      >
        {video.snippet.title}
      </div>
      <div className="book-list-entry-detail"></div>
    </div>
  </div>
);

BookEntry.propTypes = {
  Book: React.PropTypes.object.isRequired
};

window.BookEntry = BookEntry;
