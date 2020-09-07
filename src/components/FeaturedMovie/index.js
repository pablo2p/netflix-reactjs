import React from "react";

import "./styles.css";

function FeaturedMovie({ item }) {
  let firstDate = new Date(item.first_air_date);

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 && "s"}
            </div>
          </div>
          <div className="featured--description" title={item.overview}>
            {description}
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`}>Assistir</a>
            <a href={`/list/add/${item.id}`} className="reverse">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>
            {item.genres.map((item) => item.name).join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
