const arrow = document.querySelectorAll(".arrow");


const movieList = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) =>{
    const itemNum = movieList[i].querySelectorAll(".movie-list-item-image").length;
    let clickCount = 0;

   

    arrow.addEventListener("click", () => {
        console.log(window.innerWidth);
        clickCount++;

        let ratio = Math.floor(window.innerWidth/400);


        if (itemNum - (3 + clickCount) + (3 - ratio) >= 0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value-440}px)`;
            
            } else{
                movieList[i].style.transform = "translateX(0)"
                clickCount=0;
            }
        });
    
});