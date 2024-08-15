export const getKeywordAndSearch = () => {
    let searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
        let keyword = document.getElementById("search-input").value;
        window.location.href = `./search.html?keyword=${keyword}`;
    });
};
