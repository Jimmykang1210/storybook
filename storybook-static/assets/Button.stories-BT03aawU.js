import{c as n}from"./Button-BmNeosDa.js";const u={title:"Example/Button",tags:["autodocs"],render:({label:t,...l})=>n({label:t,...l}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},parameters:{backgrounds:{default:"light"}}},r={args:{primary:!0,label:"Click me!"}},e={args:{label:"Button3"}},a={render:t=>n({backgroundColor:"#ff0",label:"📚📕📈🤓"})},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Click me!'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button3'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createButton({
    backgroundColor: '#ff0',
    label: '📚📕📈🤓'
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...s.parameters?.docs?.source}}};const m=["Primary","Secondary","Tertiary","Large","Small"];export{o as Large,r as Primary,e as Secondary,s as Small,a as Tertiary,m as __namedExportsOrder,u as default};
