import{J as c,d as _,t as l,v as f,x as o,K as a,N as g,B as n,_ as r,P as b}from"./Cp_pbtWK.js";import{u as S}from"./DbJACcYC.js";import{u as k}from"./C06B2LS5.js";const U=c("/Link.svg"),v=c("/download.svg"),x={class:"upload-success"},h=["src"],w=_({__name:"UploadSuccess",setup(d){const t=S().uploadedImageUrl,u=k(),p=()=>{navigator.clipboard.writeText(t).then(()=>{alert("URL copied to clipboard")})},m=()=>{const s=document.createElement("a");s.href=t,s.download=t.split("/").pop(),s.click()};return(s,e)=>(l(),f("div",x,[o("div",{class:"image-container",style:g({backgroundColor:a(u).isDarkMode?"#212936":"#F9FAFB"})},[o("img",{src:a(t),alt:"Uploaded Image",class:"uploaded-image"},null,8,h)],4),o("div",{class:"button-container"},[o("button",{onClick:p,class:"share-button"},e[0]||(e[0]=[o("img",{src:U,alt:"Share Icon",class:"button-icon"},null,-1),n(" Share ")])),o("button",{onClick:m,class:"download-button"},e[1]||(e[1]=[o("img",{src:v,alt:"Download Icon",class:"button-icon"},null,-1),n(" Download ")]))])]))}}),B=r(w,[["__scopeId","data-v-00bf3cd3"]]),I={};function C(d,i){const t=B;return l(),b(t)}const L=r(I,[["render",C]]);export{L as default};
