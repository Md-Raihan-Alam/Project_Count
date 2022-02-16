//selection of classes
const textMessage=document.querySelector('.text_message');
const incrementBtn=document.querySelector('.increment_value');
const decrementBtn=document.querySelector('.decrement_value');
const resetBtn=document.querySelector('.reset_value');
const value=document.querySelector('.current_value');
let val=0;
//score and css update
function allData(val){
    incrementBtn.innerText=`Increase`;
    decrementBtn.innerText=`Decrease`;
    resetBtn.innerText=`Reset`;
    if(val<0){
        updateText('Your value has decreased','red','rgba(236, 61, 61, 0.521)');
        value.innerText=`${val}`;
    }else if(val>0){
        updateText('Your value has increased','green','rgba(69, 202, 69, 0.555)');
        val<10? value.innerText=`0${val}`:value.innerText=`${val}`;
    }else{
        updateText(null,null,null);
        value.innerText=`${val}`
    }
};
function updateText(message,color,bgColor){
    textMessage.style.color=color;
    textMessage.innerText=message;
    textMessage.style.backgroundColor=bgColor;
}
//update for increase,decrease and reset
document.addEventListener('DOMContentLoaded',function(){
    allData(val);
});
incrementBtn.addEventListener('click',()=>{
    val++;
    allData(val);
});
decrementBtn.addEventListener('click',function(){
    val--;
    allData(val);
});
resetBtn.addEventListener('click',function(){
    val=0;
    allData(val);
});