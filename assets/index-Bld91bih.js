import{U as m,aX as a}from"./antdv-BbttoKUq.js";import{u as n}from"./dynamic-table-3ORtHQM3.js";import{A as d}from"./index-BGRhdYbt.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BEJgt-SP.js";import{f as s}from"./dateUtil-D7gJQxXe.js";import{d as u,W as c,X as l,u as o,k as p}from"./vue-nPfkdNmw.js";import"./schema-form.vue_vue_type_script_setup_true_lang-ChTuMCM5.js";import"./is-DIFaXsjl.js";import"./index-5akZo7rI.js";const y=u({name:"SystemMonitorLoginLog",__name:"index",setup(f){const[r]=n(),i=[{title:"ID",dataIndex:"id",width:60,hideInSearch:!0},{title:"用户名",dataIndex:"username",width:120},{title:"IP",dataIndex:"ip",width:80,customRender:({record:e})=>p(m,{color:"blue"},{default:()=>[e.ip]})},{title:"登录地点",dataIndex:"address",width:80},{title:"登录时间",width:120,dataIndex:"time",customRender({record:e}){return s(e.time)},formItemProps:{component:"RangePicker",componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss"},transform([e,t]=[]){if(e&&t)return[a(e).startOf("day").format("YYYY-MM-DD HH:mm:ss"),a(e).endOf("day").format("YYYY-MM-DD HH:mm:ss")]}}},{title:"操作系统",dataIndex:"os",width:120,hideInSearch:!0},{title:"浏览器",dataIndex:"browser",width:120,hideInSearch:!0}];return(e,t)=>(c(),l(o(r),{"header-title":"登录日志","auto-height":"","data-request":o(d).systemLog.logLoginLogPage,columns:i},null,8,["data-request"]))}});export{y as default};
