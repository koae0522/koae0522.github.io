function conv(form)
{
    beNum=form.beNum.value;
    afNum=0;
    beRa=Number(form.before.value);
    afRa=Number(form.after.value);

    console.log("beNum="+beNum);
    console.log("afNum="+afNum);
    console.log("beRa="+beRa);
    console.log("afRa="+afRa);

    //10進数として渡されてるのでbeRaの基数に変換
    num=parseInt(beNum,beRa);
    console.log(num);

    //afRaに変換
    form.afNum.value=num.toString(afRa);

    console.log("-------------------");
}