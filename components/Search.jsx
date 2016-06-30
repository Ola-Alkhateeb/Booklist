var Search = ({search}) => (
  <div className="search-bar form-inline">
    <div className="input-group">
      <input type="text" className="form-control" id='s' onChange = {()=>search($('#s').val())}placeholder="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Search</button>
      </span>
    </div>
  </div> 
);


window.Search = Search;


