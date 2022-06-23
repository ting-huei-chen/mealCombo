const testArr = ["拉麵","泡麵","手打麵","撈麵","乾拌麵"];
const genBtn = document.getElementById("generate");
const main = document.getElementById("main");

function randomElem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

genBtn.addEventListener("click",()=>{
    document.querySelector(".container").style.display="block";
    let mainElem = randomElem(testArr);
    main.querySelector("h4").innerHTML= mainElem;
    main.querySelector("a:first-of-type").href="https://www.google.com/search?q="+mainElem+"+near+me";
    main.querySelector("a:last-of-type").href="https://www.google.com/search?q="+mainElem+"+recipe";
});