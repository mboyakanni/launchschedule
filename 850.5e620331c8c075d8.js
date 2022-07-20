"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[850],{8815:(m,l,e)=>{e.d(l,{s:()=>u});var h=e(5861),c=e(1571),r=e(6944);let u=(()=>{class t{constructor(a){this.service=a,this.showFilter=!1,this.overviewScrollY=0,this.previousScrollY=0,this.eventLaunchArray=[]}loadDashboard(a){var d=this;return(0,h.Z)(function*(){d.dashboard=yield d.service.getStarshipDashboard(),a&&a.target.complete(),d.combinePrevious()})()}combinePrevious(){this.eventLaunchArray=[],this.dashboard.previous.launches.forEach(a=>{this.eventLaunchArray.push({date:new Date(a.net),launch:a})}),this.dashboard.previous.events.forEach(a=>{this.eventLaunchArray.push({date:new Date(a.date),event:a})}),this.eventLaunchArray=this.eventLaunchArray.sort((a,d)=>d.date.getTime()-a.date.getTime())}}return t.\u0275fac=function(a){return new(a||t)(c.LFG(r.R))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},850:(m,l,e)=>{e.r(l),e.d(l,{StarshipModule:()=>b});var h=e(6895),c=e(433),r=e(9928),u=e(8688),t=e(1571),g=e(8815),a=e(3065);function d(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"youtube-player",13),t.NdJ("stateChange",function(v){t.CHM(n);const p=t.oxw(2);return t.KtG(p.videoStateChange(v))})("ready",function(v){t.CHM(n);const p=t.oxw(2);return t.KtG(p.videoReady(v))}),t.qZA()}}function y(o,i){if(1&o&&(t.TgZ(0,"div",11),t.YNc(1,d,1,0,"youtube-player",12),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.videoId)}}function f(o,i){1&o&&(t.TgZ(0,"ion-tabs")(1,"ion-tab-bar",14)(2,"ion-tab-button",15),t._UZ(3,"ion-icon",16),t.TgZ(4,"ion-label"),t._uU(5,"Overview"),t.qZA()(),t.TgZ(6,"ion-tab-button",17),t._UZ(7,"ion-icon",18),t.TgZ(8,"ion-label"),t._uU(9,"Previous Activity"),t.qZA()()()())}const P=[{path:"",component:(()=>{class o{constructor(n){this.store=n,this.title="Starship",this.videoId="0",this.currentStreamId=0}ngOnInit(){void 0===this.store.dashboard&&this.store.loadDashboard(),this.addYoutubeScriptToDocument()}extractYoutubeVideoIdFromUrl(n){if(n.startsWith("https://www.youtube.com/watch?v="))return n.replace("https://www.youtube.com/watch?v=","")}addYoutubeScriptToDocument(){const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",document.body.appendChild(n)}switchStream(){this.currentStreamId++,this.currentStreamId===this.store.dashboard.live_streams.length&&(this.currentStreamId=0),this.queueCurrentVideo()}videoReady(n){this.youtubePlayer=n.target,this.queueCurrentVideo()}queueCurrentVideo(){this.videoId=this.extractYoutubeVideoIdFromUrl(this.store.dashboard.live_streams[this.currentStreamId].url),this.youtubePlayer.cueVideoById(this.videoId)}videoStateChange(n){5===n.data&&(n.target.mute(),n.target.playVideo())}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-starship"]],decls:16,vars:5,consts:[[3,"translucent"],["slot","start"],["color","primary"],["id","title"],["slot","end"],["id","switch",3,"click"],["slot","icon-only","name","camera-reverse"],["collapse","condense"],["size","large"],["id","livestream-container",4,"ngIf"],[4,"ngIf"],["id","livestream-container"],["height","100%","width","100%","videoId","0","suggestedQuality","highres",3,"stateChange","ready",4,"ngIf"],["height","100%","width","100%","videoId","0","suggestedQuality","highres",3,"stateChange","ready"],["slot","bottom,top"],["tab","overview"],["name","apps"],["tab","previous"],["name","rocket"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4)(7,"ion-button",5),t.NdJ("click",function(){return s.switchStream()}),t._UZ(8,"ion-icon",6),t.qZA()()()(),t.TgZ(9,"ion-content")(10,"ion-header",7)(11,"ion-toolbar")(12,"ion-title",8),t._uU(13),t.qZA()()(),t.YNc(14,y,2,1,"div",9),t.YNc(15,f,10,0,"ion-tabs",10),t.qZA()),2&n&&(t.Q6J("translucent",!0),t.xp6(5),t.Oqu(s.title),t.xp6(8),t.Oqu(s.title),t.xp6(1),t.Q6J("ngIf",s.store.dashboard&&s.store.dashboard.live_streams&&s.store.dashboard.live_streams.length>0),t.xp6(1),t.Q6J("ngIf",s.store.dashboard))},dependencies:[h.O5,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.Q$,r.fG,r.yq,r.ZU,r.sr,r.wd,r.UN,a.D],styles:["ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast)}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-toolbar[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color: var(--ion-color-secondary-contrast) !important}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-header.header-collapse-condense-inactive[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}.toolbar-title-large.ios[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color: var(--toolbar-expanded-color) !important}#livestream-container[_ngcontent-%COMP%]{height:30%}ion-tabs[_ngcontent-%COMP%]{top:30%;height:70%}"]}),o})(),children:[{path:"overview",loadChildren:()=>Promise.all([e.e(6351),e.e(9103),e.e(8982),e.e(9125),e.e(763),e.e(639),e.e(6655),e.e(8843)]).then(e.bind(e,8843)).then(o=>o.OverviewPageModule)},{path:"previous",loadChildren:()=>Promise.all([e.e(6351),e.e(9103),e.e(8982),e.e(9125),e.e(763),e.e(639),e.e(6655),e.e(2906)]).then(e.bind(e,2906)).then(o=>o.PreviousPageModule)},{path:"",redirectTo:"/dashboard/starship/overview",pathMatch:"full"}]}];let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,c.u5,r.Pc,S,a.e]}),o})()}}]);