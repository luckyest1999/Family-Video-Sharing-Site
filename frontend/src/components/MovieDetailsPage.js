import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import { API_DOMAIN } from "../constants";
import "../styles/MovieDetailsPage.scss"
import "plyr/dist/plyr.css";
import "../styles/containers.scss"
import Plyr from "plyr";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
	console.log('Description Ref:', descriptionRef.current); // Check if the ref is assigned correctly
	if (descriptionRef.current) {
	  const scrollbar = Scrollbar.init(descriptionRef.current, {
		damping: 0.1,
		renderByPixels: true,
		alwaysShowTracks: true,
		continuousScrolling: true,
	  });
  
	  return () => {
		if (scrollbar) scrollbar.destroy(); // Clean up on unmount
	  };
	}
  }, []);
  


  useEffect(() => {
    axios
      .get(`${API_DOMAIN}/api/movies/${movieId}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  
  useEffect(() => {
    if (movie?.url) {
      new Plyr("#player", {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "duration",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["quality", "speed"],
        quality: { default: 720, options: [1080, 720, 480, 360] },
      });
    }
  }, [movie]);

  if (!movie) return <div>Loading...</div>;

  return (
	
    <div>
		
      <section class="section section--details">
		{/*  <!-- details content --> */}
		<div class="container">
			<div class="row">
        {/*  <!-- title --> */}
				
				<div class="col-12">
					<h1 class="section__title section__title--head">{movie.Title}</h1>
				</div>
				{/*  <!-- content --> */}

				
				<div class="col-12 col-xl-6">
					<div class="item item--details">
						<div class="row">
              {/*  <!-- card cover --> */}
							
							<div class="col-12 col-sm-5 col-md-5 col-lg-4 col-xl-6 col-xxl-5">
								<div class="item__cover">
									<img src={movie.Poster}  alt=""/>
									<span class="item__rate item__rate--green">{movie.imdbRating}</span>
								</div>
							</div>
							{/* <!-- end card cover --> */}
{/* 	<!-- card content --> */}
						
							<div class="col-12 col-md-7 col-lg-8 col-xl-6 col-xxl-7">
								<div class="item__content">
									<ul class="item__meta">
										<li><span>Director:<span class = "movie-details">{movie.Director}</span></span> </li>
										<li><span>Cast:<span class = "movie-details">{movie.Actors}</span></span></li>
										<li><span>Genre:<span class = "movie-details">{movie.Genre}</span></span>
										</li>
										<li><span>Released:<span class = "movie-details">{movie.Released}</span></span> </li>
										<li><span>Running time:<span class = "movie-details">{movie.Runtime}</span></span></li>
									</ul>

									<div class="movie-description" ref={descriptionRef} data-scrollbar="true" tabindex="-1" ><div class="scrollable-content">
									 {/* Bind ref to this div */}
										<p>{movie.Plot}</p>
									</div></div>
								</div>
							</div>
              {/* 	<!-- end card content --> */}
							
						</div>
					</div>
				</div>
				{/* <!-- end content -->*/}

				{/* <!-- player --> */}
				<div class="col-12 col-xl-6">
					
        <video class= "plyr" id="player" controls crossOrigin="anonymous">
              <source src={movie.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
			
					</div>
				{/* <!-- end player --> */}
			</div>
		</div>
		{/* <!-- end details content --> */}
	</section>
    </div>
  );
};

export default MovieDetailsPage;
