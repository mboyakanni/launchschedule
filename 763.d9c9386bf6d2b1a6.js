"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[763],{659:(C,f,r)=>{r.d(f,{c:()=>n});var o=r(6895),g=r(1571);let n=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=g.oAB({type:s}),s.\u0275inj=g.cJS({imports:[o.ez]}),s})()},763:(C,f,r)=>{r.d(f,{A:()=>_});var o=r(6895),g=r(7559),n=r(8956),s=r(659),p=r(9928),a=r(2154),v=r(1571);let _=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=v.oAB({type:m}),m.\u0275inj=v.cJS({imports:[g.N,o.ez,n.s,s.c,p.Pc,a.P]}),m})()},7559:(C,f,r)=>{r.d(f,{N:()=>an});var o=r(8688),g=r(5861),n=r(1571),s=r(6944),p=r(6895),a=r(9928);function v(e,u){if(1&e&&(n.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-subtitle"),n._uU(3),n.qZA(),n.TgZ(4,"ion-card-title"),n._uU(5),n.qZA()(),n.TgZ(6,"ion-card-content")(7,"div",1)(8,"p"),n._uU(9),n.qZA()()()()),2&e){const t=n.oxw();n.xp6(3),n.Oqu(t.mission.type),n.xp6(2),n.Oqu(t.mission.name),n.xp6(4),n.Oqu(t.mission.description)}}let _=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-mission-list-entry"]],inputs:{mission:"mission"},decls:1,vars:1,consts:[[4,"ngIf"],["id","description"]],template:function(t,i){1&t&&n.YNc(0,v,10,3,"ion-card",0),2&t&&n.Q6J("ngIf",void 0!==i.mission)},dependencies:[p.O5,a.PM,a.FN,a.Zi,a.tO,a.Dq],styles:["ion-card[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),e})();var m=r(8982),c=r(9338),d=r(1710),A=r(1839),Z=r(7720),O=r(4553),T=r(4819),P=r(1636),M=r(792),b=r(6351);function w(e,u){1&e&&(n.TgZ(0,"ion-item",13)(1,"ion-label"),n._uU(2,"More Info"),n.qZA()()),2&e&&n.Q6J("href",u.$implicit.url)}function x(e,u){if(1&e){const t=n.EpF();n.TgZ(0,"ion-chip",14),n.NdJ("click",function(){n.CHM(t);const l=n.oxw(2);return n.KtG(l.navigate("https://twitter.com/hashtag/",l.launch.hashtag))}),n._UZ(1,"ion-icon",15),n.TgZ(2,"ion-label"),n._uU(3),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(3),n.Oqu(t.launch.hashtag)}}function U(e,u){if(1&e){const t=n.EpF();n.TgZ(0,"ion-chip",14),n.NdJ("click",function(){n.CHM(t);const l=n.oxw(2);return n.KtG(l.navigate("https://www.instagram.com/explore/tags/",l.launch.hashtag))}),n._UZ(1,"ion-icon",16),n.TgZ(2,"ion-label"),n._uU(3),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(3),n.Oqu(t.launch.hashtag)}}function D(e,u){if(1&e&&(n.TgZ(0,"ion-card")(1,"div",2)(2,"div",3),n._UZ(3,"ion-img",4),n.qZA(),n.TgZ(4,"div",3),n._UZ(5,"ion-img-viewer",5),n.qZA()(),n.TgZ(6,"ion-card-header")(7,"ion-card-subtitle"),n._uU(8),n.qZA(),n.TgZ(9,"ion-card-title"),n._uU(10),n.qZA()(),n.TgZ(11,"ion-card-content")(12,"div",6),n._UZ(13,"app-launch-status",7)(14,"app-countdown",8),n.TgZ(15,"div",9),n.YNc(16,w,3,1,"ion-item",10),n.qZA(),n.TgZ(17,"div",11),n.YNc(18,x,4,1,"ion-chip",12),n.YNc(19,U,4,1,"ion-chip",12),n.qZA()()()()),2&e){const t=n.oxw();n.xp6(3),n.Q6J("src",t.imageUrl?t.imageUrl:t.placeholderService.getPlaceholder()),n.xp6(2),n.Q6J("title",t.title)("text",t.subtitle)("swipeToClose",!1)("src",t.imageUrl?t.imageUrl:t.placeholderService.getPlaceholder()),n.xp6(3),n.Oqu(t.subtitle),n.xp6(2),n.Oqu(t.title),n.xp6(3),n.Q6J("status",t.launch.status),n.xp6(1),n.Q6J("date",t.date),n.xp6(2),n.Q6J("ngForOf",t.launch.infoURLs),n.xp6(2),n.Q6J("ngIf",t.launch.hashtag),n.xp6(1),n.Q6J("ngIf",t.launch.hashtag)}}const L=function(e){return{type:"agency",id:e}},I=function(e){return{type:"location",id:e}},E=function(e){return{type:"pad",id:e}},J=function(e){return{type:"rocket",id:e}},q=function(e,u,t,i){return[e,u,t,i]};let F=(()=>{class e{constructor(t,i){this.service=t,this.placeholderService=i}ngOnInit(){var t=this;return(0,g.Z)(function*(){t.date=new Date(t.launch.net),t.title=t.launch.name.split("|")[1].trim(),t.subtitle=t.launch.name.split("|")[0].trim(),t.imageUrl=t.launch.infographic?t.launch.infographic:t.launch.image})()}navigate(t,i){window.location.href=t+i.replace("#","")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.R),n.Y36(O.Q))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-launch-detail-card"]],inputs:{launch:"launch"},decls:2,vars:16,consts:[["type","launch",3,"id","relatedTypeIds"],[4,"ngIf"],["id","image"],[1,"image-wrapper"],["id","background",3,"src"],["id","foreground",3,"title","text","swipeToClose","src"],["id","content"],[3,"status"],[3,"date"],["id","links"],[3,"href",4,"ngFor","ngForOf"],["id","social"],[3,"click",4,"ngIf"],[3,"href"],[3,"click"],["name","logo-twitter","color","dark"],["name","logo-instagram","color","dark"]],template:function(t,i){1&t&&(n._UZ(0,"app-notification-icon",0),n.YNc(1,D,20,12,"ion-card",1)),2&t&&(n.Q6J("id",i.launch.id)("relatedTypeIds",n.l5B(11,q,n.VKq(3,L,i.launch.launch_service_provider?i.launch.launch_service_provider.id:0),n.VKq(5,I,i.launch.pad&&i.launch.pad.location?i.launch.pad.location.id:0),n.VKq(7,E,i.launch.pad?i.launch.pad.id:0),n.VKq(9,J,i.launch.rocket&&i.launch.rocket.configuration?i.launch.rocket.configuration.id:0))),n.xp6(1),n.Q6J("ngIf",void 0!==i.launch))},dependencies:[p.sg,p.O5,a.PM,a.FN,a.Zi,a.tO,a.Dq,a.hM,a.gu,a.Xz,a.Ie,a.Q$,T.M,P.t,M.z,b.A6],styles:['ion-card[_ngcontent-%COMP%]{text-align:center;height:100%}#content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}#image[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;height:12rem;width:100%}#image[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:25%;display:inline-block;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,var(--ion-item-background) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#002f4b",endColorstr="#00000000",GradientType=0)}img[_ngcontent-%COMP%]{max-width:100%;display:block;height:15rem}.image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;width:100%}#background[_ngcontent-%COMP%]{width:100%;opacity:.2;height:12rem}#background[_ngcontent-%COMP%] {-o-object-fit:fill!important;object-fit:fill!important}#foreground[_ngcontent-%COMP%]{height:12rem}']}),e})();function Q(e,u){if(1&e&&(n.TgZ(0,"div",22)(1,"ion-item")(2,"ion-label"),n._uU(3),n.qZA()(),n._UZ(4,"app-astronaut-list-entry",23),n.qZA()),2&e){const t=u.$implicit;n.xp6(3),n.hij(" ",t.role.role," "),n.xp6(1),n.Q6J("id",t.astronaut.id)}}function N(e,u){if(1&e&&(n.TgZ(0,"div",20),n.YNc(1,Q,5,2,"div",21),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.launch.rocket.spacecraft_stage.launch_crew)}}function k(e,u){if(1&e&&(n.TgZ(0,"div",24)(1,"ion-item")(2,"ion-label"),n._uU(3," Mission "),n.qZA()(),n._UZ(4,"app-mission-list-entry",25),n.qZA()),2&e){const t=n.oxw(2);n.xp6(4),n.Q6J("mission",t.launch.mission)}}function Y(e,u){1&e&&n._UZ(0,"app-youtube-video",28),2&e&&n.Q6J("launchVideo",u.$implicit)}function S(e,u){if(1&e&&(n.TgZ(0,"div",26)(1,"ion-item")(2,"ion-label"),n._uU(3," Videos "),n.qZA()(),n.YNc(4,Y,1,1,"app-youtube-video",27),n.qZA()),2&e){const t=n.oxw(2);n.xp6(4),n.Q6J("ngForOf",t.launch.vidURLs)}}function R(e,u){if(1&e&&(n.TgZ(0,"div",8)(1,"div",9),n._UZ(2,"app-launch-detail-card",10),n.qZA(),n.YNc(3,N,2,1,"div",11),n.TgZ(4,"div",12)(5,"ion-item")(6,"ion-label"),n._uU(7," Rocket "),n.qZA()(),n._UZ(8,"app-rocket-list-entry",13),n.qZA(),n.YNc(9,k,5,1,"div",14),n.TgZ(10,"div",15)(11,"ion-item")(12,"ion-label"),n._uU(13," Pad "),n.qZA()(),n._UZ(14,"app-pad-list-entry",16),n.qZA(),n.TgZ(15,"div",17)(16,"ion-item")(17,"ion-label"),n._uU(18," Agency "),n.qZA()(),n._UZ(19,"app-agency-list-entry",18),n.qZA(),n.YNc(20,S,5,1,"div",19),n.qZA()),2&e){const t=n.oxw();n.xp6(2),n.Q6J("launch",t.launch),n.xp6(1),n.Q6J("ngIf",t.launch.rocket.spacecraft_stage&&t.launch.rocket.spacecraft_stage.launch_crew),n.xp6(5),n.Q6J("rocket",t.launch.rocket.configuration),n.xp6(1),n.Q6J("ngIf",t.launch.mission),n.xp6(5),n.Q6J("pad",t.launch.pad),n.xp6(5),n.Q6J("agency",t.launch.launch_service_provider),n.xp6(1),n.Q6J("ngIf",t.launch.vidURLs&&t.launch.vidURLs.length>0)}}let K=(()=>{class e{constructor(t,i){this.activatedRoute=t,this.service=i,this.launch=void 0}ngOnInit(){var t=this;return(0,g.Z)(function*(){t.load()})()}load(t){var i=this;return(0,g.Z)(function*(){i.id=i.activatedRoute.snapshot.paramMap.get("id"),i.launch=yield i.service.getLaunchById(i.id,t),t&&t.target.complete(),i.title=i.launch.name.split("|")[1].trim()})()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o.gz),n.Y36(s.R))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-launch"]],decls:14,vars:5,consts:[[3,"translucent"],["slot","start"],["color","primary","defaultHref","launch"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","fixed",3,"ionRefresh"],["id","container",4,"ngIf"],["id","container"],["id","launch"],[3,"launch"],["id","crew",4,"ngIf"],["id","rocket"],[3,"rocket"],["id","mission",4,"ngIf"],["id","pad"],[3,"pad"],["id","agency"],[3,"agency"],["id","video",4,"ngIf"],["id","crew"],["class","crew-member",4,"ngFor","ngForOf"],[1,"crew-member"],[3,"id"],["id","mission"],[3,"mission"],["id","video"],[3,"launchVideo",4,"ngFor","ngForOf"],[3,"launchVideo"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5),n.qZA()()(),n.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),n._uU(10),n.qZA()()(),n.TgZ(11,"ion-refresher",6),n.NdJ("ionRefresh",function(h){return i.load(h)}),n._UZ(12,"ion-refresher-content"),n.qZA(),n.YNc(13,R,21,7,"div",7),n.qZA()),2&t&&(n.Q6J("translucent",!0),n.xp6(5),n.Oqu(i.title),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(4),n.Oqu(i.title),n.xp6(3),n.Q6J("ngIf",void 0!==i.launch))},dependencies:[p.sg,p.O5,a.oU,a.Sm,a.W2,a.Gu,a.Ie,a.Q$,a.nJ,a.Wo,a.sr,a.wd,a.cs,_,m.j,c.C,d.l,A.a,Z.j,F],styles:["ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast)}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-toolbar[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-header.header-collapse-condense-inactive[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}.toolbar-title-large.ios[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}"]}),e})();var z=r(57);let B=(()=>{class e{constructor(){this.showFilter=!1,this.launches=[],this.scrollY=0,this.upcomingPreviousAll=z.O.UPCOMING}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=r(433),G=r(7770),V=r(5854);const j=["launchOverviewContent"];function W(e,u){if(1&e){const t=n.EpF();n.TgZ(0,"ion-toolbar")(1,"ion-searchbar",17),n.NdJ("ionChange",function(l){n.CHM(t);const h=n.oxw();return n.KtG(h.searchChange(l))}),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("value",t.store.search)}}function H(e,u){if(1&e){const t=n.EpF();n.TgZ(0,"ion-toolbar")(1,"ion-segment",18),n.NdJ("ionChange",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.loadFirst())})("ngModelChange",function(l){n.CHM(t);const h=n.oxw();return n.KtG(h.store.upcomingPreviousAll=l)}),n.TgZ(2,"ion-segment-button",19),n._UZ(3,"ion-icon",20),n.TgZ(4,"ion-label"),n._uU(5,"Previous"),n.qZA()(),n.TgZ(6,"ion-segment-button",21),n._UZ(7,"ion-icon",22),n.TgZ(8,"ion-label"),n._uU(9,"All"),n.qZA()(),n.TgZ(10,"ion-segment-button",23),n._UZ(11,"ion-icon",24),n.TgZ(12,"ion-label"),n._uU(13,"Upcoming"),n.qZA()()()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngModel",t.store.upcomingPreviousAll)}}function X(e,u){if(1&e){const t=n.EpF();n.TgZ(0,"ion-toolbar")(1,"ion-item")(2,"ion-label"),n._uU(3,"From"),n.qZA(),n.TgZ(4,"ion-datetime",25),n.NdJ("ionChange",function(l){n.CHM(t);const h=n.oxw();return n.KtG(h.startChange(l))}),n.qZA(),n.TgZ(5,"ion-buttons")(6,"ion-button",26),n.NdJ("click",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.startToday())}),n._UZ(7,"ion-icon",27),n.qZA(),n.TgZ(8,"ion-button",26),n.NdJ("click",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.startClear())}),n._UZ(9,"ion-icon",28),n.qZA()()(),n.TgZ(10,"ion-item")(11,"ion-label"),n._uU(12,"To"),n.qZA(),n.TgZ(13,"ion-datetime",29),n.NdJ("ionChange",function(l){n.CHM(t);const h=n.oxw();return n.KtG(h.endChange(l))}),n.qZA(),n.TgZ(14,"ion-buttons")(15,"ion-button",26),n.NdJ("click",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.endToday())}),n._UZ(16,"ion-icon",27),n.qZA(),n.TgZ(17,"ion-button",26),n.NdJ("click",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.endClear())}),n._UZ(18,"ion-icon",28),n.qZA()()()()}if(2&e){const t=n.oxw();n.xp6(4),n.Q6J("max",t.store.endDate.toISOString())("value",t.store.startDate.toISOString()),n.xp6(9),n.Q6J("min",t.store.startDate.toISOString())("value",t.store.endDate.toISOString())}}function $(e,u){1&e&&(n.TgZ(0,"ion-col",30),n._UZ(1,"app-list-entry-dummy",31),n.qZA()),2&e&&(n.xp6(1),n.Q6J("countdown",!0)("notification",!0))}const nn=function(){return[]};function tn(e,u){1&e&&(n.TgZ(0,"ion-row"),n.YNc(1,$,2,2,"ion-col",14),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,nn).constructor(24)))}function on(e,u){if(1&e&&(n.TgZ(0,"ion-col",30),n._UZ(1,"app-launch-list-entry",32),n.qZA()),2&e){const t=u.$implicit;n.xp6(1),n.Q6J("launch",t)}}const en=[{path:"",component:(()=>{class e{constructor(t,i){this.service=t,this.store=i,this.title="Launches",void 0===i.startDate&&this.setStartToToday(),void 0===i.endDate&&this.setEndToInf()}ngOnInit(){0===this.store.launches.length&&this.loadFirst()}ionViewDidEnter(){this.content.scrollToPoint(0,this.store.scrollY,250)}logScrolling(t){this.store.scrollY=t.detail.currentY}loadFirst(t){var i=this;return(0,g.Z)(function*(){try{i.infiniteScroll.disabled=!1}catch{}i.store.launches=[],i.store.launches=(yield i.service.getFirstLaunches(i.store.search,i.store.startDate,i.store.endDate,i.store.upcomingPreviousAll)).launches,t&&t.target.complete()})()}loadMore(t){var i=this;return(0,g.Z)(function*(){const l=yield i.service.getNextLaunches(i.store.launches.length,i.store.search,i.store.startDate,i.store.endDate,i.store.upcomingPreviousAll);i.store.launches.push(...l.launches),t.target.complete(),i.store.launches.length===l.max&&(t.target.disabled=!0)})()}toggleFilter(){this.store.showFilter=!this.store.showFilter}searchChange(t){this.store.search=t.detail.value,this.loadFirst()}startChange(t){this.store.startDate=new Date(t.detail.value),this.loadFirst()}startClear(){this.store.startDate=new Date("1950-01-01"),this.loadFirst()}startToday(){this.setStartToToday(),this.loadFirst()}endChange(t){this.store.endDate=new Date(t.detail.value),this.loadFirst()}endClear(){this.setEndToInf(),this.loadFirst()}endToday(){this.store.endDate=new Date((new Date).toISOString().split("T")[0]),this.loadFirst()}setStartToToday(){this.store.startDate=new Date((new Date).toISOString().split("T")[0])}setEndToInf(){this.store.endDate=new Date("2050-12-31")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.R),n.Y36(B))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-launch-overview"]],viewQuery:function(t,i){if(1&t&&(n.Gf(j,5),n.Gf(a.ju,5)),2&t){let l;n.iGM(l=n.CRH())&&(i.content=l.first),n.iGM(l=n.CRH())&&(i.infiniteScroll=l.first)}},decls:27,vars:10,consts:[[3,"translucent"],["slot","start"],["color","primary"],["id","title"],["slot","end"],["id","filter",3,"click"],["slot","icon-only","name","filter"],[4,"ngIf"],[3,"scrollEvents","fullscreen","ionScroll"],["launchOverviewContent",""],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],["id","container"],["size","12","size-sm","6","size-md","4","size-xl","3",4,"ngFor","ngForOf"],[3,"ionInfinite"],["loadingSpinner","circular","loadingText","Loading more launches..."],["animated","",3,"value","ionChange"],[3,"ngModel","ionChange","ngModelChange"],["value","Previous"],["name","return-up-back"],["value","All"],["name","repeat"],["value","Upcoming"],["name","return-down-forward"],["displayFormat","DD.MM.YYYY","min","1950-01-01","placeholder","Start Date",3,"max","value","ionChange"],[3,"click"],["slot","icon-only","name","today"],["slot","icon-only","name","close"],["displayFormat","DD.MM.YYYY","max","2050-12-31","placeholder","End Date",3,"min","value","ionChange"],["size","12","size-sm","6","size-md","4","size-xl","3"],[3,"countdown","notification"],[3,"launch"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-menu-button",2),n.qZA(),n.TgZ(4,"ion-title",3),n._uU(5),n.qZA(),n.TgZ(6,"ion-buttons",4)(7,"ion-button",5),n.NdJ("click",function(){return i.toggleFilter()}),n._UZ(8,"ion-icon",6),n.qZA()()(),n.YNc(9,W,2,1,"ion-toolbar",7),n.YNc(10,H,14,1,"ion-toolbar",7),n.YNc(11,X,19,4,"ion-toolbar",7),n.qZA(),n.TgZ(12,"ion-content",8,9),n.NdJ("ionScroll",function(h){return i.logScrolling(h)}),n.TgZ(14,"ion-refresher",10),n.NdJ("ionRefresh",function(h){return i.loadFirst(h)}),n._UZ(15,"ion-refresher-content"),n.qZA(),n.TgZ(16,"ion-header",11)(17,"ion-toolbar")(18,"ion-title",12),n._uU(19),n.qZA()()(),n.TgZ(20,"div",13)(21,"ion-grid"),n.YNc(22,tn,2,2,"ion-row",7),n.TgZ(23,"ion-row"),n.YNc(24,on,2,1,"ion-col",14),n.qZA()(),n.TgZ(25,"ion-infinite-scroll",15),n.NdJ("ionInfinite",function(h){return i.loadMore(h)}),n._UZ(26,"ion-infinite-scroll-content",16),n.qZA()()()),2&t&&(n.Q6J("translucent",!0),n.xp6(5),n.Oqu(i.title),n.xp6(4),n.Q6J("ngIf",i.store.showFilter),n.xp6(1),n.Q6J("ngIf",i.store.showFilter),n.xp6(1),n.Q6J("ngIf",i.store.showFilter&&"All"===i.store.upcomingPreviousAll),n.xp6(1),n.Q6J("scrollEvents",!0)("fullscreen",!0),n.xp6(7),n.Oqu(i.title),n.xp6(3),n.Q6J("ngIf",0===i.store.launches.length),n.xp6(2),n.Q6J("ngForOf",i.store.launches))},dependencies:[p.sg,p.O5,y.JJ,y.On,a.YG,a.Sm,a.wI,a.W2,a.x4,a.jY,a.Gu,a.gu,a.ju,a.MB,a.Ie,a.Q$,a.fG,a.nJ,a.Wo,a.Nd,a.VI,a.cJ,a.GO,a.sr,a.wd,a.QI,a.j9,G.G,V.R],styles:["ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast)}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-toolbar[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-header.header-collapse-condense-inactive[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}.toolbar-title-large.ios[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}"]}),e})()},{path:":id",component:K}];let an=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[o.Bz.forChild(en),o.Bz]}),e})()},8956:(C,f,r)=>{r.d(f,{s:()=>p});var o=r(6895),g=r(7559),n=r(9928),s=r(1571);let p=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[g.N,o.ez,n.Pc]}),a})()},5854:(C,f,r)=>{r.d(f,{R:()=>m});var o=r(1571),g=r(6895);let n=(()=>{class c{constructor(){}}return c.\u0275fac=function(A){return new(A||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-countdown-dummy"]],decls:33,vars:0,consts:[["id","countdown"],["id","top-line",1,"active"],["id","number-line"],[1,"digit","spacer","placeholder-item"],["id","hour-pair",1,"pair"],["id","hours1",1,"number"],[1,"digit","placeholder-item"],["id","hours2",1,"number"],["id","minute-pair",1,"pair"],["id","minutes1",1,"number"],["id","minutes2",1,"number"],["id","second-pair",1,"pair"],["id","seconds1",1,"number"],["id","seconds2",1,"number"],["id","text-line",1,"active","placeholder-item"]],template:function(A,Z){1&A&&(o.TgZ(0,"div",0),o._UZ(1,"div",1),o.TgZ(2,"div",2)(3,"p",3),o._uU(4,"\xa0"),o.qZA(),o.TgZ(5,"div",4)(6,"div",5)(7,"p",6),o._uU(8,"\xa0"),o.qZA()(),o.TgZ(9,"div",7)(10,"p",6),o._uU(11,"\xa0"),o.qZA()()(),o.TgZ(12,"p",3),o._uU(13,"\xa0"),o.qZA(),o.TgZ(14,"div",8)(15,"div",9)(16,"p",6),o._uU(17,"\xa0"),o.qZA()(),o.TgZ(18,"div",10)(19,"p",6),o._uU(20,"\xa0"),o.qZA()()(),o.TgZ(21,"p",3),o._uU(22,"\xa0"),o.qZA(),o.TgZ(23,"div",11)(24,"div",12)(25,"p",6),o._uU(26,"\xa0"),o.qZA()(),o.TgZ(27,"div",13)(28,"p",6),o._uU(29,"\xa0"),o.qZA()()()(),o.TgZ(30,"div",14)(31,"p"),o._uU(32,"\xa0"),o.qZA()()())},styles:['#countdown[_ngcontent-%COMP%]{width:12rem;margin:.5rem}#countdown[_ngcontent-%COMP%]   #top-line[_ngcontent-%COMP%]{height:.15rem}#countdown[_ngcontent-%COMP%]   #number-line[_ngcontent-%COMP%]{display:flex;background:#211f2a;align-items:center;justify-content:space-evenly;padding:.5rem}#countdown[_ngcontent-%COMP%]   #text-line[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}#countdown[_ngcontent-%COMP%]   #text-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:.75rem;font-family:DotMatrix;font-weight:bolder}.active[_ngcontent-%COMP%]{background:#63a7d8}.inactive[_ngcontent-%COMP%]{background:#ff5722}.pair[_ngcontent-%COMP%]{display:flex}.digit[_ngcontent-%COMP%]{font-family:DotMatrix;transform:skew(-15deg);font-size:1.5rem;color:#fdeab5;background:#636c73;margin:.125rem}.spacer[_ngcontent-%COMP%]{line-height:1.35rem;width:.5rem;padding-left:0rem;padding-right:1rem;box-sizing:content-box}.placeholder-item[_ngcontent-%COMP%]{position:relative;overflow:hidden}.placeholder-item[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right,transparent 0%,#d0d0d0 50%,transparent 100%);-webkit-animation:load 1s cubic-bezier(.4,0,.2,1) infinite;animation:load 1s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes load{0%{left:-150px}to{left:100%}}@keyframes load{0%{left:-150px}to{left:100%}}']}),c})();var s=r(9928);let p=(()=>{class c{constructor(){}}return c.\u0275fac=function(A){return new(A||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-notification-icon-dummy"]],decls:3,vars:0,consts:[["id","notification",1,"placeholder-item"],["color","light","size","large","slot","start","name","radio-button-off-outline"]],template:function(A,Z){1&A&&(o.TgZ(0,"div",0)(1,"div"),o._UZ(2,"ion-icon",1),o.qZA()())},dependencies:[s.gu],styles:['.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#notification[_ngcontent-%COMP%]{display:flex;background-color:#30303090;padding-top:.5rem;padding-right:.5rem;padding-left:.5rem;border-radius:.5rem}#notification-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.25rem}#related[_ngcontent-%COMP%]{position:absolute;left:1.75rem;top:0rem}.placeholder-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;border-radius:.25rem}.placeholder-item[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right,transparent 0%,var(--ion-color-step-200) 50%,transparent 100%);-webkit-animation:load 1s cubic-bezier(.4,0,.2,1) infinite;animation:load 1s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes load{0%{left:-150px}to{left:100%}}@keyframes load{0%{left:-150px}to{left:100%}}']}),c})();function a(c,d){1&c&&o._UZ(0,"app-notification-icon-dummy")}function v(c,d){1&c&&(o.TgZ(0,"div")(1,"p",4),o._uU(2,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA(),o.TgZ(3,"p",4),o._uU(4,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA(),o.TgZ(5,"p",4),o._uU(6,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA(),o.TgZ(7,"p",4),o._uU(8,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA(),o.TgZ(9,"p",4),o._uU(10,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA()())}function _(c,d){1&c&&o._UZ(0,"app-countdown-dummy")}let m=(()=>{class c{constructor(){this.countdown=!1,this.notification=!1,this.content=!1}}return c.\u0275fac=function(A){return new(A||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-list-entry-dummy"]],inputs:{countdown:"countdown",notification:"notification",content:"content"},decls:14,vars:3,consts:[[4,"ngIf"],["id","image"],[1,"image-wrapper","placeholder-item"],["id","foreground"],[1,"placeholder-item"],["id","content"]],template:function(A,Z){1&A&&(o.YNc(0,a,1,0,"app-notification-icon-dummy",0),o.TgZ(1,"ion-card")(2,"div",1)(3,"div",2),o._UZ(4,"ion-img",3),o.qZA()(),o.TgZ(5,"ion-card-header")(6,"ion-card-subtitle",4),o._uU(7,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA(),o.TgZ(8,"ion-card-title",4),o._uU(9,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.qZA()(),o.TgZ(10,"ion-card-content")(11,"div",5),o.YNc(12,v,11,0,"div",0),o.YNc(13,_,1,0,"app-countdown-dummy",0),o.qZA()()()),2&A&&(o.Q6J("ngIf",Z.notification),o.xp6(12),o.Q6J("ngIf",Z.content),o.xp6(1),o.Q6J("ngIf",Z.countdown))},dependencies:[g.O5,n,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.Xz,p],styles:['ion-card[_ngcontent-%COMP%]{text-align:center;height:100%}#content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}#content[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:1rem;width:40%;height:auto}#image[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;height:12rem;width:100%}#image[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:25%;display:inline-block;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,var(--ion-item-background) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#002f4b",endColorstr="#00000000",GradientType=0)}img[_ngcontent-%COMP%]{max-width:100%;display:block;height:15rem}.image-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;width:100%}#background[_ngcontent-%COMP%]{width:100%;opacity:.2;height:12rem}#background[_ngcontent-%COMP%] {-o-object-fit:fill!important;object-fit:fill!important}#foreground[_ngcontent-%COMP%]{height:12rem}ion-card-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.placeholder-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;background-color:var(--ion-color-step-100);border-radius:.25rem}.placeholder-item[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right,transparent 0%,var(--ion-color-step-200) 50%,transparent 100%);-webkit-animation:load 1s cubic-bezier(.4,0,.2,1) infinite;animation:load 1s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes load{0%{left:-150px}to{left:100%}}@keyframes load{0%{left:-150px}to{left:100%}}']}),c})()},7720:(C,f,r)=>{r.d(f,{j:()=>v});var o=r(1571),g=r(6895),n=r(9928),s=r(3065);function p(_,m){if(1&_&&o._UZ(0,"youtube-player",2),2&_){const c=o.oxw();o.Q6J("videoId",c.id)}}function a(_,m){if(1&_&&(o.TgZ(0,"div")(1,"ion-item",3)(2,"ion-label"),o._uU(3,"Link"),o.qZA()()()),2&_){const c=o.oxw();o.xp6(1),o.Q6J("href",c.url)}}let v=(()=>{class _{constructor(){this.id="0"}ngOnInit(){if(this.launchVideo&&(this.url=this.launchVideo.url,this.title=this.launchVideo.title,this.description=this.launchVideo.description),-1!==this.url.search("youtube")){this.id=this.url.replace("https://www.youtube.com/watch?v=","");const c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",document.body.appendChild(c)}}}return _.\u0275fac=function(c){return new(c||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-youtube-video"]],inputs:{launchVideo:"launchVideo",url:"url",title:"title",description:"description"},decls:11,vars:4,consts:[["height","100%","width","100%",3,"videoId",4,"ngIf"],[4,"ngIf"],["height","100%","width","100%",3,"videoId"],[3,"href"]],template:function(c,d){1&c&&(o.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-subtitle"),o._uU(3,"Video"),o.qZA(),o.TgZ(4,"ion-card-title"),o._uU(5),o.qZA()(),o.TgZ(6,"ion-card-content")(7,"p"),o._uU(8),o.qZA(),o.YNc(9,p,1,1,"youtube-player",0),o.YNc(10,a,4,1,"div",1),o.qZA()()),2&c&&(o.xp6(5),o.Oqu(d.title),o.xp6(3),o.Oqu(d.description),o.xp6(1),o.Q6J("ngIf","0"!==d.id),o.xp6(1),o.Q6J("ngIf","0"===d.id))},dependencies:[g.O5,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.Ie,n.Q$,s.D]}),_})()}}]);