(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[8],{101:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return p}));var n=i(33),a=i(34),c=i(36),s=i(35),r=i(0),o=i(32),l=i(97),h=i.n(l),u=i(3),p=function(t){Object(c.a)(i,t);var e=Object(s.a)(i);function i(){var t;Object(n.a)(this,i);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={moviesList:[]},t}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var t=this;o.a.getMovieCredits(this.props.id).then((function(e){return t.setState({moviesList:e})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.moviesList;return Object(u.jsx)("ul",{className:h.a.list,children:t.map((function(t){return Object(u.jsxs)("li",{className:h.a.item,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:t.profile_path?"http://image.tmdb.org/t/p/w200/".concat(t.profile_path):"https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg",alt:"Actor: ".concat(t.name),width:200})}),Object(u.jsx)("h3",{className:h.a.title,children:t.name}),Object(u.jsx)("p",{children:t.character})]},t.id)}))})}}]),i}(r.Component)},97:function(t,e,i){t.exports={title:"Cast_title__Ck-G0",item:"Cast_item__3RXmo",list:"Cast_list__2kBUe"}}}]);
//# sourceMappingURL=8.bbb0bd80.chunk.js.map