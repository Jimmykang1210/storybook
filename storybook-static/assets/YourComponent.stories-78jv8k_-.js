const u=({primary:t=!1,size:r="medium",backgroundColor:n,label:s,onClick:a})=>{const e=document.createElement("button");e.type="button",e.innerText=s,e.addEventListener("click",a);const c=t?"storybook-button--primary":"storybook-button--secondary";return e.className=["storybook-button",`storybook-button--${r}`,c].join(" "),e.style.backgroundColor=n,e},d={title:"Example/YourComponent",tags:["autodocs"],argTypes:{label:{control:"text"}}},o={render:t=>u(t),args:{label:"Test Me!"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createYourComponent(args),
  args: {
    // 👇 The args you need here will depend on your component
    label: 'Test Me!'
  }
}`,...o.parameters?.docs?.source}}};const l=["FirstStory"];export{o as FirstStory,l as __namedExportsOrder,d as default};
