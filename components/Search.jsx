var Search = ({search}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id='s' onChange = {()=>search($('#s').val())}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);


window.Search = Search;


