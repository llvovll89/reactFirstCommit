import PropTypes from "prop-types";

function Movie({movieImg, title, year, summary, genres}) {
  return (
    <div className="content">
      <img src={movieImg} alt={title} />
      <h2>
        {title}, {year}
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
    movieImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
 