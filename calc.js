var result=document.getElementById("result");


var clean=document.getElementById("clean");
var dell=document.getElementById("dell");
var btnequal=document.getElementById("btnequal");


var modulo=document.getElementById("modulo");
var divide=document.getElementById("divide");
var btnmultipli=document.getElementById("btnmultipli");
var btnminus=document.getElementById("btnminus");
var btnplus=document.getElementById("btnplus");


var btn0=document.getElementById("btn0");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");
var btn8=document.getElementById("btn8");
var btn9=document.getElementById("btn9");
var btncomma=document.getElementById("btncomma");




function clear(){
    result.value = ""
}

clean.addEventListener("click", function (){
    clear();
});

function delllastletter(){
    result.value =  result.value.substring(0, result.value.length - 1);
}
dell.addEventListener("click", function (){
    delllastletter();
}); 

function tosawi(){
        result.value = eval(result.value)

}
btnequal.addEventListener("click", function(){
    tosawi();
})

//-----------typing type of treatment---------
function typemodulo(){
    var word = "%" ;
    result.value += word;
}
modulo.addEventListener("click", function (){
    typemodulo();
});
function typedivide(){
    var word = "/" ;
    result.value += word;
}
divide.addEventListener("click", function (){
    typedivide();
});
function typemultipl(){
    var word = "*" ;
    result.value += word;
}
btnmultipli.addEventListener("click", function (){
    typemultipl();
});
function typeplus(){
    var word = "+" ;
    result.value += word;
}
btnplus.addEventListener("click", function (){
    typeplus();
});
function typeminus(){
    var word = "-" ;
    result.value += word;
}
btnminus.addEventListener("click", function (){
    typeminus();
});
//-----------------typing numbers ----------------------
function type0(){
    var word = 0 ;
    result.value += word;
}
btn0.addEventListener("click", function (){
    type0();
});
function type1(){
    var word = 1;
    result.value += word;
}
btn1.addEventListener("click", function (){
    type1();
});
function type2(){
    var word = 2 ;
    result.value += word;
}
btn2.addEventListener("click", function (){
    type2();
});
function type3(){
    var word = 3 ;
    result.value += word;
}
btn3.addEventListener("click", function (){
    type3();
});
function type4(){
    var word = 4 ;
    result.value += word;
}
btn4.addEventListener("click", function (){
    type4();
});
function type5(){
    var word = 5 ;
    result.value += word;
}
btn5.addEventListener("click", function (){
    type5();
});
function type6(){
    var word = 6 ;
    result.value += word;
}
btn6.addEventListener("click", function (){
    type6();
});
function type7(){
    var word = 7 ;
    result.value += word;
}
btn7.addEventListener("click", function (){
    type7();
});
function type8(){
    var word = 8 ;
    result.value += word;
}
btn8.addEventListener("click", function (){
    type8();
});
function type9(){
    var word = 9 ;
    result.value += word;
}
btn9.addEventListener("click", function (){
    type9();
});
function typecomma(){
    var word = "." ;
    result.value += word;
}
btncomma.addEventListener("click", function (){
    typecomma();
});

