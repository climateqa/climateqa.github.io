"use strict";(self.webpackChunkclimateqa=self.webpackChunkclimateqa||[]).push([[3249],{9022:(e,a,s)=>{s.d(a,{A:()=>i});s(6540);var t=s(4164),r=s(8774),n=s(4848);function i(e){const{permalink:a,title:s,subLabel:i,isNext:l}=e;return(0,n.jsxs)(r.A,{className:(0,t.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:a,children:[i&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,n.jsx)("div",{className:"pagination-nav__label",children:s})]})}},8793:(e,a,s)=>{s.r(a),s.d(a,{default:()=>_});s(6540);var t=s(781),r=s(4164),n=s(8453),i=s(5260),l=s(8774),o=s(3384),c=s(7293),d=s(6025);const m="blogPostTitle_uMeh",h="blogPostDate_Ocfp";var g=s(4848);const x=["January","February","March","April","May","June","July","August","September","October","November","December"],j=e=>{let{tagLabel:a}=e,s=a.slice(3),t=(0,d.A)(`img/sdgs/E-WEB-Goal-${s}.png`);return(0,g.jsx)("img",{src:t,className:"sdg-icon-big"})};const p=function(e){const{children:a,frontMatter:s,metadata:t,truncated:p,isBlogPostPage:b=!1}=e,{date:u,permalink:v,tags:N,readingTime:_}=t,{author:A,title:f,image:k,keywords:w,description:I}=s,P="/blog"===v.slice(0,5);console.log(f,P);const T=s.author_url||s.authorURL,y=s.author_title||s.authorTitle,L=s.author_image_url||s.authorImageURL,M=(0,d.A)(k,{absolute:!0});let R=s.header_image_url;return R=(0,d.A)(R),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.A,{children:[w&&w.length&&(0,g.jsx)("meta",{name:"keywords",content:w.join(",")}),k&&(0,g.jsx)("meta",{property:"og:image",content:M}),k&&(0,g.jsx)("meta",{name:"twitter:image",content:M}),k&&(0,g.jsx)("meta",{name:"twitter:image:alt",content:`Image for ${f}`})]}),(0,g.jsxs)("article",{className:b?void 0:"margin-bottom--xl",children:[(()=>{const e=b?"h1":"h2",a=u.substring(0,10).split("-"),t=a[0],n=x[parseInt(a[1],10)-1],i=parseInt(a[2],10);return(0,g.jsxs)("header",{children:[(0,g.jsx)(e,{className:(0,r.A)("margin-bottom--sm",m),children:b?f:(0,g.jsx)(l.A,{to:v,children:f})}),(0,g.jsxs)("div",{className:"margin-vert--md",children:[I&&(0,g.jsx)("p",{children:I}),P&&(0,g.jsxs)("time",{dateTime:u,className:h,children:[n," ",i,", ",t," ",_&&(0,g.jsxs)(g.Fragment,{children:[" \xb7 ",Math.ceil(_)," min read"]})]})]}),(0,g.jsxs)("div",{className:"avatar margin-vert--md",children:[L&&(0,g.jsx)("a",{className:"avatar__photo-link avatar__photo",href:T,target:"_blank",rel:"noreferrer noopener",children:(0,g.jsx)("img",{src:L,alt:A})}),(0,g.jsx)("div",{className:"avatar__intro",children:A&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h4",{className:"avatar__name",children:["Written by ",(0,g.jsx)("a",{href:T,target:"_blank",rel:"noreferrer noopener",children:A})]}),(0,g.jsx)("small",{className:"avatar__subtitle",children:y})]})})]}),(0,g.jsx)("div",{className:"margin-vert--md",children:(0,g.jsx)("img",{className:"img-blog-header",src:R})}),!1===P&&(0,g.jsxs)("div",{children:[s.sdgs&&(0,g.jsx)("div",{className:"row sdgs-wrapper",children:s.sdgs.sort().map((e=>(0,g.jsx)(j,{tagLabel:e})))}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)(c.A,{type:"info",title:"A RETENIR",children:(0,g.jsx)("p",{children:(0,g.jsxs)("ul",{children:[(0,g.jsxs)("li",{children:["Projet - ",s.title]}),s.github&&(0,g.jsxs)("li",{children:["GitHub - ",s.github]}),s.slack&&(0,g.jsxs)("li",{children:["Slack channel - ",s.slack]}),s.website&&(0,g.jsxs)("li",{children:["Website - ",s.website]})]})})})})]})]})})(),(0,g.jsx)("section",{className:"markdown blog-article-custom",children:(0,g.jsx)(n.x,{components:o.A,children:a})}),(N.length>0||p)&&(0,g.jsxs)("footer",{className:"row margin-vert--lg",children:[N.length>0&&(0,g.jsxs)("div",{className:"col",children:[(0,g.jsx)("strong",{children:"Tags:"}),N.map((e=>{let{label:a,permalink:s}=e;return(0,g.jsx)(l.A,{className:"margin-horiz--sm",to:s,children:a},s)}))]}),p&&(0,g.jsx)("div",{className:"col text--right",children:(0,g.jsx)(l.A,{to:t.permalink,"aria-label":`Read more about ${f}`,children:(0,g.jsx)("strong",{children:"Read More"})})})]})]})]})};var b=s(1312),u=s(9022);function v(e){const{nextItem:a,prevItem:s}=e;return(0,g.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[s&&(0,g.jsx)(u.A,{...s,subLabel:(0,g.jsx)(b.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),a&&(0,g.jsx)(u.A,{...a,subLabel:(0,g.jsx)(b.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}var N=s(7763);const _=function(e){const{content:a,sidebar:s}=e,{frontMatter:r,metadata:n}=a,{title:i,description:l,nextItem:o,prevItem:c,editUrl:m}=n,{hide_table_of_contents:h}=r;let x=r.header_image_url;return x=(0,d.A)(x),(0,g.jsx)(t.A,{title:i,description:l,wrapperClassName:"blog-wrapper",children:a&&(0,g.jsx)("div",{className:"container container-wide margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col col--2"}),(0,g.jsxs)("main",{className:"col col--8",children:[(0,g.jsx)(p,{frontMatter:r,metadata:n,isBlogPostPage:!0,children:(0,g.jsx)(a,{})}),(o||c)&&(0,g.jsx)("div",{className:"margin-vert--xl",children:(0,g.jsx)(v,{nextItem:o,prevItem:c})})]}),!h&&a.toc&&(0,g.jsx)("div",{className:"col col--2",children:(0,g.jsx)(N.A,{toc:a.toc})})]})})})}}}]);