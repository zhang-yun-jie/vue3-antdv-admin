import{f as r}from"./dateUtil-D7gJQxXe.js";import{U as n}from"./antdv-BbttoKUq.js";import{k as s,a as l}from"./vue-nPfkdNmw.js";function d(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!l(t)}const m=[{title:"ID",dataIndex:"id",sorter:!0,width:60},{title:"字典项键名",dataIndex:"label"},{title:"字典项值",dataIndex:"value"},{title:"排序",dataIndex:"orderNo"},{title:"状态",dataIndex:"status",width:80,customRender:({record:t})=>{const o=~~t.status===1,a=o?"green":"red",e=o?"启用":"停用";return s(n,{color:a},d(e)?e:{default:()=>[e]})}},{title:"备注",dataIndex:"remark"},{title:"更新时间",dataIndex:"updatedAt",sorter:!0,width:160,customRender:({record:t})=>r(t.createdAt)}],f=[{field:"typeId",label:"字典类型",component:"Select",colProps:{span:8}},{field:"label",label:"字典项键名",component:"Input",colProps:{span:8}},{field:"value",label:"字典项值",component:"Input",colProps:{span:8}}];export{m as b,f as s};
