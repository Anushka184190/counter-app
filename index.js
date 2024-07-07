var count=document.querySelector('.main-text').innerHTML;
count=parseInt(count);
function inc(){
    count=count+1;
    document.querySelector('.main-text').innerHTML=count;
}
function dec(){
    count=count-1;
    document.querySelector('.main-text').innerHTML=count;
}