"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{4554:function(e,t,i){/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */let Controller=class Controller{constructor(e,t,i,n,o="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Controller.nextNameID=Controller.nextNameID||0,this.$name.id=`lil-gui-name-${++Controller.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",e=>e.stopPropagation()),this.domElement.addEventListener("keyup",e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};let BooleanController=class BooleanController extends Controller{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function normalizeColorString(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}let n={isPrimitive:!0,match:e=>"number"==typeof e,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},o=[{isPrimitive:!0,match:e=>"string"==typeof e,fromHexString:normalizeColorString,toHexString:normalizeColorString},n,{isPrimitive:!1,match:e=>Array.isArray(e),fromHexString(e,t,i=1){let o=n.fromHexString(e);t[0]=(o>>16&255)/255*i,t[1]=(o>>8&255)/255*i,t[2]=(255&o)/255*i},toHexString([e,t,i],o=1){o=255/o;let a=e*o<<16^t*o<<8^i*o<<0;return n.toHexString(a)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){let o=n.fromHexString(e);t.r=(o>>16&255)/255*i,t.g=(o>>8&255)/255*i,t.b=(255&o)/255*i},toHexString({r:e,g:t,b:i},o=1){o=255/o;let a=e*o<<16^t*o<<8^i*o<<0;return n.toHexString(a)}}];function getColorFormat(e){return o.find(t=>t.match(e))}let ColorController=class ColorController extends Controller{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=getColorFormat(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let e=normalizeColorString(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};let FunctionController=class FunctionController extends Controller{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}};let NumberController=class NumberController extends Controller{constructor(e,t,i,n,o,a){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(o);let s=void 0!==a;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id);let e=window.matchMedia("(pointer: coarse)").matches;e&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let increment=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},t=!1,i,n,o,a,s,onMouseMove=e=>{if(t){let o=e.clientX-i,a=e.clientY-n;Math.abs(a)>5?(e.preventDefault(),this.$input.blur(),t=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(o)>5&&onMouseUp()}if(!t){let t=e.clientY-o;s-=t*this._step*this._arrowKeyMultiplier(e),a+s>this._max?s=this._max-a:a+s<this._min&&(s=this._min-a),this._snapClampSetValue(a+s)}o=e.clientY},onMouseUp=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("mouseup",onMouseUp)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener("keydown",e=>{"Enter"===e.key&&this.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),increment(this._step*this._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),increment(-(this._step*this._arrowKeyMultiplier(e)*1)))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),increment(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{i=e.clientX,n=o=e.clientY,t=!0,a=this.getValue(),s=0,window.addEventListener("mousemove",onMouseMove),window.addEventListener("mouseup",onMouseUp)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){let e;this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let map=(e,t,i,n,o)=>(e-t)/(i-t)*(o-n)+n,setValueFromX=e=>{let t=this.$slider.getBoundingClientRect(),i=map(e,t.left,t.right,this._min,this._max);this._snapClampSetValue(i)},mouseMove=e=>{setValueFromX(e.clientX)},mouseUp=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",mouseMove),window.removeEventListener("mouseup",mouseUp)},t=!1,i,n,beginTouchDrag=e=>{e.preventDefault(),this._setDraggingStyle(!0),setValueFromX(e.touches[0].clientX),t=!1},onTouchMove=e=>{if(t){let t=e.touches[0].clientX-i,o=e.touches[0].clientY-n;Math.abs(t)>Math.abs(o)?beginTouchDrag(e):(window.removeEventListener("touchmove",onTouchMove),window.removeEventListener("touchend",onTouchEnd))}else e.preventDefault(),setValueFromX(e.touches[0].clientX)},onTouchEnd=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",onTouchMove),window.removeEventListener("touchend",onTouchEnd)},o=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",e=>{this._setDraggingStyle(!0),setValueFromX(e.clientX),window.addEventListener("mousemove",mouseMove),window.addEventListener("mouseup",mouseUp)}),this.$slider.addEventListener("touchstart",e=>{e.touches.length>1||(this._hasScrollBar?(i=e.touches[0].clientX,n=e.touches[0].clientY,t=!0):beginTouchDrag(e),window.addEventListener("touchmove",onTouchMove,{passive:!1}),window.addEventListener("touchend",onTouchEnd))},{passive:!1}),this.$slider.addEventListener("wheel",t=>{let i=Math.abs(t.deltaX)<Math.abs(t.deltaY);if(i&&this._hasScrollBar)return;t.preventDefault();let n=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+n),this.$input.value=this.getValue(),clearTimeout(e),e=setTimeout(o,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120*(this._stepExplicit?1:10));let n=t+-i;return n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}};let OptionController=class OptionController extends Controller{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement("option");t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=-1===t?e:this._names[t],this}};let StringController=class StringController extends Controller{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};let a=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function _injectStyles(e){let t=document.createElement("style");t.innerHTML=e;let i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let s=!1;let GUI=class GUI{constructor({parent:e,autoPlace:t=void 0===e,container:i,width:n,title:o="Controls",closeFolders:r=!1,injectStyles:l=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",e=>{("Enter"===e.code||"Space"===e.code)&&(e.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),h&&this.domElement.classList.add("allow-touch-styles"),!s&&l&&(_injectStyles(a),s=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=r}add(e,t,i,n,o){if(Object(i)===i)return new OptionController(this,e,t,i);let a=e[t];switch(typeof a){case"number":return new NumberController(this,e,t,i,n,o);case"boolean":return new BooleanController(this,e,t);case"string":return new StringController(this,e,t);case"function":return new FunctionController(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new ColorController(this,e,t,i)}addFolder(e){let t=new GUI({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{!(t instanceof FunctionController)&&t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof FunctionController)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let onTransitionEnd=e=>{e.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",onTransitionEnd))};this.$children.addEventListener("transitionend",onTransitionEnd);let i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){let t=e?this.controllersRecursive():this.controllers;return t.forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),void 0!==this._onChange&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),void 0!==this._onOpenClose&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};t.ZP=GUI},4112:function(e,t,i){i.d(t,{z:function(){return OrbitControls}});var n=i(6375);let o={type:"change"},a={type:"start"},s={type:"end"},r=new n.zHn,l=new n.JOQ,h=Math.cos(70*n.M8C.DEG2RAD);let OrbitControls=class OrbitControls extends n.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new n.Pa4,this.cursor=new n.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n.RsA.ROTATE,MIDDLE:n.RsA.DOLLY,RIGHT:n.RsA.PAN},this.touches={ONE:n.QmN.ROTATE,TWO:n.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",onKeyDown),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",onKeyDown),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(o),i.update(),d=c.NONE},this.update=function(){let t=new n.Pa4,a=new n._fP().setFromUnitVectors(e.up,new n.Pa4(0,1,0)),s=a.clone().invert(),f=new n.Pa4,b=new n._fP,y=new n.Pa4,A=2*Math.PI;return function(w=null){let E=i.object.position;t.copy(E).sub(i.target),t.applyQuaternion(a),p.setFromVector3(t),i.autoRotate&&d===c.NONE&&rotateLeft(getAutoRotationAngle(w)),i.enableDamping?(p.theta+=m.theta*i.dampingFactor,p.phi+=m.phi*i.dampingFactor):(p.theta+=m.theta,p.phi+=m.phi);let _=i.minAzimuthAngle,x=i.maxAzimuthAngle;isFinite(_)&&isFinite(x)&&(_<-Math.PI?_+=A:_>Math.PI&&(_-=A),x<-Math.PI?x+=A:x>Math.PI&&(x-=A),_<=x?p.theta=Math.max(_,Math.min(x,p.theta)):p.theta=p.theta>(_+x)/2?Math.max(_,p.theta):Math.min(x,p.theta)),p.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,p.phi)),p.makeSafe(),!0===i.enableDamping?i.target.addScaledVector(v,i.dampingFactor):i.target.add(v),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let C=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)p.radius=clampDistance(p.radius);else{let e=p.radius;p.radius=clampDistance(p.radius*g),C=e!=p.radius}if(t.setFromSpherical(p),t.applyQuaternion(s),E.copy(i.target).add(t),i.object.lookAt(i.target),!0===i.enableDamping?(m.theta*=1-i.dampingFactor,m.phi*=1-i.dampingFactor,v.multiplyScalar(1-i.dampingFactor)):(m.set(0,0,0),v.set(0,0,0)),i.zoomToCursor&&S){let o=null;if(i.object.isPerspectiveCamera){let e=t.length();o=clampDistance(e*g);let n=e-o;i.object.position.addScaledVector(P,n),i.object.updateMatrixWorld(),C=!!n}else if(i.object.isOrthographicCamera){let e=new n.Pa4(M.x,M.y,0);e.unproject(i.object);let a=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/g)),i.object.updateProjectionMatrix(),C=a!==i.object.zoom;let s=new n.Pa4(M.x,M.y,0);s.unproject(i.object),i.object.position.sub(s).add(e),i.object.updateMatrixWorld(),o=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;null!==o&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(o).add(i.object.position):(r.origin.copy(i.object.position),r.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(r.direction))<h?e.lookAt(i.target):(l.setFromNormalAndCoplanarPoint(i.object.up,i.target),r.intersectPlane(l,i.target))))}else if(i.object.isOrthographicCamera){let e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/g)),e!==i.object.zoom&&(i.object.updateProjectionMatrix(),C=!0)}return g=1,S=!1,!!(C||f.distanceToSquared(i.object.position)>u||8*(1-b.dot(i.object.quaternion))>u||y.distanceToSquared(i.target)>u)&&(i.dispatchEvent(o),f.copy(i.object.position),b.copy(i.object.quaternion),y.copy(i.target),!0)}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",onContextMenu),i.domElement.removeEventListener("pointerdown",onPointerDown),i.domElement.removeEventListener("pointercancel",onPointerUp),i.domElement.removeEventListener("wheel",onMouseWheel),i.domElement.removeEventListener("pointermove",onPointerMove),i.domElement.removeEventListener("pointerup",onPointerUp);let e=i.domElement.getRootNode();e.removeEventListener("keydown",interceptControlDown,{capture:!0}),null!==i._domElementKeyEvents&&(i._domElementKeyEvents.removeEventListener("keydown",onKeyDown),i._domElementKeyEvents=null)};let i=this,c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},d=c.NONE,u=1e-6,p=new n.$V,m=new n.$V,g=1,v=new n.Pa4,f=new n.FM8,b=new n.FM8,y=new n.FM8,A=new n.FM8,w=new n.FM8,E=new n.FM8,_=new n.FM8,x=new n.FM8,C=new n.FM8,P=new n.Pa4,M=new n.FM8,S=!1,T=[],$={},k=!1;function getAutoRotationAngle(e){return null!==e?2*Math.PI/60*i.autoRotateSpeed*e:2*Math.PI/60/60*i.autoRotateSpeed}function getZoomScale(e){return Math.pow(.95,i.zoomSpeed*Math.abs(.01*e))}function rotateLeft(e){m.theta-=e}function rotateUp(e){m.phi-=e}let D=function(){let e=new n.Pa4;return function(t,i){e.setFromMatrixColumn(i,0),e.multiplyScalar(-t),v.add(e)}}(),L=function(){let e=new n.Pa4;return function(t,n){!0===i.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(i.object.up,e)),e.multiplyScalar(t),v.add(e)}}(),O=function(){let e=new n.Pa4;return function(t,n){let o=i.domElement;if(i.object.isPerspectiveCamera){let a=i.object.position;e.copy(a).sub(i.target);let s=e.length();D(2*t*(s*=Math.tan(i.object.fov/2*Math.PI/180))/o.clientHeight,i.object.matrix),L(2*n*s/o.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(t*(i.object.right-i.object.left)/i.object.zoom/o.clientWidth,i.object.matrix),L(n*(i.object.top-i.object.bottom)/i.object.zoom/o.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function dollyOut(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?g/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function dollyIn(e){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?g*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function updateZoomParameters(e,t){if(!i.zoomToCursor)return;S=!0;let n=i.domElement.getBoundingClientRect(),o=e-n.left,a=t-n.top,s=n.width,r=n.height;M.x=o/s*2-1,M.y=-(2*(a/r))+1,P.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function clampDistance(e){return Math.max(i.minDistance,Math.min(i.maxDistance,e))}function handleMouseDownRotate(e){f.set(e.clientX,e.clientY)}function handleMouseDownDolly(e){updateZoomParameters(e.clientX,e.clientX),_.set(e.clientX,e.clientY)}function handleMouseDownPan(e){A.set(e.clientX,e.clientY)}function handleMouseMoveRotate(e){b.set(e.clientX,e.clientY),y.subVectors(b,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;rotateLeft(2*Math.PI*y.x/t.clientHeight),rotateUp(2*Math.PI*y.y/t.clientHeight),f.copy(b),i.update()}function handleMouseMoveDolly(e){x.set(e.clientX,e.clientY),C.subVectors(x,_),C.y>0?dollyOut(getZoomScale(C.y)):C.y<0&&dollyIn(getZoomScale(C.y)),_.copy(x),i.update()}function handleMouseMovePan(e){w.set(e.clientX,e.clientY),E.subVectors(w,A).multiplyScalar(i.panSpeed),O(E.x,E.y),A.copy(w),i.update()}function handleMouseWheel(e){updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?dollyIn(getZoomScale(e.deltaY)):e.deltaY>0&&dollyOut(getZoomScale(e.deltaY)),i.update()}function handleKeyDown(e){let t=!1;switch(e.code){case i.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?rotateUp(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),t=!0;break;case i.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?rotateUp(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),t=!0;break;case i.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?rotateLeft(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),t=!0;break;case i.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?rotateLeft(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),i.update())}function handleTouchStartRotate(e){if(1===T.length)f.set(e.pageX,e.pageY);else{let t=getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);f.set(i,n)}}function handleTouchStartPan(e){if(1===T.length)A.set(e.pageX,e.pageY);else{let t=getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);A.set(i,n)}}function handleTouchStartDolly(e){let t=getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y;_.set(0,Math.sqrt(i*i+n*n))}function handleTouchStartDollyPan(e){i.enableZoom&&handleTouchStartDolly(e),i.enablePan&&handleTouchStartPan(e)}function handleTouchStartDollyRotate(e){i.enableZoom&&handleTouchStartDolly(e),i.enableRotate&&handleTouchStartRotate(e)}function handleTouchMoveRotate(e){if(1==T.length)b.set(e.pageX,e.pageY);else{let t=getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);b.set(i,n)}y.subVectors(b,f).multiplyScalar(i.rotateSpeed);let t=i.domElement;rotateLeft(2*Math.PI*y.x/t.clientHeight),rotateUp(2*Math.PI*y.y/t.clientHeight),f.copy(b)}function handleTouchMovePan(e){if(1===T.length)w.set(e.pageX,e.pageY);else{let t=getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);w.set(i,n)}E.subVectors(w,A).multiplyScalar(i.panSpeed),O(E.x,E.y),A.copy(w)}function handleTouchMoveDolly(e){let t=getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y;x.set(0,Math.sqrt(n*n+o*o)),C.set(0,Math.pow(x.y/_.y,i.zoomSpeed)),dollyOut(C.y),_.copy(x);let a=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;updateZoomParameters(a,s)}function handleTouchMoveDollyPan(e){i.enableZoom&&handleTouchMoveDolly(e),i.enablePan&&handleTouchMovePan(e)}function handleTouchMoveDollyRotate(e){i.enableZoom&&handleTouchMoveDolly(e),i.enableRotate&&handleTouchMoveRotate(e)}function onPointerDown(e){!1!==i.enabled&&(0===T.length&&(i.domElement.setPointerCapture(e.pointerId),i.domElement.addEventListener("pointermove",onPointerMove),i.domElement.addEventListener("pointerup",onPointerUp)),isTrackingPointer(e)||(addPointer(e),"touch"===e.pointerType?onTouchStart(e):onMouseDown(e)))}function onPointerMove(e){!1!==i.enabled&&("touch"===e.pointerType?onTouchMove(e):onMouseMove(e))}function onPointerUp(e){switch(removePointer(e),T.length){case 0:i.domElement.releasePointerCapture(e.pointerId),i.domElement.removeEventListener("pointermove",onPointerMove),i.domElement.removeEventListener("pointerup",onPointerUp),i.dispatchEvent(s),d=c.NONE;break;case 1:let t=T[0],n=$[t];onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function onMouseDown(e){let t;switch(e.button){case 0:t=i.mouseButtons.LEFT;break;case 1:t=i.mouseButtons.MIDDLE;break;case 2:t=i.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.RsA.DOLLY:if(!1===i.enableZoom)return;handleMouseDownDolly(e),d=c.DOLLY;break;case n.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===i.enablePan)return;handleMouseDownPan(e),d=c.PAN}else{if(!1===i.enableRotate)return;handleMouseDownRotate(e),d=c.ROTATE}break;case n.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===i.enableRotate)return;handleMouseDownRotate(e),d=c.ROTATE}else{if(!1===i.enablePan)return;handleMouseDownPan(e),d=c.PAN}break;default:d=c.NONE}d!==c.NONE&&i.dispatchEvent(a)}function onMouseMove(e){switch(d){case c.ROTATE:if(!1===i.enableRotate)return;handleMouseMoveRotate(e);break;case c.DOLLY:if(!1===i.enableZoom)return;handleMouseMoveDolly(e);break;case c.PAN:if(!1===i.enablePan)return;handleMouseMovePan(e)}}function onMouseWheel(e){!1!==i.enabled&&!1!==i.enableZoom&&d===c.NONE&&(e.preventDefault(),i.dispatchEvent(a),handleMouseWheel(customWheelEvent(e)),i.dispatchEvent(s))}function customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return e.ctrlKey&&!k&&(i.deltaY*=10),i}function interceptControlDown(e){if("Control"===e.key){k=!0;let e=i.domElement.getRootNode();e.addEventListener("keyup",interceptControlUp,{passive:!0,capture:!0})}}function interceptControlUp(e){if("Control"===e.key){k=!1;let e=i.domElement.getRootNode();e.removeEventListener("keyup",interceptControlUp,{passive:!0,capture:!0})}}function onKeyDown(e){!1!==i.enabled&&!1!==i.enablePan&&handleKeyDown(e)}function onTouchStart(e){switch(trackPointer(e),T.length){case 1:switch(i.touches.ONE){case n.QmN.ROTATE:if(!1===i.enableRotate)return;handleTouchStartRotate(e),d=c.TOUCH_ROTATE;break;case n.QmN.PAN:if(!1===i.enablePan)return;handleTouchStartPan(e),d=c.TOUCH_PAN;break;default:d=c.NONE}break;case 2:switch(i.touches.TWO){case n.QmN.DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;handleTouchStartDollyPan(e),d=c.TOUCH_DOLLY_PAN;break;case n.QmN.DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;handleTouchStartDollyRotate(e),d=c.TOUCH_DOLLY_ROTATE;break;default:d=c.NONE}break;default:d=c.NONE}d!==c.NONE&&i.dispatchEvent(a)}function onTouchMove(e){switch(trackPointer(e),d){case c.TOUCH_ROTATE:if(!1===i.enableRotate)return;handleTouchMoveRotate(e),i.update();break;case c.TOUCH_PAN:if(!1===i.enablePan)return;handleTouchMovePan(e),i.update();break;case c.TOUCH_DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;handleTouchMoveDollyPan(e),i.update();break;case c.TOUCH_DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;handleTouchMoveDollyRotate(e),i.update();break;default:d=c.NONE}}function onContextMenu(e){!1!==i.enabled&&e.preventDefault()}function addPointer(e){T.push(e.pointerId)}function removePointer(e){delete $[e.pointerId];for(let t=0;t<T.length;t++)if(T[t]==e.pointerId){T.splice(t,1);return}}function isTrackingPointer(e){for(let t=0;t<T.length;t++)if(T[t]==e.pointerId)return!0;return!1}function trackPointer(e){let t=$[e.pointerId];void 0===t&&(t=new n.FM8,$[e.pointerId]=t),t.set(e.pageX,e.pageY)}function getSecondPointerPosition(e){let t=e.pointerId===T[0]?T[1]:T[0];return $[t]}i.domElement.addEventListener("contextmenu",onContextMenu),i.domElement.addEventListener("pointerdown",onPointerDown),i.domElement.addEventListener("pointercancel",onPointerUp),i.domElement.addEventListener("wheel",onMouseWheel,{passive:!1});let R=i.domElement.getRootNode();R.addEventListener("keydown",interceptControlDown,{passive:!0,capture:!0}),this.update()}}},1745:function(e,t,i){i.d(t,{B:function(){return Timer}});let Timer=class Timer{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=now(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI="undefined"!=typeof document&&void 0!==document.hidden,!0===this._usePageVisibilityAPI&&(this._pageVisibilityHandler=handleVisibilityChange.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=now()-this._startTime,this}dispose(){return!0===this._usePageVisibilityAPI&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return!0===this._usePageVisibilityAPI&&!0===document.hidden?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(void 0!==e?e:now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function now(){return("undefined"==typeof performance?Date:performance).now()}function handleVisibilityChange(){!1===document.hidden&&this.reset()}},9465:function(e,t,i){i.d(t,{q:function(){return Sky}});var n=i(6375);let Sky=class Sky extends n.Kj0{constructor(){let e=Sky.SkyShader,t=new n.jyz({name:e.name,uniforms:n.rDY.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:n._Li,depthWrite:!1});super(new n.DvJ(1,1,1),t),this.isSky=!0}};Sky.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new n.Pa4},up:{value:new n.Pa4(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}}}]);