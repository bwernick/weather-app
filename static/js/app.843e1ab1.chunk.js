(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{149:function(e,t,o){o(150),e.exports=o(276)},150:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},276:function(e,t,o){"use strict";o.r(t);var r=o(289),n=o(5),a=o.n(n),i=o(9),s=o.n(i),c=o(10),l=o.n(c),h=o(11),u=o.n(h),p=o(4),f=o.n(p),g=o(1),m=o.n(g),d=o(2),w=o(16),y=o(8),x=o(287),b=o(145),C=o(288),v=o(0),S=o.n(v),E={Rain:{color:"#005BEA",title:"Raining",subtitle:"Get a cup of coffee",icon:"weather-rainy",image:"https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80"},Clear:{color:"#f7b733",title:"So Sunny",subtitle:"It is hurting my eyes",icon:"weather-sunny",image:"https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},Thunderstorm:{color:"#616161",title:"A Storm is coming",subtitle:"Because Gods are angry",icon:"weather-lightning",image:"https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},Clouds:{color:"#1F1C2C",title:"Clouds",subtitle:"Everywhere",icon:"weather-cloudy",image:"https://images.pexels.com/photos/414491/pexels-photo-414491.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},Snow:{color:"#00d2ff",title:"Snow",subtitle:"Get out and build a snowman for me",icon:"weather-snowy",image:"https://images.pexels.com/photos/948857/pexels-photo-948857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},Drizzle:{color:"#076585",title:"Drizzle",subtitle:"Partially raining...",icon:"weather-hail",image:"https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},Haze:{color:"#66A6FF",title:"Haze",subtitle:"Another name for Partial Raining",icon:"weather-hail",image:"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},Smoke:{color:"#738276",title:"Smoke",subtitle:"California is burning again...",icon:"weather-fog",image:"https://images.pexels.com/photos/417070/pexels-photo-417070.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},Mist:{color:"#3CD3AD",title:"Mist",subtitle:"Don't roam in forests!",icon:"weather-fog",image:"https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}},j=function(e){var t=e.weather,o=e.temperature;return null!=t?m.a.createElement(y.a,{style:[k.weatherContainer,{backgroundColor:E[t].color}]},m.a.createElement(b.a,{source:E[t].image,style:k.image},m.a.createElement(y.a,{style:k.headerContainer},m.a.createElement(C.a,{size:72,name:E[t].icon,color:"#fff"}),m.a.createElement(w.a,{style:k.tempText},o,"\u02da")),m.a.createElement(y.a,{style:k.bodyContainer},m.a.createElement(w.a,{style:k.title},E[t].title),m.a.createElement(w.a,{style:k.subtitle},E[t].subtitle)))):m.a.createElement(y.a,null,m.a.createElement(w.a,null,"Oh no, something went wrong"))};j.propTypes={temperature:S.a.number.isRequired,weather:S.a.string};var k=d.a.create({weatherContainer:{flex:1},headerContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around",textShadowColor:"rgba(0, 0, 0, 0.75)",textShadowOffset:{width:-1,height:1},textShadowRadius:10},tempText:{fontSize:72,color:"#fff",textShadowColor:"rgba(0, 0, 0, 0.75)",textShadowOffset:{width:-1,height:1},textShadowRadius:10},bodyContainer:{flex:2,alignItems:"flex-start",justifyContent:"flex-end",paddingLeft:25,marginBottom:40},title:{fontSize:60,color:"#fff",textShadowColor:"rgba(0, 0, 0, 0.75)",textShadowOffset:{width:-1,height:1},textShadowRadius:10},subtitle:{fontSize:24,color:"#fff",textShadowColor:"rgba(0, 0, 0, 0.75)",textShadowOffset:{width:-1,height:1},textShadowRadius:10},image:{flex:1,resizeMode:"cover",justifyContent:"center"}}),R=j;function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=f()(e);if(t){var n=f()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u()(this,o)}}x.a.Lottie;var D=function(e){l()(o,e);var t=z(o);function o(){var e;a()(this,o);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,temperature:0,weatherCondition:null,error:null},e}return s()(o,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.fetchWeather(t.coords.latitude,t.coords.longitude)}),(function(t){e.setState({error:"Error Getting Weather Condtions"})}))}},{key:"fetchWeather",value:function(e,t){var o=this;fetch("http://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&APPID=e41d848d59459c9dc1c57eb7c002240e&units=metric").then((function(e){return e.json()})).then((function(e){console.log(e),o.setState({temperature:e.main.temp,weatherCondition:e.weather[0].main,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,o=e.weatherCondition,r=e.temperature;return m.a.createElement(y.a,{style:F.container},t?m.a.createElement(y.a,{style:F.loadingContainer},m.a.createElement(w.a,{style:F.loadingText},"Fetching The Weather")):m.a.createElement(R,{weather:o,temperature:r}))}}]),o}(m.a.Component),F=d.a.create({container:{flex:1,backgroundColor:"#fff"},loadingContainer:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFFDE4"},loadingText:{fontSize:30}});Object(r.a)(D)}},[[149,1,2]]]);
//# sourceMappingURL=app.843e1ab1.chunk.js.map