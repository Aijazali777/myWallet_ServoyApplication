customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/mywallet",
encapsulation:96,
items:[
{
cssPosition:"580,-1,-1,calc( 55% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 55% - 85px)",
right:"-1",
top:"580",
width:"170"
},
text:"Recieved"
},
name:"lbl_received",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0936E363-315C-4159-9411-FBC73497E1D4"
},
{
cssPosition:"120,-1,-1,calc(40% - 85px),170,110",
json:{
cssPosition:{
bottom:"-1",
height:"110",
left:"calc(40% - 85px)",
right:"-1",
top:"120",
width:"170"
},
imageStyleClass:"fa-solid fa-money-bill-1-wave fa-8x",
styleClass:"default-align align-center"
},
name:"label_3",
styleClass:"default-align align-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"2466A3F6-E055-4F78-B1E2-CD5A6EF1C5EE"
},
{
cssPosition:"0,0,6,-1,333,734",
json:{
cssPosition:{
bottom:"6",
height:"734",
left:"-1",
right:"0",
top:"0",
width:"333"
},
media:"072269F5-147F-4E8E-BF35-31B3A16B53F1",
styleClass:"full-size"
},
name:"lbl_bg_image",
styleClass:"full-size",
typeName:"servoyextra-imagelabel",
typeid:47,
uuid:"29B83523-3A52-400F-8C4B-CED30F4EFBB4"
},
{
cssPosition:"540,-1,-1,calc( 55% - 85px),170,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"calc( 55% - 85px)",
right:"-1",
top:"540",
width:"170"
},
dataProviderID:"received",
editable:false
},
name:"fld_received",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"2F9F5052-E6B7-4830-8EB4-A9633A73F4DA"
},
{
cssPosition:"540,-1,-1,calc( 27% - 85px),170,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"calc( 27% - 85px)",
right:"-1",
top:"540",
width:"170"
},
dataProviderID:"sent",
editable:false
},
name:"fld_sent",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"3E0437BE-2670-47F5-8516-1A024D00A658"
},
{
height:740,
partType:5,
typeid:19,
uuid:"79018B90-0B92-4E41-9795-2BAC03C21ED9"
},
{
cssPosition:"7,-1,-1,473,162,30",
formIndex:10000,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"473",
right:"-1",
top:"7",
width:"162"
},
formIndex:10000,
onActionMethodID:"D9D72B3B-CD81-41BF-B64F-E4CFCEB9F51B",
styleClass:"default-align btn-success",
text:"Avail Your Bonus Rs 500!",
visible:false
},
name:"lbl_bonus",
styleClass:"default-align btn-success",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7D5CCE89-97AC-46D2-8E19-B301220204FF",
visible:false
},
{
cssPosition:"480,-1,-1,calc( 55% - 85px),170,60",
json:{
cssPosition:{
bottom:"-1",
height:"60",
left:"calc( 55% - 85px)",
right:"-1",
top:"480",
width:"170"
},
imageStyleClass:"fas fa-money-bills fa-4x",
styleClass:"default-align align-center"
},
name:"label_3c",
styleClass:"default-align align-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"8877E17B-8C80-4EFA-BEBD-A4EADD15C9F7"
},
{
cssPosition:"480,-1,-1,calc( 27% - 85px),170,60",
json:{
cssPosition:{
bottom:"-1",
height:"60",
left:"calc( 27% - 85px)",
right:"-1",
top:"480",
width:"170"
},
imageStyleClass:"fas fa-money-bill-trend-up fa-4x",
styleClass:"default-align align-center"
},
name:"label_3cc",
styleClass:"default-align align-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"903179DF-8F2D-48F0-AEFA-E8577C2606ED"
},
{
cssPosition:"50,-1,-1,calc( 40% - 100px),200,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 100px)",
right:"-1",
top:"50",
width:"200"
},
styleClass:"font-weight-bold align-center",
text:"Welcome To MyWallet"
},
name:"label_1",
styleClass:"font-weight-bold align-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D30886FC-F151-4822-8465-BAF534560B04"
},
{
cssPosition:"232,-1,-1,calc( 40% - 85px),170,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"calc( 40% - 85px)",
right:"-1",
top:"232",
width:"170"
},
dataProviderID:"balance",
editable:false
},
name:"fld_avl",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"E8D39E36-4456-4A8D-AFA4-1A80BC32889B"
},
{
cssPosition:"272,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"272",
width:"170"
},
text:"Available"
},
name:"lbl_avl",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"EE4BD5FB-196F-4F8F-A8C2-3BABB02FB299"
},
{
cssPosition:"580,-1,-1,calc( 27% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 27% - 85px)",
right:"-1",
top:"580",
width:"170"
},
text:"Sent"
},
name:"lbl_sent",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FC01BCCE-8490-45F6-A229-71E508C63873"
}
],
name:"dashboard",
navigatorID:"-1",
onShowMethodID:"320475AC-C98E-413A-A16C-688BFFD3D7B8",
showInMenu:true,
styleClass:"form-background",
typeid:3,
uuid:"7758C963-47D3-46C0-8CA5-9353467EEF58"