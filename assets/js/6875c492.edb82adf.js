"use strict";(self.webpackChunkclimateqa=self.webpackChunkclimateqa||[]).push([[4813],{3274:(e,a,t)=>{t.d(a,{A:()=>h});t(6540);var s=t(4164),r=t(5260),l=t(8774),n=t(6025);const i="blogPostTitle_TDe2",c="blogPostDate_PPux";var o=t(4848);const d=["January","February","March","April","May","June","July","August","September","October","November","December"],m=e=>{let a,{tagLabel:t,tagPermalink:s}=e;return a="saison"===t.toLowerCase().slice(0,6)||"monthly"===t.toLowerCase().slice(0,7)||"hors"===t.toLowerCase().slice(0,4)?"badge-season":"Actif"===t?"badge-active":"",(0,o.jsx)("span",{className:`badge badge--primary ${a}`,children:(0,o.jsx)(l.A,{to:s,children:t},s)})},g=e=>{let{tagLabel:a}=e,t=a.slice(3),s=(0,n.A)(`img/sdgs/E-WEB-Goal-${t}.png`);return(0,o.jsx)("img",{src:s,className:"sdg-icon"})};const h=function(e){const{children:a,frontMatter:t,metadata:h,truncated:x,isBlogPostPage:j=!1}=e,{date:u,permalink:p,tags:b,readingTime:v}=h,{author:N,title:w,image:_,keywords:f,description:A}=t;let k=t.header_image_url;k=(0,n.A)(k);const y=t.author_url||t.authorURL,L=(t.author_title||t.authorTitle,t.author_image_url||t.authorImageURL),P=(0,n.A)(_,{absolute:!0}),T="/blog"===p.slice(0,5);return(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card__image",children:(0,o.jsx)("img",{src:k,alt:"Image alt text",title:"Logo Title Text 1"})}),(0,o.jsxs)("div",{className:"card__body",children:[(0,o.jsxs)(r.A,{children:[f&&f.length&&(0,o.jsx)("meta",{name:"keywords",content:f.join(",")}),_&&(0,o.jsx)("meta",{property:"og:image",content:P}),_&&(0,o.jsx)("meta",{name:"twitter:image",content:P}),_&&(0,o.jsx)("meta",{name:"twitter:image:alt",content:`Image for ${w}`})]}),(0,o.jsxs)("article",{children:[(()=>{const e=j?"h1":"h2",a=u.substring(0,10).split("-"),t=a[0],r=d[parseInt(a[1],10)-1],n=parseInt(a[2],10);return(0,o.jsxs)("header",{children:[(0,o.jsx)(e,{style:{fontSize:16},className:(0,s.A)("margin-bottom--sm",i),children:j?w:(0,o.jsx)(l.A,{to:p,children:w})}),(0,o.jsx)("p",{style:{fontSize:14,lineHeight:1.2},children:A}),(0,o.jsxs)("div",{className:"avatar margin-vert--md",children:[L&&(0,o.jsx)("a",{className:"avatar__photo-link avatar__photo",href:y,target:"_blank",rel:"noreferrer noopener",children:(0,o.jsx)("img",{src:L,alt:N})}),T&&(0,o.jsx)("div",{className:"avatar__intro",children:N&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("time",{dateTime:u,className:c,children:[r," ",n,", ",t," ",v&&(0,o.jsxs)(o.Fragment,{children:[" \xb7 ",Math.ceil(v)," min read"]})]})})})]})]})})(),(b.length>0||x)&&(0,o.jsxs)("footer",{className:"margin-vert--sm",children:[(0,o.jsx)("div",{className:"row",children:b.length>0&&(0,o.jsx)("div",{className:"col",children:b.map((e=>{let{label:a,permalink:t}=e;return"sdg"!==a.slice(0,3)&&(0,o.jsx)(m,{tagLabel:a,tagPermalink:t})}))})}),t.sdgs&&(0,o.jsx)("div",{className:"row sdgs-wrapper",children:t.sdgs.sort().map((e=>(0,o.jsx)(g,{tagLabel:e})))})]})]})]})]})}},4549:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});t(6540);var s=t(781),r=t(8774),l=t(3274),n=t(4848);function i(e,a){return e>1?`${a}s`:a}const c=function(e){const{tag:a,items:t,sidebar:c}=e;console.log(e);const{allTagsPath:o,label:d,count:m}=a;return(0,n.jsx)(s.A,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:"blog-wrapper",children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("main",{className:"col col--12",children:[(0,n.jsxs)("h1",{children:[m," ",i(m,"result"),' with the tag "',d,'"']}),(0,n.jsx)(r.A,{href:o,children:"Explore all tags"}),(0,n.jsx)("div",{className:"margin-vert--xl",children:(0,n.jsx)("div",{className:"row",children:t.map((e=>{let{content:a}=e;return(0,n.jsx)("div",{className:"col col--4 row-preview",children:(0,n.jsx)(l.A,{frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated,children:(0,n.jsx)(a,{})},a.metadata.permalink)})}))})})]})})})})}}}]);