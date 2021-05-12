var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&r(e,n,t[n]);return e},c=(e,a)=>t(e,n(a));import{q as s,R as p,r as d,a as m}from"./vendor.6cb07f88.js";const u=new class{constructor(){this.getPackagesInfo=async e=>{const t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Sec-Fetch-Mode":"cors"},body:JSON.stringify(e)};return await this.doRequest("https://api.npms.io/v2/package/mget",t)},this.getPackages=async e=>await this.doRequest(e),this.doRequest=async(e,t)=>{try{const n=await fetch(e,t),a=await n.json().catch((e=>e));return{ok:n.ok,status:n.status,data:a}}catch(n){return{ok:!1,status:0,data:n}}}}},g=Object.freeze({GITHUB_REPO:/github\.com\/(.*?)\/(.*?)\//i,GITHUB_PACKAGE_FILE:/github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,GITHUB_RAW:/raw.githubusercontent\.com\/(?:.*){4}\/package.json/i});Object.freeze({SOMETHING_WENT_WRONG:"if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:"});const x=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/package.json`),h=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/master/package.json`);var b,f;(f=b||(b={}))[f.WRONG_URL_FORMAT=500]="WRONG_URL_FORMAT",f[f.NOT_FOUND=404]="NOT_FOUND",f[f.BAD_REQUEST=400]="BAD_REQUEST";const E=({disabled:e,url:t,setUrl:n,onSubmit:a})=>p.createElement(v,null,p.createElement(y,{defaultValue:t,type:"URL",onChange:({currentTarget:{value:e}})=>n(e),onSubmit:a,placeholder:"Example: https://github.com/ghaith96/dependencies-analyzer"}),p.createElement(k,{disabled:e,onClick:a},"Analyze")),v=s.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 4px;
    margin: 12px;
`,y=s.input`
    flex: 0.8;
    padding: 4px;
    font-size: 18px;
    line-height: 4px;
    border-radius: 4px;
    border: 1px solid #32908F;
    user-select: all;
`,k=s.button`
    font-size: 18px;
    border-radius: 4px;
    margin-left: 8px;
    padding: 4px 24px;
    background: #1e6f5c;
    color: white;
    transition: box-shadow 0.3s, background 0.5s, color 0.5s;
    user-select: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    
    &:disabled {
        color: black;
        background: lightgrey;
        box-shadow: unset;
    }

    &:hover:enabled {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        cusror: not-allowed;
    }
`,w=({urlProp:e,loading:t,handleAnalyzeClick:n})=>{const[a,l]=d.exports.useState(e);d.exports.useEffect((()=>{e&&n(e)}),[e]);return p.createElement(E,{url:a,disabled:!a.trim()||t,setUrl:l,onSubmit:()=>a&&n(a)})},O=({name:e,version:t,description:n,onPackageNameClick:a,onPackageNameDoubleClick:l})=>p.createElement(j,null,p.createElement(z,null,e&&p.createElement("div",{onClick:a,onDoubleClick:l},p.createElement(R,null,e)),t&&p.createElement(T,null,t)),n&&p.createElement(_,null,p.createElement(B,null,n))),j=s.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    margin: 8px;
    border-radius: 8px;
    min-height: 150px;
    transition: box-shadow 0.3s;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`,z=s.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
`,R=s.div`
    font-size: 24px;
    color: #47BBB2;
    cursor: pointer;
`,T=s.div`
    margin: 0px 4px;
    font-size: 12px;
`,_=s.div`
    flex: 1;
    flex-grow: 1;
    width: 300px;
    padding-top: 8px;
    padding-left: 8px;
`,B=s.div`
    font-size: 12px;
`,N=({pkg:e})=>{var t,n,a,l,i,r,o;const c=null==(n=null==(t=null==e?void 0:e.collected)?void 0:t.github)?void 0:n.homepage,s=null==(l=null==(a=null==e?void 0:e.collected)?void 0:a.metadata)?void 0:l.name;return p.createElement(O,{name:s,version:null==e?void 0:e.currentVersion,description:null!=(o=null==(r=null==(i=null==e?void 0:e.collected)?void 0:i.metadata)?void 0:r.description)?o:"No Description.",onPackageNameClick:()=>c&&window.open(c,"_blank"),onPackageNameDoubleClick:()=>s&&window.navigator.clipboard.writeText(s)})},A=({packages:e})=>p.createElement(U,null,Object.values(e).map((e=>p.createElement(N,{key:e.collected.metadata.name,pkg:e})))),U=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`,P=e=>p.createElement(C,null,p.createElement(F,null,"Made with ",p.createElement("span",{role:"img","aria-label":"heart"},"💖")," by "),p.createElement(G,{onClick:e.onMyNameClick},"ghaith")),C=s.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 8px;
    user-select: none;
`,F=s.div`
    font-size: 18px;
`,G=s.div`
    color: #5475AB;
    font-size: 18px;
    font-weight 600;
    padding-left: 4px;
    cursor: pointer;
`,I=()=>p.createElement(P,{onMyNameClick:()=>window.open("https://github.com/ghaith96","_blank")}),S=()=>p.createElement(D,null,p.createElement(H,null,"Dependencies Analyzer"),p.createElement(L,null,"get fast insight into any NodeJs project on GitHub by peeking at its dependencies")),D=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,H=s.div`
    font-size: 25px;
    color: #47BBB3;
`,L=s.div`
    font-size: 20px;
    margin: 4px 0px;
    margin-left: 8px;
    color: #1A535C;
`;s.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,s.div`
    font-size: 15px;
    margin: 0px 16px;
`,s.div`
    width: ${({percentage:e})=>e}%;
    height: 1px;
    background: red;
    transition: width 0.3s;
    margin: 4px;
`;const M=()=>p.createElement(W,null,p.createElement($,null,"Wrong URL format ",p.createElement("span",{role:"img","aria-label":"dont-know"},"🤷‍♂")),p.createElement(q,null,"Check the following valid examples ",p.createElement("span",{role:"img","aria-label":"point-down"},"👇")),p.createElement(J,null,p.createElement(K,null,"• https://github.com/ghaith96/dependencies-analyzer (",p.createElement("em",null,"given the repository has package.json in the base folder"),")"),p.createElement(K,null,"• https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json"),p.createElement(K,null,"• https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json"))),W=s.div`
    margin: 8px 16px;
`,$=s.div`
    font-size: 35px;
    color: #FF6B6B;
`,q=s.div`
    font-size: 20px;
    margin: 4px;
`,J=s.div`
    font-size: 20px;
    margin: 8px 0px;
`,K=s.div`
    font-size: 20px;
    margin: 8px 0px;
`,Q=()=>p.createElement(V,null,p.createElement(Z,null,p.createElement(Y,null,"GitHub responded with "),p.createElement(X,null,"404 NOT FOUND")),p.createElement(ee,null,"Take note of the following ",p.createElement("span",{role:"img","aria-label":"point-down"},"👇")," while investigating ",p.createElement("span",{role:"img","aria-label":"investigate"},"🧐")),p.createElement(te,null,p.createElement(ne,null,"• Make sure the repository is NodeJs project. (i.e: has ",p.createElement("code",null,"package.json")," file)"),p.createElement(ne,null,"• Try to submit an absolute url to the ",p.createElement("code",null,"package.json")," file in the repository."),p.createElement(ne,null,"• Double check the submitted URL ",p.createElement("span",{role:"img","aria-label":"luck"},"🤞"),"."),p.createElement(ne,null,"• Private repositories are ",p.createElement("em",null,"NOT")," supported."))),V=s.div`
    margin: 8px 16px;
`,Y=s.div`
    font-size: 35px;
`,X=s.div`
    color: #FF6B6B;
    font-size: 35px;
    padding-left: 8px;
`,Z=s.div`
    display: flex;
`,ee=s.div`
    font-size: 20px;
    margin: 4px;
`,te=s.div`
    margin: 4px;
    margin-left: 12px;
`,ne=s.div`
    font-size: 20px;
    margin: 8px 0px;
`,ae=()=>p.createElement(le,null,p.createElement(ie,null,p.createElement("span",{role:"img","aria-label":"sorry"},"😓")," Something went wrong somewhere.."),p.createElement(re,null,"SORRY! This shouldn't be happening.")),le=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0px;
`,ie=s.div`
    font-size: 35px;
    color: #FF6B6B;
`,re=s.div`
    margin: 8px;
    font-size: 20px;
`,oe=({loading:e,error:t,url:n,packages:a,onAnalyzeClick:l})=>p.createElement(ce,null,p.createElement("div",null,p.createElement(S,null),p.createElement(w,{loading:e,urlProp:n,handleAnalyzeClick:l}),Boolean(t)?(e=>{switch(e){case b.WRONG_URL_FORMAT:return p.createElement(M,null);case b.NOT_FOUND:return p.createElement(Q,null);case b.BAD_REQUEST:default:return p.createElement(ae,null)}})(t):p.createElement(p.Fragment,null,p.createElement(A,{packages:a}))),p.createElement(I,null)),ce=s.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    margin: 8px;
`,se={loading:!1,error:0,packages:{}},pe=()=>{const[e,t]=d.exports.useState(se),n=async e=>{var n;const a=await u.getPackages(e);if(a.ok){const e=Object.keys(null!=(n=a.data.dependencies)?n:{});t((t=>c(o({},t),{loading:e.length>0})));const l=await u.getPackagesInfo(e);Object.entries(l.data).forEach((([e,t])=>t.currentVersion=a.data.dependencies[e])),t((e=>c(o({},e),{loading:!1,packages:l.data})))}else t(c(o({},se),{error:a.status}))};return p.createElement(oe,{loading:e.loading,error:e.error,packages:e.packages,url:(a=window.location.pathname.replace("/","")+"/",a.match(g.GITHUB_RAW)||a.match(g.GITHUB_PACKAGE_FILE)||a.match(g.GITHUB_REPO)?a:""),onAnalyzeClick:async e=>{t(se);const a=(e=>{let t;return(t=e.match(g.GITHUB_RAW))?e:(t=`${e}/`.match(g.GITHUB_PACKAGE_FILE))?x(t):(t=`${e}/`.match(g.GITHUB_REPO))?h(t):""})(e);a?await n(a):t(c(o({},se),{error:b.WRONG_URL_FORMAT}))}});var a};m.render(p.createElement(pe,null),document.getElementById("root"));
