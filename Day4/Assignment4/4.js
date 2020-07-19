function insert(num)
{

    form.textview.value=form.textview.value + num;

}
function equal()
{
    var exp=form.textview.value ;
    if(exp){
    form.textview.value =eval(form.textview.value);}
}

function clean()
{
    form.textview.value="";
}

function sqrt()
{
    var exp=form.textview.value ;
    if(exp)
    {
        form.textview.value =Math.sqrt(form.textview.value);
    }
}

function percent()
{
    var exp=form.textview.value ;
    if(exp)
    {
        form.textview.value =(form.textview.value)/100;
    }
}
function back()
{
    var exp=form.textview.value ;
    form.textview.value =exp.substring(0,exp.length-1);
}