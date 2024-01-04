(function(){
    const sliders = [...document.querySelectorAll('.education_body')];
    console.log(sliders);
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition= (add)=>{
        const currentEducation = document.querySelector('.education_body-show').dataset.id;
        value=Number(currentEducation);
        value+= add;
        sliders[Number(currentEducation)-1].classList.remove('education_body-show');
        //3 +1 = 4
        if(value=== sliders.length +1 || value===0){
            value=value===0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('education_body-show');
        console.log(value);
    }
})();