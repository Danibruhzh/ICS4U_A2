const arrow = document.querySelectorAll(".arrow");


const movieList = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) =>{
    const itemNum = movieList[i].querySelectorAll(".movie-list-item-image").length;
    let clickCount = 0;

    const barLength = 440 * itemNum;

    // need to fix the bar resizing

    arrow.addEventListener("click", () => {
        clickCount++;



        if (itemNum - (3 + clickCount) >= 0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value-440}px)`;
            
            } else{
                movieList[i].style.transform = "translateX(0)"
                clickCount=0;
            }
        });
    
});