(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{97:function(e,t,n){e.exports={list:"MovieReviews_list__2Qgu9",item:"MovieReviews_item__2s0tN"}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"Cast",(function(){return v}));var i=n(12),r=n(13),s=n(15),c=n(14),a=n(1),o=n(17),u=n(97),h=n.n(u),l=n(0),v=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;o.a.getMovieReviews(this.props.id).then((function(t){return e.setState({reviews:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.reviews;return Object(l.jsx)(l.Fragment,{children:e.length?Object(l.jsx)("ul",{className:h.a.list,children:e.map((function(e){return Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsxs)("h3",{children:["Author: ",e.author]}),Object(l.jsx)("p",{children:e.content})]},e.id)}))}):Object(l.jsx)("h3",{children:"We don't have any reviews for this movie"})})}}]),n}(a.Component);t.default=v}}]);
//# sourceMappingURL=4.7ae0e48d.chunk.js.map