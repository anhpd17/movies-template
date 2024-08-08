// Lấy danh sách phim (truyền số trang)
export const getMovies = async (pageNumber = 1, limit = 10) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${pageNumber}&limit=${limit}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.items;
};

// Danh sách phim lẻ
export const getSingleMovie = async (pageNumber) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/v1/api/danh-sach/phim-le?page=${pageNumber}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.data.items;
};

// Danh sách phim bộ
export const getSeriesMovie = async (pageNumber) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/v1/api/danh-sach/phim-bo?page=${pageNumber}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.data.items;
};

// Danh sách phim hoạt hình
export const getCartoonMovie = async (pageNumber) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/v1/api/danh-sach/hoat-hinh?page=${pageNumber}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.data.items;
};

// Danh sách phim bộ
export const getTVShows = async (pageNumber) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/v1/api/danh-sach/tv-shows?page=${pageNumber}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.data.items;
};

// Tìm kiếm phim
export const searchMovies = async (query, limit = 20) => {
    // Lấy response trả từ API
    let response = await fetch(
        `https://phimapi.com/v1/api/tim-kiem?keyword=${query}&limit=${limit}`
    );
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data.data.items;
};

// Lấy thông tin chi tiết của phim (truyền slug phim)
export const getMoviesBySlug = async (slugCode) => {
    // Lấy response trả từ API
    let response = await fetch(`https://phimapi.com/phim/${slugCode}`);
    // Convert response to Data
    let data = await response.json();
    // Return movies list
    return data;
};
