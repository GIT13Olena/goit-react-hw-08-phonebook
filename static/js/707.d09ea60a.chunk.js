"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{1707:function(e,a,t){t.r(a),t.d(a,{default:function(){return z}});var n=t(9439),s=t(5218),c=t(4942),r=t(1413),o=t(4281),i=t(2791),l="Form_label-add-contacts__Pnmdl",d="Form_input-add-contacts__6CIy0",u=t(184);var m=function(e){var a=e.onData,t={name:"",number:""},s=(0,i.useState)((0,r.Z)({},t)),m=(0,n.Z)(s,2),h=m[0],f=m[1],v=h.name,_=h.number,p=function(e){var a=e.target,t=a.name,n=a.value;f((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,c.Z)({},t,n))}))};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a((0,r.Z)({},h)),f((0,r.Z)({},t))},children:[(0,u.jsxs)("label",{className:l,children:["Name",(0,u.jsx)("input",{type:"text",name:"name",value:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,className:d})]}),(0,u.jsxs)("label",{className:l,children:["Phone number",(0,u.jsx)("input",{type:"tel",name:"number",value:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,className:d})]}),(0,u.jsx)(o.Z,{variant:"contained",size:"small",type:"submit",disabled:!v||!_,children:"Add contact"})]})};var h=t.p+"static/media/phone.8a64d98cb3c3c2f66edde4f950e0caf6.svg";var f=t.p+"static/media/dumpster.b7c7d710e5531cdb097706ffea79f6d7.svg",v="ContactList_list-contacts__UvAW8",_="ContactList_item-contact-list__NjsNT",p="ContactList_svg-info__L4HZ8",x="ContactList_contact-info__SravP",j="ContactList_number__2af8f";var C=function(e){var a=e.contacts,t=e.onDeleteContact;return(0,u.jsx)("ul",{className:v,children:a.map((function(e){var a=e.id,n=e.name,s=e.number;return(0,u.jsxs)("li",{className:_,children:[(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("a",{href:"tel:".concat(s),children:(0,u.jsx)("img",{src:h,alt:"svg phone"})}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("span",{children:n}),(0,u.jsx)("span",{className:j,children:s})]})]}),(0,u.jsx)("img",{src:f,alt:"svg dumpster",onClick:function(){window.confirm("\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442?")&&t(a)}})]},a)}))})},b="Filther_label-search__dBRjO",g="Filther_input-search__o9+Bo";var N=function(e){var a=e.value,t=e.onChangeFilter;return(0,u.jsxs)("label",{className:b,children:["Find contacts by name",(0,u.jsx)("input",{type:"text",value:a,onChange:t,placeholder:"\ud83d\udd0d Name",className:g})]})},Z=t(4808),w=function(e){return e.filter},L=function(e){var a=e.contacts,t=e.filter;return t?a.items.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):a.items},y=t(9434),F=t(1921),A="ContactsPage_add-search-contacts__Ha4GU",P="ContactsPage_add-contacts__rwStP",k="ContactsPage_search-contacts__Sex-C";var z=function(){var e=function(){var e=(0,y.v9)(w),a=(0,y.I0)();return[e,function(e){var t=e.target;a((0,Z.T)(t.value))}]}(),a=(0,n.Z)(e,2),t=a[0],c=a[1],r=function(){var e=(0,y.v9)(L),a=(0,y.I0)();return(0,i.useEffect)((function(){a((0,F.yF)())}),[a]),[e,function(t){e.find((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()}))?s.Am.error("".concat(t.name," is in your Contacts")):a((0,F.uK)(t))},function(e){a((0,F.zY)(e))}]}(),o=(0,n.Z)(r,3),l=o[0],d=o[1],h=o[2];return(0,u.jsxs)("section",{className:A,children:[(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("h2",{children:"Phonebook"}),(0,u.jsx)(m,{onData:d})]}),(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(N,{value:t,onChangeFilter:c}),l.length>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(C,{contacts:l,onDeleteContact:h})}):(0,u.jsxs)("p",{children:["There is no such contact! ",(0,u.jsx)("br",{})," Add a contact."]}),(0,u.jsx)(s.x7,{position:"top-center",reverseOrder:!1})]})]})}}}]);
//# sourceMappingURL=707.d09ea60a.chunk.js.map