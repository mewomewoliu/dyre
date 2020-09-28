(this.webpackJsonpdyre=this.webpackJsonpdyre||[]).push([[0],{61:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,o,r=a(0),i=a.n(r),s=a(11),c=a.n(s),l=a(18),d=(a(66),a(99)),h=a(111),u=Object(d.a)((function(){return{container:{margin:"10rem 10rem",overflow:"hidden"},textArea:{overflow:"hidden",width:"100%",height:"calc(100vh - 20rem)",backgroundColor:function(e){return e.background},color:function(e){return e.font},resize:"none",border:"0px"}}})),m=function(e){var t=e.text,a=e.caretPos,n=e.characters,o=e.state,s=e.theme,c=Object(r.useRef)(null),l=u(s);Object(r.useEffect)((function(){switch(c.current.focus(),o){case"ready":case"running":d(c.current,a,a+n);break;case"pause":break;case"stop":d(c.current,0,a+n)}}),[a,n,o]);var d=function(e,t,a){e.setSelectionRange(t,a)};return i.a.createElement("div",{className:l.container},i.a.createElement(h.a,{rowsMin:40,rowsMax:40,ref:c,readOnly:!0,className:l.textArea,value:t.content}))},g=a(50),p=a.n(g),f=a(49),w=a.n(f),b=a(41),y=a.n(b),E=a(4),v=a(109),k=a(112),x=a(107),T=a(102),S=a(110),C=a(108),N=a(103),A=Object(d.a)((function(e){return{body:{backgroundColor:function(e){return e.background},height:"100vh"},root:{flexGrow:1,height:"100vh"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{color:"white",fontSize:40,display:"flex",justifyContent:"center"},pause:{fontSize:150,color:"white"},pauseContainer:{display:"flex",justifyContent:"center",alignItems:"center"},options:{display:"flex",justifyContent:"center",alignItems:"flex-end",margin:"0px 30px"},stopContainer:{display:"flex",justifyContent:"flex-end"},stop:{fontSize:60,color:"white"},switch:{color:"white"},restore:{color:"white",opacity:.8,padding:"0px 10px"},speedLegend:{padding:"5px 10px",color:"white",opacity:.8}}})),O=Object(E.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:"#F7DC6F",borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(v.a),j=Object(E.a)({root:{color:"grey",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(k.a),I=function(e){var t=e.theme,a=e.open,n=e.title,o=e.stop,r=e.changeTheme,s=e.speed,c=e.setSpeed,l=e.defaultSpeed,d=e.characters,h=e.defaultCharacters,u=e.setCharacters,m=A();return i.a.createElement(x.a,{open:a},i.a.createElement("div",{className:m.root},i.a.createElement(T.a,{container:!0,className:m.root,spacing:3},i.a.createElement(T.a,{item:!0,xs:12},i.a.createElement("h2",{className:m.title},n)),i.a.createElement(T.a,{item:!0,xs:12,className:m.pauseContainer},i.a.createElement(S.a,{title:"Press space bar to resume reading",arrow:!0},i.a.createElement(C.a,null,i.a.createElement(w.a,{className:m.pause})))),i.a.createElement(T.a,{item:!0,xs:12,className:m.options},i.a.createElement(T.a,{item:!0,xs:2,style:{marginBottom:"14px"}},i.a.createElement(N.a,{component:"div"},i.a.createElement(T.a,{component:"label",container:!0,alignItems:"center",spacing:1},i.a.createElement(S.a,{title:"Change theme",arrow:!0},i.a.createElement(T.a,{item:!0},i.a.createElement(O,{checked:"light"===t.id,onChange:r,name:"checkedC"})))))),i.a.createElement(T.a,{container:!0,direction:"row"},i.a.createElement(T.a,{item:!0,xs:11},i.a.createElement(N.a,{gutterBottom:!0,style:{color:"white"}},"Speed"),i.a.createElement(j,{onChange:function(e,t){return c(t)},value:s,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:10,min:150,max:1e3})),s!==l&&i.a.createElement(T.a,{item:!0,xs:1,style:{alignSelf:"center",marginBottom:"-21px"}},i.a.createElement(S.a,{title:"Restore default speed",arrow:!0},i.a.createElement(C.a,{className:m.restore,onClick:function(){return c(l)}},i.a.createElement(y.a,null))))),i.a.createElement(T.a,{container:!0,direction:"row",style:{marginLeft:"27px"}},i.a.createElement(T.a,{item:!0,xs:11},i.a.createElement(N.a,{gutterBottom:!0,style:{color:"white"}},"Characters"),i.a.createElement(j,{onChange:function(e,t){return u(t)},value:d,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:1,min:5,max:35})),d!==h&&i.a.createElement(T.a,{item:!0,xs:1,style:{alignSelf:"center",marginBottom:"-21px"}},i.a.createElement(S.a,{title:"Restore default characters",arrow:!0},i.a.createElement(C.a,{className:m.restore,onClick:function(){return u(h)}},i.a.createElement(y.a,null))))),i.a.createElement(T.a,{item:!0,xs:2,className:m.stopContainer},i.a.createElement(S.a,{title:"Stop Reading",arrow:!0},i.a.createElement(C.a,{onClick:o},i.a.createElement(p.a,{className:m.stop}))))))))},R=a(114),D=a(51),P=a.n(D),U=a(3),z=a(106),F=a(113),L=Object(d.a)((function(e){var t=e.spacing,a=e.palette;return{card:{cursor:"pointer",background:function(e){return"rgba(255,255,255, ".concat(e?.9:.6,")")},margin:"7px",display:"flex",padding:t(2),minWidth:288,borderRadius:12,boxShadow:"0 2px 4px 0 rgba(138, 148, 159, 0.2)","& > *:nth-child(1)":{marginRight:t(2)},"& > *:nth-child(2)":{flex:"auto"},"&:hover":{background:function(e){return"rgba(255,255,255, ".concat(e?1:.7,")")}}},avatar:{},heading:{margin:0,fontSize:16,minHeight:"45px"},subheader:{fontSize:14,color:a.grey[600],letterSpacing:"1px",marginBottom:4,marginTop:0},value:{marginLeft:8,fontSize:14,color:a.grey[500]}}})),M=Object(d.a)((function(){return{root:{cursor:"ew-resize",height:4},rail:{borderRadius:10,height:4,backgroundColor:"rgb(202,211,216)"},track:{borderRadius:10,height:4,backgroundColor:"rgb(117,156,250)"},thumb:{display:"none"}}})),H=function(e){var t=e.onClick,a=e.selected,n=e.title,o=e.lang,r=e.words,s=(e.level,e.speed),c=e.setSpeed,l=L(a),d=M();return i.a.createElement(F.a,{onClick:t,className:Object(U.a)(l.card),elevation:0},i.a.createElement(z.a,null,i.a.createElement("h3",{className:l.heading},n),i.a.createElement("p",{className:l.subheader},o),i.a.createElement("p",{className:l.subheader},"".concat(r," words ").concat(a?"\u2022 ".concat((r/s).toFixed(1),"'\u231b"):"")),a&&i.a.createElement(z.a,{display:"flex",alignItems:"center"},i.a.createElement(k.a,{classes:d,onChange:function(e,t){return c(t)},value:s,marks:!0,step:10,min:150,max:1e3}),i.a.createElement("span",{className:l.value},"".concat(s)))))},W=Object(d.a)((function(){return{body:{backgroundColor:function(e){return e.background},height:"100vh"},helperText:{color:"white",fontSize:40,display:"block"},helperContainer:{justifyContent:"center",alignItems:"center"},backdrop:{zIndex:10,color:"rgba(0,0,0,0.6)"},list:{flexWrap:"nowrap",overflow:"scroll",justifyContent:"center",alignItems:"flex-end"},container:{height:"100%"}}})),B=function(e){var t=e.open,a=e.start,n=e.texts,o=e.selectedText,r=e.setText,s=(e.theme,e.speed),c=e.setSpeed,l=W();return i.a.createElement(R.a,{className:l.backdrop,open:t,onClick:function(){}},i.a.createElement(T.a,{container:!0,className:l.container,direction:"col"},i.a.createElement(T.a,{container:!0,className:l.list,direction:"row"},n.map((function(e){return i.a.createElement(T.a,{item:!0,xs:3},i.a.createElement(H,{selected:e.id===o.id,onClick:function(){return r(e)},title:e.title,lang:e.lang,words:e.words,level:e.level,speed:s,setSpeed:c}))}))),i.a.createElement(T.a,{container:!0,className:l.helperContainer,direction:"row"},i.a.createElement("div",{className:l.helperText},"Press space bar to start reading"),i.a.createElement(C.a,{onClick:a},i.a.createElement(P.a,{style:{fontSize:100,color:"white"}})))))},G=a(104),X=Object(E.a)((function(e){return{root:{height:6},progress:{zIndex:"100"},colorPrimary:{backgroundColor:e.palette.grey["light"===e.id?200:700]},bar:{backgroundColor:"yellow"}}}))(G.a),Y=function(e){return e.length},q=Object(d.a)((function(){return{text:{color:"white",fontSize:100,display:"block"},backdrop:{zIndex:10}}})),_=function(e){var t=e.open,a=e.close,n=q(),o=Object(r.useState)(3),s=Object(l.a)(o,2),c=s[0],d=s[1];return Object(r.useEffect)((function(){var e;return 0===c?(a(),d(3),function(){return clearInterval(e)}):(e=setInterval((function(){return d(c-1)}),1e3),function(){return clearInterval(e)})}),[c,a]),i.a.createElement(R.a,{className:n.backdrop,style:{backgroundColor:"rgba(0,0,0,0)"},open:t},i.a.createElement("div",{className:n.text},c>0?c:""))},$=Object(d.a)((function(){return{body:{backgroundColor:function(e){return e.background},height:"100vh",overflow:"hidden"},progress:{zIndex:"100"},speed:{color:"rgba(112,112,112,0.8)",position:"absolute",width:"100%",textAlign:"right",padding:"20px"}}}));var J=function(e){var t=e.DEFAULT,a=e.ST,s=e.texts,c=e.themes,d=Object(r.useState)(0),h=Object(l.a)(d,2),u=h[0],g=h[1],p=Object(r.useState)(t.STATUS),f=Object(l.a)(p,2),w=f[0],b=f[1],y=Object(r.useState)(t.THEME),E=Object(l.a)(y,2),v=E[0],k=E[1],x=Object(r.useState)(t.TEXT),T=Object(l.a)(x,2),S=T[0],C=T[1],N=Object(r.useState)(t.SPEED),A=Object(l.a)(N,2),O=A[0],j=A[1],R=Object(r.useState)(t.CHARACTERS),D=Object(l.a)(R,2),P=D[0],U=D[1],z=$(v);return Object(r.useEffect)((function(){if(w===a.RUNNING){var e,t,r,i=(t=S.words,r=S.allCharacters,1e3/(O*(r/t)/60));return u<S.content.length?e=setInterval((function(){return g(u+1)}),i):(o=Date.now(),window.logger.log("READING END"),window.logger.log("EXPECTED IN "+(S.words/O).toFixed(3)+" min"),window.logger.log("DONE IN "+((o-n)/6e4).toFixed(3)+" min"),window.logger.log("WPM CALCULATED "+function(e,t,a){var n=1/(a*(t/e)/6e4);return Math.round(n)}(S.words,S.allCharacters,i)),window.logger.log("WPM BY TIME "+6e4*S.words/(o-n)),b(a.STOP),g(0)),function(){return clearInterval(e)}}}),[u,O,S,w]),Object(r.useEffect)((function(){document.body.onkeyup=function(e){32===e.keyCode&&(w===a.RUNNING?(window.logger.log("PAUSE"),b(a.PAUSE),g(u>42?u-40:u)):(w===a.PAUSE||w===a.STOP)&&(window.logger.log("COUNTDOWN"),b(a.READY)))}}),[w,u]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:z.body,onClick:function(e){e.preventDefault(),e.stopPropagation()}},i.a.createElement(X,{thickness:14,variant:"determinate",value:100*u/S.content.length,className:z.progress}),i.a.createElement("div",{className:z.speed},O),i.a.createElement(m,{theme:v,state:w,text:S,caretPos:u,characters:P}),i.a.createElement(I,{open:w===a.PAUSE,title:S.title,theme:v,changeTheme:function(){window.logger.log("THEME CHANGE"),k(c["light"===v.id?"dark":"light"])},stop:function(){window.logger.log("STOP"),g(0),b(a.STOP)},speed:O,setSpeed:function(e){j(e),window.logger.log("SET SPEED: ".concat(e))},defaultSpeed:t.SPEED,characters:P,setCharacters:function(e){U(e),window.logger.log("SET CHARACTERS: ".concat(e))},defaultCharacters:t.CHARACTERS}),i.a.createElement(B,{texts:s,selectedText:S,setText:function(e){C(e),window.logger.log("SET TEXT: ".concat(e.title))},theme:v,open:w===a.STOP,start:function(){return b(a.RUNNING)},speed:O,setSpeed:function(e){j(e),window.logger.log("SET SPEED: ".concat(e))}}),w===a.READY&&i.a.createElement(_,{open:w===a.READY,close:function(){window.logger.log("READING START"),n=Date.now(),b(a.RUNNING)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(105),K=a(52),Q=a(53),V=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:console.log;Object(K.a)(this,e),this.logFn=t,this._init()}return Object(Q.a)(e,[{key:"_init",value:function(){var t=e._name+"INIT:: starting session";this.logFn(">>>>>>>>>>>>>>>>>>>>>>>>"),this.log(t)}},{key:"destroy",value:function(){var t=e._name+"END:: ending session";this.logFn(t)}},{key:"log",value:function(e){this.logFn("status:".concat(e,", time:").concat(Date.now()))}}]),e}();V._name="LOGGER-";var ee=V,te=a(42),ae=[{lang:"english",level:null,title:"NYTimes Magazine TEXT 1",content:"We raced to the Monet house, Michael certain that they would turn us away, me practicing what I would tell the guard in our defense. As soon as he started to scold us, I said: \u2018\u2018The tomato! It was the tomato\u2019s fault. It was trop bonne,\u2019\u2019 using the French expression for \u2018\u2018too good\u2019\u2019 to convey the understanding that the tomato was both delicious and impossible to resist. The guard smiled with amusement and also, it seemed, recognition \u2014 he\u2019d had things that were trop bonne, too."},{lang:"english",level:null,title:"NYTimes Magazine TEXT 2",content:"I rarely met a French person who wouldn\u2019t stop everything to talk about food, and the guard was no exception. He asked if the tomato had been cooked; was it served hot or cold; was it seasoned in a special way? I described the dish, and when I told him what else we\u2019d had, he called me gourmande, the word for greedy, and pointed the way to the entrance."},{lang:"english",level:null,title:"NYTimes Magazine TEXT 3",content:"I\u2019ve returned to the gardens twice since then, but I\u2019ve made my version of that tomato dish countless times, and each time I\u2019m startled by how beautiful it is. Everything you do to make the dish, which isn\u2019t much, seems to brighten what is basic and beloved about a tomato: its form, flavor, texture and hue."},{lang:"english",level:null,title:"NYTimes Magazine TEXT 4",content:"The dish is simply a tomato, peeled and roasted at a very low temperature for a few hours in a pan with an ample amount of olive oil, enough to baste the tomato regularly. Even before it\u2019s ready, it\u2019s lovely: Each new application of oil is like a fresh coat of glossy polish. When it\u2019s cooked through to tender, it holds its shape, its color too, but it seems almost translucent \u2014 you see a tracery of ribs and veins along its contours. But you can\u2019t know the true brilliance of the dish until you taste it: The tomato is vegetal and rich, as you would expect, but it\u2019s also a bit sweet and a touch citrusy. The surprise is at the core. At the start, you peel the tomato, then cut a small, conical wedge out of the top, a hollow to fill with sugar and lime zest. During the hours in the oven, basting with that blend of oil and sugar and zest, the ingredients find their way into every fiber of the tomato, technically making it a kind of confit, a dish cooked in fat (like duck confit) or sugar (like candied cherries)."},{lang:"english",level:null,title:"Reading Extract with line breaks",content:"Reading is becoming more and more important in the new knowledge economy and remains the most effective human activity for transforming information into knowledge.\n\nIf top readers read at speeds of above 1000 words per minute (wpm) with near 85% comprehension, they only represent 1% of readers. Average readers are the majority and only reach around 200 wpm with a typical comprehension of 60%. This seems surprising since most readers, actively reading work documents, newspapers, magazines, books or the contents of a computer display are practicing daily for at least one hour. With such an intense training everyone should be close to top performances.\n    \nUnfortunately, this is far from the real situation. The average reader is five times slower than the good reader. Things are even worse if we consider reading efficiency as well as speed. Reading efficiency is reading speed weighted by comprehension rate and it amounts to 200 x 60% or 120 efficient words per minute (ewpm) for the average reader and to 1000 x 85% or 850 ewpm for top readers. Thus, an efficiency ratio of seven divides these two categories.\n    \nCompare the results of the average reader to other areas. We may imagine a sprinter practicing every day for several years on the running track and then just calmly walking for a race. We can also picture a racing driver never exceeding 30 mph or a pianist playing every day of the week for 20 years and only able to play music like a beginner. Unfortunately, since the age of 12, most readers do not substantially improve their efficiency and never reach their full capacity.\n    \nEvery computer-user who is also a slow typist is aware of the benefits he could obtain with a typing course, but nearly no one suspects the much higher profits he could reach by improving his reading comprehension and speed. The rapid improvement of voice recognition may gradually make typing virtuosity obsolete since a good typist performs well under the speed of speech. On the other hand, human or computer speaking, with an average speed of 150 wpm, will always remain many times slower than a good reader, without any consideration of the skimming and skipping possibilities.\n    \nThere are three possible ways to improve reading. The fastest is probably a speed reading seminar based upon good materials and animated by a dynamic instructor. It is quite usual for a slow reader to double and even triple his reading efficiency during a two-day class offering a positive atmosphere, carefully selected texts and comprehension tests. However, as this rapid and encouraging improvement is not sufficiently anchored, it often fades with time.\n    \nA book about speed reading is the second possibility. Such a book usually provides speed and comprehension tests as well as techniques to improve reading. It often includes more general information about concentration, interest stimulation, skimming techniques and ways to approach a text. Some methods may include audio or videocassettes. A book-based method requires a good deal of time as well as a strong commitment from the reader.\n    \n Finally, a speed reading computer program is probably the most efficient way to achieve top reading levels. Computers offer unique exercises to boost reading efficiency through interactivity, text animation and pacing. Higher reading skills obtained with a computer screen are totally transferable to reading from paper. Unfortunately the inverse way does not work so well. Speed reading software delivers enjoyable and fast paced training, thus giving the consistent practice necessary to break lifelong slow reading habits. This is the task that seminars and speed reading books usually leave up to the reader."}].map((function(e,t){return Object(te.a)(Object(te.a)({},e),{},{id:t,words:(a=e.content,a.split(" ").length),allCharacters:Y(e.content),nonAlphaNumCharacters:e.content.replace(/[a-zA-Z0-9]/g,"").length});var a})),ne={dark:{id:"dark",background:"#2C2C2C",selection:"white",font:"rgba(112,112,112,0.2)"},light:{id:"light",background:"lightgrey",selection:"red",font:"rgba(112,112,112,0.2)"}};window.logger=new ee;var oe={RUNNING:"running",PAUSE:"pause",STOP:"stop",READY:"ready"},re={SPEED:250,TEXT:ae[3],CHARACTERS:15,THEME:ne.dark,STATUS:oe.STOP};window.logger.log("DEFAULT SPEED:".concat(re.SPEED)),window.logger.log("DEFAULT TEXT:".concat(re.TEXT.title)),window.logger.log("DEFAULT CHARACTERS:".concat(re.CHARACTERS)),window.logger.log("DEFAULT STATUS:".concat(re.STATUS)),c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z.a,null),i.a.createElement(J,{DEFAULT:re,ST:oe,themes:ne,texts:ae})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.57276c02.chunk.js.map