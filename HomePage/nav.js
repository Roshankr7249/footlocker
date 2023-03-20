const searchBox=document.querySelector("#search-box")
searchBox.addEventListener("focus", function(){

    document.querySelector(".left").style="display:none"
    console.log("Iam triggered")
    searchBox.style="min-width:700px";
})
searchBox.addEventListener("focusout", function(){

    document.querySelector(".left").style="display:block, display: flex"
    console.log("Iam triggered")
    searchBox.style="width:200px";
})
