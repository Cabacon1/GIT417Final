'use strict';const _0x6e9d51=_0x8f77;(function(_0x1e175f,_0xd9e7f){const _0x13d29d=_0x8f77,_0xc3b00a=_0x1e175f();while(!![]){try{const _0x174bf2=-parseInt(_0x13d29d(0x19b))/0x1*(parseInt(_0x13d29d(0x1c3))/0x2)+parseInt(_0x13d29d(0x19f))/0x3+parseInt(_0x13d29d(0x197))/0x4*(-parseInt(_0x13d29d(0x1bc))/0x5)+-parseInt(_0x13d29d(0x1d6))/0x6+parseInt(_0x13d29d(0x1ae))/0x7+-parseInt(_0x13d29d(0x1a8))/0x8*(-parseInt(_0x13d29d(0x1bb))/0x9)+parseInt(_0x13d29d(0x1b3))/0xa*(parseInt(_0x13d29d(0x1df))/0xb);if(_0x174bf2===_0xd9e7f)break;else _0xc3b00a['push'](_0xc3b00a['shift']());}catch(_0x136aa9){_0xc3b00a['push'](_0xc3b00a['shift']());}}}(_0x872e,0x30f8d));function _0x8f77(_0x3792ed,_0xd92fc8){const _0x872e70=_0x872e();return _0x8f77=function(_0x8f77b1,_0x39148f){_0x8f77b1=_0x8f77b1-0x196;let _0x4e9c4d=_0x872e70[_0x8f77b1];return _0x4e9c4d;},_0x8f77(_0x3792ed,_0xd92fc8);}const openShopping=document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1a4)),closeShopping=document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1bf)),list=document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1d7)),listCard=document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1ce)),total=document['querySelector']('.total'),body=document['querySelector'](_0x6e9d51(0x1ac)),quantity=document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1db));openShopping[_0x6e9d51(0x1be)]('click',()=>{const _0x53a11a=_0x6e9d51;body[_0x53a11a(0x1b8)][_0x53a11a(0x1a2)](_0x53a11a(0x1a6)),body[_0x53a11a(0x1e2)][_0x53a11a(0x1ad)]=0x2;}),closeShopping[_0x6e9d51(0x1be)](_0x6e9d51(0x198),()=>{const _0xcc486d=_0x6e9d51;body[_0xcc486d(0x1b8)][_0xcc486d(0x1cf)](_0xcc486d(0x1a6));});let products=[{'id':0x1,'name':_0x6e9d51(0x19c),'images':_0x6e9d51(0x1b9),'price':0x3c},{'id':0x2,'name':_0x6e9d51(0x1b6),'images':'/deluxe.jpg','price':0x48},{'id':0x3,'name':_0x6e9d51(0x1a0),'images':_0x6e9d51(0x1c7),'price':0x60},{'id':0x4,'name':_0x6e9d51(0x1ba),'images':_0x6e9d51(0x19d),'price':0x30},{'id':0x5,'name':'Drop\x20Cookies','images':_0x6e9d51(0x1de),'price':0x24}],listCards=[];const initApp=()=>{const _0x1860ba=_0x6e9d51;products[_0x1860ba(0x1c8)]((_0x2e823b,_0x4a0b9a)=>{const _0x4c1260=_0x1860ba;let _0x59b27d=document[_0x4c1260(0x1af)]('div');_0x59b27d[_0x4c1260(0x1b8)]['add']('item'),_0x59b27d[_0x4c1260(0x1a3)]=_0x4c1260(0x1d9)+_0x2e823b[_0x4c1260(0x1dc)]+_0x4c1260(0x1d4)+_0x2e823b[_0x4c1260(0x1d1)]+_0x4c1260(0x1cc)+_0x2e823b[_0x4c1260(0x1b1)]['toLocaleString']()+_0x4c1260(0x1b7)+_0x4a0b9a+_0x4c1260(0x19a),list[_0x4c1260(0x1a1)](_0x59b27d);});};initApp();const addToCard=_0x3ccb75=>{const _0x1d81c6=_0x6e9d51;listCards[_0x3ccb75]==null&&(listCards[_0x3ccb75]=JSON[_0x1d81c6(0x1d8)](JSON['stringify'](products[_0x3ccb75])),listCards[_0x3ccb75]['quantity']=0x1),reloadCard();},reloadCard=()=>{const _0x3ebac5=_0x6e9d51;listCard[_0x3ebac5(0x1a3)]='';let _0x184098=0x0,_0x243e92=0x0;listCards['forEach']((_0xd9e8ea,_0x454e43)=>{const _0x2a6c0f=_0x3ebac5;_0x243e92=_0x243e92+_0xd9e8ea['price'],_0x184098=_0x184098+_0xd9e8ea[_0x2a6c0f(0x1cd)];if(_0xd9e8ea!=null){let _0x2916ca=document['createElement']('li');_0x2916ca[_0x2a6c0f(0x1a3)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><img\x20src\x20=\x22Images/'+_0xd9e8ea['images']+_0x2a6c0f(0x199)+_0xd9e8ea[_0x2a6c0f(0x1d1)]+_0x2a6c0f(0x1b4)+_0xd9e8ea[_0x2a6c0f(0x1b1)][_0x2a6c0f(0x1e0)]()+_0x2a6c0f(0x19e)+_0x454e43+',\x20'+(_0xd9e8ea[_0x2a6c0f(0x1cd)]-0x1)+_0x2a6c0f(0x1c1)+_0x184098+_0x2a6c0f(0x1aa)+_0x454e43+',\x20'+(_0xd9e8ea[_0x2a6c0f(0x1cd)]+0x1)+_0x2a6c0f(0x1cb),listCard[_0x2a6c0f(0x1a1)](_0x2916ca);}total['innerText']=_0x243e92[_0x2a6c0f(0x1e0)](),quantity['innerText']=_0x184098;});},changeQuantity=(_0x36e1bf,_0x598f73)=>{const _0x52d8ca=_0x6e9d51;_0x598f73==0x0?delete listCards[_0x36e1bf]:(listCards[_0x36e1bf][_0x52d8ca(0x1cd)]=_0x598f73,listCards[_0x36e1bf][_0x52d8ca(0x1b1)]=_0x598f73*products[_0x36e1bf][_0x52d8ca(0x1b1)]),reloadCard();};let myIndex=0x0;carousel();function carousel(){const _0x4005b9=_0x6e9d51;let _0x1f003d,_0x124f8a=document[_0x4005b9(0x1a7)](_0x4005b9(0x196));for(_0x1f003d=0x0;_0x1f003d<_0x124f8a[_0x4005b9(0x1ca)];_0x1f003d++){_0x124f8a[_0x1f003d][_0x4005b9(0x1e2)][_0x4005b9(0x1a9)]=_0x4005b9(0x1c2);}myIndex++,myIndex>_0x124f8a[_0x4005b9(0x1ca)]&&(myIndex=0x1),_0x124f8a[myIndex-0x1][_0x4005b9(0x1e2)][_0x4005b9(0x1a9)]=_0x4005b9(0x1d0),setTimeout(carousel,0x7d0);}document[_0x6e9d51(0x1d5)](_0x6e9d51(0x1e1))['addEventListener']('submit',function(_0x2c335e){const _0x2af05a=_0x6e9d51;_0x2c335e['preventDefault'](),document[_0x2af05a(0x1d3)](_0x2af05a(0x1a5))[_0x2af05a(0x1b0)]='',document[_0x2af05a(0x1d3)](_0x2af05a(0x1c4))['textContent']='';const _0x4a03f1=document[_0x2af05a(0x1d3)](_0x2af05a(0x1b5))[_0x2af05a(0x1ab)][_0x2af05a(0x1c0)](),_0x44f3b2=document[_0x2af05a(0x1d3)](_0x2af05a(0x1bd))['value'][_0x2af05a(0x1c0)](),_0x358d4d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,_0x36b1a5=/^\d{10}$/;let _0x90a318=!![];(!_0x4a03f1||!_0x358d4d['test'](_0x4a03f1))&&(document[_0x2af05a(0x1d3)](_0x2af05a(0x1a5))['textContent']=_0x2af05a(0x1d2),_0x90a318=![]);(!_0x44f3b2||!_0x36b1a5[_0x2af05a(0x1c5)](_0x44f3b2))&&(document[_0x2af05a(0x1d3)](_0x2af05a(0x1c4))[_0x2af05a(0x1b0)]=_0x2af05a(0x1c6),_0x90a318=![]);if(_0x90a318){const _0x25d8f3={'email':_0x4a03f1,'phone':_0x44f3b2};alert(_0x2af05a(0x1c9)+_0x25d8f3[_0x2af05a(0x1b5)]+_0x2af05a(0x1da)+_0x25d8f3['phone']),console[_0x2af05a(0x1b2)](_0x25d8f3),_0x2c335e['target'][_0x2af05a(0x1dd)]();}});function _0x872e(){const _0x4c212a=['add','innerHTML','.shopping','emailError','active','getElementsByClassName','920AHrPaw','display','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22background-color:\x20#000\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22cardButton\x22\x20onclick\x20=\x20\x22changeQuantity(','value','body','zIndex','1008854dMkivU','createElement','textContent','price','log','380iTfuZX','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x22cardPrice\x22>$','email','Deluxe','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick\x20=\x22addToCard(','classList','/standard.jpg','Mini','26343lresuV','175830mMoLWb','phone','addEventListener','.closeShopping','trim',')\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x22count\x22>','none','340422KdYuYN','phoneError','test','Please\x20enter\x20a\x20valid\x2010-digit\x20phone\x20number.','/luxury.jpg','forEach','Form\x20submitted\x20successfully!\x20\x0aCustomer\x20Info:\x0aEmail:\x20','length',')\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x22price\x22>$','quantity','.listCard','remove','block','name','Please\x20enter\x20a\x20valid\x20email\x20address.','getElementById','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x22title\x22>','querySelector','397842KLnjqw','.list','parse','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src\x20=\x22Images/','\x0aPhone:\x20','.quantity','images','reset','/dropCookie.jpg','15290VLzIXF','toLocaleString','form','style','carousel-image','28QJhZps','click','\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x22cardTitle\x22>',')\x22>Add\x20To\x20Cart</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','2oGmfOV','Standard','/mini.jpg','</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22background-color:\x20#000\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22cardButton\x22\x20onclick\x20=\x20\x22changeQuantity(','959799pLoQJz','Luxury','appendChild'];_0x872e=function(){return _0x4c212a;};return _0x872e();}