import { getSingleMovie } from "./moviesAPI.js";
import { getKeywordAndSearch } from "./searchFunction.js";

let _movies = []; // Danh sách phim
let _pageNumber = 2; // Số trang

/**
 * Hàm lấy dữ liệu và hiển thị phim
 * @param {*} pageNumber Số trang
 */
const render = async (pageNumber = 1) => {
    // Lúc vào cần lấy dữ liệu phim -> show
    let movies = await getSingleMovie(pageNumber);
    _movies = [..._movies, ...movies];
    // Sau khi lấy xong dữ liệu -> render
    let moviesListDiv = document.getElementById("movies-list");
    let query = "";
    movies.forEach((movie) => {
        query += `
            <div class="col-lg-2 pe-0 col-md-4 movie-item">
                <div class="spec_1im clearfix position-relative">
                    <div class="spec_1imi clearfix">
                        <img src="https://phimimg.com/${movie.poster_url}" class="w-100" alt="abc" />
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
 * Hàm load thêm phim khi click nút "Load More"
 */
const loadMoreMovies = async () => {
    _pageNumber++;
    render(_pageNumber);
};

/**
 * Hàm gọi các hàm khi bắt đầu truy cập website
 */
const startWebsite = async () => {
    await render(_pageNumber);
    // Sự kiện click nút more
    document
        .getElementById("load-more")
        .addEventListener("click", loadMoreMovies);
    getKeywordAndSearch();
};

startWebsite();
