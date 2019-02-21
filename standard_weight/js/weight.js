const form = document.querySelector('.form'), 
    inputStature = form.querySelector('.stature'), 
    inputWeight = form.querySelector('.weight'), 
    result = document.querySelector('.result'), 
    resultStandardMessage = result.querySelector('.standard'),
    bmiTxt = result.querySelector('.bmiTxt'), 
    bmiResultTxt = result.querySelector('.bmiResultTxt'), 
    standardTxt = result.querySelector('.standardWeight'), 
    goalTxt = result.querySelector('.goalWeight'), 
    btnReset = result.querySelector('.btnReset');

function standardWeightCalc(stature, weight){
    const standardWeight = stature > 150 ? (stature - 100) * 0.9 : stature - 100;
    const bmi = Number(weight/((stature/100)*(stature/100))).toFixed(2);
    const goalWeight = Number(weight - standardWeight).toFixed(2);
    //bmi
    bmiTxt.innerHTML = bmi;
    if(bmi <= 18.5){
        bmiResultTxt.classList.add('gray');
        bmiResultTxt.innerHTML = '저체중';
    }else if(bmi > 18.51 && bmi <= 24.9){
        bmiResultTxt.classList.add('green');
        bmiResultTxt.innerHTML = '정상';
    }else if(bmi > 24.91 && bmi <= 29.9){
        bmiResultTxt.classList.add('pink');
        bmiResultTxt.innerHTML = '과체중';
    }else if(bmi > 29.91){
        bmiResultTxt.classList.add('red');
        bmiResultTxt.innerHTML = '고도 비만';
    }

    //standard weight
    if(goalWeight === 0){
        resultStandardMessage.innerHTML = '! 표준 체중입니다.'
    }else{
        standardTxt.innerHTML = standardWeight;
        goalTxt.innerHTML = goalWeight;
    }

}

function handleSubmit(event){
    event.preventDefault();
    const nowStature = inputStature.value;
    const nowWeight = inputWeight.value;
    if(nowStature === '' || nowStature < 120 || nowStature > 210){
        alert('정확한 키를 입력해주세요.');
        inputStature.value = '';
        inputStature.focus();
    }else if(nowWeight === '' || nowWeight < 30 || nowWeight > 160){
        alert('정확한 몸무게를 입력해주세요.');
        inputWeight.value = '';
        inputWeight.focus();
    }else{
        inputStature.value = '';
        inputWeight.value = ''; 
        standardWeightCalc(nowStature, nowWeight);
        form.classList.add('hide');
        result.classList.add('show');
    }   
}

function handleReset(){
    form.classList.remove('hide');
    result.classList.remove('show');
    bmiResultTxt.setAttribute('class', 'bmiResultTxt');
}

function init(){
    form.addEventListener('submit', handleSubmit);
    btnReset.addEventListener('click', handleReset);
}
init();