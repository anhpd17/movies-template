import { getMoviesBySlug } from "./moviesAPI.js";

/**
 * Hiển thị thông tin chi tiết của phim
 */
const renderMovieDetail = async () => {
    // Lấy slug của phim trên URL website
    const slug = window.location.search.split("=")[1];
    let detailMovie = await getMoviesBySlug(slug);
    // Hiện tên phim
    let nameMovie = detailMovie.movie.name;
    let thumb_url = detailMovie.movie.thumb_url;
    let contentMovie = detailMovie.movie.content;
    document.getElementById("name-detail").innerText = nameMovie;
    document.getElementById("content-detail").innerHTML = contentMovie;
    document.getElementsByClassName("main_contact")[0].style.backgroundImage =
        "url(" + thumb_url + ")";

    // Hiện các tập phim
    let episodes = detailMovie.episodes[0].server_data;
    let queryEpisodes =
        '<h3 style="margin-bottom: 12px">Danh sách tập phim</h3>';
    episodes.forEach((episode) => {
        queryEpisodes += `
            <a style="background-color: red; color: white; border-radius: 4px; padding: 12px 24px" href="${episode.link_embed}" target="_blank" class="episode-button">${episode.name}</a>
        `;
    });
    document.getElementById("list-episodes").innerHTML = queryEpisodes;
};

renderMovieDetail();
