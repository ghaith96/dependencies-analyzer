import{q as e,r as t,a}from"./vendor.6d738850.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,i)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),l(o)},onload(){a(self[t].moduleMap[r]),l(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/assets/");const n=({urlProp:e,handleAnalyzeClick:a,loading:n})=>{const[s,o]=t.useState(e);t.useEffect((()=>{e&&a(s)}));const c=()=>s&&a(s);return t.createElement(l,null,t.createElement(i,{type:"URL",onChange:({currentTarget:{value:e}})=>o(e),onSubmit:c,placeholder:"Example: https://github.com/ghaith96/dependencies-analyzer"}),t.createElement(r,{disabled:!s.trim()||n,onClick:c},"Analyze"))},l=e.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 4px;
    margin: 12px;
`,i=e.input`
    flex: 0.8;
    padding: 4px;
    font-size: 18px;
    line-height: 4px;
    border-radius: 4px;
    border: 1px solid #32908F;
    user-select: all;
`,r=e.button`
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
`,s=({pkg:e})=>{const{name:a,homePage:n,latestVersion:l,description:i}=e;return t.createElement(o,null,t.createElement(c,null,t.createElement("div",{onClick:()=>n&&window.open(n,"_blank"),onDoubleClick:()=>window.navigator.clipboard.writeText(a)},t.createElement(p,null,a)),t.createElement(d,null,l)),t.createElement(g,null,t.createElement(m,null,i)))},o=e.div`
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
`,c=e.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
`,p=e.div`
    font-size: 24px;
    color: #47BBB2;
`,d=e.div`
    margin: 0px 4px;
    font-size: 12px;
`,g=e.div`
    flex: 1;
    flex-grow: 1;
    width: 300px;
    padding-top: 8px;
    padding-left: 8px;
`,m=e.div`
    font-size: 12px;
`,u=({packages:e})=>t.createElement(h,null,null==e?void 0:e.map((e=>t.createElement(s,{key:e.name,pkg:e})))),h=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`,x=()=>t.createElement(f,null,t.createElement(E,null,"Made with ",t.createElement("span",{role:"img","aria-label":"heart"},"💖")," by "),t.createElement(b,{onClick:()=>window.open("https://github.com/ghaith96","_blank")},"ghaith")),f=e.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 8px;
    user-select: none;
`,E=e.div`
    font-size: 18px;
`,b=e.div`
    color: #5475AB;
    font-size: 18px;
    font-weight 600;
    padding-left: 4px;
    cursor: pointer;
`,k=()=>t.createElement(w,null,t.createElement(y,null,"Dependencies Analyzer"),t.createElement(v,null,"get fast insight into any NodeJs project on GitHub by peeking at its dependencies")),w=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,y=e.div`
    font-size: 25px;
    color: #47BBB3;
`,v=e.div`
    font-size: 20px;
    margin: 4px 0px;
    margin-left: 8px;
    color: #1A535C;
`,R=({percentage:e})=>t.createElement(_,null,t.createElement(O,null,"LOADING... ",e,"%")),_=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,O=e.div`
    font-size: 15px;
    margin: 0px 16px;
`,U=Object.freeze({GITHUB_REPO:/github\.com\/(.*?)\/(.*?)\//i,GITHUB_PACKAGE_FILE:/github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,GITHUB_RAW:/raw.githubusercontent\.com\/(?:.*){4}\/package.json/i});Object.freeze({SOMETHING_WENT_WRONG:"if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:"});const z=e=>{let t;return(t=e.match(U.GITHUB_RAW))?e:(t=`${e}/`.match(U.GITHUB_PACKAGE_FILE))?j(t):(t=`${e}/`.match(U.GITHUB_REPO))?P(t):""},j=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/package.json`),P=e=>(e.shift(),`https://raw.githubusercontent.com/${e.join("/")}/master/package.json`);const T=new class{constructor(){this.getPackageInfo=async e=>{const t=`https://api.npms.io/v2/package/${e}`,a=await this.doRequest(t,{headers:{"Sec-Fetch-Mode":"cors"}});return a.data=a.data.collected.metadata,a},this.getPackages=async e=>await this.doRequest(e),this.doRequest=async(e,t)=>{try{const a=await fetch(e,t),n=await a.json();return a.ok?{ok:!0,status:a.status,data:n}:{ok:!1,status:a.status,data:n}}catch(a){return{ok:!1,status:0,data:a}}}}};var B,A;(A=B||(B={}))[A.WRONG_URL_FORMAT=500]="WRONG_URL_FORMAT",A[A.NOT_FOUND=404]="NOT_FOUND",A[A.BAD_REQUEST=400]="BAD_REQUEST";const N=new class{constructor(e){this.apiService=e,this.cache=window.sessionStorage,this.getPackageInfo=async e=>{const t=this.cache.getItem(e);if(t){return{ok:!0,status:200,data:JSON.parse(t)}}const a=await this.apiService.getPackageInfo(e);return a.ok,a},this.getPackages=async e=>{const t=this.cache.getItem(e);if(t){return{ok:!0,status:200,data:JSON.parse(t)}}const a=await this.apiService.getPackages(e);return a.ok&&this.cache.setItem(e,JSON.stringify(a.data)),a},this.getPackagesFromApi=async e=>{const t=z(e);if(!t)return{status:B.WRONG_URL_FORMAT};return(await this.apiService.getPackages(t)).data}}}(T),F=()=>t.createElement(G,null,t.createElement(I,null,"Wrong URL format ",t.createElement("span",{role:"img","aria-label":"dont-know"},"🤷‍♂")),t.createElement(S,null,"Check the following valid examples ",t.createElement("span",{role:"img","aria-label":"point-down"},"👇")),t.createElement(C,null,t.createElement(L,null,"• https://github.com/ghaith96/dependencies-analyzer (",t.createElement("em",null,"given the repository has package.json in the base folder"),")"),t.createElement(L,null,"• https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json"),t.createElement(L,null,"• https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json"))),G=e.div`
    margin: 8px 16px;
`,I=e.div`
    font-size: 35px;
    color: #FF6B6B;
`,S=e.div`
    font-size: 20px;
    margin: 4px;
`,C=e.div`
    font-size: 20px;
    margin: 8px 0px;
`,L=e.div`
    font-size: 20px;
    margin: 8px 0px;
`,M=()=>t.createElement(H,null,t.createElement($,null,t.createElement(D,null,"GitHub responded with "),t.createElement(W,null,"404 NOT FOUND")),t.createElement(J,null,"Take note of the following ",t.createElement("span",{role:"img","aria-label":"point-down"},"👇")," while investigating ",t.createElement("span",{role:"img","aria-label":"investigate"},"🧐")),t.createElement(q,null,t.createElement(K,null,"• Make sure the repository is NodeJs project. (i.e: has ",t.createElement("code",null,"package.json")," file)"),t.createElement(K,null,"• Try to submit an absolute url to the ",t.createElement("code",null,"package.json")," file in the repository."),t.createElement(K,null,"• Double check the submitted URL ",t.createElement("span",{role:"img","aria-label":"luck"},"🤞"),"."),t.createElement(K,null,"• Private repositories are ",t.createElement("em",null,"NOT")," supported."))),H=e.div`
    margin: 8px 16px;
`,D=e.div`
    font-size: 35px;
`,W=e.div`
    color: #FF6B6B;
    font-size: 35px;
`,$=e.div`
    display: flex;
`,J=e.div`
    font-size: 20px;
    margin: 4px;
`,q=e.div`
    margin: 4px;
    margin-left: 12px;
`,K=e.div`
    font-size: 20px;
    margin: 8px 0px;
`,Q=()=>t.createElement(V,null,t.createElement(Y,null,t.createElement("span",{role:"img","aria-label":"sorry"},"😓")," Something went wrong somewhere.."),t.createElement(X,null,"SORRY! This shouldn't be happening.")),V=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0px;
`,Y=e.div`
    font-size: 35px;
    color: #FF6B6B;
`,X=e.div`
    margin: 8px;
    font-size: 20px;
`;class Z extends t.Component{constructor(e){super(e),this.getPackages=async e=>{this.setState({loading:!0,packages:[],lastError:-1});const t=z(e);t?await this.fetchPackages(t):this.setState({loading:!1,packages:[],lastError:B.WRONG_URL_FORMAT})},this.fetchPackages=async e=>{const t=await N.getPackages(e);if(t.ok){const e=Object.keys(t.data.dependencies);this.setState({packagesCount:e.length}),e.forEach((e=>N.getPackageInfo(e).then(this.handleNewPackage,console.error)))}else this.setState({loading:!1,lastError:t.status})},this.handleNewPackage=e=>{if(e.ok){const t=e.data;this.setState((e=>({packages:[...e.packages,t],loading:e.packages.length+1<e.packagesCount})))}},this.tryParseUrl=()=>(e=>e.match(U.GITHUB_RAW)||e.match(U.GITHUB_PACKAGE_FILE)||e.match(U.GITHUB_REPO)?e:"")(window.location.pathname.replace("/","")+"/"),this.state={loading:!1,lastError:-1,packages:[],packagesCount:0}}render(){const e=this.tryParseUrl(),a=Math.floor(this.state.packages.length/this.state.packagesCount*100)||0,{loading:l,lastError:i}=this.state;return t.createElement(ee,null,t.createElement("div",null,t.createElement(k,null),t.createElement(n,{loading:l,urlProp:e,handleAnalyzeClick:this.getPackages}),i>=0?(e=>{switch(e){case B.WRONG_URL_FORMAT:return t.createElement(F,null);case B.NOT_FOUND:return t.createElement(M,null);case B.BAD_REQUEST:default:return t.createElement(Q,null)}})(i):t.createElement(t.Fragment,null,t.createElement(u,{packages:this.state.packages}),l&&t.createElement(R,{percentage:a}))),t.createElement(x,null))}}const ee=e.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    margin: 8px;
`;a.render(t.createElement(Z,null),document.getElementById("root"));
