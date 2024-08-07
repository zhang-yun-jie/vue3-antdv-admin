import{A as _,d as q}from"./index-BGRhdYbt.js";import{_ as K,b as V}from"./AvatarUpload.vue_vue_type_script_setup_true_lang-gATyBtxT.js";import A from"./DeptTree-DQqMHbP9.js";import{ax as L,M,bg as B,ae as N}from"./antdv-BbttoKUq.js";import{d as k,f as y,W as E,a5 as O,a6 as c,Z as P,G as p,c as F,X as T,Y as r,k as a,am as X,u as b,ak as R,ac as W}from"./vue-nPfkdNmw.js";import{u as G}from"./dynamic-table-3ORtHQM3.js";import"./ApiSelect.vue_vue_type_script_setup_true_lang-BEJgt-SP.js";import"./index.vue_vue_type_style_index_0_lang-PCrZZ9h2.js";import{u as j}from"./useFormModal-Rxxc5YaB.js";import{f as Y}from"./common-CDMIWo2L.js";import"./dateUtil-D7gJQxXe.js";import"./schema-form.vue_vue_type_script_setup_true_lang-ChTuMCM5.js";import"./is-DIFaXsjl.js";import"./index-5akZo7rI.js";import"./useModal-CiZQoqSP.js";const Z=[{field:"avatar",component:()=>K,label:"头像"},{field:"deptId",component:"TreeSelect",label:"所属部门",componentProps:{fieldNames:{label:"name",value:"id"},getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"roleIds",component:"Select",label:"所属角色",rules:[{required:!0,type:"array"}],componentProps:{mode:"multiple",request:async()=>{const{items:h=[]}=await _.systemRole.roleList({});return h.map(n=>({label:n.name,value:n.id}))}}},{field:"username",component:"Input",label:"用户名",rules:[{required:!0}]},{field:"password",label:"密码",component:"InputPassword",componentProps:{placeholder:"无需修改请留空"}},{field:"nickname",component:"Input",label:"呢称",colProps:{span:12}},{field:"email",component:"Input",label:"邮箱",colProps:{span:12}},{field:"phone",component:"Input",label:"手机",colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",label:"状态",defaultValue:1,componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}}],z={class:"split-wrapper"},H={class:"left-content"},J=c("i",null,null,-1),Q=c("i",null,null,-1),ee=[J,Q],te={class:"right-content"},oe=k({__name:"index",setup(h){const n=y();let o,v;const m=L(function(l){n.value&&(n.value.style.width=`${v+l.clientX-o}px`)},20),d=()=>{document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",m),document.documentElement.removeEventListener("mouseup",d)},i=l=>{o=l.clientX,n.value&&(v=parseInt(window.getComputedStyle(n.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",m),document.documentElement.addEventListener("mouseup",d)};return(l,g)=>(E(),O("div",z,[c("div",{ref_key:"scalable",ref:n,class:"scalable"},[c("div",H,[P(l.$slots,"left-content",{},()=>[p(" 右边内容区 ")])]),c("div",{ref:"separator",class:"separator",onMousedown:i},ee,544)],512),c("div",te,[P(l.$slots,"right-content",{},()=>[p(" 右边内容区 ")])])]))}}),ye=k({name:"SystemUser",__name:"index",setup(h){const[n,o]=G({formProps:{autoSubmitOnEnter:!0}}),[v]=j(),m=y(),d=y([]),i=y({selectedRowKeys:[],onChange:(e,s)=>{`${e}`,i.value.selectedRowKeys=e}}),l=F(()=>i.value.selectedRowKeys.length),g=async e=>{const s=await _.systemUser.userList({...e,deptId:m.value});return i.value.selectedRowKeys=[],s},C=async(e={})=>{const{userCreate:s,userUpdate:f}=_.systemUser,w=!!e.id,[t]=await v({modalProps:{title:`${w?"编辑":"新增"}用户`,width:700,onFinish:async u=>{u.id=e.id,e.id?await f({id:e.id},u):await s(u),o==null||o.reload()}},formProps:{labelWidth:100,schemas:Z,autoSubmitOnEnter:!0}});if(e.id){const{roles:u,dept:I}=await _.systemUser.userRead({id:e.id});t==null||t.setFieldsValue({...e,deptId:I.id,roleIds:u.map(U=>U.id)}),t==null||t.updateSchema([{field:"username",componentProps:{disabled:!0}},{field:"password",required:!1}])}else t==null||t.updateSchema([{field:"username",componentProps:{disabled:!1}},{field:"password",required:!0,defaultValue:"a123456",componentProps:{placeholder:"请输入"}}]);t==null||t.updateSchema([{field:"deptId",componentProps:{treeDefaultExpandedKeys:Y(d.value,t==null?void 0:t.getFieldsValue().deptId)||[],treeData:d.value}}])},S=async e=>{const{userDelete:s}=_.systemUser;Array.isArray(e)?M.confirm({title:"确定要删除所选的用户吗?",icon:a(B,null,null),centered:!0,onOk:async()=>{await s({id:e.join(",")}),o==null||o.reload()}}):await s({id:e}).finally(o==null?void 0:o.reload)},$=e=>{m.value=e,o==null||o.reload()},x=e=>{d.value=e},D=[...V,{title:"操作",width:80,dataIndex:"ACTION",fixed:"right",actions:({record:e})=>[{icon:"ant-design:edit-outlined",tooltip:"编辑用户资料",auth:{perm:"system:user:update",effect:"disable"},onClick:()=>C(e)},{icon:"ant-design:delete-outlined",color:"red",tooltip:"删除此账号",auth:"system:user:delete",popConfirm:{title:"你确定要删除吗？",placement:"left",onConfirm:()=>S(e.id)}}]}];return(e,s)=>{const f=W("a-button"),w=q;return E(),T(b(oe),null,{"left-content":r(()=>[a(A,{onSelect:$,onInit:x})]),"right-content":r(()=>[a(b(n),{"header-title":"用户管理","show-index":"","title-tooltip":"请不要随意删除用户，避免到影响其他用户的使用。","data-request":g,columns:D,scroll:{x:2e3},"row-selection":i.value},X({toolbar:r(()=>[a(f,{type:"primary",disabled:!e.$auth("system:user:create"),onClick:s[1]||(s[1]=t=>C({}))},{default:r(()=>[a(w,{icon:"ant-design:plus-outlined"}),p(" 新增 ")]),_:1},8,["disabled"]),a(f,{type:"error",disabled:!l.value||!e.$auth("system:user:delete"),onClick:s[2]||(s[2]=t=>S(i.value.selectedRowKeys))},{default:r(()=>[a(w,{icon:"ant-design:delete-outlined"}),p(" 删除 ")]),_:1},8,["disabled"])]),_:2},[l.value?{name:"title",fn:r(()=>[a(b(N),{class:"w-full",type:"info","show-icon":""},{message:r(()=>[p(" 已选 "+R(l.value)+" 项 ",1),a(f,{type:"link",onClick:s[0]||(s[0]=t=>i.value.selectedRowKeys=[])},{default:r(()=>[p("取消选择")]),_:1})]),_:1})]),key:"0"}:void 0]),1032,["row-selection"])]),_:1})}}});export{ye as default};
