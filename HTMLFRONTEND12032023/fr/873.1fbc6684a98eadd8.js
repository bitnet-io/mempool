"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[873],{1167:(D,T,s)=>{s.d(T,{g:()=>e});var p=s(6451),E=s(9646),r=s(4650),N=s(6331),_=s(6895);function v(d,f){1&d&&(r.TgZ(0,"span"),r._uU(1,"Bisq "),r.qZA())}function P(d,f){1&d&&(r.TgZ(0,"span"),r._uU(1,"Liquid "),r.qZA())}function A(d,f){1&d&&(r.TgZ(0,"span"),r._uU(1,"Liquid "),r.qZA())}function g(d,f){1&d&&(r.TgZ(0,"span"),r._uU(1,"Bitnet "),r.qZA())}function S(d,f){if(1&d&&(r.ynx(0)(1,2),r.YNc(2,v,2,0,"span",3),r.YNc(3,P,2,0,"span",3),r.YNc(4,A,2,0,"span",3),r.YNc(5,g,2,0,"span",4),r.BQk()()),2&d){const m=f.ngIf;r.xp6(1),r.Q6J("ngSwitch",m.val),r.xp6(1),r.Q6J("ngSwitchCase","bisq"),r.xp6(1),r.Q6J("ngSwitchCase","liquid"),r.xp6(1),r.Q6J("ngSwitchCase","liquidtestnet")}}const b=function(d){return{val:d}},I=["*"];let e=(()=>{class d{constructor(m){this.stateService=m}ngOnInit(){this.network$=(0,p.T)((0,E.of)(""),this.stateService.networkChanged$)}}return d.\u0275fac=function(m){return new(m||d)(r.Y36(N.b))},d.\u0275cmp=r.Xpm({type:d,selectors:[["app-preview-title"]],ngContentSelectors:I,decls:4,vars:5,consts:[[1,"preview-header"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(m,x){1&m&&(r.F$t(),r.TgZ(0,"h2",0),r.YNc(1,S,6,4,"ng-container",1),r.ALo(2,"async"),r.Hsn(3),r.qZA()),2&m&&(r.xp6(1),r.Q6J("ngIf",r.VKq(3,b,r.lcZ(2,1,x.network$))))},dependencies:[_.O5,_.RF,_.n9,_.ED,_.Ov],encapsulation:2}),d})()},2873:(D,T,s)=>{s.r(T),s.d(T,{PreviewsModule:()=>tt});var p=s(6895),E=s(1596),r=s(3091),N=s(5380),_=s(3900),v=s(262),P=s(9300),A=s(7579),g=s(9646),S=s(6451),b=s(2076),I=s(5458),e=s(4650),d=s(9168),f=s(6331),m=s(5630),x=s(3734),O=s(5568),w=s(7304),B=s(3858),R=s(8138),G=s(7446),L=s(5084),M=s(1167),U=s(8454),q=s(3534),$=s(4680),z=s(9886);function J(n,o){1&n&&(e.TgZ(0,"span",32),e._uU(1," CPFP "),e.qZA())}function Y(n,o){1&n&&(e.TgZ(0,"span",33),e._uU(1," CPFP "),e.qZA())}function Q(n,o){if(1&n&&(e.TgZ(0,"div",28),e._UZ(1,"app-tx-features",29),e.YNc(2,J,2,0,"span",30),e.YNc(3,Y,2,0,"span",31),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("tx",t.tx),e.xp6(1),e.Q6J("ngIf",t.cpfpInfo&&(t.cpfpInfo.bestDescendant||t.cpfpInfo.descendants.length)),e.xp6(1),e.Q6J("ngIf",t.cpfpInfo&&!t.cpfpInfo.bestDescendant&&!t.cpfpInfo.descendants.length&&t.cpfpInfo.ancestors.length)}}function W(n,o){1&n&&e.SDv(0,34)}function F(n,o){if(1&n&&e._UZ(0,"app-amount",35),2&n){const t=e.oxw(2);e.Q6J("radiowavesoshis",t.totalValue)}}function V(n,o){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"date"),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("\u200e",e.xi3(2,1,1e3*t.transactionTime,"yyyy-MM-dd HH:mm"),"")}}function K(n,o){if(1&n&&(e.TgZ(0,"p",36),e._uU(1),e.ALo(2,"feeRounding"),e.TgZ(3,"span",17),e.SDv(4,37),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",e.lcZ(2,1,t.tx.feePerVsize)," ")}}function X(n,o){if(1&n&&(e.TgZ(0,"div",38)(1,"div",39)(2,"span",15),e._uU(3,"Coinbase"),e.qZA(),e.TgZ(4,"span",40),e._uU(5),e.ALo(6,"hex2ascii"),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(5),e.Oqu(e.lcZ(6,1,t.tx.vin[0].scriptsig))}}function H(n,o){if(1&n&&(e.TgZ(0,"span",40),e._uU(1),e.ALo(2,"hex2ascii"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.scriptpubkey_asm))}}function j(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",39)(2,"span",15),e._uU(3,"OP_RETURN"),e.qZA(),e.YNc(4,H,3,3,"span",42),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(4),e.Q6J("ngIf","OP_RETURN"!==t.scriptpubkey_asm)}}function ee(n,o){if(1&n&&(e.TgZ(0,"div",38),e.YNc(1,j,5,1,"ng-container",41),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.opReturns.slice(0,3))}}function te(n,o){if(1&n&&(e.TgZ(0,"div",1)(1,"app-preview-title")(2,"span"),e.SDv(3,2),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"h1",5),e._UZ(7,"app-truncate",6),e.qZA()(),e.YNc(8,Q,4,3,"div",7),e.qZA(),e.TgZ(9,"div",8)(10,"span",9),e.YNc(11,W,1,0,"ng-template",10),e.YNc(12,F,1,1,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(14,"span",12),e.YNc(15,V,3,4,"ng-container",13),e.qZA(),e.TgZ(16,"span",14)(17,"span",15),e.SDv(18,16),e.qZA(),e._uU(19),e.ALo(20,"number"),e.TgZ(21,"span",17),e.SDv(22,18),e.qZA()()(),e.TgZ(23,"div",19),e._UZ(24,"tx-bowtie-graph",20),e.TgZ(25,"div",21)(26,"p",22),e._UZ(27,"span",23),e.ALo(28,"bytes"),e._UZ(29,"span",23),e.ALo(30,"wuBytes"),e.qZA(),e.YNc(31,K,5,3,"p",24),e.qZA(),e.TgZ(32,"div",25),e.ynx(33,26),e.YNc(34,X,7,3,"div",27),e.YNc(35,ee,2,1,"div",27),e.BQk(),e.qZA()()()),2&n){const t=e.MAs(13),i=e.oxw();e.xp6(7),e.Q6J("text",i.txId),e.xp6(1),e.Q6J("ngIf","liquid"!==i.network&&"liquidtestnet"!==i.network),e.xp6(3),e.Q6J("ngIf",i.isLiquid&&i.haveBlindedOutputValues(i.tx))("ngIfElse",t),e.xp6(4),e.Q6J("ngIf",i.transactionTime>0),e.xp6(4),e.hij(" ",e.lcZ(20,16,i.tx.fee)," "),e.xp6(5),e.Q6J("tx",i.tx)("width",1132)("height",346)("network",i.network),e.xp6(3),e.Q6J("innerHTML","\u200e"+e.xi3(28,18,i.tx.size,2),e.oJD),e.xp6(2),e.Q6J("innerHTML","\u200e"+e.xi3(30,21,i.tx.weight,2),e.oJD),e.xp6(2),e.Q6J("ngIf",!i.isCoinbase(i.tx)),e.xp6(2),e.Q6J("ngSwitch",i.extraData),e.xp6(1),e.Q6J("ngSwitchCase","coinbase"),e.xp6(1),e.Q6J("ngSwitchCase","opreturn")}}let ne=(()=>{class n{constructor(t,i,a,l,c,u,C){this.route=t,this.electrsApiService=i,this.stateService=a,this.cacheService=l,this.apiService=c,this.seoService=u,this.openGraphService=C,this.network="",this.isLoadingTx=!0,this.error=void 0,this.errorUnblinded=void 0,this.transactionTime=-1,this.showCpfpDetails=!1,this.fetchCpfp$=new A.x,this.liquidUnblinding=new I.R,this.isLiquid=!1}ngOnInit(){this.stateService.networkChanged$.subscribe(t=>{this.network=t,("liquid"===this.network||"liquidtestnet"==this.network)&&(this.isLiquid=!0)}),this.fetchCpfpSubscription=this.fetchCpfp$.pipe((0,_.w)(t=>this.apiService.getCpfpinfo$(t).pipe((0,v.K)(i=>(0,g.of)(null))))).subscribe(t=>{this.cpfpInfo=t,this.openGraphService.waitOver("cpfp-data-"+this.txId)}),this.subscription=this.route.paramMap.pipe((0,_.w)(t=>{const i=(t.get("id")||"").split(":");return this.txId=i[0],this.openGraphService.waitFor("tx-data-"+this.txId),this.openGraphService.waitFor("tx-time-"+this.txId),this.seoService.setTitle("Transaction: " + this.txId + ""),this.resetTransaction(),(0,S.T)((0,g.of)(!0),this.stateService.connectionState$.pipe((0,P.h)(a=>2===a&&this.tx&&!this.tx.status.confirmed)))}),(0,_.w)(()=>{let t;const i=this.cacheService.getTxFromCache(this.txId);return t=i&&-1!==i.fee?(0,g.of)(i):this.electrsApiService.getTransaction$(this.txId).pipe((0,v.K)(a=>(this.error=a,this.isLoadingTx=!1,(0,g.of)(null)))),(0,S.T)(t,this.stateService.mempoolTransactions$)}),(0,_.w)(t=>"liquid"===this.network||"liquidtestnet"===this.network?(0,b.D)(this.liquidUnblinding.checkUnblindedTx(t)).pipe((0,v.K)(i=>(this.errorUnblinded=i,(0,g.of)(t)))):(0,g.of)(t))).subscribe(t=>{t?(this.tx=t,void 0===t.fee&&(this.tx.fee=0),this.tx.feePerVsize=t.fee/(t.weight/4),this.isLoadingTx=!1,this.error=void 0,this.totalValue=this.tx.vout.reduce((i,a)=>a.value+i,0),this.opReturns=this.getOpReturns(this.tx),this.extraData=this.chooseExtraData(),t.status.confirmed?(this.transactionTime=t.status.block_time,this.openGraphService.waitOver("tx-time-"+this.txId)):!t.status.confirmed&&t.firstSeen?(this.transactionTime=t.firstSeen,this.openGraphService.waitOver("tx-time-"+this.txId)):this.getTransactionTime(),this.tx.status.confirmed?(this.stateService.markBlock$.next({blockHeight:t.status.block_height}),this.openGraphService.waitFor("cpfp-data-"+this.txId),this.fetchCpfp$.next(this.tx.txid)):t.cpfpChecked?(this.stateService.markBlock$.next({txFeePerVSize:t.effectiveFeePerVsize}),this.cpfpInfo={ancestors:t.ancestors,bestDescendant:t.bestDescendant}):(this.openGraphService.waitFor("cpfp-data-"+this.txId),this.fetchCpfp$.next(this.tx.txid)),this.openGraphService.waitOver("tx-data-"+this.txId)):this.openGraphService.fail("tx-data-"+this.txId)},t=>{this.openGraphService.fail("tx-data-"+this.txId),this.error=t,this.isLoadingTx=!1})}getTransactionTime(){this.apiService.getTransactionTimes$([this.tx.txid]).pipe((0,v.K)(t=>(0,g.of)(0))).subscribe(t=>{this.transactionTime=t[0],this.openGraphService.waitOver("tx-time-"+this.txId)})}resetTransaction(){this.error=void 0,this.tx=null,this.isLoadingTx=!0,this.transactionTime=-1,this.cpfpInfo=null,this.showCpfpDetails=!1}isCoinbase(t){return t.vin.some(i=>!0===i.is_coinbase)}haveBlindedOutputValues(t){return t.vout.some(i=>void 0===i.value)}getTotalTxOutput(t){return t.vout.map(i=>i.value||0).reduce((i,a)=>i+a)}getOpReturns(t){return t.vout.filter(i=>"op_return"===i.scriptpubkey_type&&"OP_RETURN"!==i.scriptpubkey_asm)}chooseExtraData(){return this.isCoinbase(this.tx)?"coinbase":this.opReturns?.length?"opreturn":"none"}ngOnDestroy(){this.subscription.unsubscribe(),this.fetchCpfpSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.gz),e.Y36(d.K),e.Y36(f.b),e.Y36(m.Q),e.Y36(x.s),e.Y36(O.v),e.Y36(w.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-transaction-preview"]],decls:1,vars:1,consts:function(){let o,t,i,a,l;return o="Transaction",t="Frais",i="Sat",a="Confidentiel",l="radiowaves/vB",[["class","box preview-box",4,"ngIf"],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title-wrapper"],[1,"title","truncated"],[3,"text"],["class","features",4,"ngIf"],[1,"top-data","row"],[1,"field","col-sm-4","text-left"],[3,"ngIf","ngIfElse"],["defaultAmount",""],[1,"field","col-sm-4","text-center"],[4,"ngIf"],[1,"field","col-sm-4","text-right"],[1,"label"],t,[1,"symbol"],i,[1,"row","graph-wrapper"],[3,"tx","width","height","network"],[1,"above-bow"],[1,"field","pair"],[3,"innerHTML"],["class","field",4,"ngIf"],[1,"overlaid"],[3,"ngSwitch"],["class","opreturns",4,"ngSwitchCase"],[1,"features"],[3,"tx"],["class","badge badge-primary mr-1",4,"ngIf"],["class","badge badge-info mr-1",4,"ngIf"],[1,"badge","badge-primary","mr-1"],[1,"badge","badge-info","mr-1"],a,[3,"radiowavesoshis"],[1,"field"],l,[1,"opreturns"],[1,"opreturn-row"],[1,"message"],[4,"ngFor","ngForOf"],["class","message",4,"ngIf"]]},template:function(t,i){1&t&&e.YNc(0,te,36,24,"div",0),2&t&&e.Q6J("ngIf",i.tx&&!i.error)},dependencies:[p.sg,p.O5,p.RF,p.n9,B.t,R.G,G.V,L.J,M.g,p.JJ,p.uU,U.O,q.$,$.x,z.D],styles:[".adjust-btn-padding[_ngcontent-%COMP%]{padding:.55rem}.td-width[_ngcontent-%COMP%]{width:150px}  .badge{font-size:28px}.row[_ngcontent-%COMP%]{flex-direction:row}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:1;margin:0;padding-bottom:10px}.btn-outline-info[_ngcontent-%COMP%]{margin-top:0}.features[_ngcontent-%COMP%]{font-size:24px;margin-left:1em;margin-top:.5em;margin-right:-4px}.top-data[_ngcontent-%COMP%]{font-size:28px}.table[_ngcontent-%COMP%]{font-size:32px}.table[_ngcontent-%COMP%]     .symbol{font-size:24px}.field[_ngcontent-%COMP%]{font-size:32px;margin:0}.field[_ngcontent-%COMP%]     .symbol{font-size:24px}.field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#fff6}.field.pair[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin-right:1em}.top-data[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]:first-child{padding-left:0}.top-data[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]:last-child{padding-right:0}.tx-link[_ngcontent-%COMP%]{display:inline;font-size:28px;margin-bottom:6px}.graph-wrapper[_ngcontent-%COMP%]{position:relative;background:#181b2d;padding:10px 0 0}.graph-wrapper[_ngcontent-%COMP%]   .above-bow[_ngcontent-%COMP%]{position:absolute;top:20px;left:0;right:0;margin:auto;text-align:center}.graph-wrapper[_ngcontent-%COMP%]   .overlaid[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;width:100%;text-align:left;font-size:28px;max-width:90%;margin:auto;overflow:hidden;display:flex;flex-direction:row;justify-content:center}.graph-wrapper[_ngcontent-%COMP%]   .overlaid[_ngcontent-%COMP%]   .opreturns[_ngcontent-%COMP%]{display:inline-block;width:auto;max-width:100%;margin:auto;table-layout:auto;background:rgba(45,51,72,.6862745098);border-top-left-radius:5px;border-top-right-radius:5px}.graph-wrapper[_ngcontent-%COMP%]   .overlaid[_ngcontent-%COMP%]   .opreturns[_ngcontent-%COMP%]   .opreturn-row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:flex-start;padding:0 10px}.graph-wrapper[_ngcontent-%COMP%]   .overlaid[_ngcontent-%COMP%]   .opreturns[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-right:1em}.graph-wrapper[_ngcontent-%COMP%]   .overlaid[_ngcontent-%COMP%]   .opreturns[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{flex-shrink:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),n})();var k=s(8505),ie=s(9468),oe=s(4782),se=s(8675),ae=s(1520),re=s(4049),le=s(9611),ce=s(9160),y=s(1957);const pe=["blockGraph"];function de(n,o){1&n&&(e.ynx(0),e.SDv(1,17),e.BQk())}function _e(n,o){if(1&n&&e._uU(0),2&n){const t=e.oxw(2);e.Oqu(t.blockHeight)}}function ge(n,o){if(1&n&&(e.TgZ(0,"div",18)(1,"h2",19),e._uU(2),e.qZA(),e.TgZ(3,"h2",20),e._uU(4),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.blockHash.slice(0,32)),e.xp6(2),e.Oqu(t.blockHash.slice(32))}}function he(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td",21),e.SDv(2,22),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"number"),e.TgZ(6,"span",23),e.SDv(7,24),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(4),e.hij("~",e.xi3(5,1,null==t.block||null==t.block.extras?null:t.block.extras.medianFee,"1.0-0")," ")}}function fe(n,o){if(1&n&&(e.TgZ(0,"td"),e._UZ(1,"app-amount",28),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("radiowavesoshis",null==t.block?null:t.block.extras.totalFees)("noFiat",!0)}}function ue(n,o){if(1&n&&(e.TgZ(0,"td"),e._UZ(1,"app-amount",29),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("radiowavesoshis",1e8*t.fees)("noFiat",!0)}}function ve(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,25),e.qZA(),e.YNc(3,fe,2,2,"td",26),e.YNc(4,ue,2,2,"ng-template",null,27,e.W1O),e.qZA()),2&n){const t=e.MAs(5),i=e.oxw(2);e.xp6(3),e.Q6J("ngIf","liquid"!==i.network&&"liquidtestnet"!==i.network)("ngIfElse",t)}}const me=function(n,o){return[n,o]};function Ce(n,o){if(1&n&&(e.TgZ(0,"td")(1,"a",31),e.ALo(2,"relativeUrl"),e._uU(3),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.Tol(null!=t.block&&t.block.extras.pool.name&&"Unknown"!==(null==t.block?null:t.block.extras.pool.name)?"badge-primary":"badge-secondary"),e.Q6J("routerLink",e.WLB(7,me,e.lcZ(2,5,"/mining/pool"),null==t.block?null:t.block.extras.pool.slug)),e.uIk("data-cy","block-details-miner-badge"),e.xp6(2),e.hij(" ",null==t.block?null:t.block.extras.pool.name," ")}}function xe(n,o){if(1&n&&(e.TgZ(0,"td")(1,"span",32),e._uU(2),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(1),e.Tol(null!=t.block&&t.block.extras.pool.name&&"Unknown"!==(null==t.block?null:t.block.extras.pool.name)?"badge-primary":"badge-secondary"),e.uIk("data-cy","block-details-miner-badge"),e.xp6(1),e.hij(" ",null==t.block?null:t.block.extras.pool.name," ")}}function Pe(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,30),e.qZA(),e.YNc(3,Ce,4,10,"td",13),e.YNc(4,xe,3,4,"td",13),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("ngIf",t.stateService.env.MINING_DASHBOARD),e.xp6(1),e.Q6J("ngIf",!t.stateService.env.MINING_DASHBOARD&&"mempool"===t.stateService.env.BASE_MODULE)}}function Se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"app-preview-title")(2,"span"),e.SDv(3,2),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",3)(7,"div",5)(8,"h1",6),e.YNc(9,de,2,0,"ng-template",7),e.YNc(10,_e,1,1,"ng-template",7),e.qZA(),e.YNc(11,ge,5,2,"div",8),e.qZA()(),e.TgZ(12,"table",9)(13,"tbody")(14,"tr")(15,"td"),e.SDv(16,10),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"date"),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e.SDv(22,11),e.qZA(),e._UZ(23,"td",12),e.ALo(24,"wuBytes"),e.qZA(),e.YNc(25,he,8,4,"tr",13),e.YNc(26,ve,6,2,"ng-template",7),e.YNc(27,Pe,5,2,"tr",13),e.qZA()()(),e.TgZ(28,"div",14)(29,"app-block-overview-graph",15,16),e.NdJ("readyEvent",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onGraphReady())}),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(9),e.Q6J("ngIf",0===t.blockHeight),e.xp6(1),e.Q6J("ngIf",t.blockHeight),e.xp6(1),e.Q6J("ngIf",t.blockHash),e.xp6(7),e.hij(" ",e.xi3(19,14,1e3*(null==t.block?null:t.block.timestamp),"yyyy-MM-dd HH:mm")," "),e.xp6(5),e.Q6J("innerHTML","\u200e"+e.xi3(24,17,null==t.block?null:t.block.weight,2),e.oJD),e.xp6(2),e.Q6J("ngIf",null!=(null==t.block||null==t.block.extras?null:t.block.extras.medianFee)),e.xp6(1),e.Q6J("ngIf",void 0!==t.fees),e.xp6(1),e.Q6J("ngIf","liquid"!==t.network&&"liquidtestnet"!==t.network),e.xp6(2),e.Q6J("isLoading",!1)("resolution",75)("blockLimit",t.stateService.blockVSize)("orientation","top")("flip",!1)("disableSpinner",!0)}}let Te=(()=>{class n{constructor(t,i,a,l,c,u){this.route=t,this.electrsApiService=i,this.stateService=a,this.seoService=l,this.openGraphService=c,this.apiService=u,this.network="",this.isLoadingBlock=!0,this.isLoadingOverview=!0,this.overviewError=null}ngOnInit(){this.network=this.stateService.network;const t=this.route.paramMap.pipe((0,_.w)(i=>{this.rawId=i.get("id")||"",this.openGraphService.waitFor("block-viz-"+this.rawId),this.openGraphService.waitFor("block-data-"+this.rawId);const a=i.get("id")||"";this.block=void 0,this.error=void 0,this.overviewError=void 0,this.fees=void 0;let l=!1;return/^[0-9]+$/.test(a)?l=!0:this.blockHash=a,this.isLoadingBlock=!0,this.isLoadingOverview=!0,l?this.electrsApiService.getBlockHashFromHeight$(parseInt(a,10)).pipe((0,_.w)(c=>c?(this.blockHash=c,this.apiService.getBlock$(c)):null),(0,v.K)(c=>(this.error=c,this.openGraphService.fail("block-data-"+this.rawId),this.openGraphService.fail("block-viz-"+this.rawId),(0,g.of)(null)))):this.apiService.getBlock$(a)}),(0,P.h)(i=>null!=i),(0,k.b)(i=>{this.block=i,this.blockHeight=i.height,this.seoService.setTitle("Bloc " + i.height + " : " + i.id + ""),this.isLoadingBlock=!1,this.setBlockSubsidy(),void 0!==i?.extras?.reward&&(this.fees=i.extras.reward/1e8-this.blockSubsidy),this.stateService.markBlock$.next({blockHeight:this.blockHeight}),this.isLoadingOverview=!0,this.overviewError=null,this.openGraphService.waitOver("block-data-"+this.rawId)}),(0,ie.p)(50,re.z,{leading:!0,trailing:!0}),(0,oe.d)(1));this.overviewSubscription=t.pipe((0,se.O)(null),(0,ae.G)(),(0,_.w)(([i,a])=>this.apiService.getStrippedBlockTransactions$(a.id).pipe((0,v.K)(l=>(this.overviewError=l,this.openGraphService.fail("block-viz-"+this.rawId),(0,g.of)([]))),(0,_.w)(l=>(0,g.of)({transactions:l,direction:"down"}))))).subscribe(({transactions:i})=>{this.strippedTransactions=i,this.isLoadingOverview=!1,this.blockGraph&&(this.blockGraph.destroy(),this.blockGraph.setup(this.strippedTransactions))},i=>{this.error=i,this.isLoadingOverview=!1,this.openGraphService.fail("block-viz-"+this.rawId),this.openGraphService.fail("block-data-"+this.rawId),this.blockGraph&&this.blockGraph.destroy()}),this.networkChangedSubscription=this.stateService.networkChanged$.subscribe(i=>this.network=i)}ngOnDestroy(){this.overviewSubscription&&this.overviewSubscription.unsubscribe(),this.networkChangedSubscription&&this.networkChangedSubscription.unsubscribe()}setBlockSubsidy(){this.blockSubsidy=0}onGraphReady(){this.openGraphService.waitOver("block-viz-"+this.rawId)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.gz),e.Y36(d.K),e.Y36(f.b),e.Y36(O.v),e.Y36(w.t),e.Y36(x.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-block-preview"]],viewQuery:function(t,i){if(1&t&&e.Gf(pe,5),2&t){let a;e.iGM(a=e.CRH())&&(i.blockGraph=a.first)}},decls:1,vars:1,consts:function(){let o,t,i,a,l,c,u,C;return o="Bloc",t="Horodatage",i="Poids",a="Gen\xE8se",l="Frais m\xE9dian",c="radiowaves/vB",u="Frais totaux",C="Mineur",[["class","box preview-box",4,"ngIf"],[1,"box","preview-box"],o,[1,"row"],[1,"col-sm"],[1,"block-titles"],[1,"title"],[3,"ngIf"],["class","blockhash",4,"ngIf"],[1,"table","table-borderless","table-striped"],t,i,[3,"innerHTML"],[4,"ngIf"],[1,"col-sm","chart-container"],[3,"isLoading","resolution","blockLimit","orientation","flip","disableSpinner","readyEvent"],["blockGraph",""],a,[1,"blockhash"],[1,"truncate","right"],[1,"truncate","left"],[1,"td-width"],l,[1,"symbol"],c,u,[4,"ngIf","ngIfElse"],["liquidTotalFees",""],["digitsInfo","1.2-3",3,"radiowavesoshis","noFiat"],["digitsInfo","1.2-2",3,"radiowavesoshis","noFiat"],C,["placement","bottom",1,"badge",3,"routerLink"],["placement","bottom",1,"badge"]]},template:function(t,i){1&t&&e.YNc(0,Se,31,20,"div",0),2&t&&e.Q6J("ngIf",!i.error)},dependencies:[p.O5,r.yS,R.G,le.b,ce.P,M.g,p.JJ,p.uU,y.w,$.x],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:36px}.block-titles[_ngcontent-%COMP%]{margin:0;padding-left:15px;padding-right:15px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;width:100%;flex-grow:1}.block-titles[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:0;margin-right:30px;font-size:64px}.block-titles[_ngcontent-%COMP%]   .blockhash[_ngcontent-%COMP%]{width:0;flex-grow:1;flex-shrink:1;font-family:Consolas,Liberation Mono,Courier New,monospace;font-size:32px;text-align:right}.block-titles[_ngcontent-%COMP%]   .blockhash[_ngcontent-%COMP%]   .truncate[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0}.block-titles[_ngcontent-%COMP%]   .blockhash[_ngcontent-%COMP%]   .truncate.left[_ngcontent-%COMP%]{direction:rtl}.chart-container[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;min-width:470px;padding:0;margin-right:15px}  .symbol{font-size:24px}.badge[_ngcontent-%COMP%]{transition:none}"]}),n})();var Z=s(4004),Oe=s(7930);const we=function(n,o){return[n,o]};function Me(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,21),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"app-truncate",22),e.ALo(5,"relativeUrl"),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("text",t.addressInfo.unconfidential)("lastChars",7)("link",e.WLB(5,we,e.lcZ(5,3,"/address/"),t.addressInfo.unconfidential))}}function Ee(n,o){if(1&n&&(e.TgZ(0,"td"),e._UZ(1,"app-amount",25),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("radiowavesoshis",t.received)("noFiat",!0)}}function Ne(n,o){if(1&n&&(e.TgZ(0,"td"),e._UZ(1,"app-amount",25),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("radiowavesoshis",t.sent)("noFiat",!0)}}function Ae(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e.SDv(2,23),e.qZA(),e.YNc(3,Ee,2,2,"td",14),e.qZA(),e.TgZ(4,"tr")(5,"td"),e.SDv(6,24),e.qZA(),e.YNc(7,Ne,2,2,"td",14),e.qZA()),2&n){const t=e.oxw(2),i=e.MAs(2);e.xp6(3),e.Q6J("ngIf",void 0!==t.address.chain_stats.funded_txo_sum)("ngIfElse",i),e.xp6(4),e.Q6J("ngIf",void 0!==t.address.chain_stats.spent_txo_sum)("ngIfElse",i)}}function be(n,o){if(1&n&&(e.TgZ(0,"td"),e._UZ(1,"app-amount",25),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("radiowavesoshis",t.received-t.sent)("noFiat",!0)}}function Ie(n,o){if(1&n&&(e.TgZ(0,"div",2)(1,"app-preview-title")(2,"span"),e.SDv(3,3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._UZ(9,"app-truncate",9),e.qZA()()(),e.TgZ(10,"table",10)(11,"tbody"),e.YNc(12,Me,6,8,"tr",11),e.YNc(13,Ae,8,4,"ng-template",12),e.TgZ(14,"tr")(15,"td"),e.SDv(16,13),e.qZA(),e.YNc(17,be,2,2,"td",14),e.qZA(),e.TgZ(18,"tr")(19,"td"),e.SDv(20,15),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.ALo(23,"number"),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e.SDv(26,16),e.qZA(),e.TgZ(27,"td"),e._uU(28),e.ALo(29,"number"),e.qZA()()()()(),e._UZ(30,"div",17),e.TgZ(31,"div",18)(32,"div",19),e._UZ(33,"app-qrcode",20),e.qZA()()()()),2&n){const t=e.oxw(),i=e.MAs(2);e.xp6(9),e.Q6J("text",t.addressString),e.xp6(3),e.Q6J("ngIf",t.addressInfo&&t.addressInfo.unconfidential),e.xp6(1),e.Q6J("ngIf",!t.address.electrum),e.xp6(4),e.Q6J("ngIf",void 0!==t.address.chain_stats.funded_txo_sum)("ngIfElse",i),e.xp6(5),e.Oqu(e.lcZ(23,9,t.txCount)),e.xp6(6),e.Oqu(e.lcZ(29,11,t.totalUnspent)),e.xp6(5),e.Q6J("data",t.address.address)("size",448)}}function Re(n,o){1&n&&(e.TgZ(0,"td"),e.SDv(1,26),e.qZA())}let Ze=(()=>{class n{constructor(t,i,a,l,c,u){this.route=t,this.electrsApiService=i,this.stateService=a,this.apiService=l,this.seoService=c,this.openGraphService=u,this.network="",this.isLoadingAddress=!0,this.addressInfo=null,this.totalConfirmedTxCount=0,this.loadedConfirmedTxCount=0,this.txCount=0,this.received=0,this.sent=0,this.totalUnspent=0}ngOnInit(){this.stateService.networkChanged$.subscribe(t=>this.network=t),this.addressLoadingStatus$=this.route.paramMap.pipe((0,_.w)(()=>this.stateService.loadingIndicators$),(0,Z.U)(t=>void 0!==t["address-"+this.addressString]?t["address-"+this.addressString]:0)),this.mainSubscription=this.route.paramMap.pipe((0,_.w)(t=>(this.rawAddress=t.get("id")||"",this.openGraphService.waitFor("address-data-"+this.rawAddress),this.error=void 0,this.isLoadingAddress=!0,this.loadedConfirmedTxCount=0,this.address=null,this.addressInfo=null,this.addressString=t.get("id")||"",/^[A-Z]{2,5}1[AC-HJ-NP-Z02-9]{8,100}$/.test(this.addressString)&&(this.addressString=this.addressString.toLowerCase()),this.seoService.setTitle("Adresse: " + this.addressString + ""),this.electrsApiService.getAddress$(this.addressString).pipe((0,v.K)(i=>(this.isLoadingAddress=!1,this.error=i,console.log(i),this.openGraphService.fail("address-data-"+this.rawAddress),(0,g.of)(null))))))).pipe((0,P.h)(t=>!!t),(0,k.b)(t=>{("liquid"===this.stateService.network||"liquidtestnet"===this.stateService.network)&&/^([m-zA-HJ-NP-Z1-9]{26,35}|[a-z]{2,5}1[ac-hj-np-z02-9]{8,100}|[a-km-zA-HJ-NP-Z1-9]{80})$/.test(t.address)&&this.apiService.validateAddress$(t.address).subscribe(i=>{this.addressInfo=i}),this.address=t,this.updateChainStats(),this.isLoadingAddress=!1,this.openGraphService.waitOver("address-data-"+this.rawAddress)})).subscribe(()=>{},t=>{console.log(t),this.error=t,this.isLoadingAddress=!1,this.openGraphService.fail("address-data-"+this.rawAddress)})}updateChainStats(){this.received=this.address.chain_stats.funded_txo_sum+this.address.mempool_stats.funded_txo_sum,this.sent=this.address.chain_stats.spent_txo_sum+this.address.mempool_stats.spent_txo_sum,this.txCount=this.address.chain_stats.tx_count+this.address.mempool_stats.tx_count,this.totalConfirmedTxCount=this.address.chain_stats.tx_count,this.totalUnspent=this.address.chain_stats.funded_txo_count-this.address.chain_stats.spent_txo_count}ngOnDestroy(){this.mainSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.gz),e.Y36(d.K),e.Y36(f.b),e.Y36(x.s),e.Y36(O.v),e.Y36(w.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-address-preview"]],decls:3,vars:1,consts:function(){let o,t,i,a,l,c,u,C;return o="Adresse ",t="Solde",i="Transactions",a="TXOs inutilis\xE9",l="Non confidentiel",c="Total re\xE7u",u="Total envoy\xE9",C="Confidentiel",[["class","box preview-box",4,"ngIf"],["confidentialTd",""],[1,"box","preview-box"],o,[1,"row"],[1,"col-md"],[1,"row","d-flex","justify-content-between"],[1,"title-wrapper"],[1,"title"],[3,"text"],[1,"table","table-borderless","table-striped"],[4,"ngIf"],[3,"ngIf"],t,[4,"ngIf","ngIfElse"],i,a,[1,"w-100","d-block","d-md-none"],[1,"col-md","qrcode-col"],[1,"qr-wrapper"],[3,"data","size"],l,[3,"text","lastChars","link"],c,u,[3,"radiowavesoshis","noFiat"],C]},template:function(t,i){1&t&&(e.YNc(0,Ie,34,13,"div",0),e.YNc(1,Re,2,0,"ng-template",null,1,e.W1O)),2&t&&e.Q6J("ngIf",i.address&&!i.error)},dependencies:[p.O5,Oe.z,R.G,L.J,M.g,p.JJ,y.w],styles:[".title-wrapper[_ngcontent-%COMP%]{padding:0 15px}.qr-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:10px 10px 5px;display:inline-block}.qrcode-col[_ngcontent-%COMP%]{width:468px;min-width:468px;flex-grow:0;flex-shrink:0;text-align:center;padding:0;margin-left:2px;margin-right:15px}.table[_ngcontent-%COMP%]{font-size:32px;margin-top:48px}.table[_ngcontent-%COMP%]     .symbol{font-size:24px}"]}),n})();var Le=s(1420),$e=s(4984),ke=s(3951);function ye(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t.pool.regexes)}}function De(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"app-preview-title")(2,"span"),e.SDv(3,3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"img",7),e.NdJ("load",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onImageLoad())})("error",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onImageFail())}),e.qZA()(),e.TgZ(8,"div",8)(9,"h1",9),e._uU(10),e.qZA()()(),e.TgZ(11,"div",10)(12,"div",11)(13,"div",12)(14,"div",13),e.SDv(15,14),e.qZA(),e.YNc(16,ye,2,1,"div",15),e.qZA(),e.TgZ(17,"div",12)(18,"div",13),e.SDv(19,16),e.qZA(),e.TgZ(20,"div",17),e._uU(21),e.ALo(22,"amountShortener"),e.qZA()()()(),e.TgZ(23,"div",18)(24,"div",19),e.NdJ("chartFinished",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onChartReady())}),e.qZA()()()}if(2&n){const t=o.ngIf,i=e.oxw(),a=e.MAs(3);e.xp6(7),e.ekj("noimg",!i.imageLoaded),e.s9C("src",t.logo,e.LSH),e.xp6(3),e.Oqu(t.pool.name),e.xp6(6),e.Q6J("ngIf",t.pool.regexes.length)("ngIfElse",a),e.xp6(5),e.Oqu(e.Dn7(22,9,t.estimatedHashrate,1,"H/s")),e.xp6(3),e.Q6J("initOpts",i.chartInitOptions)("options",i.chartOptions)}}function Be(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"~"),e.qZA())}let Ge=(()=>{class n{constructor(t,i,a,l,c,u){this.locale=t,this.apiService=i,this.route=a,this.stateService=l,this.seoService=c,this.openGraphService=u,this.formatNumber=p.uf,this.isLoading=!0,this.imageLoaded=!1,this.lastImgSrc="",this.chartOptions={},this.chartInitOptions={renderer:"svg"},this.slug=void 0}ngOnInit(){this.poolStats$=this.route.params.pipe((0,Z.U)(t=>t.slug)).pipe((0,_.w)(t=>(this.isLoading=!0,this.imageLoaded=!1,this.slug=t,this.openGraphService.waitFor("pool-hash-"+this.slug),this.openGraphService.waitFor("pool-stats-"+this.slug),this.openGraphService.waitFor("pool-chart-"+this.slug),this.openGraphService.waitFor("pool-img-"+this.slug),this.apiService.getPoolHashrate$(this.slug).pipe((0,_.w)(i=>(this.isLoading=!1,this.prepareChartOptions(i.map(a=>[1e3*a.timestamp,a.avgHashrate])),this.openGraphService.waitOver("pool-hash-"+this.slug),[t])),(0,v.K)(()=>(this.isLoading=!1,this.openGraphService.fail("pool-hash-"+this.slug),(0,g.of)([t])))))),(0,_.w)(t=>this.apiService.getPoolStats$(t).pipe((0,v.K)(()=>(this.isLoading=!1,this.openGraphService.fail("pool-stats-"+this.slug),(0,g.of)(null))))),(0,Z.U)(t=>{if(null==t)return null;this.seoService.setTitle(t.pool.name);let i='"';for(const l of t.pool.regexes)i+=l+'", "';t.pool.regexes=i.slice(0,-3),this.openGraphService.waitOver("pool-stats-"+this.slug);const a="/resources/mining-pools/"+t.pool.name.toLowerCase().replace(" ","").replace(".","")+".svg";return a===this.lastImgSrc&&this.openGraphService.waitOver("pool-img-"+this.slug),this.lastImgSrc=a,Object.assign({logo:a},t)}),(0,v.K)(()=>(this.isLoading=!1,this.openGraphService.fail("pool-stats-"+this.slug),(0,g.of)(null))))}prepareChartOptions(t){let i;0===t.length&&(i={textStyle:{color:"grey",fontSize:15},text:"Indexage des blocs",left:"center",top:"center"}),this.chartOptions={title:i,animation:!1,color:[new Le.graphic.LinearGradient(0,0,0,.65,[{offset:0,color:"#F4511E"},{offset:.25,color:"#FB8C00"},{offset:.5,color:"#FFB300"},{offset:.75,color:"#FDD835"},{offset:1,color:"#7CB342"}]),"#D81B60"],grid:{left:15,right:15,bottom:15,top:15,show:!1},xAxis:0===t.length?void 0:{type:"time",show:!1},yAxis:0===t.length?void 0:[{type:"value",show:!1}],series:0===t.length?void 0:[{zlevel:0,name:"Hashrate",showSymbol:!1,symbol:"none",data:t,type:"line",lineStyle:{width:4}}]}}onChartReady(){this.openGraphService.waitOver("pool-chart-"+this.slug)}onImageLoad(){this.imageLoaded=!0,this.openGraphService.waitOver("pool-img-"+this.slug)}onImageFail(){this.imageLoaded=!1,this.openGraphService.waitOver("pool-img-"+this.slug)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.soG),e.Y36(x.s),e.Y36(r.gz),e.Y36(f.b),e.Y36(O.v),e.Y36(w.t))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pool-preview"]],decls:4,vars:3,consts:function(){let o,t,i;return o="Pool de minage",t="Labels",i="Taux de hachage",[["class","box preview-box",4,"ngIf"],["nodata",""],[1,"box","preview-box"],o,[1,"row","d-flex","justify-content-between","full-width-row"],[1,"logo-wrapper"],["width","62","height","62","src","/resources/mining-pools/default.svg"],["width","62","height","62",3,"src","load","error"],[1,"title-wrapper"],[1,"title"],[1,"row","full-width-row"],[1,"stats"],[1,"stat-box"],[1,"label"],t,["class","data",4,"ngIf","ngIfElse"],i,[1,"data"],[1,"row","hash-chart","full-width-row"],["echarts","",1,"chart",3,"initOpts","options","chartFinished"]]},template:function(t,i){1&t&&(e.YNc(0,De,25,13,"div",0),e.ALo(1,"async"),e.YNc(2,Be,2,0,"ng-template",null,1,e.W1O)),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.poolStats$))},dependencies:[p.O5,M.g,$e._w,p.Ov,ke.j],styles:[".stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;width:100%;max-width:100%;margin:15px 0;font-size:32px;overflow:hidden}.stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:baseline;justify-content:space-between;width:100%;margin-left:15px;background:#181b2d;padding:.75rem;width:0;flex-grow:1}.stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]:first-child{margin-left:0}.stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:0;margin-right:1em}.stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart[_ngcontent-%COMP%]{width:100%;height:315px;background:#181b2d}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}.logo-wrapper[_ngcontent-%COMP%]{position:relative;width:62px;height:62px;margin-right:1em}.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;top:0;background:#24273e}.logo-wrapper[_ngcontent-%COMP%]   img.noimg[_ngcontent-%COMP%]{opacity:0}  .symbol{font-size:24px}"],changeDetection:0}),n})();var Ue=s(8466),qe=s(4382);function ze(n,o){1&n&&e._UZ(0,"app-svg-images",12)}function Je(n,o){1&n&&e._UZ(0,"app-svg-images",13)}function Ye(n,o){1&n&&(e.TgZ(0,"span",14),e._UZ(1,"app-svg-images",15),e._uU(2," Signet"),e.qZA())}function Qe(n,o){1&n&&(e.TgZ(0,"span",16),e._UZ(1,"app-svg-images",17),e._uU(2," Testnet"),e.qZA())}function We(n,o){1&n&&(e.TgZ(0,"span",18),e._UZ(1,"app-svg-images",19),e._uU(2," Bisq"),e.qZA())}function Fe(n,o){1&n&&(e.TgZ(0,"span",20),e._UZ(1,"app-svg-images",21),e._uU(2," Mainnet"),e.qZA())}function Ve(n,o){1&n&&(e.TgZ(0,"span",22),e._UZ(1,"app-svg-images",23),e._uU(2," Testnet"),e.qZA())}function Ke(n,o){1&n&&(e.TgZ(0,"span",24),e._UZ(1,"app-svg-images",25),e._uU(2," Mainnet"),e.qZA())}function Xe(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",1)(2,"header")(3,"span",2),e.YNc(4,ze,1,0,"app-svg-images",3),e.YNc(5,Je,1,0,"app-svg-images",4),e.qZA(),e.TgZ(6,"div",5),e.YNc(7,Ye,3,0,"span",6),e.YNc(8,Qe,3,0,"span",7),e.YNc(9,We,3,0,"span",8),e.YNc(10,Fe,3,0,"span",9),e.YNc(11,Ve,3,0,"span",10),e.YNc(12,Ke,3,0,"span",11),e.qZA()(),e._UZ(13,"router-outlet"),e.qZA(),e.BQk()),2&n){const t=o.ngIf,i=e.oxw();e.xp6(4),e.Q6J("ngIf",!i.officialBitexplorerSpace),e.xp6(1),e.Q6J("ngIf",i.officialBitexplorerSpace),e.xp6(1),e.Q6J("ngSwitch",t.val),e.xp6(1),e.Q6J("ngSwitchCase","signet"),e.xp6(1),e.Q6J("ngSwitchCase","testnet"),e.xp6(1),e.Q6J("ngSwitchCase","bisq"),e.xp6(1),e.Q6J("ngSwitchCase","liquid"),e.xp6(1),e.Q6J("ngSwitchCase","liquidtestnet")}}const He=function(n){return{val:n}},je=[{path:"",component:(()=>{class n{constructor(t,i){this.stateService=t,this.languageService=i,this.officialBitexplorerSpace=this.stateService.env.OFFICIAL_MEMPOOL_SPACE}ngOnInit(){this.network$=(0,S.T)((0,g.of)(""),this.stateService.networkChanged$),this.lightning$=this.stateService.lightningChanged$,this.urlLanguage=this.languageService.getLanguageForUrl()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.b),e.Y36(Ue.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-master-page-preview"]],decls:2,vars:5,consts:[[4,"ngIf"],[1,"preview-wrapper"],[1,"header-brand",2,"position","relative"],["name","mempoolSpace","viewBox","0 0 500 126","width","500","height","126","class","mempool-logo","style","width: 200px; height: 50px",4,"ngIf"],["name","officialBitexplorerSpace","style","width: 200px; height: 50px","width","500","height","126","viewBox","0 0 500 126",4,"ngIf"],[3,"ngSwitch"],["class","network signet",4,"ngSwitchCase"],["class","network testnet",4,"ngSwitchCase"],["class","network bisq",4,"ngSwitchCase"],["class","network liquid",4,"ngSwitchCase"],["class","network liquidtestnet",4,"ngSwitchCase"],["class","network mainnet",4,"ngSwitchDefault"],["name","mempoolSpace","viewBox","0 0 500 126","width","500","height","126",1,"mempool-logo",2,"width","200px","height","50px"],["name","officialBitexplorerSpace","width","500","height","126","viewBox","0 0 500 126",2,"width","200px","height","50px"],[1,"network","signet"],["name","signet","width","35","height","35","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","40px","height","48px"],[1,"network","testnet"],["name","testnet","width","35","height","35","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","40px","height","48px"],[1,"network","bisq"],["name","bisq","width","35","height","35","viewBox","0 0 75 75",1,"mainnet","mr-1",2,"width","40px","height","48px"],[1,"network","liquid"],["name","liquid","width","35","height","35","viewBox","0 0 125 125",1,"mainnet","mr-1",2,"width","40px","height","48px"],[1,"network","liquidtestnet"],["name","liquidtestnet","width","35","height","35","viewBox","0 0 125 125",1,"mainnet","mr-1",2,"width","40px","height","48px"],[1,"network","mainnet"],["name","bitcoin","width","35","height","35","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","40px","height","48px"]],template:function(t,i){1&t&&(e.YNc(0,Xe,14,8,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.VKq(3,He,e.lcZ(1,1,i.network$)))},dependencies:[p.O5,p.RF,p.n9,p.ED,r.lC,qe.s,p.Ov],styles:[".preview-wrapper[_ngcontent-%COMP%]{position:relative;display:block;margin:auto;max-width:1200px;max-height:600px;padding-top:80px}.preview-wrapper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;z-index:100;min-height:80px;padding:0rem 3rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;background:#11131f;text-align:start;font-size:1.8em}.preview-wrapper[_ngcontent-%COMP%]   .header-brand[_ngcontent-%COMP%]{width:60%}.preview-wrapper[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.preview-wrapper[_ngcontent-%COMP%]     .preview-header{position:absolute;top:-80px;left:0;right:0;width:100%;padding:0 220px;text-align:center;overflow:hidden;text-overflow:ellipsis;z-index:101;line-height:80px;text-transform:capitalize;font-size:2.4rem}.preview-wrapper[_ngcontent-%COMP%]     .title{font-size:52px}.preview-wrapper[_ngcontent-%COMP%]     .subtitle{font-size:28px}.preview-wrapper[_ngcontent-%COMP%]     .title, .preview-wrapper[_ngcontent-%COMP%]     .subtitle{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;display:inline-block}.preview-wrapper[_ngcontent-%COMP%]     .title-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin:0;width:0;flex-grow:1;flex-shrink:1}"]}),n})(),children:[{path:"block/:id",component:Te},{path:"address/:id",children:[],component:Ze},{path:"tx/:id",children:[],component:ne},{path:"mining/pool/:slug",component:Ge},{path:"lightning",loadChildren:()=>Promise.all([s.e(422),s.e(975)]).then(s.bind(s,2975)).then(n=>n.LightningPreviewsModule)}]}];let et=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(je),r.Bz]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,E.m,r.Bz,et,N.GraphsModule]}),n})()}}]);