import { getMovies, getTVShows } from "./moviesAPI.js";
import { getKeywordAndSearch } from "./searchFunction.js";

let _movies = []; // Danh sách phim
let _pageNumber = 1; // Số trang

/**
 * Hàm lấy dữ liệu và hiển thị phim
 * @param {*} pageNumber Số trang
 */
const render = async (pageNumber = 1) => {
    // Lúc vào cần lấy dữ liệu phim -> show
    let movies = await getMovies(pageNumber);
    _movies = [..._movies, ...movies];
    // Sau khi lấy xong dữ liệu -> render
    let moviesListDiv = document.getElementById("movies-list");
    let query = "";
    movies.forEach((movie) => {
        query += `
            <div class="col-lg-2 pe-0 col-md-4 movie-item">
                <div class="spec_1im clearfix position-relative">
                    <div class="spec_1imi clearfix">
                        <img src="${movie.poster_url}" class="w-100" alt="abc" />
                    </div>
                    <div
                        class="spec_1imi1 row m-0 w-100 h-100 clearfix position-absolute bg_col top-0"
                    >
                        <div class="col-md-9 col-9 p-0">
                            <div class="spec_1imi1l pt-2">
                                <h6 class="mb-0 font_14 d-inline-block">
                                    <a
                                        class="bg-black d-block text-white"
                                        href="#"
                                    >
                                        <span class="pe-2 ps-2"
                                            >1080</span
                                        >
                                        <span
                                            class="bg-white d-inline-block text-black span_2"
                                        >
                                            HD</span
                                        ></a
                                    >
                                </h6>
                            </div>
                        </div>
                        <div class="col-md-3 col-3 p-0">
                            <div class="spec_1imi1r">
                                <h6 class="text-white">
                                    <span
                                        class="rating d-inline-block rounded-circle me-2 col_green"
                                        >5.9</span
                                    >
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spec_1im1 clearfix">
                    <h6 class="text-light fw-normal font_14 mt-3">
                        120 min,
                        <span class="col_red">Action</span>
                        <span class="span_1 pull-right d-inline-block"
                            >${movie.year}</span
                        >
                    </h6>
                    <h5 class="mb-0 fs-6">
                        <a class="text-white" href="#">${movie.name}</a>
                    </h5>
                </div>
            </div>
        `;
    });
    moviesListDiv.innerHTML += query;
    setEventClickForMovieItem();
};

/**
 * Hàm gán sự kiện click vào phim -> Chuyển sang trang detail với query slug phim
 */
const setEventClickForMovieItem = () => {
    let movieItems = document.getElementsByClassName("movie-item");
    for (let index = 0; index < movieItems.length; index++) {
        const element = movieItems[index];
        element.addEventListener("click", () => {
            let slug = _movies[index].slug;
            window.location.href = `./detail.html?slug=${slug}`;
        });
    }
};

/**
 * Hàm hiển thị dữ liệu lên carousel
 */
const renderCarousel = async () => {
    let queryBtn = "";
    let queryInnerCar = "";
    for (let index = 0; index < 4; index++) {
        const element = _movies[index];
        queryBtn += `
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="${index}"
                class="${index == 0 ? "active" : ""}"
                aria-label="Slide ${index + 1}"
            ></button>
        `;
        queryInnerCar += `
            <div class="carousel-item ${index == 0 ? "active" : ""}">
                <img
                    src="${element.thumb_url}"
                    class="d-block w-100"
                    alt="..."
                />
                <div class="carousel-caption d-md-block">
                    <h5 class="text-white-50 release ps-2 fs-6">
                        NEW RELEASES
                    </h5>
                    <h1 class="font_80 mt-4">
                        ${element.name}
                    </h1>
                    <h6 class="text-white">
                        <span
                            class="rating d-inline-block rounded-circle me-2 col_green"
                            >6.1</span
                        >
                        <span class="col_green"
                            >IMDB SCORE</span
                        >
                        <span class="mx-3">${element.year}</span>
                        <span class="col_red"
                            >Romance, Action</span
                        >
                    </h6>
                    <p class="mt-4">
                        Certain but she but shyness why cottage.
                        Guy the put instrument sir entreaties
                        affronting.
                    </p>
                    <h5 class="mb-0 mt-4 text-uppercase">
                        <a class="button" href="#"
                            ><i
                                class="fa fa-youtube-play me-1"
                            ></i>
                            Watch Trailer</a
                        >
                    </h5>
                </div>
            </div>
        `;
    }
    document.getElementById("carousel-indicators").innerHTML = queryBtn;
    document.getElementById("carousel-inner").innerHTML = queryInnerCar;
};

/**
 * Hàm load thêm phim khi click nút "Load More"
 */
const loadMoreMovies = async () => {
    _pageNumber++;
    render(_pageNumber);
};

/**
 * Hàm load TV show trong phần watch Show now
 */
const loadTVShowPart = async () => {
    const tvShows = await getTVShows(1, 4);
    let query = "";
    console.log(tvShows);
    tvShows.forEach((tvShow) => {
        query += `
            <div class="col-md-3 pe-0">
                <div class="stream_2im clearfix position-relative">
                    <div class="stream_2im1 clearfix">
                        <div class="grid clearfix">
                            <figure class="effect-jazz mb-0">
                                <a href="#"
                                    ><img
                                        src="https://phimimg.com/${tvShow.poster_url}"
                                        class="w-100"
                                        alt="abc"
                                /></a>
                            </figure>
                        </div>
                    </div>
                    <div
                        class="stream_2im2 position-absolute w-100 h-100 p-3 top-0 clearfix"
                    >
                        <h6 class="font_14 col_red">ROMANCE, DRAMA</h6>
                        <h4 class="text-white">${tvShow.name}</h4>
                        <h6 class="font_14 mb-0 text-white">
                            <a
                                class="text-white me-1 font_60 align-middle lh-1"
                                href="#"
                                ><i class="fa fa-play-circle"></i
                            ></a>
                            ${tvShow.year}
                        </h6>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("tv-show-now").innerHTML = query;
};

/**
 * Hàm gọi các hàm khi bắt đầu truy cập website
 */
const startWebsite = async () => {
    await render(_pageNumber);
    await renderCarousel();
    await loadTVShowPart();

    // Sự kiện click nút more
    document
        .getElementById("load-more")
        .addEventListener("click", loadMoreMovies);
    getKeywordAndSearch();
};

startWebsite();
