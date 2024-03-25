"use strict";(self.webpackChunkclimateqa=self.webpackChunkclimateqa||[]).push([[867],{1098:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(4848),a=i(8453);const s={slug:"multimodality",title:"ClimateQ&A now features image interpretation",author:"Th\xe9o ALVES DA COSTA",author_url:"theo.alvesdacosta@ekimetrics.com",header_image_url:"img/screenshots/multimodal1.png",tags:["ClimateQ&A","Multi-modality"],description:"ClimateQ&A version 1.3 introduces a new feature that enhances explanations with relevant images, significantly improving the interpretation of complex scientific reports from sources like the IPCC and IPBES. This feature, still in its experimental phase, leverages multimodal Large Language Models (LLMs) to index image descriptions into a search engine.",keywords:["ClimateQ&A","Climate Change"]},r=void 0,o={permalink:"/blog/multimodality",source:"@site/blog/2024-02-20-multimodality/index.md",title:"ClimateQ&A now features image interpretation",description:"ClimateQ&A version 1.3 introduces a new feature that enhances explanations with relevant images, significantly improving the interpretation of complex scientific reports from sources like the IPCC and IPBES. This feature, still in its experimental phase, leverages multimodal Large Language Models (LLMs) to index image descriptions into a search engine.",date:"2024-02-20T00:00:00.000Z",formattedDate:"February 20, 2024",tags:[{label:"ClimateQ&A",permalink:"/blog/tags/climate-q-a"},{label:"Multi-modality",permalink:"/blog/tags/multi-modality"}],readingTime:3.38,hasTruncateMarker:!1,authors:[{name:"Th\xe9o ALVES DA COSTA",url:"theo.alvesdacosta@ekimetrics.com"}],frontMatter:{slug:"multimodality",title:"ClimateQ&A now features image interpretation",author:"Th\xe9o ALVES DA COSTA",author_url:"theo.alvesdacosta@ekimetrics.com",header_image_url:"img/screenshots/multimodal1.png",tags:["ClimateQ&A","Multi-modality"],description:"ClimateQ&A version 1.3 introduces a new feature that enhances explanations with relevant images, significantly improving the interpretation of complex scientific reports from sources like the IPCC and IPBES. This feature, still in its experimental phase, leverages multimodal Large Language Models (LLMs) to index image descriptions into a search engine.",keywords:["ClimateQ&A","Climate Change"]},unlisted:!1,prevItem:{title:"ClimateQ&A v1.4 now has access to 250 million research papers from OpenAlex.org",permalink:"/blog/openalex"}},l={authorsImageUrls:[void 0]},c=[{value:"Abstract",id:"abstract",level:2},{value:"ClimateQ&amp;A now features image interpretation",id:"climateqa-now-features-image-interpretation",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,n.jsx)(t.p,{children:"The article discusses the innovative feature introduced in ClimateQ&A version 1.3, which enables the platform to display images alongside explanations, enhancing the user's understanding of complex scientific data. This feature is particularly useful for interpreting scientific reports, such as those from the IPCC and IPBES, which are rich in illustrative images designed to communicate scientific outcomes."}),"\n",(0,n.jsx)(t.p,{children:"To implement this capability, the system indexes descriptions generated by multimodal Large Language Models (LLMs) into its search engine. For each image, the text before and after it is also captured to provide context, often necessary as the following text frequently acts as the image's caption. These descriptions are then generated using the GPT4Vision API and converted into vectors using the same embedding model as the text, making them searchable within the platform."}),"\n",(0,n.jsx)(t.h2,{id:"climateqa-now-features-image-interpretation",children:"ClimateQ&A now features image interpretation"}),"\n",(0,n.jsx)(t.admonition,{title:"Experimental",type:"warning",children:(0,n.jsx)(t.p,{children:"This feature is still in the experimental phase and may undergo changes in the coming months."})}),"\n",(0,n.jsxs)(t.p,{children:["Starting from ",(0,n.jsx)(t.a,{href:"/docs/changelog/v1.3.0",children:"version 1.3"}),", ClimateQ&A now offers the capability to include images alongside explanations."]}),"\n",(0,n.jsx)(t.p,{children:"The image is displayed within the chat interface at the end of the message, as illustrated above."}),"\n",(0,n.jsx)(t.p,{children:'This "image interpretation" feature was highly requested, given that scientific reports, such as those from the IPCC and IPBES, often incorporate numerous images designed to convey complex scientific results.'}),"\n",(0,n.jsx)(t.p,{children:'Of course, not all inquiries will return images; the system only provides images when they are relevant to the explanation. Likely images from the referenced passages are accessible under the "Figures" tab.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(1545).A+"",width:"1506",height:"567"})}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(t.p,{children:"To implement this feature, we index descriptions generated by multimodal Large Language Models (LLMs) in our search engine."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For this initial release, during the phase of parsing scientific reports, we independently extracted each image (recalling that the document segmentation and parsing are performed using a YOLO model fine-tuned on the ",(0,n.jsx)(t.a,{href:"https://github.com/DS4SD/DocLayNet",children:"DocLayNet dataset"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"For each image, we also retrieve the preceding and following text. This is done to provide the multimodal LLM with the context in which the image is situated, assuming that the following text often serves as the image's caption."}),"\n",(0,n.jsx)(t.li,{children:"We then use the GPT4-Vision API to generate descriptions from the image and context texts, using the following prompt:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'You are going to act as a caption generator. Your goal is NOT to generate a description of the image but more the summary and explanation it conveys. This description will be indexed in a search engine to be found based on a user query.\r\nThe images are drawn from the scientific reports of the IPCC on climate change and IPBES on biodiversity. So they are mostly complex science schemas.\r\nIf the image is weird, is a logo, looks like it has been wrongly cropped, or you don\'t know what it is, just return "unknown". \r\n\r\nI also provide the context for the image by giving you the text coming before the image in the document, and the text coming after the image (often a caption for the figure, so it may be useful).\r\n\r\nText before:\r\n{text_before}\r\n\r\n\r\nText after:\r\n{text_after}\r\n\r\nSummary:\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The description is then converted into vectors using the same embedding model as the text and added to the vector store to be searchable in the same way as text chunks."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Then, at the time of the final synthesis in the interface in response to a question, if one of the k retrieved chunks is an image, we display it at the end, while indicating to the user that the description was AI-generated.\r\n",(0,n.jsx)(t.img,{src:i(578).A+"",width:"1491",height:"829"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsx)(t.p,{children:"This is an initial, still experimental feature, but the results are already satisfactory enough to continue work in this direction. Our next steps to improve this feature include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Expanding the number of images covered; currently, not all images are analyzed."}),"\n",(0,n.jsx)(t.li,{children:"Better integrate images in the response and return several images."}),"\n",(0,n.jsx)(t.li,{children:"Moving to an open-source model like LLaVA to experiment more quickly and allow for easier replication of experiments."}),"\n",(0,n.jsxs)(t.li,{children:["Directly indexing figures indexed by the IPCC (e.g., ",(0,n.jsx)(t.a,{href:"https://www.ipcc.ch/report/ar6/syr/figures/",children:"https://www.ipcc.ch/report/ar6/syr/figures/"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Improving the caption identification of our detection model."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},578:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/fig1-50a833f83c568fc90449f2fd0aa8c1e7.png"},1545:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/fig2-dce111396465ec6577d364af5e6a27e3.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);