(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{7391:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info",function(){return i(5526)}])},5526:function(e,n,i){"use strict";i.r(n);var s=i(8584),r=i(7557),a=i(4557),o=i(7791),t=i(6870),l=i(1995),c=i(7215),d=i(536),u=i(882),m=i.n(u),p=i(3399),f=i(9823);let g={[c.AdbFeature.ShellV2]:'"shell" command now supports separating child process\'s stdout and stderr, and returning exit code',[c.AdbFeature.StatV2]:'"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command',[c.AdbFeature.ListV2]:'"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"',[c.AdbFeature.FixedPushMkdir]:"Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it's fixed (Android 10)",[c.AdbFeature.AbbExec]:'Supports "abb_exec" variant that can be used to install App faster',sendrecv_v2_brotli:'Supports "brotli" compression algorithm when pushing/pulling files',sendrecv_v2_lz4:'Supports "lz4" compression algorithm when pushing/pulling files',sendrecv_v2_zstd:'Supports "zstd" compression algorithm when pushing/pulling files'},h=()=>{var e,n,i,c;return(0,s.jsxs)(r.K,{...f.LE,children:[(0,s.jsx)(m(),{children:(0,s.jsx)("title",{children:"Device Info - Tango"})}),(0,s.jsxs)(a.c,{children:[(0,s.jsx)("code",{children:"ro.product.name"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Product Name: ",null===(e=p.d.adb)||void 0===e?void 0:e.banner.product]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{children:[(0,s.jsx)("code",{children:"ro.product.model"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Model Name: ",null===(n=p.d.adb)||void 0===n?void 0:n.banner.model]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{children:[(0,s.jsx)("code",{children:"ro.product.device"}),(0,s.jsx)("span",{children:" field in Android Build Props"})]}),(0,s.jsxs)("span",{children:["Device Name: ",null===(i=p.d.adb)||void 0===i?void 0:i.banner.device]}),(0,s.jsx)(o.Z,{}),(0,s.jsxs)(a.c,{children:[(0,s.jsx)("span",{children:"Feature list decides how each individual commands should behavior."}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:["For example, it may indicate the availability of a new command,"," "]}),(0,s.jsx)("span",{children:"or a workaround for an old bug is not required because it's already been fixed."}),(0,s.jsx)("br",{})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"Features: "}),null===(c=p.d.adb)||void 0===c?void 0:c.banner.features.map((e,n)=>(0,s.jsxs)("span",{children:[0!==n&&(0,s.jsx)("span",{children:", "}),(0,s.jsx)("span",{children:e}),g[e]&&(0,s.jsx)(t.G,{content:(0,s.jsx)("span",{children:g[e]}),children:(0,s.jsx)(l.J,{style:{marginLeft:4},iconName:f.PJ.Info})})]},e))]})]})};n.default=(0,d.Pi)(h)},4557:function(e,n,i){"use strict";i.d(n,{c:function(){return E}});var s,r,a,o,t,l=i(856),c=i(3761),d=i(4120),u=i(3719),m=i(5426),p=i(3274),f=i(5805),g=i(6645),h=i(1995),x=i(3013),v=i(4229),b=i(5171),w=((s={})[x.f.info]="Info",s[x.f.warning]="Info",s[x.f.error]="ErrorBadge",s[x.f.blocked]="Blocked2",s[x.f.severeWarning]="Warning",s[x.f.success]="Completed",s),B=(0,u.y)(),S=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"assertive"}return"polite"},k=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"alert"}return"status"},L=d.forwardRef(function(e,n){var i=(0,v.k)(!1),s=i[0],r=i[1].toggle,a=(0,b.M)("MessageBar"),o=e.actions,t=e.className,l=e.children,u=e.overflowButtonAriaLabel,L=e.dismissIconProps,M=e.styles,j=e.theme,N=e.messageBarType,y=void 0===N?x.f.info:N,T=e.onDismiss,W=void 0===T?void 0:T,E=e.isMultiline,C=void 0===E||E,_=e.truncated,A=e.dismissButtonAriaLabel,I=e.messageBarIconProps,P=e.role,D=e.delayedRender,F=e.expandButtonProps,J=(0,m.pq)(e,m.iY,["className","role"]),z=B(M,{theme:j,messageBarType:y||x.f.info,onDismiss:void 0!==W,actions:void 0!==o,truncated:_,isMultiline:C,expandSingleLine:s,className:t}),H=o?d.createElement("div",{className:z.actions},o):null,R=W?d.createElement(g.h,{disabled:!1,className:z.dismissal,onClick:W,iconProps:L||{iconName:"Clear"},title:A,ariaLabel:A}):null;return d.createElement("div",(0,c.pi)({ref:n,className:z.root},o||W?{"aria-describedby":a,role:"region"}:{}),d.createElement("div",{className:z.content},d.createElement("div",{className:z.iconContainer,"aria-hidden":!0},I?d.createElement(h.J,(0,c.pi)({},I,{className:(0,p.i)(z.icon,I.className)})):d.createElement(h.J,{iconName:w[y],className:z.icon})),d.createElement("div",{className:z.text,id:a,role:P||k(y),"aria-live":S(y)},d.createElement("span",(0,c.pi)({className:z.innerText},J),void 0===D||D?d.createElement(f.U,null,d.createElement("span",null,l)):d.createElement("span",null,l))),!C&&!H&&_&&d.createElement("div",{className:z.expandSingleLine},d.createElement(g.h,(0,c.pi)({disabled:!1,className:z.expand,onClick:r,iconProps:{iconName:s?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:u,"aria-expanded":s},F))),!C&&H,!C&&R&&d.createElement("div",{className:z.dismissSingleLine},R),C&&R),C&&H)});L.displayName="MessageBar";var M=i(1462),j={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},N=((r={})[x.f.error]="errorBackground",r[x.f.blocked]="errorBackground",r[x.f.success]="successBackground",r[x.f.warning]="warningBackground",r[x.f.severeWarning]="severeWarningBackground",r[x.f.info]="infoBackground",r),y=((a={})[x.f.error]="errorIcon",a[x.f.blocked]="errorIcon",a[x.f.success]="successIcon",a[x.f.warning]="warningIcon",a[x.f.severeWarning]="severeWarningIcon",a[x.f.info]="infoIcon",a),T=((o={})[x.f.error]="#ff0000",o[x.f.blocked]="#ff0000",o[x.f.success]="#bad80a",o[x.f.warning]="#fff100",o[x.f.severeWarning]="#ff0000",o[x.f.info]="WindowText",o),W=((t={})[x.f.error]="#e81123",t[x.f.blocked]="#e81123",t[x.f.success]="#107c10",t[x.f.warning]="#966400",t[x.f.severeWarning]="#d83b01",t[x.f.info]="WindowText",t),E=(0,l.z)(L,function(e){var n,i,s,r,a,o=e.theme,t=e.className,l=e.onDismiss,d=e.truncated,u=e.isMultiline,m=e.expandSingleLine,p=e.messageBarType,f=void 0===p?x.f.info:p,g=o.semanticColors,h=o.fonts,v=(0,M.sK)(0,M.mV),b=(0,M.Cn)(j,o),w={fontSize:M.ld.xSmall,height:10,lineHeight:"10px",color:g.messageText,selectors:((n={})[M.qJ]=(0,c.pi)((0,c.pi)({},(0,M.xM)()),{color:"WindowText"}),n)},B=[(0,M.GL)(o,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[b.root,h.medium,f===x.f.error&&b.error,f===x.f.blocked&&b.blocked,f===x.f.severeWarning&&b.severeWarning,f===x.f.success&&b.success,f===x.f.warning&&b.warning,u?b.multiline:b.singleline,!u&&l&&b.dismissalSingleLine,!u&&d&&b.expandingSingleLine,{background:g[N[f]],boxSizing:"border-box",color:g.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((i={".ms-Link":{color:g.messageLink,selectors:{":hover":{color:g.messageLinkHovered}}}})[M.qJ]=(0,c.pi)((0,c.pi)({},(0,M.xM)()),{background:"transparent",border:"1px solid ".concat(T[f]),color:"WindowText"}),i[M.bO]={border:"1px solid ".concat(W[f])},i)},u&&{flexDirection:"column"},t],content:[b.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[b.iconContainer,{fontSize:M.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:g[y[f]],selectors:((s={})[M.qJ]=(0,c.pi)((0,c.pi)({},(0,M.xM)()),{color:"WindowText"}),s)},text:[b.text,(0,c.pi)((0,c.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},h.small),{selectors:((r={})[M.qJ]=(0,c.pi)({},(0,M.xM)()),r)}),!l&&{marginRight:12}],innerText:[b.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!u&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!u&&!d&&{selectors:((a={})[v]={overflow:"visible",whiteSpace:"pre-wrap"},a)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:b.dismissSingleLine,expandSingleLine:b.expandSingleLine,dismissal:[b.dismissal,B],expand:[b.expand,B],actions:[u?b.actions:b.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},u&&{marginBottom:8},l&&!u&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},3013:function(e,n,i){"use strict";var s,r;i.d(n,{f:function(){return s}}),(r=s||(s={}))[r.info=0]="info",r[r.error=1]="error",r[r.blocked=2]="blocked",r[r.severeWarning=3]="severeWarning",r[r.success=4]="success",r[r.warning=5]="warning"},5805:function(e,n,i){"use strict";i.d(n,{U:function(){return o}});var s=i(3761),r=i(4120),a=i(6292),o=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:void 0===(0,a.J)()},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout(function(){e.setState({isRendered:!0})},n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7391)}),_N_E=e.O()}]);
//# sourceMappingURL=device-info-04c28d0f84865a68.js.map