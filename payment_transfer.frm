customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/mywallet",
encapsulation:108,
items:[
{
cssPosition:"330,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"330",
width:"170"
},
dataProviderID:"amount",
placeholderText:"Enter Amount"
},
name:"fld_amount",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"0066E732-38D5-4C7C-BF70-4486261CE468"
},
{
cssPosition:"300,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"300",
width:"170"
},
text:"Amount"
},
name:"lbl_amount",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"02D19A36-7B61-4992-A9BE-EAE50BF0DFBC"
},
{
height:480,
partType:5,
typeid:19,
uuid:"54CF1A31-3423-471E-8ECF-F02346EE645E"
},
{
cssPosition:"0,0,5,-1,333,440",
json:{
cssPosition:{
bottom:"5",
height:"440",
left:"-1",
right:"0",
top:"0",
width:"333"
},
media:"C8DEB55E-A17B-4F7B-8F53-5DD111E26194",
styleClass:"full-size"
},
name:"imagelabel_2",
styleClass:"full-size",
typeName:"servoyextra-imagelabel",
typeid:47,
uuid:"5C66FAAA-FC76-418B-94D7-16A7378AF413"
},
{
cssPosition:"400,-1,-1,calc( 40% - 40px),80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 40px)",
right:"-1",
top:"400",
width:"80"
},
onActionMethodID:"5D1B7603-16D9-4718-93BD-B9065DAF7271",
styleClass:"btn btn-primary",
text:"Done"
},
name:"btn_done",
styleClass:"btn btn-primary",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"65399E3E-A7CF-4FE8-9C3E-9F37ACB9B54D"
},
{
cssPosition:"20,-1,-1,calc( 40% - 100px),200,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 100px)",
right:"-1",
top:"20",
width:"200"
},
styleClass:"default-align font-weight-bold",
text:"Payment Transfer"
},
name:"lbl_paymentTransfer",
styleClass:"default-align font-weight-bold",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7C55EEA9-50E3-4193-A82A-97B5F01C8FD0"
},
{
cssPosition:"230,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"230",
width:"170"
},
dataProviderID:"accountNumber",
placeholderText:"Enter Account Number"
},
name:"fld_accountNumber",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"98EFDB21-DFA1-4FCE-877D-549D8D17383F"
},
{
cssPosition:"130,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"130",
width:"170"
},
dataProviderID:"accountName",
placeholderText:"Enter Account Name"
},
name:"fld_accountName",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"B0C8AC57-0D65-4F69-B326-83F0798C959B"
},
{
cssPosition:"200,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"200",
width:"170"
},
text:"Account Number"
},
name:"lbl_accountNmuber",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D6720F09-B1C6-4D34-9379-2AE9BF74F02D"
},
{
cssPosition:"100,-1,-1,calc( 40% - 85px),170,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 85px)",
right:"-1",
top:"100",
width:"170"
},
text:"Account Name"
},
name:"lbl_accountName",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E82E8787-C86E-4B7E-B2DB-04223C08A740"
},
{
cssPosition:"60,-1,-1,calc( 40% - 140px),280,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"calc( 40% - 140px)",
right:"-1",
top:"60",
width:"280"
},
text:"Please active your account to transfer funds",
visible:false
},
name:"lbl_accountActiveNote",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"EA95E7A5-2FE7-4CDD-ACC9-75315EB80DFC",
visible:false
}
],
name:"payment_transfer",
navigatorID:"-1",
onLoadMethodID:"FECE2FF3-BE55-4B31-9DD0-B5895053057C",
onShowMethodID:"48DC7C88-5421-4142-9838-77A5A56D78CF",
showInMenu:true,
styleClass:"form-background",
typeid:3,
uuid:"B1E2B019-08EA-4BC2-8FD9-1E77ECC36524"