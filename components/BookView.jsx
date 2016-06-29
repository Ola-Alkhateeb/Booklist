var BookView = ({book}) =>(
	<div className="book-view">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);
	



window.BookView = BookView;
