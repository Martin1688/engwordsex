(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Wn2y:function(t,e,n){"use strict";n.r(e),n.d(e,"WordsModule",(function(){return m}));var r=n("ofXK"),o=n("tyNb"),i=n("fXoL"),s=n("ej43"),b=n("N+FS"),c=n("3Pt+");function d(t,e){if(1&t&&(i.Kb(0,"div",13),i.ac(1),i.Jb()),2&t){const t=i.Tb();i.xb(1),i.cc(" ",t.formError," ")}}function a(t,e){if(1&t&&(i.Kb(0,"option",14),i.ac(1),i.Jb()),2&t){const t=e.$implicit;i.Ub("value",t),i.xb(1),i.bc(t)}}function h(t,e){if(1&t&&(i.Kb(0,"option",14),i.ac(1),i.Jb()),2&t){const t=e.$implicit;i.Ub("value",t),i.xb(1),i.bc(t)}}function u(t,e){if(1&t&&(i.Kb(0,"tr"),i.Kb(1,"td",3),i.Kb(2,"span",8),i.ac(3),i.Jb(),i.Jb(),i.Jb()),2&t){const t=i.Tb();i.xb(3),i.bc(t.message)}}function g(t,e){if(1&t&&(i.Kb(0,"tr"),i.Kb(1,"td",9),i.Kb(2,"span"),i.ac(3),i.Jb(),i.Jb(),i.Kb(4,"td",10),i.Kb(5,"span",11),i.ac(6),i.Jb(),i.Jb(),i.Jb()),2&t){const t=i.Tb();i.xb(3),i.dc("",t.wIndex,"/",t.wordAry.length,""),i.xb(3),i.dc("",t.rptCount,"/",t.totalRpt," ")}}function l(t,e){1&t&&(i.Kb(0,"div",12),i.Kb(1,"div",1),i.Kb(2,"table",2),i.Kb(3,"tr"),i.Kb(4,"td",9),i.Kb(5,"button",13),i.ac(6,"\u8a2d\u5b9a"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb())}const p=[{path:"",component:(()=>{class t{constructor(t,e){this.authService=t,this.wordService=e,this.viewModel={exCount:[10,20,30,40,50],rptCount:[1,2,3,4]},this.model={exCount:10,rptCount:3},this.formError=""}ngOnInit(){const t=this.authService.getCurrentUser();console.log(t)}SetExCount(){}SetRptCount(){}onSubmit(){this.user=this.authService.getCurrentUser(),this.wordService.getWords(this.user.email,this.model.exCount,this.model.rptCount,this.user.grade).then(t=>{const e=t.map(t=>({wdId:t.wdId,eng:t.eng,chi:t.chi,grade:t.grade}));this.authService.setPrjItem("exWords",JSON.stringify(e)),JSON.parse(this.authService.getPrjItem("exWords")),this.formError="\u8a2d\u5b9a\u5b8c\u6210"}).catch(t=>{this.formError=t})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.a),i.Hb(b.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-settingpage"]],decls:22,vars:5,consts:[[1,"mainDiv"],[3,"ngSubmit"],["queryForm","ngForm"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["id","exCount","required","","name","exCount",1,"col-12","form-control","ctrlColor",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","rptCount","required","","name","rptCount",1,"col-12","form-control","ctrlColor",3,"ngModel","ngModelChange"],[1,"row","fMargin"],[1,"col-12"],["type","submit",1,"btn","btn-primary"],["role","alert",1,"alert","alert-danger"],[3,"value"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Kb(1,"h2"),i.ac(2,"\u7df4\u7fd2\u8a2d\u5b9a"),i.Jb(),i.Kb(3,"form",1,2),i.Rb("ngSubmit",(function(){return e.onSubmit()})),i.Zb(5,d,2,1,"div",3),i.Kb(6,"div",4),i.Kb(7,"div",5),i.Kb(8,"span",6),i.ac(9,"\u7df4\u7fd2\u5b57\u6578\uff1a"),i.Jb(),i.Jb(),i.Kb(10,"select",7),i.Rb("ngModelChange",(function(t){return e.model.exCount=t})),i.Zb(11,a,2,2,"option",8),i.Jb(),i.Jb(),i.Kb(12,"div",4),i.Kb(13,"div",5),i.Kb(14,"span",6),i.ac(15,"\u7df4\u7fd2\u6b21\u6578\uff1a"),i.Jb(),i.Jb(),i.Kb(16,"select",9),i.Rb("ngModelChange",(function(t){return e.model.rptCount=t})),i.Zb(17,h,2,2,"option",8),i.Jb(),i.Jb(),i.Kb(18,"div",10),i.Kb(19,"div",11),i.Kb(20,"button",12),i.ac(21,"\u8a2d\u5b9a"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(5),i.Ub("ngIf",e.formError),i.xb(5),i.Ub("ngModel",e.model.exCount),i.xb(1),i.Ub("ngForOf",e.viewModel.exCount),i.xb(5),i.Ub("ngModel",e.model.rptCount),i.xb(1),i.Ub("ngForOf",e.viewModel.rptCount))},directives:[c.m,c.e,c.f,r.i,c.k,c.j,c.d,c.g,r.h,c.h,c.l],styles:[""]}),t})()},{path:"spellex",component:(()=>{class t{constructor(t){this.authService=t,this.wIndex=1,this.rptCount=1,this.message="",this.wordAry=JSON.parse(t.getPrjItem("exWords")),this.totalRpt=this.authService.getPrjItem("repCount")}ngOnInit(){this.utterThis=new SpeechSynthesisUtterance,this.utterThis.lang="en-US",this.utterThis.rate=.9,this.utterThis.pitch=1,this.checkSuport(),this.reset()}checkSuport(){this.message=speechSynthesis?"\u700f\u89bd\u5668\u652f\u63f4\u82f1\u6587\u767c\u97f3":"\u700f\u89bd\u5668\u652f\u63f4\u82f1\u6587\u767c\u97f3\uff0c\u6539\u7528Chrome"}speakEng(){this.currentWord?(this.utterThis.text=this.currentWord.eng,speechSynthesis.speak(this.utterThis)):this.message=this.wIndex.toString()}reset(){this.wIndex=1,this.currentWord=this.wordAry[this.wIndex-1],this.total=this.wordAry.length,this.speakEng()}onKeydown(t){"Enter"===t.key?this.onEnter():"Escape"===t.key&&(this.wIndex++,this.rptCount=1,this.currentWord=this.wordAry[this.wIndex-1],this.speakEng(),this.message="",this.wIndex>this.wordAry.length&&(this.message="\u7df4\u7fd2\u5b8c\u6210",this.reset()))}onEnter(){this.message=this.exWord===this.currentWord.eng?"\u6b63\u78ba":"\u932f\u8aa4",this.rptCount.toString()===this.totalRpt?(this.rptCount=1,this.wIndex++,this.currentWord=this.wordAry[this.wIndex-1],this.speakEng()):(this.rptCount++,this.speakEng()),this.wIndex>this.wordAry.length&&(this.message="\u7df4\u7fd2\u5b8c\u6210",this.reset()),this.exWord="",console.log(this.exWord)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-wordspell"]],decls:22,vars:6,consts:[[1,"mainDiv"],[1,"row"],[1,"col-12"],[1,"center"],[4,"ngIf"],["type","text",1,"mainWord",3,"ngModel","ngModelChange","keydown"],["id","tDiv",1,"col-12"],["class","navbar fixed-bottom foot2nd",4,"ngIf"],[1,"alert","alert-danger"],[1,"left"],[1,"right"],[1,"justify-content-end"],[1,"navbar","fixed-bottom","foot2nd"],["type","button",1,"btn","btn-success"]],template:function(t,e){1&t&&(i.Kb(0,"div",0),i.Kb(1,"div",1),i.Kb(2,"table",2),i.Kb(3,"tr"),i.Kb(4,"td",3),i.Kb(5,"h2"),i.ac(6,"\u82f1\u6587\u55ae\u5b57\u7df4\u7fd2"),i.Jb(),i.Jb(),i.Jb(),i.Zb(7,u,4,1,"tr",4),i.Zb(8,g,7,4,"tr",4),i.Kb(9,"tr"),i.Kb(10,"td",3),i.Kb(11,"h4"),i.ac(12),i.Jb(),i.Jb(),i.Jb(),i.Kb(13,"tr"),i.Kb(14,"td",3),i.Kb(15,"h4"),i.ac(16),i.Jb(),i.Jb(),i.Jb(),i.Kb(17,"tr"),i.Kb(18,"td",3),i.Kb(19,"input",5),i.Rb("ngModelChange",(function(t){return e.exWord=t}))("keydown",(function(t){return e.onKeydown(t)})),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Ib(20,"div",6),i.Jb(),i.Zb(21,l,7,0,"div",7),i.Jb()),2&t&&(i.xb(7),i.Ub("ngIf",e.message),i.xb(1),i.Ub("ngIf",e.wordAry),i.xb(4),i.bc(e.currentWord.eng),i.xb(4),i.bc(e.currentWord.chi),i.xb(3),i.Ub("ngModel",e.exWord),i.xb(2),i.Ub("ngIf",!1))},directives:[r.i,c.b,c.d,c.g],styles:[".left[_ngcontent-%COMP%]{text-align:left;padding-left:15px}.right[_ngcontent-%COMP%]{text-align:right;padding-right:15px}.center[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]{margin-top:10px}.foot2nd[_ngcontent-%COMP%]{margin-bottom:50px;background-color:#008b8b}.showOk[_ngcontent-%COMP%]{padding-left:50px}.mainWord[_ngcontent-%COMP%]{margin-top:50px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(p)],o.e]}),t})(),m=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[r.b,f,c.c,c.i]]}),t})()}}]);