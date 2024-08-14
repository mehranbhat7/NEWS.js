const list = document.getElementById("list");
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F"
)
  .then((res, rej) => {
    if (!res.ok) {
      throw new Error("news Not found");
    }
    return res.json();
  })
  .then((data) => [
    data.items.forEach((ele) => {
      let titlee = document.createElement("h2");
      let desc = document.createElement("li");
      let linkk = document.createElement("a");
      titlee.innerHTML = ele.title;
      desc.innerHTML = ele.description;
      linkk.innerHTML = "Read more";
      linkk.href = ele.link;
      linkk.target = "_blank";
      list.appendChild(titlee);
      list.appendChild(desc);
      list.appendChild(linkk);
    }),
  ])
  .catch((err) => {
    console.error(err);
  });
