"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{6768:function(e,a,t){var r,n,i,d,o,p;async function y(e,a){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SetAudioMode,value:a,index:0},new ArrayBuffer(0))}async function c(e,a,t){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.RegisterHid,value:a,index:t},new ArrayBuffer(0))}async function u(e,a,t){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SetHidReportDescriptor,value:a,index:0},t)}async function s(e,a){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.UnregisterHid,value:a,index:0},new ArrayBuffer(0))}async function l(e,a,t){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SendHidEvent,value:a,index:0},t)}t.d(a,{qG:function(){return K},sm:function(){return i},XC:function(){return f},sy:function(){return m},XX:function(){return y},F7:function(){return g}}),(d=r||(r={}))[d.GetProtocol=51]="GetProtocol",d[d.SendString=52]="SendString",d[d.Start=53]="Start",d[d.RegisterHid=54]="RegisterHid",d[d.UnregisterHid=55]="UnregisterHid",d[d.SetHidReportDescriptor=56]="SetHidReportDescriptor",d[d.SendHidEvent=57]="SendHidEvent",d[d.SetAudioMode=58]="SetAudioMode",(o=n||(n={}))[o.Off=0]="Off",o[o.On=1]="On";class K{static async register(e,a,t){return await c(e,a,t.length),await u(e,a,t),new K(e,a)}_device;_accessoryId;constructor(e,a){this._device=e,this._accessoryId=a}async sendInputReport(e){await l(this._device,this._accessoryId,e)}async unregister(){await s(this._device,this._accessoryId)}}async function m(e){let a=await e.controlTransferIn({recipient:"device",requestType:"vendor",request:r.GetProtocol,value:0,index:0},2),t=a.data.getUint16(0,!0);return t}async function g(e){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.Start,value:0,index:0},new ArrayBuffer(0))}(p=i||(i={}))[p.KeyA=4]="KeyA",p[p.KeyB=5]="KeyB",p[p.KeyC=6]="KeyC",p[p.KeyD=7]="KeyD",p[p.KeyE=8]="KeyE",p[p.KeyF=9]="KeyF",p[p.KeyG=10]="KeyG",p[p.KeyH=11]="KeyH",p[p.KeyI=12]="KeyI",p[p.KeyJ=13]="KeyJ",p[p.KeyK=14]="KeyK",p[p.KeyL=15]="KeyL",p[p.KeyM=16]="KeyM",p[p.KeyN=17]="KeyN",p[p.KeyO=18]="KeyO",p[p.KeyP=19]="KeyP",p[p.KeyQ=20]="KeyQ",p[p.KeyR=21]="KeyR",p[p.KeyS=22]="KeyS",p[p.KeyT=23]="KeyT",p[p.KeyU=24]="KeyU",p[p.KeyV=25]="KeyV",p[p.KeyW=26]="KeyW",p[p.KeyX=27]="KeyX",p[p.KeyY=28]="KeyY",p[p.KeyZ=29]="KeyZ",p[p.Digit1=30]="Digit1",p[p.Digit2=31]="Digit2",p[p.Digit3=32]="Digit3",p[p.Digit4=33]="Digit4",p[p.Digit5=34]="Digit5",p[p.Digit6=35]="Digit6",p[p.Digit7=36]="Digit7",p[p.Digit8=37]="Digit8",p[p.Digit9=38]="Digit9",p[p.Digit0=39]="Digit0",p[p.Enter=40]="Enter",p[p.Escape=41]="Escape",p[p.Backspace=42]="Backspace",p[p.Tab=43]="Tab",p[p.Space=44]="Space",p[p.Minus=45]="Minus",p[p.Equal=46]="Equal",p[p.BracketLeft=47]="BracketLeft",p[p.BracketRight=48]="BracketRight",p[p.Backslash=49]="Backslash",p[p.NonUsHash=50]="NonUsHash",p[p.Semicolon=51]="Semicolon",p[p.Quote=52]="Quote",p[p.Backquote=53]="Backquote",p[p.Comma=54]="Comma",p[p.Period=55]="Period",p[p.Slash=56]="Slash",p[p.CapsLock=57]="CapsLock",p[p.F1=58]="F1",p[p.F2=59]="F2",p[p.F3=60]="F3",p[p.F4=61]="F4",p[p.F5=62]="F5",p[p.F6=63]="F6",p[p.F7=64]="F7",p[p.F8=65]="F8",p[p.F9=66]="F9",p[p.F10=67]="F10",p[p.F11=68]="F11",p[p.F12=69]="F12",p[p.PrintScreen=70]="PrintScreen",p[p.ScrollLock=71]="ScrollLock",p[p.Pause=72]="Pause",p[p.Insert=73]="Insert",p[p.Home=74]="Home",p[p.PageUp=75]="PageUp",p[p.Delete=76]="Delete",p[p.End=77]="End",p[p.PageDown=78]="PageDown",p[p.ArrowRight=79]="ArrowRight",p[p.ArrowLeft=80]="ArrowLeft",p[p.ArrowDown=81]="ArrowDown",p[p.ArrowUp=82]="ArrowUp",p[p.NumLock=83]="NumLock",p[p.NumpadDivide=84]="NumpadDivide",p[p.NumpadMultiply=85]="NumpadMultiply",p[p.NumpadSubtract=86]="NumpadSubtract",p[p.NumpadAdd=87]="NumpadAdd",p[p.NumpadEnter=88]="NumpadEnter",p[p.Numpad1=89]="Numpad1",p[p.Numpad2=90]="Numpad2",p[p.Numpad3=91]="Numpad3",p[p.Numpad4=92]="Numpad4",p[p.Numpad5=93]="Numpad5",p[p.Numpad6=94]="Numpad6",p[p.Numpad7=95]="Numpad7",p[p.Numpad8=96]="Numpad8",p[p.Numpad9=97]="Numpad9",p[p.Numpad0=98]="Numpad0",p[p.NumpadDecimal=99]="NumpadDecimal",p[p.NonUsBackslash=100]="NonUsBackslash",p[p.ContextMenu=101]="ContextMenu",p[p.Power=102]="Power",p[p.NumpadEqual=103]="NumpadEqual",p[p.F13=104]="F13",p[p.F14=105]="F14",p[p.F15=106]="F15",p[p.F16=107]="F16",p[p.F17=108]="F17",p[p.F18=109]="F18",p[p.F19=110]="F19",p[p.F20=111]="F20",p[p.F21=112]="F21",p[p.F22=113]="F22",p[p.F23=114]="F23",p[p.F24=115]="F24",p[p.Execute=116]="Execute",p[p.Help=117]="Help",p[p.Menu=118]="Menu",p[p.Select=119]="Select",p[p.Stop=120]="Stop",p[p.Again=121]="Again",p[p.Undo=122]="Undo",p[p.Cut=123]="Cut",p[p.Copy=124]="Copy",p[p.Paste=125]="Paste",p[p.Find=126]="Find",p[p.Mute=127]="Mute",p[p.VolumeUp=128]="VolumeUp",p[p.VolumeDown=129]="VolumeDown",p[p.LockingCapsLock=130]="LockingCapsLock",p[p.LockingNumLock=131]="LockingNumLock",p[p.LockingScrollLock=132]="LockingScrollLock",p[p.NumpadComma=133]="NumpadComma",p[p.KeypadEqualSign=134]="KeypadEqualSign",p[p.International1=135]="International1",p[p.International2=136]="International2",p[p.International3=137]="International3",p[p.International4=138]="International4",p[p.International5=139]="International5",p[p.International6=140]="International6",p[p.International7=141]="International7",p[p.International8=142]="International8",p[p.International9=143]="International9",p[p.Lang1=144]="Lang1",p[p.Lang2=145]="Lang2",p[p.Lang3=146]="Lang3",p[p.Lang4=147]="Lang4",p[p.Lang5=148]="Lang5",p[p.Lang6=149]="Lang6",p[p.Lang7=150]="Lang7",p[p.Lang8=151]="Lang8",p[p.Lang9=152]="Lang9",p[p.AlternateErase=153]="AlternateErase",p[p.SysReq=154]="SysReq",p[p.Cancel=155]="Cancel",p[p.Clear=156]="Clear",p[p.Prior=157]="Prior",p[p.Return2=158]="Return2",p[p.Separator=159]="Separator",p[p.Out=160]="Out",p[p.Oper=161]="Oper",p[p.ClearAgain=162]="ClearAgain",p[p.CrSel=163]="CrSel",p[p.ExSel=164]="ExSel",p[p.Keypad00=176]="Keypad00",p[p.Keypad000=177]="Keypad000",p[p.ThousandsSeparator=178]="ThousandsSeparator",p[p.DecimalSeparator=179]="DecimalSeparator",p[p.CurrencyUnit=180]="CurrencyUnit",p[p.CurrencySubUnit=181]="CurrencySubUnit",p[p.KeypadLeftParen=182]="KeypadLeftParen",p[p.KeypadRightParen=183]="KeypadRightParen",p[p.KeypadLeftBrace=184]="KeypadLeftBrace",p[p.KeypadRightBrace=185]="KeypadRightBrace",p[p.KeypadTab=186]="KeypadTab",p[p.KeypadBackspace=187]="KeypadBackspace",p[p.KeypadA=188]="KeypadA",p[p.KeypadB=189]="KeypadB",p[p.KeypadC=190]="KeypadC",p[p.KeypadD=191]="KeypadD",p[p.KeypadE=192]="KeypadE",p[p.KeypadF=193]="KeypadF",p[p.KeypadXor=194]="KeypadXor",p[p.KeypadPower=195]="KeypadPower",p[p.KeypadPercent=196]="KeypadPercent",p[p.KeypadLess=197]="KeypadLess",p[p.KeypadGreater=198]="KeypadGreater",p[p.KeypadAmpersand=199]="KeypadAmpersand",p[p.KeypadDblAmpersand=200]="KeypadDblAmpersand",p[p.KeypadVerticalBar=201]="KeypadVerticalBar",p[p.KeypadDblVerticalBar=202]="KeypadDblVerticalBar",p[p.KeypadColon=203]="KeypadColon",p[p.KeypadHash=204]="KeypadHash",p[p.KeypadSpace=205]="KeypadSpace",p[p.KeypadAt=206]="KeypadAt",p[p.KeypadExclamation=207]="KeypadExclamation",p[p.KeypadMemStore=208]="KeypadMemStore",p[p.KeypadMemRecall=209]="KeypadMemRecall",p[p.KeypadMemClear=210]="KeypadMemClear",p[p.KeypadMemAdd=211]="KeypadMemAdd",p[p.KeypadMemSubtract=212]="KeypadMemSubtract",p[p.KeypadMemMultiply=213]="KeypadMemMultiply",p[p.KeypadMemDivide=214]="KeypadMemDivide",p[p.KeypadPlusMinus=215]="KeypadPlusMinus",p[p.KeypadClear=216]="KeypadClear",p[p.KeypadClearEntry=217]="KeypadClearEntry",p[p.KeypadBinary=218]="KeypadBinary",p[p.KeypadOctal=219]="KeypadOctal",p[p.KeypadDecimal=220]="KeypadDecimal",p[p.KeypadHexadecimal=221]="KeypadHexadecimal",p[p.ControlLeft=224]="ControlLeft",p[p.ShiftLeft=225]="ShiftLeft",p[p.AltLeft=226]="AltLeft",p[p.MetaLeft=227]="MetaLeft",p[p.ControlRight=228]="ControlRight",p[p.ShiftRight=229]="ShiftRight",p[p.AltRight=230]="AltRight",p[p.MetaRight=231]="MetaRight";class f{static DESCRIPTOR=new Uint8Array([5,1,9,6,161,1,5,7,25,224,41,231,21,0,37,1,117,1,149,8,129,2,117,8,149,1,129,1,5,8,25,1,41,5,117,1,149,5,145,2,117,3,149,1,145,1,5,7,25,0,41,221,21,0,37,221,117,8,149,6,129,0,192]);_modifiers=0;_keys=new Set;down(e){e>=i.ControlLeft&&e<=i.MetaRight?this._modifiers|=1<<e-i.ControlLeft:this._keys.add(e)}up(e){e>=i.ControlLeft&&e<=i.MetaRight?this._modifiers&=~(1<<e-i.ControlLeft):this._keys.delete(e)}reset(){this._modifiers=0,this._keys.clear()}serializeInputReport(){let e=new Uint8Array(8);e[0]=this._modifiers;let a=2;for(let t of this._keys)if(e[a]=t,(a+=1)>=8)break;return e}}class S{static descriptor=new Uint8Array([5,1,9,2,161,1,9,1,161,0,5,9,25,1,41,5,21,0,37,1,117,1,149,5,129,2,117,3,149,1,129,1,5,1,9,48,9,49,9,56,21,129,37,127,117,8,149,3,129,6,5,12,10,56,2,21,129,37,127,117,8,149,1,129,6,192,192]);static serializeInputReport(e,a,t,r,n){return new Uint8Array([t,e,a,n,r])}}}}]);
//# sourceMappingURL=126-15e989f7f9d4f99f.js.map