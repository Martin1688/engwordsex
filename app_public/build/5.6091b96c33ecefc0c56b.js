(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{yebe:function(e,t,r){"use strict";r.r(t),r.d(t,"GeneralModule",(function(){return K}));var n=r("ofXK"),i=r("tyNb"),o=r("fXoL"),a=r("ej43"),s=r("pLZG");let l=(()=>{class e{constructor(e){this.router=e,this.urls=[],this.router.events.pipe(Object(s.a)(e=>e instanceof i.a)).subscribe(e=>{this.urls=[...this.urls,e.urlAfterRedirects]})}getPreviousUrl(){const e=this.urls.length;return e>1?this.urls[e-2]:"/"}getLastNonLoginUrl(){const e=["/register","/login"],t=this.urls.filter(t=>!e.includes(t)),r=t.length;return r>1?t[r-1]:"/"}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(i.b))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=r("3Pt+");function b(e,t){if(1&e&&(o.Kb(0,"div",13),o.ac(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.cc(" ",e.formError,"")}}let d=(()=>{class e{constructor(e,t,r){this.router=e,this.authenticationService=t,this.historyService=r,this.formError="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0}}ngOnInit(){}onRegisterSubmit(){this.formError="",this.credentials.name&&this.credentials.email&&this.credentials.password?this.doRegister():this.formError="\u5168\u90e8\u6b04\u4f4d\u90fd\u662f\u5fc5\u586b\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"}doRegister(){this.authenticationService.register(this.credentials).then(()=>this.router.navigateByUrl(this.historyService.getLastNonLoginUrl())).catch(e=>this.formError=e)}clearErr(){this.formError="",this.credentials.name=""}captalCase(e){return e?e.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.substr(1).toLowerCase()):""}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(a.a),o.Hb(l))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-register"]],decls:28,vars:4,consts:[[1,"row"],[1,"col-12"],[1,"lead"],["routerLink","/general/login",1,"btn","btn-primary"],[3,"submit"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 \u59d3\u540d ",1,"form-control",3,"ngModel","ngModelChange"],["type","email","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["type","pasword","id","password","name","password","placeholder","\u8f38\u5165\u5bc6\u78bc",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","role","button",1,"btn","btn-primary"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"p",2),o.ac(6,"\u5982\u679c\u5df2\u7d93\u662f\u6703\u54e1\u8acb\u76f4\u63a5 "),o.Kb(7,"a",3),o.ac(8,"\u767b \u5165"),o.Jb(),o.Jb(),o.Kb(9,"form",4),o.Rb("submit",(function(){return t.onRegisterSubmit()})),o.Zb(10,b,2,1,"div",5),o.Kb(11,"div",6),o.Kb(12,"div",7),o.Kb(13,"span",8),o.ac(14,"\u59d3 \u540d\uff1a"),o.Jb(),o.Jb(),o.Kb(15,"input",9),o.Rb("ngModelChange",(function(e){return t.credentials.name=e})),o.Jb(),o.Jb(),o.Kb(16,"div",6),o.Kb(17,"div",7),o.Kb(18,"span",8),o.ac(19,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(20,"input",10),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(21,"div",6),o.Kb(22,"div",7),o.Kb(23,"span",8),o.ac(24,"\u5bc6 \u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(25,"input",11),o.Rb("ngModelChange",(function(e){return t.credentials.password=e})),o.Jb(),o.Jb(),o.Kb(26,"button",12),o.ac(27,"\u8a3b\u518a"),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(10),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.name),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("ngModel",t.credentials.password))},directives:[i.d,c.m,c.e,c.f,n.i,c.b,c.d,c.g],styles:[""]}),e})();function p(e,t){if(1&e&&(o.Kb(0,"div",15),o.ac(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.cc(" ",e.formError,"")}}let u=(()=>{class e{constructor(e,t,r){this.router=e,this.authenticationService=t,this.historyService=r,this.formError="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0}}ngOnInit(){this.credentials.email=this.authenticationService.getMail(),this.credentials.password=localStorage.getItem("password")}onLoginSubmit(){this.formError="",this.credentials.email&&this.credentials.password?this.doLogin():this.formError="\u5168\u90e8\u6b04\u4f4d\u90fd\u5fc5\u586b"}doLogin(){this.credentials.name=this.credentials.name,this.authenticationService.login(this.credentials).then(()=>{this.router.navigateByUrl(this.historyService.getLastNonLoginUrl())}).catch(e=>{this.formError=e})}clearErr(){this.formError="",this.credentials.name=""}captalCase(e){return e?e.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.substr(1).toLowerCase()):""}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(i.b),o.Hb(a.a),o.Hb(l))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-login"]],decls:27,vars:4,consts:[[1,"row"],[1,"col-12"],[1,"lead"],["routerLink","/general/register",1,"btn","btn-primary"],[3,"submit"],["role","alert","class","alert alert-danger",4,"ngIf"],[1,"input-group","fMargin"],[1,"input-group-prepend"],[1,"input-group-text"],["type","email","autocomplete","on","id","email","name","email","placeholder","\u8f38\u5165 email ",1,"form-control",3,"ngModel","ngModelChange"],["type","password","autocomplete","on","id","password","name","password","placeholder","\u8f38\u5165\u5bc6\u78bc",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","fMargin"],["type","submit","role","button",1,"btn","btn-primary"],["type","checkbox","name","keepLocal",2,"margin-left","100px",3,"ngModel","ngModelChange"],["for","keepLocal"],["role","alert",1,"alert","alert-danger"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"p",2),o.ac(6,"\u4e0d\u662f\u6703\u54e1\u8acb\u5148 "),o.Kb(7,"a",3),o.ac(8,"\u8a3b \u518a"),o.Jb(),o.Jb(),o.Kb(9,"form",4),o.Rb("submit",(function(){return t.onLoginSubmit()})),o.Zb(10,p,2,1,"div",5),o.Kb(11,"div",6),o.Kb(12,"div",7),o.Kb(13,"span",8),o.ac(14,"Email\uff1a"),o.Jb(),o.Jb(),o.Kb(15,"input",9),o.Rb("ngModelChange",(function(e){return t.credentials.email=e})),o.Jb(),o.Jb(),o.Kb(16,"div",6),o.Kb(17,"div",7),o.Kb(18,"span",8),o.ac(19,"\u5bc6 \u78bc\uff1a"),o.Jb(),o.Jb(),o.Kb(20,"input",10),o.Rb("ngModelChange",(function(e){return t.credentials.password=e})),o.Jb(),o.Jb(),o.Kb(21,"div",11),o.Kb(22,"button",12),o.ac(23,"\u767b\u5165"),o.Jb(),o.Kb(24,"input",13),o.Rb("ngModelChange",(function(e){return t.credentials.keep=e})),o.Jb(),o.Kb(25,"label",14),o.ac(26,"\u8a18\u4f4fEmail\uff0c\u4e0b\u6b21\u4e0d\u7528\u8f38\u5165"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(10),o.Ub("ngIf",t.formError),o.xb(5),o.Ub("ngModel",t.credentials.email),o.xb(5),o.Ub("ngModel",t.credentials.password),o.xb(4),o.Ub("ngModel",t.credentials.keep))},directives:[i.d,c.m,c.e,c.f,n.i,c.b,c.d,c.g,c.a],styles:[""]}),e})();var m=r("FQVY"),g=r("tk/3"),h=r("AytR");let f=(()=>{class e{constructor(e){this.http=e,this.apiBaseUrl=h.a.apiBaseUrl}handleError(e){return console.log(e.status),Promise.reject(401==e.status?"\u5e33\u865f\u4e0d\u5b58\u5728\uff0c\u8acb\u5148\u8a3b\u518a":402==e.status?"\u5bc6\u78bc\u4e0d\u6b63\u78ba":e.message||e)}sendwords(e){const t=this.apiBaseUrl+"/words",r={headers:new g.c({Authorization:"Bearer "+localStorage.getItem("token")})};return this.http.post(t,e,r).toPromise().then(e=>e).catch(this.handleError)}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(g.a))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function v(e,t){if(1&e&&(o.Kb(0,"span"),o.ac(1),o.Jb()),2&e){const e=o.Tb();o.xb(1),o.cc("\u4e0a\u50b3\u6a94\u540d\uff1a",e.uploadFileName,"")}}const J=[{path:"register",component:d},{path:"login",component:u},{path:"admin",component:(()=>{class e{constructor(e,t,r){this.authService=e,this.dataService=t,this.wordsService=r,this.uploadFileName="",this.formError="",this.credentials={name:"",email:"",password:"",role:"client",grade:"\u521d\u7d1a",memo:"",signdate:"",keep:!0},this.user=this.authService.getCurrentUser()}ngOnInit(){}onUpfile(e){let t=e[0];this.uploadFileName=t.name;let r=new FileReader,n=this;r.onloadend=function(e){n.dealWordBase(r.result.toString().split("/\r\n|\r|\n/",1e4))},r.readAsText(t)}pressBtn(){document.getElementById("myFile").click()}dealWordBase(e){for(let t of e){const e=t.split(",",10);this.wordsService.sendwords({wdId:e[0],eng:e[1],chi:e[2],grade:e[4],memo:""}),console.log(t)}}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(a.a),o.Hb(m.a),o.Hb(f))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-admin"]],decls:11,vars:1,consts:[[1,"row"],["enctype","multipart/form-data"],["type","file","id","myFile","name","myFile",1,"FClass",3,"change"],[1,"col-12"],[4,"ngIf"],["type","button","role","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(o.Ib(0,"br"),o.Ib(1,"br"),o.Ib(2,"br"),o.Kb(3,"div",0),o.Kb(4,"div"),o.Kb(5,"form",1),o.Kb(6,"input",2),o.Rb("change",(function(e){return t.onUpfile(e.target.files)})),o.Jb(),o.Kb(7,"div",3),o.Zb(8,v,2,1,"span",4),o.Jb(),o.Kb(9,"button",5),o.Rb("click",(function(){return t.pressBtn()})),o.ac(10,"\u4e0a\u50b3\u5b57\u5eab"),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(8),o.Ub("ngIf",t.uploadFileName))},directives:[c.m,c.e,c.f,n.i],styles:[".FClass[_ngcontent-%COMP%]{display:none}"]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(J)],i.e]}),e})(),K=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[n.b,w,c.c,c.i]]}),e})()}}]);