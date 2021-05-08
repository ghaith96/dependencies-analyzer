var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))t.call(r,i)&&l(e,i,r[i]);if(n)for(var i of n(r))a.call(r,i)&&l(e,i,r[i]);return e};import{q as i,r as o,a as c}from"./vendor.1074d890.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const i=new URL(e,a);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),l(c)},onload(){n(self[t].moduleMap[i]),l(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");const s=new class{constructor(){this.getPackageInfo=async e=>{const t=`https://api.npms.io/v2/package/${e}`;return await this.doRequest(t,{headers:{"Sec-Fetch-Mode":"cors"}})},this.getPackages=async e=>await this.doRequest(e),this.doRequest=async(e,t)=>{try{const n=await fetch(e,t),a=await n.json().catch((e=>e));return{ok:n.ok,status:n.status,data:a}}catch(n){return{ok:!1,status:0,data:n}}}}};const p=new class{constructor(e){this.apiService=e,this.cache=window.sessionStorage,this.getPackageInfo=async e=>{const t=this.cache.getItem(e);if(t){return{ok:!0,status:200,data:JSON.parse(t)}}const n=await this.apiService.getPackageInfo(e);return n.ok,n},this.getPackages=async e=>{const t=this.cache.getItem(e);if(t){return{ok:!0,status:200,data:JSON.parse(t)}}const n=await this.apiService.getPackages(e);return n.ok&&this.cache.setItem(e,JSON.stringify(n.data)),n}}}(s),d=Object.freeze({GITHUB_REPO:/github\.com\/(.*?)\/(.*?)\//i,GITHUB_PACKAGE_FILE:/github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,GITHUB_RAW:/raw.githubusercontent\.com\/(?:.*){4}\/package.json/i});Object.freeze({SOMETHING_WENT_WRONG:"if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:"});const m=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/package.json`),u=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/master/package.json`);var g,h;(h=g||(g={}))[h.WRONG_URL_FORMAT=500]="WRONG_URL_FORMAT",h[h.NOT_FOUND=404]="NOT_FOUND",h[h.BAD_REQUEST=400]="BAD_REQUEST";const x=({disabled:e,url:t,setUrl:n,onSubmit:a})=>o.createElement(f,null,o.createElement(b,{defaultValue:t,type:"URL",onChange:({currentTarget:{value:e}})=>n(e),onSubmit:a,placeholder:"Example: https://github.com/ghaith96/dependencies-analyzer"}),o.createElement(E,{disabled:e,onClick:a},"Analyze")),f=i.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 4px;
    margin: 12px;
`,b=i.input`
    flex: 0.8;
    padding: 4px;
    font-size: 18px;
    line-height: 4px;
    border-radius: 4px;
    border: 1px solid #32908F;
    user-select: all;
`,E=i.button`
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
`,k=({urlProp:e,loading:t,handleAnalyzeClick:n})=>{const[a,l]=o.useState(e);o.useEffect((()=>{e&&n(e)}),[e]);return o.createElement(x,{url:a,disabled:!a.trim()||t,setUrl:l,onSubmit:()=>a&&n(a)})},v=({pkg:e,onPackageNameClick:t,onPackageNameDoubleClick:n})=>{var a,l;const{name:r,version:i,description:c}=null!=(l=null==(a=e.collected)?void 0:a.metadata)?l:{};return o.createElement(w,null,o.createElement(y,null,r&&o.createElement("div",{onClick:t,onDoubleClick:n},o.createElement(O,null,r)),i&&o.createElement(R,null,i)),c&&o.createElement(j,null,o.createElement(_,null,c)))},w=i.div`
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
`,y=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
`,O=i.div`
    font-size: 24px;
    color: #47BBB2;
    cursor: pointer;
`,R=i.div`
    margin: 0px 4px;
    font-size: 12px;
`,j=i.div`
    flex: 1;
    flex-grow: 1;
    width: 300px;
    padding-top: 8px;
    padding-left: 8px;
`,_=i.div`
    font-size: 12px;
`,z=e=>{var t,n,a,l,r,i;const c=null==(a=null==(n=null==(t=e.pkg)?void 0:t.collected)?void 0:n.github)?void 0:a.homepage,s=null==(i=null==(r=null==(l=e.pkg)?void 0:l.collected)?void 0:r.metadata)?void 0:i.name;return o.createElement(v,{pkg:e.pkg,onPackageNameClick:()=>c&&window.open(c,"_blank"),onPackageNameDoubleClick:()=>s&&window.navigator.clipboard.writeText(s)})},P=({packages:e})=>o.createElement(U,null,null==e?void 0:e.map((e=>o.createElement(z,{key:e.collected.metadata.name,pkg:e})))),U=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`,B=e=>o.createElement(N,null,o.createElement(T,null,"Made with ",o.createElement("span",{role:"img","aria-label":"heart"},"💖")," by "),o.createElement(A,{onClick:e.onMyNameClick},"ghaith")),N=i.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 8px;
    user-select: none;
`,T=i.div`
    font-size: 18px;
`,A=i.div`
    color: #5475AB;
    font-size: 18px;
    font-weight 600;
    padding-left: 4px;
    cursor: pointer;
`,C=()=>o.createElement(B,{onMyNameClick:()=>window.open("https://github.com/ghaith96","_blank")}),I=()=>o.createElement(F,null,o.createElement(G,null,"Dependencies Analyzer"),o.createElement(S,null,"get fast insight into any NodeJs project on GitHub by peeking at its dependencies")),F=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,G=i.div`
    font-size: 25px;
    color: #47BBB3;
`,S=i.div`
    font-size: 20px;
    margin: 4px 0px;
    margin-left: 8px;
    color: #1A535C;
`,L=({percentage:e})=>o.createElement(M,null,o.createElement(D,null,"LOADING... ",e,"%"),o.createElement(H,{percentage:e})),M=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,D=i.div`
    font-size: 15px;
    margin: 0px 16px;
`,H=i.div`
    width: ${({percentage:e})=>e}%;
    height: 1px;
    background: red;
    transition: width 0.3s;
    margin: 4px;
`,W=()=>o.createElement($,null,o.createElement(J,null,"Wrong URL format ",o.createElement("span",{role:"img","aria-label":"dont-know"},"🤷‍♂")),o.createElement(q,null,"Check the following valid examples ",o.createElement("span",{role:"img","aria-label":"point-down"},"👇")),o.createElement(K,null,o.createElement(Q,null,"• https://github.com/ghaith96/dependencies-analyzer (",o.createElement("em",null,"given the repository has package.json in the base folder"),")"),o.createElement(Q,null,"• https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json"),o.createElement(Q,null,"• https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json"))),$=i.div`
    margin: 8px 16px;
`,J=i.div`
    font-size: 35px;
    color: #FF6B6B;
`,q=i.div`
    font-size: 20px;
    margin: 4px;
`,K=i.div`
    font-size: 20px;
    margin: 8px 0px;
`,Q=i.div`
    font-size: 20px;
    margin: 8px 0px;
`,V=()=>o.createElement(Y,null,o.createElement(ee,null,o.createElement(X,null,"GitHub responded with "),o.createElement(Z,null,"404 NOT FOUND")),o.createElement(te,null,"Take note of the following ",o.createElement("span",{role:"img","aria-label":"point-down"},"👇")," while investigating ",o.createElement("span",{role:"img","aria-label":"investigate"},"🧐")),o.createElement(ne,null,o.createElement(ae,null,"• Make sure the repository is NodeJs project. (i.e: has ",o.createElement("code",null,"package.json")," file)"),o.createElement(ae,null,"• Try to submit an absolute url to the ",o.createElement("code",null,"package.json")," file in the repository."),o.createElement(ae,null,"• Double check the submitted URL ",o.createElement("span",{role:"img","aria-label":"luck"},"🤞"),"."),o.createElement(ae,null,"• Private repositories are ",o.createElement("em",null,"NOT")," supported."))),Y=i.div`
    margin: 8px 16px;
`,X=i.div`
    font-size: 35px;
`,Z=i.div`
    color: #FF6B6B;
    font-size: 35px;
    padding-left: 8px;
`,ee=i.div`
    display: flex;
`,te=i.div`
    font-size: 20px;
    margin: 4px;
`,ne=i.div`
    margin: 4px;
    margin-left: 12px;
`,ae=i.div`
    font-size: 20px;
    margin: 8px 0px;
`,le=()=>o.createElement(re,null,o.createElement(ie,null,o.createElement("span",{role:"img","aria-label":"sorry"},"😓")," Something went wrong somewhere.."),o.createElement(oe,null,"SORRY! This shouldn't be happening.")),re=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0px;
`,ie=i.div`
    font-size: 35px;
    color: #FF6B6B;
`,oe=i.div`
    margin: 8px;
    font-size: 20px;
`,ce=({loading:e,error:t,url:n,packages:a,donePercentage:l,onAnalyzeClick:r})=>o.createElement(se,null,o.createElement("div",null,o.createElement(I,null),o.createElement(k,{loading:e,urlProp:n,handleAnalyzeClick:r}),Boolean(t)?(e=>{switch(e){case g.WRONG_URL_FORMAT:return o.createElement(W,null);case g.NOT_FOUND:return o.createElement(V,null);case g.BAD_REQUEST:default:return o.createElement(le,null)}})(t):o.createElement(o.Fragment,null,e&&o.createElement(L,{percentage:l}),o.createElement(P,{packages:a}))),o.createElement(C,null)),se=i.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    margin: 8px;
`,pe={loading:!1,error:0,totalPackagesCount:0,packages:[]},de=()=>{const[e,t]=o.useState(pe),n=async e=>{const n=await p.getPackages(e);if(n.ok){const e=Object.keys(n.data.dependencies);t((t=>r(r({},t),{totalPackagesCount:e.length,loading:e.length>0})));const l=e.map((e=>p.getPackageInfo(e).then(a,console.error)));Promise.all(l).then((()=>t((e=>r(r({},e),{loading:!1})))))}else t(r(r({},pe),{error:n.status}))},a=e=>{if(e.ok){const n=e.data;t((e=>r(r({},e),{packages:[...e.packages,n]})))}};return o.createElement(ce,{loading:e.loading,error:e.error,packages:e.packages,url:(l=window.location.pathname.replace("/","")+"/",l.match(d.GITHUB_RAW)||l.match(d.GITHUB_PACKAGE_FILE)||l.match(d.GITHUB_REPO)?l:""),donePercentage:Math.floor(e.packages.length/e.totalPackagesCount*100)||0,onAnalyzeClick:async e=>{t(pe);const a=(e=>{let t;return(t=e.match(d.GITHUB_RAW))?e:(t=`${e}/`.match(d.GITHUB_PACKAGE_FILE))?m(t):(t=`${e}/`.match(d.GITHUB_REPO))?u(t):""})(e);a?await n(a):t(r(r({},pe),{error:g.WRONG_URL_FORMAT}))}});var l};c.render(o.createElement(de,null),document.getElementById("root"));
