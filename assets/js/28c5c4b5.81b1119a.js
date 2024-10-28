"use strict";(self.webpackChunkclimateqa=self.webpackChunkclimateqa||[]).push([[3359],{706:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(4848),r=i(8453);const t={sidebar_position:94},o="v1.5.0 - 2024-10-28",l={id:"changelog/v1.5.0/index",title:"v1.5.0 - 2024-10-28",description:"Introduction",source:"@site/docs/changelog/v1.5.0/index.md",sourceDirName:"changelog/v1.5.0",slug:"/changelog/v1.5.0/",permalink:"/docs/changelog/v1.5.0/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:94,frontMatter:{sidebar_position:94},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/docs/category/changelog"},next:{title:"v1.4.0 - 2024-03-25",permalink:"/docs/changelog/v1.4.0"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Focus: Agentic workflow",id:"focus-agentic-workflow",level:2},{value:"Focus: sources confidence estimation",id:"focus-sources-confidence-estimation",level:2},{value:"Coming Soon: Version 1.6",id:"coming-soon-version-16",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"v150---2024-10-28",children:"v1.5.0 - 2024-10-28"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"After several months without updates, we are excited to announce the release of ClimateQ&A v1.5. This major release incorporates findings from our extensive R&D efforts and introduces significant technical improvements that enhance the tool's scalability and performance. The changes are primarily structural, laying the groundwork for more advanced features and improved user experience."}),"\n",(0,s.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Major architectural improvements with agentic workflow"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implemented langgraph framework for core operations"}),"\n",(0,s.jsx)(n.li,{children:"Added intent routing to better classify user queries"}),"\n",(0,s.jsx)(n.li,{children:"Introduced query decomposition for more efficient sub-question analysis"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance enhancements -> the quality of answers should be overall really better"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Migrated to gpt-4o-mini backend LLM for improved performance"}),"\n",(0,s.jsx)(n.li,{children:"Integrated Cohere reranker for superior result quality"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhanced Visibility and Tracking"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implemented confidence scoring system for source reliability"}),"\n",(0,s.jsx)(n.li,{children:"Added dedicated figures tab to distinguish between IPCC text and AI-generated figure descriptions"}),"\n",(0,s.jsx)(n.li,{children:"Upgraded to Gradio 5 with enhanced message formatting"}),"\n",(0,s.jsx)(n.li,{children:"Introduced step-by-step display in chat interface"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"focus-agentic-workflow",children:"Focus: Agentic workflow"}),"\n",(0,s.jsx)(n.p,{children:"After analyzing tens of thousands of user queries since April 2023, we recognized that a one-size-fits-all pipeline couldn't effectively address the diverse range of questions. In response, we've completely restructured ClimateQ&A to operate using a decision graph (agentic) approach."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(2431).A+"",width:"591",height:"721"})}),"\n",(0,s.jsx)(n.p,{children:"The new workflow follows a sophisticated decision tree:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Processing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatically translates non-English queries to English when necessary"}),"\n",(0,s.jsx)(n.li,{children:"Decomposes complex questions into smaller, more precise sub-queries for enhanced search accuracy"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document Retrieval"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Performs targeted searches for each relevant sub-query"}),"\n",(0,s.jsx)(n.li,{children:"Applies re-ranking algorithms to assess document relevance"}),"\n",(0,s.jsx)(n.li,{children:"Retains only highly relevant documents that meet quality thresholds"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Response Generation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Utilizes RAG (Retrieval-Augmented Generation) with qualified documents"}),"\n",(0,s.jsx)(n.li,{children:"Provides alternative responses when sufficient relevant documents aren't found"}),"\n",(0,s.jsx)(n.li,{children:"Includes additional quality control layers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The new graph-based architecture offers greater modularity in handling different types of queries. We've already identified several specialized use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Local climate change impacts"}),"\n",(0,s.jsx)(n.li,{children:"Environmental impact of AI (beyond IPCC report coverage)"}),"\n",(0,s.jsx)(n.li,{children:"Integration with additional scientific corpus databases like OpenAlex for expanded knowledge base"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example with query processing and decomposition"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(7156).A+"",width:"943",height:"324"})}),"\n",(0,s.jsx)(n.h2,{id:"focus-sources-confidence-estimation",children:"Focus: sources confidence estimation"}),"\n",(0,s.jsx)(n.p,{children:"A key enhancement in this release is our implementation of advanced source reranking and confidence scoring. Each retrieved source now undergoes an evaluation process via reranking (for now using Cohere Reranking API), resulting in a confidence score that is transparently displayed to users. This feature serves two important purposes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Builds user trust by providing clear visibility into the reliability of our sources"}),"\n",(0,s.jsx)(n.li,{children:"Helps users make informed judgments about the comprehensiveness and quality of each response"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(397).A+"",width:"1431",height:"461"})}),"\n",(0,s.jsx)(n.h2,{id:"coming-soon-version-16",children:"Coming Soon: Version 1.6"}),"\n",(0,s.jsx)(n.p,{children:"Our next release, planned very soon in  the coming weeks, will showcase the platform's ability to incorporate supplementary content to enrich responses. Key improvements will include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scientific Publications"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Integration with OpenAlex API, providing access to 250 million scientific publications"}),"\n",(0,s.jsx)(n.li,{children:"Focus on recent research published since the latest IPCC reports"}),"\n",(0,s.jsx)(n.li,{children:"Addressing literature reviews and knowledge gaps with up-to-date scientific findings"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Graphs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Integration with trusted sources like Our World in Data"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2431:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/image1-2a60f43aa562d9afe931cbdafe40995f.png"},7156:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/image2-3dd693c9411c93ede117f9a1a30c06d2.png"},397:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/image3-6c639f9820b326f129b094b05b6e0709.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);