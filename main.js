const shorten = () => {
    let longUrl = document.querySelector("#url-box").value;
    let shortUrl;
    console.log("started");
    axios
        .get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
        .then((resdata) => {
            shortUrl = resdata.data.result.full_short_link;
            addResult(longUrl, shortUrl);
        })
        .catch((err) => {
            alert("Error check your connectivity or link");
        });
};

function addResult(longUrl, shortUrl) {
    let parentEle = document.querySelector("#shortened-links");
    let data = `<div class="item">
                    <div class="short-url">
                        <div class="title font-1">Short URL</div>
                            <p>${shortUrl}</p> 
                            <button id="short-url" class="font-2 hint--bottom" aria-label="Click link to Copy" onclick='copyLink(this)' value='${shortUrl}'>Copy Link</button>
                    </div>
                </div>`;

    let newEle = document.createElement("div");
    newEle.innerHTML = data;
    parentEle.appendChild(newEle);
}

function copyLink(tag) {
    let text = tag.value;
    navigator.clipboard.writeText(text);
}