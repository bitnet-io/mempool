"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[975],{2975:(Pe,m,d)=>{d.r(m),d.d(m,{LightningPreviewsModule:()=>he});var c=d(6895),b=d(1596),p=d(3091),y=d(5380),w=d(9422),u=d(7530),E=d(3900),S=d(4004),f=d(262),v=d(9292),e=d(4650),h=d(5568),P=d(7304),T=d(8138),I=d(1167),G=d(9520),M=d(1957);function $(t,o){if(1&t&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n)}}function Z(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,21),e.qZA(),e.TgZ(3,"td")(4,"span"),e._uU(5),e.qZA()()()),2&t){const n=e.oxw().ngIf;e.xp6(5),e.Oqu(n.city.en)}}function H(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,22),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&t){const n=e.oxw().ngIf;e.xp6(4),e.AsE(" ",n.country.en," ",n.flag," ")}}function D(t,o){1&t&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,23),e.qZA(),e.TgZ(3,"td")(4,"span"),e._uU(5,"unknown"),e.qZA()()())}function q(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"app-nodes-channels-map",24),e.NdJ("readyEvent",function(){e.CHM(n);const s=e.oxw(2);return e.KtG(s.onMapReady())}),e.qZA()}if(2&t){const n=e.oxw().ngIf;e.Akn("nodepage"),e.Q6J("publicKey",n.public_key)("fitContainer",!0)("placeholder",!0)("hasLocation",!!n.as_number)("disableSpinner",!0)}}const U=function(t,o){return[t,o]};function W(t,o){if(1&t&&(e.TgZ(0,"div",2)(1,"app-preview-title")(2,"span"),e.SDv(3,3),e.qZA()(),e.TgZ(4,"div",4),e._UZ(5,"h1",5),e.TgZ(6,"div",6)(7,"h1",5),e._uU(8),e.qZA()(),e.TgZ(9,"div",7),e.YNc(10,$,2,1,"span",8),e.qZA()(),e.TgZ(11,"div",9)(12,"div",10)(13,"a",11),e.ALo(14,"relativeUrl"),e._uU(15),e.qZA(),e.TgZ(16,"table",12)(17,"tbody")(18,"tr")(19,"td"),e.SDv(20,13),e.qZA(),e.TgZ(21,"td"),e._UZ(22,"app-amount",14),e.qZA()(),e.TgZ(23,"tr")(24,"td"),e.SDv(25,15),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.qZA()(),e.TgZ(28,"tr")(29,"td"),e.SDv(30,16),e.qZA(),e.TgZ(31,"td"),e._UZ(32,"app-amount",14),e.qZA()(),e.YNc(33,Z,6,1,"tr",17),e.YNc(34,H,5,2,"tr",17),e.YNc(35,D,6,0,"tr",17),e.qZA()()(),e.TgZ(36,"div",18),e.YNc(37,q,1,7,"app-nodes-channels-map",19),e.qZA()()()),2&t){const n=o.ngIf,i=e.oxw();e.xp6(8),e.Oqu(n.alias),e.xp6(2),e.Q6J("ngForOf",i.socketTypes),e.xp6(3),e.Q6J("routerLink",e.WLB(15,U,e.lcZ(14,13,"/lightning/node"),n.public_key)),e.xp6(2),e.Oqu(n.public_key),e.xp6(7),e.Q6J("radiowavesoshis",n.capacity)("noFiat",!0),e.xp6(5),e.hij(" ",n.active_channel_count," "),e.xp6(5),e.Q6J("radiowavesoshis",n.avgCapacity)("noFiat",!0),e.xp6(1),e.Q6J("ngIf",n.city),e.xp6(1),e.Q6J("ngIf",n.country),e.xp6(1),e.Q6J("ngIf",!n.city&&!n.country),e.xp6(2),e.Q6J("ngIf",!i.error)}}function X(t,o){1&t&&(e.TgZ(0,"div",25)(1,"span"),e.SDv(2,26),e.qZA()())}let V=(()=>{class t{constructor(n,i,s,_){this.lightningApiService=n,this.activatedRoute=i,this.seoService=s,this.openGraphService=_,this.selectedSocketIndex=0,this.qrCodeVisible=!1,this.publicKeySize=99,(0,v.tq)()&&(this.publicKeySize=12)}ngOnInit(){this.node$=this.activatedRoute.paramMap.pipe((0,E.w)(n=>(this.publicKey=n.get("public_key"),this.openGraphService.waitFor("node-map-"+this.publicKey),this.openGraphService.waitFor("node-data-"+this.publicKey),this.lightningApiService.getNode$(n.get("public_key")))),(0,S.U)(n=>{this.seoService.setTitle(`Node: ${n.alias}`);const i=[],s={};for(const _ of n.sockets.split(",")){if(""===_)continue;let l="";_.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)?l="IPv4":_.indexOf("[")>-1?l="IPv6":_.indexOf("onion")>-1&&(l="Tor"),n.flag=(0,v.bK)(n.iso_code),i.push({label:l,socket:n.public_key+"@"+_}),s[l]=!0}return n.socketsObject=i,this.socketTypes=Object.keys(s),n.avgCapacity=n.capacity/Math.max(1,n.active_channel_count),this.openGraphService.waitOver("node-data-"+this.publicKey),n}),(0,f.K)(n=>(this.error=n,this.openGraphService.fail("node-map-"+this.publicKey),this.openGraphService.fail("node-data-"+this.publicKey),[{alias:this.publicKey,public_key:this.publicKey}])))}changeSocket(n){this.selectedSocketIndex=n}onChannelsListStatusChanged(n){this.channelsListStatus=n}onMapReady(){this.openGraphService.waitOver("node-map-"+this.publicKey)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.Q),e.Y36(p.gz),e.Y36(h.v),e.Y36(P.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-node-preview"]],decls:3,vars:4,consts:function(){let o,n,i,s,_,l,a,r;return o="Lightning-node",n="Aktiv kapasitet",i="Aktive kanaler",s="Gjennomsnittsst\xF8rrelse",_="Plassering",l="Land",a="Plassering",r="Lasting av data feilet.",[["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title"],[1,"title-wrapper"],[1,"badges","mb-2"],["class","badge rounded-pill badge-success",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md"],[1,"subtitle",3,"routerLink"],[1,"table","table-borderless","table-striped"],n,[3,"radiowavesoshis","noFiat"],i,s,[4,"ngIf"],[1,"col-md","map-col"],[3,"style","publicKey","fitContainer","placeholder","hasLocation","disableSpinner","readyEvent",4,"ngIf"],[1,"badge","rounded-pill","badge-success"],_,l,a,[3,"publicKey","fitContainer","placeholder","hasLocation","disableSpinner","readyEvent"],[1,"text-center"],r]},template:function(n,i){1&n&&(e.YNc(0,W,38,18,"div",0),e.ALo(1,"async"),e.YNc(2,X,3,0,"ng-template",1)),2&n&&(e.Q6J("ngIf",e.lcZ(1,2,i.node$)),e.xp6(2),e.Q6J("ngIf",i.error))},dependencies:[c.sg,c.O5,p.yS,T.G,I.g,G.v,c.Ov,M.w],styles:[".table[_ngcontent-%COMP%]{margin-top:6px;font-size:32px}.badges[_ngcontent-%COMP%]{font-size:28px;flex-shrink:0;flex-grow:0;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:baseline;justify-content:flex-end}.badges[_ngcontent-%COMP%]     .badge{margin-left:.5em}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:408px;min-width:470px;min-height:408px;max-height:408px;padding:0;background:#181b2d;overflow:hidden;margin-top:6px}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"],changeDetection:0}),t})();var C=d(9646),z=d(8505),J=d(2216),O=d(6831),Q=d(3798);function Y(t,o){1&t&&(e.TgZ(0,"span",33),e.SDv(1,34),e.qZA())}function F(t,o){1&t&&(e.TgZ(0,"span",35),e.SDv(1,36),e.qZA())}function k(t,o){1&t&&(e.TgZ(0,"span",37),e.SDv(1,38),e.qZA())}function j(t,o){if(1&t&&e._UZ(0,"app-closing-type",39),2&t){const n=e.oxw().ngIf;e.Q6J("type",n.closing_reason)}}function K(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"app-nodes-channels-map",40),e.NdJ("readyEvent",function(){e.CHM(n);const s=e.oxw(2);return e.KtG(s.onMapReady())}),e.qZA()}if(2&t){const n=e.oxw(2);e.Akn("channelpage"),e.Q6J("channel",n.channelGeo)("fitContainer",!0)("placeholder",!0)("disableSpinner",!0)}}const B=function(t,o){return[t,o]},A=function(){return["fas","arrow-right-arrow-left"]};function ee(t,o){if(1&t&&(e.TgZ(0,"div",2)(1,"app-preview-title")(2,"span"),e.SDv(3,3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"h1",6),e._uU(7),e.qZA()(),e.TgZ(8,"div",7),e.YNc(9,Y,2,0,"span",8),e.YNc(10,F,2,0,"span",9),e.YNc(11,k,2,0,"span",10),e.YNc(12,j,1,1,"app-closing-type",11),e.qZA()(),e.TgZ(13,"div",12)(14,"div",13)(15,"a",14),e.ALo(16,"relativeUrl"),e._uU(17),e.qZA(),e.TgZ(18,"table",15)(19,"tbody")(20,"tr")(21,"td"),e.SDv(22,16),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.ALo(25,"date"),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e.SDv(28,17),e.qZA(),e.TgZ(29,"td"),e._UZ(30,"app-amount",18),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e.SDv(33,19),e.qZA(),e.TgZ(34,"td")(35,"div",20)(36,"span"),e._uU(37),e.TgZ(38,"span",21),e.SDv(39,22),e.qZA()(),e._UZ(40,"fa-icon",23),e.TgZ(41,"span"),e._uU(42),e.TgZ(43,"span",21),e.SDv(44,24),e.qZA()()()()(),e.TgZ(45,"tr")(46,"td"),e.SDv(47,25),e.qZA(),e.TgZ(48,"td")(49,"div",20),e._UZ(50,"app-radiowavess",26)(51,"fa-icon",23)(52,"app-radiowavess",26),e.qZA()()()()()(),e.TgZ(53,"div",27),e.YNc(54,K,1,6,"app-nodes-channels-map",28),e.qZA()(),e.TgZ(55,"div",29)(56,"span",30),e._uU(57),e.qZA(),e._UZ(58,"fa-icon",31),e.TgZ(59,"span",32),e._uU(60),e.qZA()()()),2&t){const n=o.ngIf,i=e.oxw();e.xp6(7),e.Oqu(n.short_id),e.xp6(2),e.Q6J("ngIf",0===n.status),e.xp6(1),e.Q6J("ngIf",1===n.status),e.xp6(1),e.Q6J("ngIf",2===n.status),e.xp6(1),e.Q6J("ngIf",2===n.status),e.xp6(3),e.Q6J("routerLink",e.WLB(28,B,e.lcZ(16,23,"/lightning/channel"),n.id)),e.xp6(2),e.Oqu(n.id),e.xp6(7),e.Oqu(e.xi3(25,25,n.created,"yyyy-MM-dd HH:mm")),e.xp6(6),e.Q6J("radiowavesoshis",n.capacity)("noFiat",!0),e.xp6(7),e.hij("",n.node_left.fee_rate," "),e.xp6(3),e.Q6J("icon",e.DdM(31,A))("fixedWidth",!0),e.xp6(2),e.hij("",n.node_right.fee_rate," "),e.xp6(8),e.Q6J("radiowavesoshis",n.node_left.base_fee_mtokens/1e3),e.xp6(1),e.Q6J("icon",e.DdM(32,A))("fixedWidth",!0),e.xp6(1),e.Q6J("radiowavesoshis",n.node_right.base_fee_mtokens/1e3),e.xp6(2),e.Q6J("ngIf",!i.error),e.xp6(3),e.hij(" ",n.node_left.alias||"?"," "),e.xp6(1),e.Q6J("icon",e.DdM(33,A))("fixedWidth",!0),e.xp6(2),e.hij(" ",n.node_right.alias||"?"," ")}}function ne(t,o){if(1&t&&(e.TgZ(0,"div",41)(1,"span"),e.SDv(2,42),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"i"),e._uU(6),e.qZA()()),2&t){const n=e.oxw();e.xp6(6),e.AsE("",n.error.status,": ",n.error.error,"")}}let te=(()=>{class t{constructor(n,i,s,_){this.lightningApiService=n,this.activatedRoute=i,this.seoService=s,this.openGraphService=_,this.error=null,this.channelGeo=[]}ngOnInit(){this.channel$=this.activatedRoute.paramMap.pipe((0,E.w)(n=>(this.shortId=n.get("short_id")||"",this.openGraphService.waitFor("channel-map-"+this.shortId),this.openGraphService.waitFor("channel-data-"+this.shortId),this.error=null,this.seoService.setTitle(`Channel: ${n.get("short_id")}`),this.lightningApiService.getChannel$(n.get("short_id")).pipe((0,z.b)(i=>{this.channelGeo=i.node_left.longitude&&i.node_left.latitude&&i.node_right.longitude&&i.node_right.latitude?[i.node_left.public_key,i.node_left.alias,i.node_left.longitude,i.node_left.latitude,i.node_right.public_key,i.node_right.alias,i.node_right.longitude,i.node_right.latitude]:[],this.openGraphService.waitOver("channel-data-"+this.shortId)}),(0,f.K)(i=>(this.error=i,this.openGraphService.fail("channel-map-"+this.shortId),this.openGraphService.fail("channel-data-"+this.shortId),(0,C.of)(null)))))))}onMapReady(){this.openGraphService.waitOver("channel-map-"+this.shortId)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.Q),e.Y36(p.gz),e.Y36(h.v),e.Y36(P.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-channel-preview"]],decls:3,vars:4,consts:function(){let o,n,i,s,_,l,a,r,g,L,x;return o="Lightning-kanal",n="Opprettet",i="Kapasitet",s="Avgift",_="ppm",l="ppm",a="Grunnavgift",r="Inaktiv",g="Aktiv",L="Avsluttet",x="Lasting av data feilet.",[["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title-wrapper"],[1,"title"],[1,"badges","mb-2"],["class","badge rounded-pill badge-secondary",4,"ngIf"],["class","badge rounded-pill badge-success",4,"ngIf"],["class","badge rounded-pill badge-danger",4,"ngIf"],[3,"type",4,"ngIf"],[1,"row"],[1,"col-md"],[1,"subtitle",3,"routerLink"],[1,"table","table-borderless","table-striped"],n,i,[3,"radiowavesoshis","noFiat"],s,[1,"dual-cell"],[1,"symbol"],_,[1,"between-arrow",3,"icon","fixedWidth"],l,a,["digitsInfo","1.0-2",3,"radiowavesoshis"],[1,"col-md","map-col"],[3,"style","channel","fitContainer","placeholder","disableSpinner","readyEvent",4,"ngIf"],[1,"row","d-flex","justify-content-between","full-width-row","nodes"],[1,"node","left"],["title","channel between",1,"between-arrow",3,"icon","fixedWidth"],[1,"node","right"],[1,"badge","rounded-pill","badge-secondary"],r,[1,"badge","rounded-pill","badge-success"],g,[1,"badge","rounded-pill","badge-danger"],L,[3,"type"],[3,"channel","fitContainer","placeholder","disableSpinner","readyEvent"],[1,"text-center"],x]},template:function(n,i){1&n&&(e.YNc(0,ee,61,34,"div",0),e.ALo(1,"async"),e.YNc(2,ne,7,2,"ng-template",1)),2&n&&(e.Q6J("ngIf",e.lcZ(1,2,i.channel$)),e.xp6(2),e.Q6J("ngIf",i.error))},dependencies:[c.O5,p.yS,J.BN,T.G,O.H,I.g,Q.N,G.v,c.Ov,c.uU,M.w],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:10px}.badges[_ngcontent-%COMP%]{font-size:28px;flex-shrink:0;flex-grow:0;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:baseline;justify-content:flex-end}.badges[_ngcontent-%COMP%]     .badge{margin-left:.5em}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;flex-wrap:nowrap}.row.nodes[_ngcontent-%COMP%]{background:#181b2d;margin:15px 0 0}.nodes[_ngcontent-%COMP%]{font-size:36px;align-items:center}.between-arrow[_ngcontent-%COMP%]{font-size:24px}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;min-width:470px;padding:0;background:#181b2d;max-height:350px;overflow:hidden}  .symbol{font-size:24px}.dual-cell[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:0;flex-grow:1}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(2){text-align:center;max-width:1.5em}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(3){text-align:right}"],changeDetection:0}),t})();var ie=d(3734),R=d(9290);function oe(t,o){if(1&t&&e._UZ(0,"app-amount",24),2&t){const n=e.oxw().ngIf;e.Q6J("radiowavesoshis",n.sumLiquidity)("digitsInfo","1.2-2")("noFiat",!1)}}function _e(t,o){if(1&t&&e._UZ(0,"app-radiowavess",25),2&t){const n=e.oxw().ngIf;e.Q6J("radiowavesoshis",n.sumLiquidity)}}const se=function(t,o){return[t,o]};function ae(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",2)(1,"app-preview-title")(2,"span"),e.SDv(3,3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"h1",6),e._uU(7),e.qZA(),e.TgZ(8,"a",7),e.ALo(9,"relativeUrl"),e._uU(10),e.qZA()(),e._UZ(11,"div",8),e.qZA(),e.TgZ(12,"div",9)(13,"div",10)(14,"table",11),e._UZ(15,"col",12),e.TgZ(16,"tbody")(17,"tr")(18,"td"),e.SDv(19,13),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA()(),e.TgZ(22,"tr")(23,"td"),e.SDv(24,14),e.qZA(),e.TgZ(25,"td"),e.YNc(26,oe,1,3,"app-amount",15),e.YNc(27,_e,1,1,"ng-template",null,16,e.W1O),e.qZA()(),e.TgZ(29,"tr")(30,"td"),e.SDv(31,17),e.qZA(),e.TgZ(32,"td"),e._uU(33),e.qZA()(),e.TgZ(34,"tr")(35,"td"),e.SDv(36,18),e.qZA(),e.TgZ(37,"td",19)(38,"span",20),e._uU(39),e.qZA()()(),e.TgZ(40,"tr")(41,"td"),e.SDv(42,21),e.qZA(),e.TgZ(43,"td",19),e._uU(44),e.qZA()()()()(),e.TgZ(45,"div",22)(46,"app-nodes-map",23),e.NdJ("readyEvent",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onMapReady())}),e.qZA()()()()}if(2&t){const n=o.ngIf,i=e.MAs(28),s=e.oxw();e.xp6(7),e.Oqu(null==s.isp?null:s.isp.name),e.xp6(1),e.Q6J("routerLink",e.WLB(15,se,e.lcZ(9,13,"/lightning/nodes/isp/"),null==s.isp?null:s.isp.id)),e.xp6(2),e.hij(" ASN ",null==s.isp?null:s.isp.id," "),e.xp6(11),e.Oqu(n.nodes.length),e.xp6(5),e.Q6J("ngIf",n.sumLiquidity>1e8)("ngIfElse",i),e.xp6(7),e.Oqu(n.sumChannels),e.xp6(6),e.AsE("",n.topCountry.country," ",n.topCountry.flag,""),e.xp6(5),e.hij(" ",n.nodes[0].alias," "),e.xp6(2),e.Q6J("widget",!0)("nodes",n.nodes)("fitContainer",!0)}}function le(t,o){1&t&&(e.TgZ(0,"div",26)(1,"span"),e.SDv(2,27),e.qZA()())}let de=(()=>{class t{constructor(n,i,s,_){this.apiService=n,this.seoService=i,this.openGraphService=s,this.route=_}ngOnInit(){this.nodes$=this.route.paramMap.pipe((0,E.w)(n=>(this.id=n.get("isp"),this.isp=null,this.openGraphService.waitFor("isp-map-"+this.id),this.openGraphService.waitFor("isp-data-"+this.id),this.apiService.getNodeForISP$(n.get("isp")))),(0,S.U)(n=>{this.isp={name:n.isp,id:this.route.snapshot.params.isp.split(",").join(", ")},this.seoService.setTitle("Lightning-noder p\xE5 ISP: " + n.isp + " [AS " + this.route.snapshot.params.isp + "]");for(const a in n.nodes)n.nodes[a].geolocation={country:n.nodes[a].country?.en,city:n.nodes[a].city?.en,subdivision:n.nodes[a].subdivision?.en,iso:n.nodes[a].iso_code};const i=n.nodes.reduce((a,r)=>a+r.capacity,0),s=n.nodes.reduce((a,r)=>a+r.channels,0),_={},l={count:0,country:"",iso:"",flag:""};for(const a of n.nodes)!a.geolocation.iso||(_[a.geolocation.iso]=_[a.geolocation.iso]??1,_[a.geolocation.iso]>l.count&&(l.count=_[a.geolocation.iso],l.country=a.geolocation.country,l.iso=a.geolocation.iso));return l.flag=(0,v.bK)(l.iso),this.openGraphService.waitOver("isp-data-"+this.id),{nodes:n.nodes,sumLiquidity:i,sumChannels:s,topCountry:l}}),(0,f.K)(n=>(this.error=n,this.openGraphService.fail("isp-map-"+this.id),this.openGraphService.fail("isp-data-"+this.id),(0,C.of)({nodes:[],sumLiquidity:0,sumChannels:0,topCountry:{}}))))}onMapReady(){this.openGraphService.waitOver("isp-map-"+this.id)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(ie.s),e.Y36(h.v),e.Y36(P.t),e.Y36(p.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nodes-per-isp-preview"]],decls:3,vars:4,consts:function(){let o,n,i,s,_,l,a;return o="Lightning ISP",n="Noder",i="Likviditet",s="Kanaler",_="Topp land",l="Topp node",a="Lasting av data feilet.",[["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title-wrapper"],[1,"title"],[1,"subtitle",3,"routerLink"],[1,"logo-wrapper"],[1,"row"],[1,"col-md"],[1,"table","table-borderless","table-striped","table-fixed"],["span","1","width","250px"],n,i,[3,"radiowavesoshis","digitsInfo","noFiat",4,"ngIf","ngIfElse"],["smallnode",""],s,_,[1,"text-truncate"],[1,""],l,[1,"col-md","map-col"],["type","isp",3,"widget","nodes","fitContainer","readyEvent"],[3,"radiowavesoshis","digitsInfo","noFiat"],["digitsInfo","1.0-2",3,"radiowavesoshis"],[1,"text-center"],a]},template:function(n,i){1&n&&(e.YNc(0,ae,47,18,"div",0),e.ALo(1,"async"),e.YNc(2,le,3,0,"ng-template",1)),2&n&&(e.Q6J("ngIf",e.lcZ(1,2,i.nodes$)),e.xp6(2),e.Q6J("ngIf",i.error))},dependencies:[c.O5,p.yS,T.G,O.H,I.g,R.n,c.Ov,M.w],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:0}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:360px;min-width:470px;min-height:360px;max-height:360px;padding:0;background:#181b2d;overflow:hidden;margin-top:0}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"],changeDetection:0}),t})();var re=d(4382),ce=d(3951);function pe(t,o){if(1&t&&e._UZ(0,"app-amount",24),2&t){const n=e.oxw().ngIf;e.Q6J("radiowavesoshis",n.sumLiquidity)("digitsInfo","1.2-2")("noFiat",!1)}}function ge(t,o){if(1&t&&(e._uU(0),e.ALo(1,"amountShortener"),e.TgZ(2,"span",25),e.SDv(3,26),e.qZA()),2&t){const n=e.oxw().ngIf;e.hij(" ",e.xi3(1,1,n.sumLiquidity,1)," ")}}function Ne(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,27),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"app-radiowavess",28),e.qZA()()),2&t){const n=e.oxw().ngIf;e.xp6(4),e.Q6J("radiowavesoshis",n.sumLiquidity/n.sumChannels)}}function ue(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",1)(1,"app-preview-title")(2,"span"),e.SDv(3,2),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4),e._UZ(6,"app-svg-images",5),e.qZA(),e.TgZ(7,"div",6)(8,"h1",7),e._uU(9),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10),e._uU(13),e.qZA()()(),e.TgZ(14,"div",11)(15,"div",12)(16,"table",13),e._UZ(17,"col",14),e.TgZ(18,"tbody"),e._UZ(19,"tr"),e.TgZ(20,"tr")(21,"td"),e.SDv(22,15),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA()(),e.TgZ(25,"tr")(26,"td"),e.SDv(27,16),e.qZA(),e.TgZ(28,"td"),e.YNc(29,pe,1,3,"app-amount",17),e.YNc(30,ge,4,4,"ng-template",null,18,e.W1O),e.TgZ(32,"span",19),e._uU(33,"\xa0"),e.qZA()()(),e.TgZ(34,"tr")(35,"td"),e.SDv(36,20),e.qZA(),e.TgZ(37,"td"),e._uU(38),e.qZA()(),e.YNc(39,Ne,5,1,"tr",21),e.qZA()()(),e.TgZ(40,"div",22)(41,"app-nodes-map",23),e.NdJ("readyEvent",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.onMapReady())}),e.qZA()()()()}if(2&t){const n=o.ngIf,i=e.MAs(31),s=e.oxw();e.xp6(9),e.Oqu(s.group.name),e.xp6(4),e.Oqu(s.group.description),e.xp6(11),e.Oqu(n.nodes.length),e.xp6(5),e.Q6J("ngIf",n.sumLiquidity>1e8)("ngIfElse",i),e.xp6(9),e.Oqu(n.sumChannels),e.xp6(1),e.Q6J("ngIf",n.sumChannels>0),e.xp6(2),e.Q6J("widget",!0)("nodes",n.nodes)("fitContainer",!0)}}const Ee=[{path:"node/:public_key",component:V},{path:"channel/:short_id",component:te},{path:"nodes/isp/:isp",component:de},{path:"group/:slug",component:(()=>{class t{constructor(n,i,s,_){this.lightningApiService=n,this.activatedRoute=i,this.seoService=s,this.openGraphService=_,this.group={name:"",description:""}}ngOnInit(){this.seoService.setTitle("Bitexplorer.Space Lightning Nodes"),this.nodes$=this.activatedRoute.paramMap.pipe((0,E.w)(n=>(this.slug=n.get("slug"),this.openGraphService.waitFor("ln-group-map-"+this.slug),this.openGraphService.waitFor("ln-group-data-"+this.slug),"the-mempool-open-source-project"!==this.slug?(this.group={name:this.slug.replace(/-/gi," "),description:""},this.openGraphService.fail("ln-group-map-"+this.slug),this.openGraphService.fail("ln-group-data-"+this.slug),(0,C.of)(null)):(this.groupId="bitexplorer.io",this.group={name:"The Bitexplorer Open Source Project",description:"These are the Lightning nodes operated by The Bitexplorer Open Source Project that provide data for the bitexplorer.io website. Connect to us!"},this.lightningApiService.getNodGroupNodes$(this.groupId)))),(0,S.U)(n=>{for(const _ of n){const l=[];for(const a of _.sockets.split(",")){if(""===a)continue;let r="";a.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)?r="IPv4":a.indexOf("[")>-1?r="IPv6":a.indexOf("onion")>-1&&(r="Tor"),l.push({label:r,socket:_.public_key+"@"+a})}_.socketsObject=l,_.geolocation=_?.country||_?.city||_?.subdivision?{country:_.country?.en,city:_.city?.en,subdivision:_.subdivision?.en,iso:_.iso_code}:null}const i=n.reduce((_,l)=>_+parseInt(l.capacity,10),0),s=n.reduce((_,l)=>_+l.opened_channel_count,0);return this.openGraphService.waitOver("ln-group-data-"+this.slug),{nodes:n,sumLiquidity:i,sumChannels:s}}),(0,f.K)(()=>(this.openGraphService.fail("ln-group-map-"+this.slug),this.openGraphService.fail("ln-group-data-"+this.slug),(0,C.of)({nodes:[],sumLiquidity:0,sumChannels:0}))))}onMapReady(){this.openGraphService.waitOver("ln-group-map-"+this.slug)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.Q),e.Y36(p.gz),e.Y36(h.v),e.Y36(P.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-group-preview"]],decls:2,vars:3,consts:function(){let o,n,i,s,_,l;return o="Ligthningnode-gruppe",n="Noder",i="Likviditet",s="Kanaler",_="radiowavess",l="Gjennomsnittsst\xF8rrelse",[["class","box preview-box",4,"ngIf"],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"logo-wrapper"],["name","officialBitexplorerSpace","viewBox","0 0 125 126"],[1,"title-wrapper"],[1,"title"],[1,"row","full-width-row"],[1,"description-wrapper"],[1,"description-text"],[1,"row"],[1,"col-md"],[1,"table","table-borderless","table-striped","table-fixed"],["span","1","width","250px"],n,i,[3,"radiowavesoshis","digitsInfo","noFiat",4,"ngIf","ngIfElse"],["smallnode",""],[1,"d-none","d-md-inline-block"],s,[4,"ngIf"],[1,"col-md","map-col"],["type","isp",3,"widget","nodes","fitContainer","readyEvent"],[3,"radiowavesoshis","digitsInfo","noFiat"],[1,"radiowavess"],_,l,[3,"radiowavesoshis"]]},template:function(n,i){1&n&&(e.YNc(0,ue,42,10,"div",0),e.ALo(1,"async")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,i.nodes$))},dependencies:[c.O5,T.G,re.s,O.H,I.g,R.n,c.Ov,ce.j],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:0}.logo-wrapper[_ngcontent-%COMP%]{position:relative;width:62px;height:62px;margin-right:1em}.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.description-wrapper[_ngcontent-%COMP%]{width:100%;margin:16px 0 0;padding:20px 12px;background:#181b2d;font-size:32px}.description-text[_ngcontent-%COMP%]{width:100%;line-height:36px;height:72px;max-height:72px;min-height:72px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:272px;min-width:470px;min-height:272px;max-height:272px;padding:0;background:#181b2d;overflow:hidden;margin-top:16px}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"]}),t})()},{path:"**",redirectTo:""}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(Ee),p.Bz]}),t})(),he=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[u.Q],imports:[c.ez,b.m,p.Bz,y.GraphsModule,fe,w.LightningModule]}),t})()}}]);