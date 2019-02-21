const form = document.querySelector('.form')
    , inputStature = form.querySelector('.stature')
    , inputWeight = form.querySelector('.weight')
    , result = document.querySelector('.result')
    , standardTxt = result.querySelector('.standardWeight')
    , goalTxt = result.querySelector('.goalWeight')
    , btnReset = result.querySelector('.btnReset');

function standardWeightCalc(stature, weight){
    const standardWeight = (stature - 100) * 0.9;
    const goalWeight = weight - standardWeight;
    standardTxt.innerHTML = standardWeight;
    goalTxt.innerHTML = goalWeight;
}

function handleSubmit(event){
    event.preventDefault();
    const nowStature = inputStature.value;
    const nowWeight = inputWeight.value;
    if(nowStature === '' || nowStature < 120){
        alert('정확한 키를 입력해주세요.');
        inputStature.focus();
    }else if(nowWeight === '' || nowWeight < 30){
        alert('정확한 몸무게를 입력해주세요.');
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
    result.classList.remove('show').add('hide');
}

function init(){
    form.addEventListener('submit', handleSubmit);
    btnReset.addEventListener('click', handleReset);
}
init();