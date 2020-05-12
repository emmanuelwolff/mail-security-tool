(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),s=(a(38),a(16)),u=a(6),i=a(11),m=a(13),o=a(3),d=a(9),E=a(29),p=a(30),f=function(){return function(e,t){var a=t();return!a.requests.done&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.status,n=void 0===a?null:a,l=t.query,c=void 0===l?null:l,r="api/requests?offset=".concat(e).concat(n?"&s="+n:"").concat(c?"&q="+c:"");return fetch(r).then((function(e){return e.json()}))}((a.requests.requests||[]).length,a.filters||{}).then((function(t){if(!t.data||"object"!==typeof t.data)throw new Error("No data");t.data.requests&&e({type:"ADD_REQUESTS",requests:t.data.requests}),t.data.done&&e({type:"NO_MORE_DATA"})}))}},v=function(e){return{type:"SELECT_REQUEST",request:e}},b=function(){return{type:"SELECT_REQUEST",request:null}},h=function(e){return function(t,a){var n=a(),l=n.selected,c=n.filters;if(!l)return!1;(function(e,t){var a="api/requests/".concat(e);return fetch(a,{method:"PUT",body:t})})(l.id,e).then((function(){return"all"!==c.status&&l.status!==c.status&&(t({type:"SELECT_REQUEST",request:null}),t({type:"REMOVE_REQUEST",index:l.index})),!1})).catch((function(){}))}},N=function(e){return{type:"STATUS_FILTER",status:e}},q=function(e){return{type:"QUERY_FILTER",query:e}},y=Object(d.combineReducers)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"STATUS_FILTER"===t.type?Object(o.a)(Object(o.a)({},e),{},{status:t.status}):"QUERY_FILTER"===t.type?Object(o.a)(Object(o.a)({},e),{},{query:t.query}):e},requests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"ADD_REQUESTS"===t.type?Object(o.a)(Object(o.a)({},e),{},{requests:[].concat(Object(m.a)(e.requests||[]),Object(m.a)(t.requests))}):"NO_MORE_DATA"===t.type?Object(o.a)(Object(o.a)({},e),{},{done:!0}):"STATUS_FILTER"===t.type||"QUERY_FILTER"===t.type?{requests:[],done:!1}:"REMOVE_REQUEST"===t.type?Object(o.a)(Object(o.a)({},e),{},{requests:[].concat(Object(m.a)(e.requests.slice(0,t.index)),Object(m.a)(e.requests.slice(t.index+1)))}):e},selected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SELECT_REQUEST"===t.type?t.request:e}});var R,j,O=[{link:"/",displayName:"Release Requests"},{link:"/quarantined",displayName:"Quarantined"}],S=Object(u.f)((function(e){return l.a.createElement("nav",{id:"nav"},l.a.createElement("div",{className:"innertube"},l.a.createElement("ul",null,O.map((function(t,a){return l.a.createElement(T,Object.assign({key:a},t,{selected:t.link===e.location.pathname}))})))))})),T=function(e){return l.a.createElement("li",{className:"".concat(e.selected?"selected":"")},l.a.createElement(s.b,{to:e.link},e.displayName))},g=S,_=a(17),k=a(18),C=a(21),U=a(20),w=a(19),Q=a.n(w),A=function(e){return Object(i.b)((function(e){return{selected:e.selected}}),{selectRequest:v,unselectRequest:b})(e)},x=function(e){Object(C.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={query:e.props.query||""},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"search"},l.a.createElement("span",{className:"material-icons md-14 input-icon"},"search"),l.a.createElement("input",{placeholder:"Search",type:"text",value:(this.props.filters||{}).query,onChange:function(t){return e.setState({query:t.target.value})}}),l.a.createElement("button",{onClick:function(){return e.props.onFilter(e.state.query)}},l.a.createElement("i",{className:"material-icons md-14"},"filter_list")))}}]),a}(l.a.Component),D=(R=function(e){return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,"Status"),l.a.createElement("select",{value:(e.filters||{}).status,onChange:function(t){return e.setStatusFilter(t.target.value)}},l.a.createElement("option",{value:"all"},"All Requests"),l.a.createElement("option",{value:"open"},"Open"),l.a.createElement("option",{value:"approved"},"Approved"),l.a.createElement("option",{value:"rejected"},"Rejected "))),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.changeRequestStatus("approved")}},l.a.createElement("i",{className:"material-icons md-14"},"playlist_add_check"),"Release")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.changeRequestStatus("rejected")}},l.a.createElement("i",{className:"material-icons md-14"},"clear"),"Reject")),l.a.createElement("td",null,l.a.createElement("button",null,l.a.createElement("i",{className:"material-icons md-14"},"refresh"),"Refresh")),l.a.createElement("td",null,l.a.createElement(x,{query:Q()(e,"filters.query"),onFilter:function(t){return e.setQueryFilter(t)}})))))},Object(i.b)((function(e){return{filters:e.filters}}),{setStatusFilter:N,setQueryFilter:q,changeRequestStatus:h})(R)),F=a(32),M=function(e){Object(C.a)(a,e);var t=Object(U.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.props.loadMoreRequests()}},{key:"componentDidUpdate",value:function(){Q()(this.props,"requests.requests",[]).length||this.props.loadMoreRequests()}},{key:"render",value:function(){var e=this,t=(this.props.requests||{}).requests||[],a=!(this.props.requests||{}).done;return l.a.createElement("div",{id:"mail-requests"},l.a.createElement("table",{className:"requests"},l.a.createElement("thead",{className:"head"},l.a.createElement("tr",null,l.a.createElement("th",{className:"five column"},l.a.createElement("input",{type:"checkbox"})),l.a.createElement("th",{className:"ten column"},"ID"),l.a.createElement("th",{className:"fifteen column"},"Request time"),l.a.createElement("th",{className:"fifteen column"},"Requested By"),l.a.createElement("th",{className:"fifteen column"},"Recipient"),l.a.createElement("th",{className:"fifteen column"},"Sender"),l.a.createElement("th",{className:"fifteen column"},"Subject"),l.a.createElement("th",{className:"ten column"},"Categorized at"))),l.a.createElement("tbody",null,t.map((function(t,a){return l.a.createElement(I,Object.assign({key:t.id,index:a},t,{selected:e.props.selected&&t.id===e.props.selected.id,onChange:function(){return e.props.selected&&t.id===e.props.selected.id?e.props.unselectRequest():e.props.selectRequest(Object(o.a)(Object(o.a)({},t),{},{index:a}))}}))})),a&&t.length&&l.a.createElement(F.a,{onEnter:function(){return e.props.loadMoreRequests()}}))))}}]),a}(l.a.PureComponent),I=function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"five column",style:{textAlign:"center"}},l.a.createElement("input",{type:"checkbox",checked:e.selected,onChange:e.onChange})),l.a.createElement("td",{className:"ten column"},l.a.createElement("span",null,e.id)),l.a.createElement("td",{className:"fifteen column"},l.a.createElement("span",null,e.requested_at)),l.a.createElement("td",{className:"fifteen column"},l.a.createElement("span",null,e.requested_by)),l.a.createElement("td",{className:"fifteen column"},l.a.createElement("span",null,e.recipient)),l.a.createElement("td",{className:"fifteen column"},l.a.createElement("span",null,e.sender)),l.a.createElement("td",{className:"fifteen column"},l.a.createElement("span",null,e.subject)),l.a.createElement("td",{className:"ten column"},l.a.createElement("span",null,e.rejected_status)))},L=A(function(e){return Object(i.b)((function(e){return{requests:e.requests}}),{loadMoreRequests:f})(e)}(M)),J=A((function(e){var t=e.selected||{};return l.a.createElement("div",{id:"mail-details"},l.a.createElement("div",{className:"head"},l.a.createElement("span",{className:"title"},l.a.createElement("b",null,"DETAILS")),l.a.createElement("div",{className:"rest"})),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"title"},"E-Mail Information"),l.a.createElement("div",{className:"data"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"ID"),l.a.createElement("div",{className:"value"},t.id)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Received time"),l.a.createElement("div",{className:"value"},t.received_at)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Recipient"),l.a.createElement("div",{className:"value"},t.recipient)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Subject"),l.a.createElement("div",{className:"value"},t.subject)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Sender"),l.a.createElement("div",{className:"value"},t.sender)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Categorized at"),l.a.createElement("div",{className:"value"},t.rejected_status)))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"title"},"Request information"),l.a.createElement("div",{className:"data"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Request Time"),l.a.createElement("div",{className:"value"},t.requested_by)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Requested at"),l.a.createElement("div",{className:"value"},t.requested_at)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Justification"),l.a.createElement("div",{className:"value"}))))))})),Y=(a(44),j={},Object(d.createStore)(y,j,Object(p.composeWithDevTools)(Object(d.applyMiddleware)(E.a))));var z=function(e){return l.a.createElement(V,null,l.a.createElement(D,null),l.a.createElement(L,null),l.a.createElement(J,null))},B=function(){return l.a.createElement(V,null,"Quarantined")},P=function(){return l.a.createElement(i.a,{store:Y},l.a.createElement(s.a,null,l.a.createElement(g,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/quarantined",component:B}),l.a.createElement(u.a,{exact:!0,path:"/",component:z}))))},V=function(e){return l.a.createElement("main",{id:"main"},e.children)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.93a86f84.chunk.js.map