(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yebe:function(e,t,r){"use strict";r.r(t),r.d(t,"GeneralModule",(function(){return P}));var n=r("ofXK"),i=r("tyNb"),o=r("fXoL"),s=r("ej43"),a=r("pLZG");let b=(()=>{class e{constructor(e){this.router=e,this.urls=[],this.router.events.pipe(Object(a.a)(e=>e instanceof i.a)).subscribe(e=>{this.urls=[...this.urls,e.urlAfterRedirects]})}getPreviousUrl(){const e=this.urls.length;return e>1?this.urls[e-2]:"/"}getLastNonLoginUrl(){const e=["/register","/login"],t=this.urls.filter(t=>!e.includes(t)),r=t.length;return r>1?t[r-1]:"/"}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(i.b))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r("3Pt+");function c(e,t){if(1&e&&(o.Kb(0,"div",16),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}const d=function(e,t){return{"fa-eye-slash":e,"fa-eye":t}};let p=(()=>{class e{constructor(e,t,r){this.router=e,this.authenticationService=t,this.historyService=r,this.formError="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.passwordTextType=!0,this.password2TextType=!0,this.password2content=""}ngOnInit(){}setPasswordText(){this.passwordTextType=!this.passwordTextType}setPassword2Text(){this.password2TextType=!this.password2TextType}onRegisterSubmit(){console.log(this.credentials);const e=this.password2content;console.log(e),this.formError="",this.credentials.name&&this.credentials.email&&this.credentials.password?e!==this.credentials.password?this.formError="\u5bc6\u78bc\u8207\u78ba\u8a8d\u5bc6\u78bc\u5fc5\u9808\u76f8\u540c":this.doRegister():this.formError="\u5168\u90e8\u6b04\u4f4d\u90fd\u662f\u5fc5\u586b\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"}doRegister(){this.authenticationService.register(this.credentials).then(()=>this.router.navigateByUrl(this.historyService.getLastNonLoginUrl())).catch(e=>this.formError=e)}clearErr(){this.formError="",this.credentials.name=""}captalCase(e){return e?e.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.substr(1).toLowerCase()):""}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(s.a),o.Hb(b))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-register"]],decls:39,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"lead"],["routerLink","/general/login",1,"btn","btn-primary"],[3,"submit"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","name","name","name","placeholder","\u8f38\u5165 \u59d3\u540d ",1,"form-control",3,"ngModel","ngModelChange"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["id","password","name","password","placeholder","\u8f38\u5165\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],[1,"input-group-append"],[1,"fa",3,"ngClass","click"],["id","password2","name","password2","placeholder","\u78ba\u8a8d\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],["type","submit","role","button",1,"btn","btn-primary"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"p",2),o.bc(6,"\u5982\u679c\u5df2\u7d93\u662f\u6703\u54e1\u8acb\u76f4\u63a5 "),o.Kb(7,"a",3),o.bc(8,"\u767b \u5165"),o.Jb(),o.Jb(),o.Kb(9,"form",4),o.Rb("submit",(function(){return t.onRegisterSubmit()})),o.ac(10,c,2,1,"div",5),o.Kb(11,"div",6),o.Kb(12,"div",7),o.Kb(13,"span",8),o.bc(14,"\u59d3 \u540d\uff1a"),o.Jb(),o.Jb(),o.Kb(15,"input",9),o.Rb("ngModelChange",(function(e){return t.credentials.name=e})),o.Jb(),o.Jb(),o.Kb(16,"div",6),o.Kb(17,"div",7),o.Kb(18,"span",8),o.bc(19,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(20,"input",10),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(21,"div",6),o.Kb(22,"div",7),o.Kb(23,"span",8),o.bc(24,"\u5bc6 \u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(25,"input",11),o.Rb("ngModelChange",(function(e){return t.credentials.password=e})),o.Jb(),o.Kb(26,"div",12),o.Kb(27,"span",8),o.Kb(28,"i",13),o.Rb("click",(function(){return t.setPasswordText()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(29,"div",6),o.Kb(30,"div",7),o.Kb(31,"span",8),o.bc(32,"\u78ba \u8a8d\uff1a"),o.Jb(),o.Jb(),o.Kb(33,"input",14),o.Rb("ngModelChange",(function(e){return t.password2content=e})),o.Jb(),o.Kb(34,"div",12),o.Kb(35,"span",8),o.Kb(36,"i",13),o.Rb("click",(function(){return t.setPassword2Text()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(37,"button",15),o.bc(38,"\u8a3b\u518a"),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(10),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.name),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("type",t.passwordTextType?"password":"text")("ngModel",t.credentials.password),o.xb(3),o.Ub("ngClass",o.Vb(9,d,t.passwordTextType,!t.passwordTextType)),o.xb(5),o.Ub("type",t.password2TextType?"password":"text")("ngModel",t.password2content),o.xb(3),o.Ub("ngClass",o.Vb(12,d,t.password2TextType,!t.password2TextType)))},directives:[i.d,l.m,l.e,l.f,n.j,l.b,l.d,l.g,n.h],styles:[""]}),e})();function g(e,t){if(1&e&&(o.Kb(0,"div",19),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}const u=function(e,t){return{"fa-eye-slash":e,"fa-eye":t}};let m=(()=>{class e{constructor(e,t,r){this.router=e,this.authenticationService=t,this.historyService=r,this.formError="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.passwordTextType=!0}ngOnInit(){this.authenticationService.getCurrentUser()?this.router.navigateByUrl("/words"):(this.credentials.email=this.authenticationService.getMail(),this.credentials.name=this.authenticationService.getName())}setPasswordText(){this.passwordTextType=!this.passwordTextType}onLoginSubmit(){this.formError="",this.credentials.email&&this.credentials.password?this.doLogin():this.formError="\u5168\u90e8\u6b04\u4f4d\u90fd\u5fc5\u586b"}doLogin(){this.credentials.name=this.credentials.name,this.authenticationService.login(this.credentials).then(()=>{document.location.reload()}).catch(e=>{this.formError=e})}clearErr(){this.formError="",this.credentials.name=""}captalCase(e){return e?e.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.substr(1).toLowerCase()):""}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(s.a),o.Hb(b))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-login"]],decls:34,vars:9,consts:[[1,"row"],[1,"col-12"],[3,"submit"],[1,"lead"],["routerLink","/general/register",1,"btn","btn-primary"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["id","password","name","password","placeholder","\u8f38\u5165\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],[1,"input-group-append"],[1,"fa",3,"ngClass","click"],[1,"col-12","fMargin"],["type","checkbox","name","keepLocal",3,"ngModel","ngModelChange"],["for","keepLocal"],["role","group","aria-label","Basic example",1,"btn-group"],["type","submit","role","button",1,"btn","btn-primary"],["routerLink","/general/resetpws",1,"btn","btn-primary",2,"margin-left","80px"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"form",2),o.Rb("submit",(function(){return t.onLoginSubmit()})),o.Kb(6,"p",3),o.bc(7,"\u4e0d\u662f\u6703\u54e1\u8acb\u5148 "),o.Kb(8,"a",4),o.bc(9,"\u8a3b \u518a"),o.Jb(),o.Jb(),o.ac(10,g,2,1,"div",5),o.Kb(11,"div",6),o.Kb(12,"div",7),o.Kb(13,"span",8),o.bc(14,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(15,"input",9),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(16,"div",6),o.Kb(17,"div",7),o.Kb(18,"span",8),o.bc(19,"\u5bc6 \u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(20,"input",10),o.Rb("ngModelChange",(function(e){return t.credentials.password=e})),o.Jb(),o.Kb(21,"div",11),o.Kb(22,"span",8),o.Kb(23,"i",12),o.Rb("click",(function(){return t.setPasswordText()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(24,"div",13),o.Kb(25,"input",14),o.Rb("ngModelChange",(function(e){return t.credentials.keep=e})),o.Jb(),o.Kb(26,"label",15),o.bc(27,"\u8a18\u4f4fEmail\uff0c\u4e0b\u6b21\u4e0d\u7528\u8f38\u5165"),o.Jb(),o.Jb(),o.Kb(28,"div",13),o.Kb(29,"div",16),o.Kb(30,"button",17),o.bc(31,"\u767b\u5165"),o.Jb(),o.Kb(32,"a",18),o.bc(33,"\u5fd8\u8a18\u5bc6\u78bc"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(10),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("type",t.passwordTextType?"password":"text")("ngModel",t.credentials.password),o.xb(3),o.Ub("ngClass",o.Vb(6,u,t.passwordTextType,!t.passwordTextType)),o.xb(2),o.Ub("ngModel",t.credentials.keep))},directives:[l.m,l.e,l.f,i.d,n.j,l.b,l.d,l.g,n.h,l.a],styles:[""]}),e})();var h=r("FQVY"),f=r("N+FS");function w(e,t){if(1&e&&(o.Kb(0,"div",18),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}function J(e,t){if(1&e){const e=o.Lb();o.Kb(0,"li",20),o.Rb("click",(function(){o.Xb(e);const r=t.$implicit;return o.Tb(2).itemSelected(r)})),o.bc(1),o.Jb()}if(2&e){const e=t.$implicit;o.xb(1),o.cc(e)}}function K(e,t){if(1&e&&(o.Kb(0,"ui"),o.ac(1,J,2,1,"li",19),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.Ub("ngForOf",e.mailList1)}}function x(e,t){if(1&e&&(o.Kb(0,"option",21),o.bc(1),o.Jb()),2&e){const e=t.$implicit;o.Ub("ngValue",e),o.xb(1),o.cc(e)}}function v(e,t){if(1&e&&(o.Kb(0,"option",21),o.bc(1),o.Jb()),2&e){const e=t.$implicit;o.Ub("ngValue",e),o.xb(1),o.cc(e)}}function y(e,t){if(1&e&&(o.Kb(0,"div",12),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}function M(e,t){if(1&e&&(o.Kb(0,"div",14),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}function T(e,t){if(1&e&&(o.Kb(0,"div",15),o.bc(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.dc(" ",e.formError,"")}}const C=function(e,t){return{"fa-eye-slash":e,"fa-eye":t}},E=[{path:"register",component:p},{path:"login",component:m},{path:"admin",component:(()=>{class e{constructor(e,t,r){this.authService=e,this.generalService=t,this.wordsService=r,this.uploadFileName="",this.mailData=[],this.formError="",this.credentials={_id:"",name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.lastkeydown1=0,this.roleops=["client","user","admin"],this.gradeops=["\u521d\u7d1a","\u4e2d\u7d1a","\u4e2d\u9ad8\u7d1a"],this.user=this.authService.getCurrentUser()}ngOnInit(){this.lastkeydown1=(new Date).getTime(),this.getAutoMails()}onSubmit(){this.generalService.updateUser(this.credentials).then(e=>{const{message:t}=e;this.formError=t},e=>{console.log("Something wrong here",e)})}onDelete(){this.generalService.deleteUser(this.credentials.email).then(e=>{const{message:t}=e;this.formError=t},e=>{console.log("Something wrong here",e)})}onEnter(){const e=this.credentials.email;e&&this.generalService.getAUser(e).then(e=>{const{grade:t,role:r,name:n,_id:i}=e;this.credentials.grade=t,this.credentials.name=n,this.credentials.role=r,this.credentials._id=i})}getAutoMails(){this.generalService.mailAutoComp().then(e=>{this.retObj=e,Object.assign(this.mailData,this.retObj.ary)},e=>{console.log("Something wrong here",e)})}getMailsFirstWay(e){if("Enter"===e.key)return;this.mailList1=[];const t=this.credentials.email;if(0==t.length)return!1;t.length>1&&this.lastkeydown1-e.timeStamp>200&&(this.mailList1=this.searchFromArray(this.mailData,t))}searchFromArray(e,t){let r,n=[];for(r=0;r<e.length;r++)e[r].match(t)&&n.push(e[r]);return n}itemSelected(e){this.credentials.email=e,this.mailList1=[]}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(s.a),o.Hb(h.a),o.Hb(f.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-admin"]],decls:39,vars:8,consts:[[1,"row"],[1,"col-12"],[1,"lead"],["class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text",3,"click"],["type","email","id","email","name","email","autocomplete","off",1,"form-control",3,"ngModel","keyup.enter","keyup","ngModelChange"],[1,"sub-list"],[4,"ngIf"],[1,"input-group-text"],["type","email","id","name","name","name","placeholder","\u8f38\u5165 \u59d3\u540d ",1,"form-control",3,"ngModel","ngModelChange"],["id","grade","name","grade",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["id","role","name","role",1,"form-control",3,"ngModel","ngModelChange"],["role","group","aria-label","Basic example",1,"btn-group","fMargin"],["type","button","role","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-success",2,"margin-left","100px",3,"click"],[1,"alert","alert-danger"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngValue"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"p",2),o.bc(6,"\u641c\u5c0b\u4f7f\u7528\u8005 "),o.Jb(),o.ac(7,w,2,1,"div",3),o.Kb(8,"form"),o.Kb(9,"div",4),o.Kb(10,"div",5),o.Kb(11,"span",6),o.Rb("click",(function(){return t.credentials.email="",t.formError=""})),o.bc(12,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(13,"input",7),o.Rb("keyup.enter",(function(){return t.onEnter()}))("keyup",(function(e){return t.getMailsFirstWay(e)}))("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Kb(14,"div",8),o.Ib(15,"br"),o.ac(16,K,2,1,"ui",9),o.Jb(),o.Jb(),o.Kb(17,"div",4),o.Kb(18,"div",5),o.Kb(19,"span",10),o.bc(20,"\u59d3 \u540d\uff1a"),o.Jb(),o.Jb(),o.Kb(21,"input",11),o.Rb("ngModelChange",(function(e){return t.credentials.name=e})),o.Jb(),o.Jb(),o.Kb(22,"div",4),o.Kb(23,"div",5),o.Kb(24,"span",10),o.bc(25,"\u7d1a \u5225\uff1a"),o.Jb(),o.Jb(),o.Kb(26,"select",12),o.Rb("ngModelChange",(function(e){return t.credentials.grade=e})),o.ac(27,x,2,2,"option",13),o.Jb(),o.Jb(),o.Kb(28,"div",4),o.Kb(29,"div",5),o.Kb(30,"span",10),o.bc(31,"\u89d2 \u8272\uff1a"),o.Jb(),o.Jb(),o.Kb(32,"select",14),o.Rb("ngModelChange",(function(e){return t.credentials.role=e})),o.ac(33,v,2,2,"option",13),o.Jb(),o.Jb(),o.Kb(34,"div",15),o.Kb(35,"button",16),o.Rb("click",(function(){return t.onSubmit()})),o.bc(36,"\u4fee\u6539"),o.Jb(),o.Kb(37,"button",17),o.Rb("click",(function(){return t.onDelete()})),o.bc(38,"\u522a\u9664"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(7),o.Ub("ngIf",t.formError),o.xb(6),o.Ub("ngModel",t.credentials.email),o.xb(3),o.Ub("ngIf",t.mailList1),o.xb(5),o.Ub("ngModel",t.credentials.name),o.xb(5),o.Ub("ngModel",t.credentials.grade),o.xb(1),o.Ub("ngForOf",t.gradeops),o.xb(5),o.Ub("ngModel",t.credentials.role),o.xb(1),o.Ub("ngForOf",t.roleops))},directives:[n.j,l.m,l.e,l.f,l.b,l.d,l.g,l.k,n.i,l.h,l.l],styles:[".FClass[_ngcontent-%COMP%]{display:none;z-index:0}ul[_ngcontent-%COMP%]{border-radius:3px 3px 3px 3px;left:0;list-style:none;margin:0;padding:0;position:absolute;width:100%;top:100%;z-index:10000;overflow:hidden;font-size:12px;width:440px;max-height:34vh;overflow-y:scroll}li[_ngcontent-%COMP%]{display:flex;min-height:28px;padding-top:16px;padding-left:25px;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.1);font-size:18px;color:red;background-color:#fff}.autocomplete[_ngcontent-%COMP%]{position:absolute}.sub-list[_ngcontent-%COMP%]{position:fixed;margin-top:3px;z-index:5000;margin-left:100px}"]}),e})()},{path:"resetpws",component:(()=>{class e{constructor(e,t,r,n){this.router=e,this.authenticationService=t,this.generalService=r,this.historyService=n,this.formError="",this.userEmail=""}ngOnInit(){}onResetSubmit(){this.generalService.resetpws(this.userEmail).then(e=>{const{message:t}=e;this.formError=t,this.router.navigateByUrl("/general/login")}).catch(e=>{this.formError=e})}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(s.a),o.Hb(h.a),o.Hb(b))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-resetpassword"]],decls:18,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"submit"],[1,"lead"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","fMargin"],["role","group","aria-label","Basic example",1,"btn-group"],["type","submit","role","button","title","\u91cd\u8a2d\u4e4b\u5f8c\u539f\u5148\u7684\u5bc6\u78bc\u5c31\u4e0d\u80fd\u7528\u4e86",1,"btn","btn-primary"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"form",2),o.Rb("submit",(function(){return t.onResetSubmit()})),o.Kb(6,"p",3),o.bc(7,"\u586b\u5165\u8a3b\u518a\u7684email\uff0c\u65b0\u5bc6\u78bc\u6703\u5bc4\u5230email\u4fe1\u7bb1"),o.Jb(),o.ac(8,y,2,1,"div",4),o.Kb(9,"div",5),o.Kb(10,"div",6),o.Kb(11,"span",7),o.bc(12,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(13,"input",8),o.Rb("ngModelChange",(function(e){return t.userEmail=e})),o.Jb(),o.Jb(),o.Kb(14,"div",9),o.Kb(15,"div",10),o.Kb(16,"button",11),o.bc(17,"\u91cd\u8a2d\u5bc6\u78bc"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(8),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.userEmail))},directives:[l.m,l.e,l.f,n.j,l.b,l.d,l.g],styles:[""]}),e})()},{path:"selfuserset",component:(()=>{class e{constructor(e,t){this.router=e,this.authService=t,this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.formError=""}ngOnInit(){this.credentials=this.authService.getCurrentUser()}downGrade(){"\u521d\u7d1a"===this.credentials.grade&&(this.formError="\u521d\u7d1a\u7121\u6cd5\u964d\u7d1a")}changePassword(){this.router.navigateByUrl("/general/changepws")}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(s.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-selfuserset"]],decls:36,vars:5,consts:[[1,"row"],[1,"col-12"],[1,"lead"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","name","name","name","placeholder","\u8f38\u5165 \u59d3\u540d ",1,"form-control",3,"ngModel","ngModelChange"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["type","email","id","grade","name","grade","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["type","email","id","role","name","role","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["role","group","aria-label","Basic example",1,"btn-group","fMargin"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-success"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"form"),o.Kb(6,"p",2),o.bc(7,"\u4f7f\u7528\u8005\u5e33\u865f\u81ea\u6211\u7ba1\u7406"),o.Jb(),o.ac(8,M,2,1,"div",3),o.Kb(9,"div",4),o.Kb(10,"div",5),o.Kb(11,"span",6),o.bc(12,"\u59d3 \u540d\uff1a"),o.Jb(),o.Jb(),o.Kb(13,"input",7),o.Rb("ngModelChange",(function(e){return t.credentials.name=e})),o.Jb(),o.Jb(),o.Kb(14,"div",4),o.Kb(15,"div",5),o.Kb(16,"span",6),o.bc(17,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(18,"input",8),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(19,"div",4),o.Kb(20,"div",5),o.Kb(21,"span",6),o.bc(22,"\u7b49 \u7d1a\uff1a"),o.Jb(),o.Jb(),o.Kb(23,"input",9),o.Rb("ngModelChange",(function(e){return t.credentials.grade=e})),o.Jb(),o.Jb(),o.Kb(24,"div",4),o.Kb(25,"div",5),o.Kb(26,"span",6),o.bc(27,"\u89d2 \u8272\uff1a"),o.Jb(),o.Jb(),o.Kb(28,"input",10),o.Rb("ngModelChange",(function(e){return t.credentials.role=e})),o.Jb(),o.Jb(),o.Kb(29,"div",11),o.Kb(30,"button",12),o.Rb("click",(function(){return t.changePassword()})),o.bc(31,"\u4fee\u6539\u5bc6\u78bc"),o.Jb(),o.Kb(32,"button",13),o.bc(33,"\u5347\u7d1a"),o.Jb(),o.Kb(34,"button",12),o.Rb("click",(function(){return t.downGrade()})),o.bc(35,"\u964d\u7d1a"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(8),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.name),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("ngModel",t.credentials.grade),o.xb(5),o.Ub("ngModel",t.credentials.role))},directives:[l.m,l.e,l.f,n.j,l.b,l.d,l.g],styles:[".foot2nd[_ngcontent-%COMP%]{margin-bottom:50px;background-color:#008b8b}.left[_ngcontent-%COMP%]{text-align:left;padding-left:15px}.right[_ngcontent-%COMP%]{text-align:right;padding-right:15px}.center[_ngcontent-%COMP%]{text-align:center;overflow-wrap:normal}.clm1[_ngcontent-%COMP%]{width:30%}.clm2[_ngcontent-%COMP%]{width:70%}.full[_ngcontent-%COMP%]{width:100%}.btn[_ngcontent-%COMP%]{padding:0 12px;margin:0 5px}"]}),e})()},{path:"changepws",component:(()=>{class e{constructor(e,t,r){this.generalService=e,this.router=t,this.authService=r,this.oldPassword="",this.newPassword="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.formError="",this.oldPasswordTextType=!0,this.passwordTextType=!0,this.newPasswordTextType=!0}ngOnInit(){this.credentials=this.authService.getCurrentUser()}onChangePassword(){this.credentials.password&&this.oldPassword&&this.newPassword?this.credentials.password!==this.newPassword?this.formError="\u65b0\u5bc6\u78bc\u8207\u518d\u78ba\u8a8d\u5bc6\u78bc\u5fc5\u9808\u76f8\u540c":this.generalService.changepws(this.credentials,this.oldPassword).then(e=>{const{message:t}=e;this.formError=t,this.router.navigateByUrl("/general/selfuserset")}).catch(e=>{this.formError=e}):this.formError="\u6240\u6709\u6b04\u4f4d\u90fd\u5fc5\u586b"}setNewPasswordText(){this.newPasswordTextType=!this.newPasswordTextType}setPasswordText(){this.passwordTextType=!this.passwordTextType}setOldPasswordText(){this.oldPasswordTextType=!this.oldPasswordTextType}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(h.a),o.Hb(i.b),o.Hb(s.a))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-changepws"]],decls:40,vars:20,consts:[[1,"row"],[1,"col-12"],[1,"lead"],[3,"submit"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["id","password","name","password","placeholder","\u8f38\u5165\u820a\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],[1,"input-group-append"],[1,"fa",3,"ngClass","click"],["id","password","name","password","placeholder","\u8f38\u5165\u65b0\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],["id","password2","name","password2","placeholder","\u78ba\u8a8d\u65b0\u5bc6\u78bc",1,"form-control",3,"type","ngModel","ngModelChange"],["type","submit","role","button",1,"btn","btn-primary","fMargin"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"p",2),o.bc(6,"\u4fee\u6539\u500b\u4eba\u5bc6\u78bc "),o.Jb(),o.Kb(7,"form",3),o.Rb("submit",(function(){return t.onChangePassword()})),o.ac(8,T,2,1,"div",4),o.Kb(9,"div",5),o.Kb(10,"div",6),o.Kb(11,"span",7),o.bc(12,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(13,"input",8),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(14,"div",5),o.Kb(15,"div",6),o.Kb(16,"span",7),o.bc(17,"\u820a\u5bc6\u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(18,"input",9),o.Rb("ngModelChange",(function(e){return t.oldPassword=e})),o.Jb(),o.Kb(19,"div",10),o.Kb(20,"span",7),o.Kb(21,"i",11),o.Rb("click",(function(){return t.setOldPasswordText()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(22,"div",5),o.Kb(23,"div",6),o.Kb(24,"span",7),o.bc(25,"\u65b0\u5bc6\u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(26,"input",12),o.Rb("ngModelChange",(function(e){return t.credentials.password=e})),o.Jb(),o.Kb(27,"div",10),o.Kb(28,"span",7),o.Kb(29,"i",11),o.Rb("click",(function(){return t.setPasswordText()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(30,"div",5),o.Kb(31,"div",6),o.Kb(32,"span",7),o.bc(33,"\u518d\u78ba\u8a8d\uff1a"),o.Jb(),o.Jb(),o.Kb(34,"input",13),o.Rb("ngModelChange",(function(e){return t.newPassword=e})),o.Jb(),o.Kb(35,"div",10),o.Kb(36,"span",7),o.Kb(37,"i",11),o.Rb("click",(function(){return t.setNewPasswordText()})),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(38,"button",14),o.bc(39,"\u9001\u51fa"),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(8),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("type",t.oldPasswordTextType?"password":"text")("ngModel",t.oldPassword),o.xb(3),o.Ub("ngClass",o.Vb(11,C,t.oldPasswordTextType,!t.oldPasswordTextType)),o.xb(5),o.Ub("type",t.passwordTextType?"password":"text")("ngModel",t.credentials.password),o.xb(3),o.Ub("ngClass",o.Vb(14,C,t.passwordTextType,!t.passwordTextType)),o.xb(5),o.Ub("type",t.newPasswordTextType?"password":"text")("ngModel",t.newPassword),o.xb(3),o.Ub("ngClass",o.Vb(17,C,t.newPasswordTextType,!t.newPasswordTextType)))},directives:[l.m,l.e,l.f,n.j,l.b,l.d,l.g,n.h],styles:[""]}),e})()}];let U=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(E)],i.e]}),e})(),P=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[n.b,U,l.c,l.i]]}),e})()}}]);