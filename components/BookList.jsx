var BookList = ({items}) => (
  <div className="book-list media">
    {items.map( (item) => <BookListEntry item={item}/>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
BookList.propTypes = {
  items: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.BookList = BookList;
