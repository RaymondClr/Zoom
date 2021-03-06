(function (global) {
    // prettier-ignore
    var Tree=function(){function t(){for(var t=-1,n=arguments.length;++t<n;)if(!arguments[t])return!1;return!0}function n(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2]);default:return t.apply(n,e)}}function e(t,n){for(var e=-1,r=t.length;++e<r;)n(t[e],e,t)}function r(t,n){for(var e=-1,r=t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function o(t,n){for(var e=-1,r=t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}function i(t){return D([].slice.call(arguments,1),function(n){if(T(n))for(var e in n)m(n,e)&&(t[e]=n[e])}),t}function u(t,n){n=s(n,t);for(var e=0,r=n.length;null!=t&&e<r;)t=t[V(n[e++])];return e&&e==r?t:void 0}function f(t){return Object.prototype.toString.call(t)}function a(t,n){return c(t,n,function(n,e){return m(t,e)})}function c(t,n,r){var o={};return e(n,function(n){var e=t[n];r(e,n)&&(o[n]=e)}),o}function l(t){if("string"==typeof t)return t;if(x(t))return r(t,l)+"";var n=t+"";return"0"==n&&1/t==-qn?"-0":n}function s(t,n){if(x(t))return t;return O(t,n)?[t]:A(j(t))}function h(t,n){if(null==n||n<1)return[];for(var e=[],r=0,o=t.length;r<o;)e.push([].slice.call(t,r,r+=n));return e}function p(t){if(!I(t))return t;return x(t)?t.slice():i({},t)}function d(t){var n=x(t)?[]:{};return I(t)&&v(t,function(t,e,r){m(r,e)&&(n[e]=I(t)?d(t):t)}),n}function g(t){return function(){return t}}function b(t,n){for(var e=-1,r=t.length;++e<r;)if(t[e]===n)return!0;return!1}function v(t,n){var r=x(t)?e:D;return r(t,n)}function y(t,n,e){var r=null==t?void 0:t[n];return void 0===r?e:r}function m(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function x(t){return"[object Array]"===f(t)}function k(t){return!0===t||!1===t}function w(t){return"function"==typeof t}function O(t,n){if(x(t))return!1;var e=typeof t;if("number"==e||"boolean"==e||null==t)return!0;return F(fe.test(t),!ue.test(t),null!=n&&t in Object(n))}function S(t){return null==t}function C(t){return null===t}function L(t){return"number"==typeof t}function T(n){var e=typeof n;return t(null!=n,"object"==e||"function"==e)}function I(t){return null!=t&&"object"==typeof t}function B(t){return"string"==typeof t}function N(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n}function P(t,n){var e={};return D(t,function(t,r,o){e[r]=n(t,r,o)}),e}function E(t,n){if(null==t)return{};for(var e={},r=0,o=t.length;r<o;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e}function D(t,n){e(N(t),function(e){n(t[e],e,t)})}function F(){for(var t=-1,n=arguments.length;++t<n;)if(arguments[t])return!0;return!1}function W(t,n){return r(t,z(n))}function z(t){return function(n){return n[t]}}function A(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(ae,function(t,e,r,o){n.push(r?o.replace(ne,"$1"):e||t)}),n}function R(){return!1}function U(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}function V(t){if("string"==typeof t)return t;var n=t+"";return"0"==n&&1/t==-qn?"-0":n}function j(t){return null==t?"":l(t)}function G(){var t=[],n=[].concat.apply([],arguments);return e(n,function(n){b(t,n)||t.push(n)}),t}function K(t,n){return delete t[n],t}function X(t){for(var n=N(t),e=n.length,r=new Array(e),o=0;o<e;o++)r[o]=t[n[o]];return r}function Y(){for(var t=n(Math.max,null,W(arguments,"length").concat(0)),e=new Array(t),r=0;r<t;r++)e[r]=W(arguments,""+r);return e}function M(t,e,r,o){var i=sn(r)?Z:J;return n(i,null,arguments)}function H(t,e){var r=an(t.type)?_:Q;i(n(r,null,arguments),At(e))}function J(t,n,e,r){var o=At(n);t=In(t,e,An(n,e));if(gn(e)&&m(o,"selection"))return r.selectableElement.push({container:t,itemIndex:o.selection}),i(t,K(o,"selection"));return i(t,At(n))}function Q(t,n,e,r){e=ge&&_t(e)?"button":e;var o=Zt(e)?mt:Bn,i=o(t,e,An(n,e));return i}function _(t,n,e,r){return Nn(t,Ut(n))}function Z(t,n,e,r){var o=At(n),u=Pn(t,Ut(n));return o.expanded&&r.nodeItems.push(u),i(u,K(o,"expanded"))}function q(t,n,e){return St(n,function(n,r,o,i){var f=u(t,o);u(e,o)(f)&&(i[r]=f)}),n}function tt(t,n,e,r){return o(t,function(t){var i=[],u=o(t.children,function(t){return ln(t.type)&&i.push(t),r(t)&&n.push(t),e(n)});return!!u||tt(i,n,e,r)})}function nt(t,n,e){v(t,function(r,o){e(r,o,n.concat(o),t),I(r)&&nt(r,n.concat(o),e)})}function et(t,n,e,r,o){D(t,function(t,i){if(i=Lt(i).toLowerCase(),!mn(i)||!vn(n.type,i))return;if(Qt(i)){var u=e(n,t,i,o);et(t,u,e,r,o)}else r(n,t,i,o)})}function rt(t){return y(t,"config")}function ot(t){var n=t.properties;return n&&n.name}function it(t){return y(t,"param")}function ut(t){var n=y(t,"param");return x(n)?Ln(n):[]}function ft(t){var n=y(t,"style");return T(n)?n:{}}function at(t,n){var e=Yt(t,n),r=new Ct;return et(t,e,M,H,r),Wn(r.selectableElement),It(r.nodeItems),e}function ct(t,n,e,r){var o=at(t,n);return Xt(o,r),kn(o)&&e&&o.show(),o}function lt(t,n,e,r){var o=null;return function(){return(un(o)||se)&&(o=at(t,n)),Xt(o,r),kn(o)&&e&&o.show(),o}}function st(t){var e=t?lt:ct;return n(e,null,[].slice.call(arguments,1))}function ht(){var t=this.graphics.measureString(this.text,this.font),n=this.graphics.measureString(this.text,this.font,t[0]),e=se?Bt(n[0],this.text):n[0],r=(this.width-e)/2+this.left+this.fontOffset[0],o=be?me:(this.height-n[1])/2+this.top+this.fontOffset[1];return[r+Qe[0],o+Qe[1]]}function pt(t){return ScriptUI.newFont(t.fontName,Sn(t.fontStyle),t.fontSize)}function dt(t,e){var o=r(e,function(e){return n(En,t,e)});return E(Re,o)}function gt(t,n,e){var r=Et(e,n);S(r)&&(r={});var o=y(e,1,fr.bounds),u=y(e,2,fr.text),f={text:u,properties:{name:r.name}},c=t.add(bt(n,f),o),l=i(a(r,Xe),{bounds:o,text:u});return l=q(Cn(l),d(lr),hr),kt(c,n,l)}function bt(t,n){return wn(t)+yt(n)}function vt(t,n,e){var r=Et(e,n);S(r)&&(r={});var o=y(e,1,ar.bounds),u=y(e,2,ar.text),f={text:u,properties:{name:r.name}},c=t.add(bt(n,f),o),l=i(a(r,Ye),{bounds:o,text:u});return l=q(Cn(l),d(sr),pr),kt(c,n,l)}function yt(t){return Tt(uneval(t))}function mt(t,n,e){var r={rectbutton:gt,roundbutton:vt};return r[n](t,n,e)}function xt(t,n){var e=t.graphics,r="rectbutton"===n?"rectPath":"ellipsePath",o="rectbutton"===n?wt:Ot;return t.onDraw=function(){var n=new o(t);e[r](n.left,n.top,n.width,n.height),n.enableFill&&e.fillPath(n.pen.fill),n.enableStroke&&e.strokePath(n.pen.stroke),n.enableText&&e.drawString(n.text,n.pen.text,n.textX,n.textY,n.font)},t}function kt(t,n,e){var r=t.graphics,o=dt(r,Tn(e)),u=pt(On(e));return i(r,a(e,je),{pen:o.mouseout,font:u}),xt(Kn(Xn(t,o)),n)}function wt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=0,this.top=0,this.width=t.size[0]-ye,this.height=t.size[1]-ye,this.textLocation=ht.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function Ot(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=this.pen.stroke.lineWidth,this.top=this.pen.stroke.lineWidth,this.width=t.size[0]-2*this.left-ye,this.height=t.size[1]-2*this.top-ye,this.textLocation=ht.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function St(t,e){nt(t,[],function(t){I(t)||n(e,null,arguments)})}function Ct(){this.nodeItems=[],this.selectableElement=[]}function Lt(t){return t.replace(te,"")}function Tt(t){return t.replace(ee,"")}function It(t){e(t,function(t){t.expanded=!0})}function Bt(t,n){var e=n.length;return t/((e+xe)/e)}function Nt(t,n){t.watch(n,function(t,n,e){return n})}function Pt(t){return!!t&&Jt(t.BridgeTalk)&&t.BridgeTalk}function Et(t,n){return t[Dt(n)]}function Dt(t){if(cn(t))return Ce[t];if(Zt(t))return Te[t];if(Qt(t))return Le[t]}function Ft(t){return x(t)?Ln(t):ut(t)}function Wt(t){function n(t){return t.length>0}t=String(t);var e=[];return tt([this],e,n,function(n){var e=ot(n);if(S(e))return!1;return t===e}),0===e.length?null:e[0]}function $t(){function t(){return targetNames.length===n.length}targetNames=Rn(arguments);var n=[],e=[];return tt([this],e,t,function(t){var e=ot(t);if(S(e))return!1;return b(targetNames,e)&&!b(n,e)&&n.push(e)}),0===e.length?null:e}function zt(){var t=Rn(arguments),n=[];return tt([this],n,R,function(n){return b(t,n.type)}),0===n.length?null:n}function At(t){return x(t)?{}:ft(t)}function Rt(t){return en(t)&&nn(t.global)&&t.global}function Ut(t){var n=T(t)?it(t):t;return String(n)}function Vt(t,n){return hn(n)?n:new Window(t[0],t[1],t[2],t[3])}function jt(t){return r(Gt(t),function(t){return t/255})}function Gt(t){var n;return t=t.replace(oe,"$1$1$2$2$3$3"),t.replace(ie,function(t,e,r,o){n=[parseInt(e,16),parseInt(r,16),parseInt(o,16)]}),n}function Kt(t,n){return jt(t).concat(n)}function Xt(t,n){t.layout.layout(n),t.layout.resize()}function Yt(t,n){var e=Vt(Yn(ut(t)),n);return e.onResizing=e.onResize=Dn,i(e,ft(t))}function Mt(t){return parseInt(Jn.appVersion)===t}function Ht(t,n){return function(e){return L(e)&&e>=t&&e<=n}}function Jt(t){return null!=t&&"[object BridgeTalk]"===f(t)}function Qt(t){return Ne.test(Ie[t])}function _t(t){return Fe.test(Ie[t])}function Zt(t){return De.test(Ie[t])}function qt(t){return F(Ht(0,3)(t),B(t)&&re.test(t))}function tn(t){return t===Hn}function nn(t){return null!=t&&"[object global]"===f(t)}function en(t){return null!=t&&"[object $]"===f(t)}function rn(t){return B(t)&&ie.test(t)}function on(t){return ce===t}function un(t){return null===t||!t.visible}function fn(t){return t.button===ze}function an(t){return Pe.test(Ie[t])}function cn(t){return $e.test(Ie[t])}function ln(t){return We.test(Ie[t])}function sn(t){return"node"===t}function hn(t){return t instanceof Panel}function pn(t){return hn(t)}function dn(t){return t.button===Ae}function gn(t){return Ee.test(Ie[t])}function bn(t){return"tabbedpanel"===t}function vn(t,n){var e=Ie[t]+Ie[n];return Be.test(e)}function yn(t){return tn(t)||pn(t)}function mn(t){return m(Ie,t)}function xn(t,n){return!!t&&b(n,t.appName)}function kn(t){return t instanceof Window}function wn(t){return Ke[t]}function On(t){return a(t,Ue)}function Sn(t){return B(t)?ScriptUI.FontStyle[t.toUpperCase()]:t}function Cn(t){return P(t,function(t,n){return b(Ge,n)&&!x(t)?U(4,g(t)):t})}function Ln(t){return r(t,function(t){return C(t)?void 0:t})}function Tn(t){return r(n(Y,null,X(a(t,Ve))),function(t){var e=h(t,3),o=Y(e[0],e[1]),i=r(o,function(t){return n(Kt,null,t)});return i.concat(e[2])})}function In(t,n,e){return t.add(n,e[1],e[2],e[3])}function Bn(t,n,e){return t.add(n,e[1],e[2],e[3],e[4],e[5])}function Nn(t,n){return t.add("item",n)}function Pn(t,n){return t.add("node",n)}function En(t,n,e,r){return{text:this.newPen(this.PenType.SOLID_COLOR,t,1),fill:this.newBrush(this.BrushType.SOLID_COLOR,n),stroke:this.newPen(this.PenType.SOLID_COLOR,e,r)}}function Dn(){this.layout.resize()}function Fn(t){if(!T(t))return null;var e=n(st,null,$n(t,_n));return ve.push(e),e}function Wn(t){e(t,function(t){var n=t.container,e=t.itemIndex;if(bn(n.type))return n.selection=t.itemIndex;var o=r(x(e)?e:[e],function(t){return n.items[t]});n.selection=o})}function $n(t,n){var e=i(p(cr),rt(t)),r=!!e.show,o=!!e.dockable,u=!!e.singleton,f=zn(n.context,o,u),a=Vn(n.layoutMode,e.layoutMode);return[u,t,f,r,a]}function zn(t,n,e){if(e||!n)return Window;if(yn(Mn))return Mn;return yn(t)?t:Window}function An(t,n){return Gn(Ft(t),n)}function Rn(t){return G(r([].concat.apply([],t),String))}function Un(t){e(t,function(t){var n=t.prototype;n.getElementById=Wt,n.getElementsByName=$t,n.getElementsByType=zt,Nt(n,"getElementById"),Nt(n,"getElementsByName"),Nt(n,"getElementsByType")})}function Vn(t,n){if(Ht(0,2)(n))return n;if(Ht(0,2)(t))return t;return 0}function jn(t,n){e(Re,function(e){t.addEventListener(e,n)})}function Gn(t,n){var e=t[0];if(S(e))return t;var r=Dt(n),o=t[r];if(T(o)||(t[r]={}),m(o,"name"))return t;return t[r].name=e,t}function Kn(t){return t.addEventListener("mouseup",function(n){n.stopPropagation(),w(t.onClick)&&fn(n)&&t.onClick()}),t}function Xn(t,n){return jn(t,function(e){if(e.stopPropagation(),dn(e))return;t.graphics.pen=n[e.type],t.notify("onDraw")}),t}function Yn(t){var n=String(t[0]);return t[0]=b(we,n)?n:Se,t}var Mn=this,Hn=Rt($),Jn=Pt(Hn),Qn=["aftereffects","photoshop","illustrator","indesign","estoolkit"];if(!xn(Jn,Qn))return null;var _n={},Zn="0.3.6",qn=1/0,te=/\d/g,ne=/\\(\\)?/g,ee=/\)$|^\(/g,re=/REGULAR|BOLD|ITALIC|BOLDITALIC/i,oe=/^#?([a-f\d])([a-f\d])([a-f\d])$/gi,ie=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi,ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/,ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ce=Jn.appName,le=on("aftereffects"),se=on("photoshop"),he=on("illustrator"),pe=on("indesign"),de=on("estoolkit"),ge=le&&Mt(16),be=he||pe,ve=[],ye=se?1:0,me=he?4.5:5,xe=2.4,ke={aftereffects:["dialog","palette","window"],photoshop:"dialog",illustrator:["dialog","palette","window"],indesign:"dialog",estoolkit:["dialog","palette","window"]},we=ke[ce],Oe={aftereffects:"palette",photoshop:"dialog",illustrator:"palette",indesign:"dialog",estoolkit:"palette"},Se=Oe[ce],Ce={button:3,checkbox:3,dropdownlist:3,edittext:3,iconbutton:3,image:3,listbox:3,progressbar:4,radiobutton:3,scrollbar:5,slider:5,statictext:3,treeview:3},Le={group:2,panel:3,tab:3,tabbedpanel:3},Te={rectbutton:3,roundbutton:3,angle:3},Ie={button:"A",checkbox:"B",dialog:"C",dropdownlist:"D",edittext:"E",group:"G",iconbutton:"H",image:"I",item:"J",listbox:"K",node:"L",palette:"M",panel:"N",progressbar:"O",radiobutton:"P",scrollbar:"Q",slider:"R",statictext:"S",tab:"T",tabbedpanel:"U",treeview:"V",window:"W",rectbutton:"X",roundbutton:"Y"};de&&i(Ie,{flashplayer:"F"}),se&&K(Ie,"treeview");var Be=/[CGMNTW][ABDEFGHIKNOPQRSUVXYZ]|[DK]J|[VL][LJ]|UT/,Ne=/[DGKLNTUV]/,Pe=/[DKLV]/,Ee=/[DKUV]/,De=/[XYZ]/,Fe=/[XY]/,We=/[GNTU]/,$e=/[ABDEFHIKOPQRSV]/,ze=0,Ae=2,Re=["mouseover","mouseout","mousedown","mouseup"],Ue=["fontName","fontStyle","fontSize"],Ve=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],je=["enableText","enableFill","enableStroke","fontOffset"],Ge=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Ke={rectbutton:"customView",roundbutton:"customView",angle:"customBoundedValue"},Xe=["enableText","enableFill","enableStroke","fontName","fontStyle","fontSize","fontOffset","fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Ye=Xe,Me={aftereffects:2,photoshop:1,illustrator:2,indesign:2,estoolkit:2},He=U(4,g(Me[ce])),Je={aftereffects:[0,0],photoshop:[0,0],illustrator:[0,2],indesign:[0,3],estoolkit:[0,-1]},Qe=Je[ce],_e={aftereffects:["#161616","#8a8a8a","#161616","#ffffff"],photoshop:["#f0f0f0","#f0f0f0","#f0f0f0","#ffffff"],illustrator:["#4b4b4b","#ffffff","#ffffff","#ffffff"],indesign:["#4b4b4b","#ffffff","#ffffff","#ffffff"],estoolkit:["#000000","#000000","#000000","#000000"]},Ze=_e[ce],qe={aftereffects:["#8a8a8a","#232323","#636363","#2d8ceb"],photoshop:["#454545","#454545","#363636","#454545"],illustrator:["#ffffff","#535353","#46a0f5","#46a0f5"],indesign:["#ffffff","#535353","#46a0f5","#46a0f5"],estoolkit:["#e5f1fb","#e1e1e1","#cce4f7","#e5f1fb"]},tr=qe[ce],nr={aftereffects:["#8a8a8a","#8a8a8a","#636363","#2d8ceb"],photoshop:["#666666","#666666","#636363","#1473e7"],illustrator:["#ffffff","#ffffff","#46a0f5","#46a0f5"],indesign:["#ffffff","#ffffff","#46a0f5","#46a0f5"],estoolkit:["#0078d7","#adadad","#005499","#0078d7"]},er=nr[ce],rr={aftereffects:[0,0,80,28],photoshop:[0,0,65,25],illustrator:[0,0,80,26],indesign:[0,0,80,28],estoolkit:[0,0,78,23]},or=rr[ce],ir={aftereffects:[0,0,30,30],photoshop:[0,0,28,28],illustrator:[0,0,28,28],indesign:[0,0,30,30],estoolkit:[0,0,23,23]},ur=ir[ce],fr={text:"",bounds:or},ar={text:"",bounds:ur},cr={dockable:!0,show:!0,singleton:!1},lr={enableText:!0,enableFill:!0,enableStroke:!0,fontName:"Tahoma",fontStyle:"REGULAR",fontSize:12,fontOffset:[0,0],fontColor:Ze,fillColor:tr,strokeColor:er,fontOpacity:[1,1,1,1],fillOpacity:[1,1,1,1],strokeOpacity:[1,1,1,1],strokeWidth:He},sr=lr,hr={enableText:k,enableFill:k,enableStroke:k,fontName:B,fontStyle:qt,fontSize:Ht(1,1e3),fontOffset:[L,L],fontColor:[rn,rn,rn,rn],fillColor:[rn,rn,rn,rn],strokeColor:[rn,rn,rn,rn],fontOpacity:[Ht(0,1),Ht(0,1),Ht(0,1),Ht(0,1)],fillOpacity:[Ht(0,1),Ht(0,1),Ht(0,1),Ht(0,1)],strokeOpacity:[Ht(0,1),Ht(0,1),Ht(0,1),Ht(0,1)],strokeWidth:[Ht(0,10),Ht(0,10),Ht(0,10),Ht(0,10)]},pr=hr;return Un([Window,Panel,Group]),_n.parse=Fn,_n.version=Zn,_n}.call(this);
    Tree.context = global;

    var SCRIPT_NAME = 'Zoom',
        SCRIPT_VERSION = '2.0.9',
        SCRIPT_DATE = '2022/6/18',
        SCRIPT_AUTHOR = 'Raymond Yan';

    var STEP_DEFAULT = 5;

    var WSCRIPT_PATH_DEFAULT = createPath('~', 'AppData', 'Roaming', 'Aescripts', SCRIPT_NAME),
        WSCRIPT_FILE_PATH = createPath(WSCRIPT_PATH_DEFAULT, 'FitView.vbs');

    var FIT_UP_WSCRIPT = 'Set WshShell = WScript.CreateObject("WScript.Shell")\nWshShell.SendKeys "%/"';

    var showSettingsWindow = Tree.parse({ config: { singleton: true }, param: [, SCRIPT_NAME], style: { alignChildren: ['fill', ''] }, statictext: ['tips', , '?????? Fit ??????????????????????????????'], group: { style: { orientation: 'row', alignChildren: ['fill', ''] }, button1: ['cancel', , '?????????'], button2: ['confirm', , '?????????'] } }),
        elements = Tree.parse({ param: [, , , { resizeable: true }], style: { margins: 5, alignChildren: ['fill', ''] }, group: { style: { spacing: 5, alignChildren: ['fill', ''] }, rectbutton1: { param: ['zoomIn', [0, 0, 25, 25], '???', { enableStroke: false }], style: { alignment: ['left', ''] } }, slider: { param: ['zoomRatio', undefined, 0, 1, 100], style: { preferredSize: [-1, 25], helpTip: SCRIPT_NAME + ' ' + SCRIPT_VERSION + ' | ' + SCRIPT_DATE + ' | ' + SCRIPT_AUTHOR } }, rectbutton2: { param: ['zoomOut', [0, 0, 25, 25], '???', { enableStroke: false }], style: { alignment: ['right', ''] } } } });

    var zoomInButton = elements.getElementById('zoomIn'),
        zoomRatioSlider = elements.getElementById('zoomRatio'),
        zoomOutButton = elements.getElementById('zoomOut');

    runScript();

    function addRightClickEvent(element, handle) {
        element.addEventListener('click', function (event) {
            if (isRightClick(event)) handle();
        });
    }

    function calculateZoomInValue(value) {
        var result = Math.ceil(Math.ceil(value) / STEP_DEFAULT) * STEP_DEFAULT - STEP_DEFAULT;
        return result < 1 ? 1 : result;
    }

    function calculateZoomOutValue(value) {
        var result = Math.floor(Math.floor(value) / STEP_DEFAULT) * STEP_DEFAULT + STEP_DEFAULT;
        return result > 100 ? 100 : result;
    }

    function calculateZoomRatioValue(value) {
        return Math.floor(value * 100) / 100;
    }

    function canWriteFile() {
        var mainSectionName = parseFloat(app.version) > 12.0 ? 'Main Pref Section v2' : 'Main Pref Section';
        var securitySetting = app.preferences.getPrefAsLong(mainSectionName, 'Pref_SCRIPTING_FILE_NETWORK_SECURITY');
        return securitySetting === 1;
    }

    function closeWindow() {
        this.window.close();
    }

    function createPath() {
        return [].join.call(arguments, '/');
    }

    function createWScriptFile() {
        var file = new File(WSCRIPT_FILE_PATH);
        return file.exists ? file : writeFile(file, FIT_UP_WSCRIPT);
    }

    function createWScriptFolder() {
        var folder = new Folder(WSCRIPT_PATH_DEFAULT);
        return folder.exists ? folder : folder.create();
    }

    function createZoom(calculator) {
        return function () {
            if (hasActiveView()) setViewRatio((zoomRatioSlider.value = calculator(zoomRatioSlider.value)) / 100);
        };
    }

    function fitUpView() {
        if (!hasActiveView()) return;
        if (!canWriteFile()) return initSettingsWindow();
        var WScriptFile = getWScriptFile();
        WScriptFile && runWScript(WScriptFile) && syncZoomRatio();
    }

    function getViewRatio() {
        return app.activeViewer.views['0'].options.zoom;
    }

    function getWScriptFile() {
        return createWScriptFolder() && createWScriptFile();
    }

    function hasActiveView() {
        return !!app.activeViewer;
    }

    function initSettingsWindow() {
        var elements = showSettingsWindow();
        var confirmButton = elements.getElementById('confirm');
        var cancelButton = elements.getElementById('cancel');
        elements.defaultElement = confirmButton;
        elements.cancelElement = cancelButton;
        confirmButton.onClick = showPreferencesWindow;
        cancelButton.onClick = closeWindow;
    }

    function isRightClick(event) {
        return event.button === 2;
    }

    function isWindowsSystem() {
        return /Windows/.test($.os);
    }

    function runScript() {
        hasActiveView() && syncZoomRatio();
        zoomInButton.onClick = createZoom(calculateZoomInValue);
        zoomOutButton.onClick = createZoom(calculateZoomOutValue);
        zoomRatioSlider.onChange = zoomRatioSlider.onChanging = createZoom(calculateZoomRatioValue);
        isWindowsSystem() && addRightClickEvent(elements, fitUpView);
    }

    function runWScript(file) {
        return file.execute(), file.execute();
    }

    function setViewRatio(value) {
        app.activeViewer.views['0'].options.zoom = value;
    }

    function showPreferencesWindow() {
        closeWindow.call(this);
        app.executeCommand(parseFloat(app.version) > 16.0 ? 3131 : 2359);
    }

    function syncZoomRatio() {
        zoomRatioSlider.value = getViewRatio() * 100;
    }

    function writeFile(file, content) {
        file.encoding = 'utf-8';
        return file.open('w') && file.write(content) && file.close() && file;
    }
})(this);
