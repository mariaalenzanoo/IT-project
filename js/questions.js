/*(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    console.log(titleQuestions)
    const show = [...document.querySelectorAll(".questions_show")];
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            
            addPadding.classList.toggle('questions_padding--add');
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = '${height}px';
            show.forEach(show =>{
                show.style.display = "block";
            });
        });
    });
})();*/

(function () {
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    console.log(titleQuestions);

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            // Toggle class for padding
            addPadding.classList.toggle('questions_padding--add');

            // Toggle class for arrow rotation
            question.children[0].classList.toggle('questions_arrow--rotate');

            // Toggle class to show/hide the answer
            answer.classList.toggle('questions_show--active');

            // Hide other answers
            titleQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    let otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.classList.remove('questions_show--active');
                }
            });
        });
    });
})();

