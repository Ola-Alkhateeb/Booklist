class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
 currentBook: this.props.booklist,
      items: this.props.booklist.items    }
  }

 handleClick(event){
  console.log(event);
  console.log("clicked");
 }

  getGoogleBooks(query) {
    var options = {
      key: 'AIzaSyCmbVwkiwCRZ6ShsAjVGF7Bt5SYO-DFA4w',
      q: query

    };

    searchGoogle(options, items => {
      this.setState({currentBook: items[0],
                     items: items});
    });

  }


 render(){
     return (
      <div>
      <h1>BoooksHub</h1>
      
          <Nav search={this.getGoogleBooks.bind(this)}/>

      <h2> bookList:</h2>
      {this.props.booklist.items.map(item => 
        <li item={item}>{item.volumeInfo.title} by:{item.volumeInfo.authors} 
         </li>)}

    <div className="book-details">
    </div>
        </div>
       
    )
 }
}
window.App = App;

ReactDOM.render(<App booklist={data[0]}/>, document.getElementById('app'))