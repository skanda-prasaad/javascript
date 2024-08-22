const btn = document.querySelector('button');

const img1 = document.querySelector("#one");

const img2 = document.querySelector("#two");

btn.addEventListener('click',function() {
    const src1 = img1.src;
    const src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
})