// const img = document.querySelector('.img_test');
const search_txt = document.querySelector(".search-text");
const search_btn = document.querySelector(".search-btn");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.querySelector(".img9");

const apiGeneral =
  "https://api.unsplash.com/photos/random/?client_id=DnhZI233pHXsNrA-w4IlbzhNkGdeLKgNtzawaOL-y4o&count=10";
async function getdata() {
  try {
    const response = await fetch(apiGeneral);
    const result = await response.json();
    img1.src = result[0].urls.full;
    img2.src = result[1].urls.full;
    img3.src = result[2].urls.full;
    img4.src = result[3].urls.full;
    img5.src = result[4].urls.full;
    img6.src = result[5].urls.full;
    img7.src = result[6].urls.full;
    img8.src = result[7].urls.full;
    img9.src = result[8].urls.full;
  } catch (e) {
    console.error(e);
  }
}

getdata();

search_btn.addEventListener("click", () => {
  const api =
      "https://api.unsplash.com/search/photos/?client_id=DnhZI233pHXsNrA-w4IlbzhNkGdeLKgNtzawaOL-y4o&per_page=10&query=";
    const qr = api + search_txt.value;
    const handleGetData = async () => {
      try {
        const response = await fetch(qr, {
          method: "GET",
        });
        const res = await response.json();
        console.log(res);
        img1.src = res.results[0].urls.full;
        img2.src = res.results[1].urls.full;
        img3.src = res.results[2].urls.full;
        img4.src = res.results[3].urls.full;
        img5.src = res.results[4].urls.full;
        img6.src = res.results[5].urls.full;
        img7.src = res.results[6].urls.full;
        img8.src = res.results[7].urls.full;
        img9.src = res.results[8].urls.full;
        img9.src = res.results[9].urls.full;
      } catch (e) {
        console.log("Couldn't find query");
      }
    };
    handleGetData();
});

search_txt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const api =
      "https://api.unsplash.com/search/photos/?client_id=DnhZI233pHXsNrA-w4IlbzhNkGdeLKgNtzawaOL-y4o&per_page=10&query=";
    const qr = api + search_txt.value;
    const handleGetData = async () => {
      try {
        const response = await fetch(qr, {
          method: "GET",
        });
        const res = await response.json();
        console.log(res);
        img1.src = res.results[0].urls.full;
        img2.src = res.results[1].urls.full;
        img3.src = res.results[2].urls.full;
        img4.src = res.results[3].urls.full;
        img5.src = res.results[4].urls.full;
        img6.src = res.results[5].urls.full;
        img7.src = res.results[6].urls.full;
        img8.src = res.results[7].urls.full;
        img9.src = res.results[8].urls.full;
        img9.src = res.results[9].urls.full;
      } catch (e) {
        console.log("Couldn't find query");
      }
    };
    handleGetData();
  }
});


