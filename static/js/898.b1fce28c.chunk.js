"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{9898:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(9439),s=t(5218),r=t(4942),c=t(1413),o=t(4281),i=t(2791),l="Form_label-add-contacts__Pnmdl",u="Form_input-add-contacts__6CIy0",d=t(184);var m=function(e){var n=e.onData,t={name:"",number:""},s=(0,i.useState)((0,c.Z)({},t)),m=(0,a.Z)(s,2),h=m[0],_=m[1],f=h.name,p=h.number,v=function(e){var n=e.target,t=n.name,a=n.value;_((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,r.Z)({},t,a))}))};return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,c.Z)({},h)),_((0,c.Z)({},t))},children:[(0,d.jsxs)("label",{className:l,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",value:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"\ud83d\udcdd",onChange:v,className:u})]}),(0,d.jsxs)("label",{className:l,children:["Phone number",(0,d.jsx)("input",{type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"\u260f",onChange:v,className:u})]}),(0,d.jsx)(o.Z,{variant:"contained",size:"small",type:"submit",disabled:!f||!p,children:"Add contact"})]})},h="ContactList_list-contacts__UvAW8",_="ContactList_item-contact-list__NjsNT",f="ContactList_contact-info__SravP",p="ContactList_number__2af8f";var v=function(e){var n=e.contacts,t=e.onDeleteContact;return(0,d.jsx)("ul",{className:h,children:n.map((function(e){var n=e.id,a=e.name,s=e.number;return(0,d.jsxs)("li",{className:_,children:[(0,d.jsxs)("div",{className:f,children:[(0,d.jsxs)("span",{children:["\ud83d\udcde",a]}),(0,d.jsx)("span",{className:p,children:s})]}),(0,d.jsx)(o.Z,{variant:"contained",size:"small",type:"button",onClick:function(){return t(n)},children:"Delete"})]},n)}))})},x="Filther_label-search__dBRjO",j="Filther_input-search__o9+Bo";var C=function(e){var n=e.value,t=e.onChangeFilter;return(0,d.jsxs)("label",{className:x,children:["Find contacts by name",(0,d.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"\ud83d\udd0d",className:j})]})},b=t(4808),N=function(e){return e.filter},g=function(e){var n=e.contacts,t=e.filter;return t?n.items.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n.items},Z=t(9434),y=t(1921),w="ContactsPage_add-search-contacts__Ha4GU",F="ContactsPage_add-contacts__rwStP",L="ContactsPage_search-contacts__Sex-C";var A=function(){var e=function(){var e=(0,Z.v9)(N),n=(0,Z.I0)();return[e,function(e){var t=e.target;n((0,b.T)(t.value))}]}(),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=function(){var e=(0,Z.v9)(g),n=(0,Z.I0)();return(0,i.useEffect)((function(){n((0,y.yF)())}),[n]),[e,function(t){e.find((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()}))?s.Am.error("".concat(t.name," is in your Contacts")):n((0,y.uK)(t))},function(e){n((0,y.zY)(e))}]}(),o=(0,a.Z)(c,3),l=o[0],u=o[1],h=o[2];return(0,d.jsxs)("section",{className:w,children:[(0,d.jsxs)("div",{className:F,children:[(0,d.jsx)("h2",{children:"Phonebook"}),(0,d.jsx)(m,{onData:u})]}),(0,d.jsxs)("div",{className:L,children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(C,{value:t,onChangeFilter:r}),l.length>0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(v,{contacts:l,onDeleteContact:h})}):(0,d.jsxs)("p",{children:["There is no such contact! ",(0,d.jsx)("br",{})," Add a contact."]}),(0,d.jsx)(s.x7,{position:"top-center",reverseOrder:!1})]})]})}}}]);
//# sourceMappingURL=898.b1fce28c.chunk.js.map