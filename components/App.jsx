class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: window.data   }
  }

 // handleClick(event){
 //  console.log(event);
 //  console.log("clicked");
 // }

  getGoogleBooks(query) {
    var options = {
      key: 'AIzaSyCmbVwkiwCRZ6ShsAjVGF7Bt5SYO-DFA4w',
      q: query

    };

    searchGoogle(options, (items) => {
      this.setState({items: items});
    });

  }


 render(){
     return (
      <div>
      <Nav search={this.getGoogleBooks.bind(this)}/>
      <h2> Books:</h2>
      <BookList items={this.state.items}/>
    <div className="book-details">
    </div>
        </div>
  
    )
 }
}
window.App = App;

