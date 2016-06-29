class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Books: []
    }
  }

 handleClick(event){
  console.log(event);
  console.log("clicked");
 }

 onChange(){
  // this.setState({Books});
  $('#mySearch').val()

 }
  getNYBooks(query) {
    var options = {
      max:5,
      key: this.props.API_KEY,
      query: query
    };
  }


 render(){
     return (
      <div>
      <h1>BoooksHub</h1>
      <input type="text"   onChange={this.onChange} id= "mySearch"/>
      <input type="button" onClick={this.handleClick} value="Search" />
      <div>
      <div className="book-view">
      Book
    </div>
    <div className="book-details">
      <h3></h3>
    </div>
        </div>
            </div>
    )
 }
}
window.App = App;

ReactDOM.render(<App />, document.getElementById('app'))