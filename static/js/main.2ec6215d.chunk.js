(this["webpackJsonpdixie-project"]=this["webpackJsonpdixie-project"]||[]).push([[0],{120:function(e,t,a){"use strict";var n=a(77),r=a.n(n),c=a(121),i=a(10),o=a(11),s=function(){function e(t){Object(i.a)(this,e),this.blogDataPath=t}return Object(o.a)(e,[{key:"loadBlog",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,fetch(this.blogDataPath).then((function(e){return e.text()})).then((function(e){return t=e}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"partitionPostsByDate",value:function(e){var t={};return e.forEach((function(e){var a=e.LogDate[0],n=parseInt(a.substring(0,4));void 0===t[n]&&(t[n]={});var r=parseInt(a.substring(5,7)),c=t[n];void 0===c[r]?c[r]=[e]:c[r].push(e)})),t}},{key:"partitionPostsByTags",value:function(e){var t={};return e.forEach((function(e){e.Tags[0].split(" ").forEach((function(a){void 0===t[a=""===a?"\u65e0\u6807\u7b7e":a]?t[a]=[e]:t[a].push(e)}))})),t}}]),e}();t.a=s},126:function(e,t,a){"use strict";(function(e){var n=a(286),r=a(10),c=a(11),i=a(12),o=a(13),s=a(0),l=a.n(s),u=a(304),m=a(51),h=a(47),p=a(61),g=a(62),d=a(132),f=a(292),v=function(t){Object(i.a)(s,t);var a=Object(o.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=a.call(this,e)).state={posts:e.posts},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state.posts,a=null;return t&&(a=(a=t.map((function(e){return Object(n.a)({},e)}))).sort((function(){return.5-Math.random()}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{filePath:"/the-dixie-project/home-intro.md"}),l.a.createElement(m.a,{style:{background:"none",minHeight:"200px"}},l.a.createElement(h.a,{as:"h3"},"\u535a\u6587\u8282\u9009"),!a&&l.a.createElement(p.a,{active:!0},"Loading")||a&&l.a.createElement(g.a.Group,{itemsPerRow:1},a.slice(0,10).map((function(t){var a=t.Title[0],n=new e(a+t.LogDate[0]).toString("hex");return l.a.createElement(g.a,{key:t.Title[0]+t.LogDate[0],style:{background:"none"},color:"blue"},l.a.createElement(g.a.Content,null,l.a.createElement(g.a.Header,null,t.Title[0]),l.a.createElement(g.a.Meta,null,t.LogDate[0]),l.a.createElement(g.a.Description,null,l.a.createElement(f.a,{lines:3,width:1e3,ellipsis:"\u2026"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.Content[0]}})))),l.a.createElement(g.a.Content,{extra:!0,textAlign:"right"},l.a.createElement(d.a,{basic:!0,color:"blue",onClick:function(){return window.location.href="".concat("/the-dixie-project","/").concat(n)}},"\u9605\u8bfb")))})))))}}]),s}(s.Component);t.a=v}).call(this,a(30).Buffer)},127:function(e,t,a){"use strict";var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(36),u=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.state={posts:e.posts},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.posts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{key:null===e,title:"\u535a\u6587\u76ee\u5f55",posts:e,itemsPerPage:25}))}}]),a}(o.Component);t.a=u},128:function(e,t,a){"use strict";var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(132),u=a(47),m=a(306),h=a(51),p=a(84),g=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r.parseDate=function(e){var t=e.substring(0,4)+"\u5e74";return t+=e.substring(5,7)+"\u6708",t+=e.substring(8,10)+"\u65e5 ",t+=e.substring(10)},r.state={post:e.post},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.post,t=e.Comments[0].Comment;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{basic:!0,color:"blue",icon:"angle double left",onClick:function(){return window.history.go(-1)}}),s.a.createElement(u.a,{as:"h2",style:{textAlign:"center",marginTop:"0.5em"}},e.Title[0]),s.a.createElement(u.a,{as:"h5",style:{color:"gray",textAlign:"center",marginTop:"1em"}},this.parseDate(e.LogDate[0])),s.a.createElement(m.a,{dangerouslySetInnerHTML:{__html:e.Content[0]}}),t&&s.a.createElement(h.a,{style:{marginTop:"2em",background:"none"}},s.a.createElement(p.a.Group,null,s.a.createElement(u.a,{as:"h3",dividing:!0},"\u8bc4\u8bba"),t.map((function(e){return s.a.createElement(p.a,{key:e.NiceName[0]+e.CreateTime[0],style:{padding:"0.5em"}},s.a.createElement(p.a.Content,null,s.a.createElement(p.a.Author,null,e.NiceName[0]),s.a.createElement(p.a.Metadata,null,e.CreateTime[0]),s.a.createElement(p.a.Text,{dangerouslySetInnerHTML:{__html:e.CommentText[0]}})))})))))}}]),a}(o.Component);t.a=g},129:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(8),u=a(36),m=a(61),h=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={},t.getPostsWithSearchValue=function(e){var a=[];return t.state.posts.forEach((function(t){var n=t.Title[0],r=t.Content[0];(n.includes(e)||r.includes(e))&&a.push(t)})),a},t.state={posts:e.posts},t}return Object(r.a)(o,[{key:"render",value:function(){var t=null,a="";if(this.state.posts){var n=this.props.match.params.value;a=new e(n,"hex").toString(),t=this.getPostsWithSearchValue(a)}return s.a.createElement(s.a.Fragment,null,!t&&s.a.createElement(m.a,{active:!0},"Loading")||t&&s.a.createElement(u.a,{title:"\u641c\u7d22\u7ed3\u679c: ".concat(a," (").concat(t.length,")"),posts:t,itemsPerPage:25}))}}]),o}(o.Component);t.a=Object(l.f)(h)}).call(this,a(30).Buffer)},277:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(120),u=(a(325),a(21)),m=a(51),h=a(8),p=a(278),g=a(285),d=a(126),f=a(127),v=a(36),E=a(35),y=a(128),b=a(129),k=a(263).parseString,j=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={allPosts:null,postsPartitionedByDate:null,postsPartitionedByTags:null},t}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this,t=new l.a("/the-dixie-project/howe-blog.xml");new Promise((function(e,a){e(t.loadBlog())})).then((function(a){k(a,(function(a,n){n=n.BlogBusCom,e.setState({allPosts:n.Log}),e.setState({postsPartitionedByDate:t.partitionPostsByDate(n.Log)}),e.setState({postsPartitionedByTags:t.partitionPostsByTags(n.Log)})}))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var t=this.state.postsPartitionedByDate,a=this.state.postsPartitionedByTags,n=this.state.allPosts;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{className:"center-fit",alt:"background",src:"/the-dixie-project/images/background.jpg"})),s.a.createElement(u.a,null,s.a.createElement(p.a,null),s.a.createElement(u.a.Row,{columns:2,style:{margin:"0 10em"}},s.a.createElement(g.a,{key:(null===t)+(null===a),postsPartitionedByDate:t,postsPartitionedByTags:a}),s.a.createElement(u.a.Column,{style:{padding:"0 0 0 1em"},width:12},s.a.createElement(m.a,{className:"semi-transparent",style:{padding:"2em",minHeight:"200px"}},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",exact:!0,component:function(){return s.a.createElement(d.a,{key:null===n,posts:n})}}),s.a.createElement(h.a,{path:"/all-posts",exact:!0,component:function(){return s.a.createElement(f.a,{key:null===n,posts:n})}}),t&&Object.keys(t).map((function(e){return Object.keys(t[e]).map((function(a){return s.a.createElement(h.a,{key:"".concat(e).concat(a),path:"/posts-".concat(e,"-").concat(a),exact:!0,component:function(){return s.a.createElement(v.a,{title:"".concat(e,"\u5e74").concat(a,"\u6708"),posts:t[e][a],itemsPerPage:25})}})}))})),a&&Object.keys(a).map((function(e){return s.a.createElement(h.a,{key:e,path:"/posts-".concat(E[e]),exact:!0,component:function(){return s.a.createElement(v.a,{title:"\u6807\u7b7e\uff1a".concat(e),posts:a[e],itemsPerPage:25})}})})),n&&n.map((function(t){var a=t.Title[0],n=new e(a+t.LogDate[0]).toString("hex");return s.a.createElement(h.a,{key:n,path:"/".concat(n),exact:!0,component:function(){return s.a.createElement(y.a,{post:t})}})})),s.a.createElement(h.a,{path:"/search/:value",children:function(){return s.a.createElement(b.a,{key:null===n,posts:n})}})))))))}}]),o}(o.Component);t.a=j}).call(this,a(30).Buffer)},278:function(e,t,a){"use strict";var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(18),u=a(21),m=a(51),h=a(131),p=a(47),g=a(52),d=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).handleItemClick=function(e,t){var a=t.name;return r.setState({activeItem:a})};var c=window.location.pathname.substr(19);return c=""===c?"\u9996\u9875":"all-posts"===c?"\u535a\u6587\u76ee\u5f55":c,r.state={activeItem:c},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return s.a.createElement(u.a.Row,{columns:1,style:{paddingBottom:0}},s.a.createElement(m.a,{className:"semi-transparent",style:{margin:"2em 10em",width:"100%"}},s.a.createElement(u.a,null,s.a.createElement(u.a.Row,{columns:2,style:{padding:"2em ".concat("2em")}},s.a.createElement(u.a.Column,{width:1,textAlign:"left"},s.a.createElement(h.a,{src:"/the-dixie-project/images/profile-pic.jpg",size:"tiny",circular:!0,style:{margin:0}})),s.a.createElement(u.a.Column,{width:15,textAlign:"left"},s.a.createElement(p.a,{as:"h1",style:{paddingTop:"0.3em"}},"\u5fc3\u7684\u65b9\u5411"))),s.a.createElement(u.a.Row,{columns:1,style:{padding:"2em ".concat("2em")}},s.a.createElement(g.a,{pointing:!0,secondary:!0},s.a.createElement(g.a.Item,{as:l.b,to:"/",name:"\u9996\u9875",active:"\u9996\u9875"===e,onClick:this.handleItemClick}),s.a.createElement(g.a.Item,{as:l.b,to:"/all-posts",name:"\u535a\u6587\u76ee\u5f55",active:"\u535a\u6587\u76ee\u5f55"===e,onClick:this.handleItemClick}))))))}}]),a}(o.Component);t.a=d},285:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(21),u=a(51),m=a(47),h=a(305),p=a(197),g=a(52),d=a(61),f=a(46),v=a(18),E=a(35),y=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(t){var r;return Object(n.a)(this,o),(r=a.call(this,t)).state={},r.handleYearMenuClick=function(e,t){var a=t.index,n=r.state.activeYear===a?-1:a;r.setState({activeYear:n})},r.handleSearchClick=function(){var t=new e(r.state.searchValue).toString("hex");window.location.href="".concat("/the-dixie-project","/search/").concat(t)},r.state={postsPartitionedByDate:t.postsPartitionedByDate,postsPartitionedByTags:t.postsPartitionedByTags,activeYear:0,searchValue:""},r}return Object(r.a)(o,[{key:"render",value:function(){var e=this,t=this.state.postsPartitionedByDate,a=this.state.postsPartitionedByTags,n=this.state.activeYear;return s.a.createElement(l.a.Column,{style:{padding:"0 1em 0 0"},width:4},s.a.createElement(l.a,{style:{marginLeft:0}},s.a.createElement(l.a.Row,{columns:1},s.a.createElement(u.a,{className:"semi-transparent",style:{width:"100%",minHeight:"100px"}},s.a.createElement(m.a,{as:"h3"},"\u5173\u952e\u8bcd\u641c\u7d22"),s.a.createElement(h.a,{action:{icon:"search",onClick:function(){return e.handleSearchClick()}},placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd...",onChange:function(t){return e.setState({searchValue:t.target.value})},style:{width:"100%"}}))),s.a.createElement(l.a.Row,{columns:1},s.a.createElement(u.a,{className:"semi-transparent",style:{width:"100%",minHeight:"200px"}},s.a.createElement(m.a,{as:"h3"},"\u5f52\u6863"),s.a.createElement(p.a,{as:g.a,vertical:!0,style:{background:"none",width:"100%",border:"none",boxShadow:"none"}},!t&&s.a.createElement(d.a,{active:!0},"Loading")||t&&Object.keys(t).map((function(a){var r=0,c=s.a.createElement(f.a,{style:{marginLeft:"2em"}},Object.keys(t[a]).map((function(e){var n=e<10?"0"+e:e;return r+=t[a][e].length,s.a.createElement(f.a.Item,{as:v.b,to:"/posts-".concat(a,"-").concat(e),key:e,style:{padding:"0.5em 0"}},"".concat(n,"\u6708 (").concat(t[a][e].length,")"))})));return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement(p.a.Title,{active:n===a,content:"".concat(a,"\u5e74 (").concat(r,")"),index:a,onClick:e.handleYearMenuClick}),s.a.createElement(p.a.Content,{active:n===a,content:c,style:{padding:0}}))}))))),s.a.createElement(l.a.Row,{columns:1},s.a.createElement(u.a,{className:"semi-transparent",style:{width:"100%",minHeight:"200px"}},s.a.createElement(m.a,{as:"h3"},"\u6587\u7ae0\u6807\u7b7e"),!a&&s.a.createElement(d.a,{active:!0},"Loading")||a&&s.a.createElement(f.a,{style:{background:"none",width:"100%"}},Object.keys(a).map((function(e){return s.a.createElement(f.a.Item,{as:v.b,to:"/posts-".concat(E[e]),key:e,style:{padding:"0.5em 0"}},"".concat(e," (").concat(a[e].length,")"))})))))))}}]),o}(o.Component);t.a=y}).call(this,a(30).Buffer)},294:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(120),u=a(295),m=a(306),h=a(8),p=a(126),g=a(127),d=a(36),f=a(35),v=a(128),E=a(129),y=a(263).parseString,b=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={},t.state={allPosts:null,postsPartitionedByDate:null,postsPartitionedByTags:null},t}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this,t=new l.a("/the-dixie-project/howe-blog.xml");new Promise((function(e,a){e(t.loadBlog())})).then((function(a){y(a,(function(a,n){n=n.BlogBusCom,e.setState({allPosts:n.Log}),e.setState({postsPartitionedByDate:t.partitionPostsByDate(n.Log)}),e.setState({postsPartitionedByTags:t.partitionPostsByTags(n.Log)})}))}),(function(e){return console.log(e)}))}},{key:"render",value:function(){var t=this.state.postsPartitionedByDate,a=this.state.postsPartitionedByTags,n=this.state.allPosts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{key:null===a,postsPartitionedByDate:t,postsPartitionedByTags:a}),s.a.createElement(m.a,{style:{paddingTop:"7em",paddingBottom:"2em"}},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",exact:!0,component:function(){return s.a.createElement(p.a,{key:null===n,posts:n})}}),s.a.createElement(h.a,{path:"/all-posts",exact:!0,component:function(){return s.a.createElement(g.a,{key:null===n,posts:n})}}),t&&Object.keys(t).map((function(e){return Object.keys(t[e]).map((function(a){return s.a.createElement(h.a,{key:"".concat(e).concat(a),path:"/posts-".concat(e,"-").concat(a),exact:!0,component:function(){return s.a.createElement(d.a,{title:"".concat(e,"\u5e74").concat(a,"\u6708 (").concat(t[e][a].length,")"),posts:t[e][a],itemsPerPage:25})}})}))})),a&&Object.keys(a).map((function(e){return s.a.createElement(h.a,{key:e,path:"/posts-".concat(f[e]),exact:!0,component:function(){return s.a.createElement(d.a,{title:"\u6807\u7b7e\uff1a".concat(e),posts:a[e],itemsPerPage:25})}})})),n&&n.map((function(t){var a=t.Title[0],n=new e(a+t.LogDate[0]).toString("hex");return s.a.createElement(h.a,{key:n,path:"/".concat(n),exact:!0,component:function(){return s.a.createElement(v.a,{post:t})}})})),s.a.createElement(h.a,{path:"/search/:value",children:function(){return s.a.createElement(E.a,{key:null===n,posts:n})}}))))}}]),o}(o.Component);t.a=b}).call(this,a(30).Buffer)},295:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(18),u=a(51),m=a(52),h=a(131),p=a(45),g=a(61),d=a(305),f=a(132),v=a(32),E=a(35),y=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(t){var r;Object(n.a)(this,o),(r=a.call(this,t)).state={},r.handleItemClick=function(e,t){var a=t.name;return r.setState({activeItem:a})},r.handleSearchClick=function(){var t=new e(r.state.searchValue).toString("hex");window.location.href="".concat("/the-dixie-project","/search/").concat(t)};var c=window.location.pathname.substr(19);return c=""===c?"\u9996\u9875":"all-posts"===c?"\u535a\u6587\u76ee\u5f55":c,r.state={activeItem:c,postsPartitionedByTags:t.postsPartitionedByTags,postsPartitionedByDate:t.postsPartitionedByDate},r}return Object(r.a)(o,[{key:"render",value:function(){var e=this,t=this.state.activeItem,a=this.state.postsPartitionedByTags,n=this.state.postsPartitionedByDate;return s.a.createElement(u.a,{id:"navbar",style:{padding:"0.5em",width:"100%",borderRadius:0,position:"fixed",zIndex:"1000"}},s.a.createElement(m.a,{pointing:!0,secondary:!0,style:{fontSize:"10px"}},s.a.createElement(m.a.Item,{as:l.b,to:"/",name:"\u9996\u9875",active:"\u9996\u9875"===t,onClick:this.handleItemClick},s.a.createElement(h.a,{circular:!0,src:"/the-dixie-project/favicon/favicon-32x32.png",onClick:function(){return window.location.href="/the-dixie-project"}})),s.a.createElement(m.a.Item,{name:"\u535a\u6587\u76ee\u5f55",as:l.b,to:"/all-posts",active:"\u535a\u6587\u76ee\u5f55"===t,onClick:this.handleItemClick},"\u535a\u6587\u76ee\u5f55"),s.a.createElement(p.a,{item:!0,text:"\u5f52\u6863",scrolling:!0},s.a.createElement(p.a.Menu,null,!n&&s.a.createElement(p.a.Item,{style:{minHeight:"50px"}},s.a.createElement(g.a,{active:!0,size:"mini"},"Loading"))||n&&s.a.createElement(s.a.Fragment,null,Object.keys(n).map((function(e){var t=0,a=s.a.createElement(s.a.Fragment,null,Object.keys(n[e]).map((function(a){var r=a<10?"0"+a:a;return t+=n[e][a].length,s.a.createElement(p.a.Item,{as:l.b,to:"/posts-".concat(e,"-").concat(a),key:a,style:{padding:"0.5em 0"}},"".concat(r,"\u6708 (").concat(n[e][a].length,")"))})));return s.a.createElement(s.a.Fragment,{key:e},s.a.createElement(p.a.Header,null,"".concat(e,"\u5e74 (").concat(t,")")),a)}))))),s.a.createElement(p.a,{item:!0,text:"\u6807\u7b7e"},s.a.createElement(p.a.Menu,null,!a&&s.a.createElement(p.a.Item,{style:{minHeight:"50px"}},s.a.createElement(g.a,{active:!0,size:"mini"},"Loading"))||a&&s.a.createElement(s.a.Fragment,null,Object.keys(a).map((function(e){return s.a.createElement(p.a.Item,{as:l.b,to:"/posts-".concat(E[e]),key:e,style:{padding:"0.5em 0"}},"".concat(e," (").concat(a[e].length,")"))}))))),s.a.createElement(m.a.Item,{style:{paddingLeft:0}},s.a.createElement(d.a,{placeholder:"\u8f93\u5165\u5173\u952e\u8bcd...",onChange:function(t){return e.setState({searchValue:t.target.value})},style:{width:"85px",height:"27px"}},s.a.createElement("input",null),s.a.createElement(f.a,{icon:s.a.createElement(v.a,{name:"search",size:"mini"}),onClick:function(){return e.handleSearchClick()}})))))}}]),o}(o.Component);t.a=y}).call(this,a(30).Buffer)},304:function(e,t,a){"use strict";var n=a(77),r=a.n(n),c=a(121),i=a(10),o=a(11),s=a(12),l=a(13),u=a(0),m=a.n(u),h=a(287),p=a.n(h),g=a(646),d=a(644),f=a(640),v=a(641),E=a(642),y=a(643),b=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentWillMount",value:function(){g.a.registerLanguage("jsx",f.a),g.a.registerLanguage("javascript",v.a),g.a.registerLanguage("typescript",E.a),g.a.registerLanguage("css",y.a)}},{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return m.a.createElement("figure",{className:"highlight"},m.a.createElement(g.a,{language:t,style:d.a},a))}}]),a}(u.PureComponent);b.defaultProps={language:null};var k=b;function j(e,t){return"string"===typeof t?e+t:m.a.Children.toArray(t.props.children).reduce(j,e)}function P(e){var t=m.a.Children.toArray(e.children).reduce(j,"");return m.a.createElement("h"+e.level,{id:t},e.children)}var O=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lang:e.lang,markdownText:null,filePath:e.filePath},n}return Object(o.a)(a,[{key:"loadMarkdown",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.state.filePath).then((function(e){return e.text()})).then((function(e){return t.setState({markdownText:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UNSAFE_componentWillMount",value:function(){this.loadMarkdown()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(p.a,{escapeHtml:!1,source:this.state.markdownText,renderers:{code:k,heading:P}}))}}]),a}(u.Component);t.a=O},316:function(e,t,a){e.exports=a(630)},321:function(e,t,a){},325:function(e,t,a){},35:function(e){e.exports=JSON.parse('{"\u751f\u6d3b":"lifestyle","\u8bfb\u4e66":"reading","\u7535\u8111":"computer-and-IT","\u97f3\u4e50":"music","\u7535\u5f71":"movies","\u5b66\u4e60":"studies","\u6444\u5f71":"photography","\u65c5\u6e38":"travel","\u65e0\u6807\u7b7e":"no-tags","\u6b4c\u66f2":"songs","\u6e38\u620f":"video-games"}')},36:function(e,t,a){"use strict";(function(e){var n=a(10),r=a(11),c=a(12),i=a(13),o=a(0),s=a.n(o),l=a(61),u=a(47),m=a(46),h=a(83),p=a(307),g=a(18),d=a(82),f=a.n(d),v=a(35),E=function(t){Object(c.a)(o,t);var a=Object(i.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={},t.handlePageChange=function(e,a){t.setState({currentPage:a.activePage-1})},t.state={title:e.title,posts:e.posts,itemsPerPage:e.itemsPerPage,currentPage:0},t.pages=null,t}return Object(r.a)(o,[{key:"dividePages",value:function(){this.pages=[];var e=this.state.posts,t=this.state.itemsPerPage;if(e)for(var a=0;a<Math.ceil(e.length/t);a++)this.pages.push(e.slice(a*t,(a+1)*t))}},{key:"render",value:function(){var t=this.state.posts;!this.pages&&t&&this.dividePages();var a=this.state.currentPage,n=this.pages;return s.a.createElement(s.a.Fragment,null,!t&&s.a.createElement(l.a,{active:!0},"Loading")||t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{as:"h2"},this.state.title),s.a.createElement(m.a,{divided:!0,style:{background:"none",width:"100%",margin:"2em 1em 2em 0"}},n[a].map((function(t){var a=t.Title[0],n=new e(a+t.LogDate[0]).toString("hex");return s.a.createElement(m.a.Item,{key:t.Title[0]+t.LogDate[0]},s.a.createElement(m.a.Content,null,s.a.createElement(m.a.Header,{className:"post-link",as:g.b,to:"/".concat(n),style:{margin:"0.5em 0",paddingTop:"0.5em",paddingBottom:"0.5em",color:"black",fontSize:"15px"}},t.Title[0]),s.a.createElement(m.a.Description,null,t.LogDate[0],t.Tags[0].split(" ").map((function(e){return e=""===e?"\u65e0\u6807\u7b7e":e,s.a.createElement(h.a,{as:g.b,to:"/posts-".concat(v[e]),className:"label-list",key:e,size:"mini",color:"blue",style:{marginLeft:"0.5em"}},e)})))))}))),t.length>this.state.itemsPerPage&&s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{maxDeviceWidth:1224},s.a.createElement(p.a,{className:"centered-pagination",ellipsisItem:null,boundaryRange:0,siblingRange:1,defaultActivePage:a+1,totalPages:Math.ceil(t.length/this.state.itemsPerPage),onPageChange:this.handlePageChange})),s.a.createElement(f.a,{minDeviceWidth:1224},s.a.createElement(p.a,{className:"centered-pagination",defaultActivePage:a+1,totalPages:Math.ceil(t.length/this.state.itemsPerPage),onPageChange:this.handlePageChange})))))}}]),o}(o.Component);t.a=E}).call(this,a(30).Buffer)},548:function(e,t){},603:function(e,t){},605:function(e,t){},630:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(58),i=a.n(c),o=(a(321),a(10)),s=a(11),l=a(12),u=a(13),m=a(277),h=a(18),p=a(294),g=a(82),d=a.n(g),f=a(8),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),E=Object(f.f)(v),y=(a(629),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/the-dixie-project/"},r.a.createElement(E,null,r.a.createElement(d.a,{maxDeviceWidth:1224},r.a.createElement(p.a,null)),r.a.createElement(d.a,{minDeviceWidth:1224},r.a.createElement(m.a,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[316,1,2]]]);
//# sourceMappingURL=main.2ec6215d.chunk.js.map