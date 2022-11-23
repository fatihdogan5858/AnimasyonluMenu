const progress = document.getElementById("progress"); /*ıd si progress olanı çağırıyor*/
const circles = document.querySelectorAll(".circle"); /*bütün clasları çağırdığımız için querySelectorAll  diyoruz*/
const prev = document.getElementById("prev"); /*ıd si prev  olan btn u çağırıyor*/
const next = document.getElementById("next"); /*ıd si next  olan btn u çağırıyor*/

let currentActive = 1 /* şuan 1 de olduğu için (ilk kodlarken sayılarda 1234 olan ilk önce 1 de kırmızı çizgi var*/

next.addEventListener("click", () => {  /*addEventListener ile next te etkinlik ekliyoruz bu etkinlik click (tıklama ), ()=>{} arrow function */
    currentActive++; /*tıklandığında currentActive++ 1 artsın*/

    if (currentActive > circles.length) { /*currentActive circles.length den büyük ise */
        currentActive = circles.length; /*burada currentActive büyükse circles (4 tane var 1234)den next buton u çağır */
    }
    update();
});


prev.addEventListener("click", () => { /**next in tam tersi */
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});
function update() {/*burada circle nin içinde gezinmek istiyoruz */
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
    } 
})    
    const actives = document.querySelectorAll(".active");
    // console.log(actives.length,circles.length);
    // console.log(actives.length/circles.length);

    ////////////////////////////////
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
    
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
        
}