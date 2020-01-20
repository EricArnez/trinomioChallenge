(this["webpackJsonptrinomio-app"]=this["webpackJsonptrinomio-app"]||[]).push([[0],{180:function(e,t,a){e.exports=a(397)},186:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(37),s=a.n(o),l=(a(185),a(186),a(12)),i=a.n(l),c=a(19),u=a(20),m=a(22),h=a(21),p=a(23),d=a(177),g=a.n(d),f=a(24),E=a.n(f),C=a(51),v=a(176),N=a(129),b=a(130),P=a(131),O=a(124),w=a(125),y=a(122),k=a(123),S=function(e){var t=e.label,a=e.isSelected,n=e.onCheckboxChange,o=e.sendID;return r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(k.a,{type:"checkbox",name:t,defaultChecked:a,onChange:n,id:o},t)))},F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).mapCoursesWithStateRegardingPerson=function(e){var t=[];return e.forEach((function(e){var n={course:e,courseStateRegardingPerson:a.getStateOfCourseRegardingPerson(e.id)};t.push(n)})),t},a.getStateOfCourseRegardingPerson=function(e){var t=!1;return a.props.person.courses.forEach((function(a){a.id===e&&(t=!0)})),t},a.setMapCoursesWithStateRegardingPerson=function(){E.a.get("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/courses").then((function(e){var t=a.mapCoursesWithStateRegardingPerson(e.data);a.setState({coursesWithStateRegardingPerson:t})})).catch((function(e){e.response&&window.alert(e.response.data.message)}))},a.handleCheckboxChange=function(e){a.state.coursesWithStateRegardingPerson.forEach((function(t){t.course.id===Number(e.target.id)&&(t.courseStateRegardingPerson=!t.courseStateRegardingPerson)}))},a.updatePersonCourses=function(e){var t=[];a.state.coursesWithStateRegardingPerson.forEach((function(e){e.courseStateRegardingPerson&&t.push(e.course)}));var n=e;n.courses=t,E.a.put("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/"+a.props.person.id,n).then((function(e){a.props.refreshParentComponent()})).catch((function(e){e.response&&window.alert(e.response.data.message)}))},a.state={coursesWithStateRegardingPerson:[]},a.setMapCoursesWithStateRegardingPerson(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){var e=this,t=this.state.coursesWithStateRegardingPerson.map((function(t){return r.a.createElement(S,{label:t.course.name,isSelected:t.courseStateRegardingPerson,onCheckboxChange:e.handleCheckboxChange,courseAndState:t,key:t.course.id,sendID:t.course.id})}));return r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{for:"exampleCheckbox"},"Courses: ",this.state.getPersonFullName),r.a.createElement("div",null,t)))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({isOpen:!a.state.isOpen})},a.handleSubmit=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(a.child.updatePersonCourses(a.props.person));case 2:a.setState({isOpen:!1});case 3:case"end":return e.stop()}}))},a.state={isOpen:!1},a.coursesWithStateRegardingPerson=[],a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{color:"primary",onClick:this.toggleModal},"Courses"),r.a.createElement(v.a,{isOpen:this.state.isOpen,autoFocus:!1},r.a.createElement(N.a,{toggle:this.toggleModal},"Adding New Courses For ",this.props.personFullName),r.a.createElement(b.a,null,r.a.createElement(F,{person:this.props.person,onRef:function(t){return e.child=t}})),r.a.createElement(P.a,null,r.a.createElement(C.a,{color:"primary",onClick:this.handleSubmit},"Submit"),r.a.createElement(C.a,{color:"secondary",onClick:this.toggleModal},"Cancel"))))}}]),t}(n.Component),x=a(29),A=function(e){var t=e.fNameValue,a=e.parentHandleFNameChange,n=e.lNameValue,o=e.parentHandleLNameChange,s=e.emailValue,l=e.parentHandleEmailChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.AvForm,{noValidate:!0},r.a.createElement(x.AvGroup,null,r.a.createElement(y.a,null,"First Name"),r.a.createElement(x.AvInput,{value:t,type:"First Name",name:"First Name",id:"firstName",placeholder:"First Name...",onChange:a,autoFocus:!0,required:!0}),r.a.createElement(x.AvFeedback,null,"required")),r.a.createElement(x.AvGroup,null,r.a.createElement(y.a,null,"Last Name"),r.a.createElement(x.AvInput,{value:n,type:"Last Name",name:"Last Name",id:"lastName",placeholder:"Last Name...",onChange:o,required:!0}),r.a.createElement(x.AvFeedback,null,"required")),r.a.createElement(x.AvGroup,null,r.a.createElement(y.a,null,"Email"),r.a.createElement(x.AvInput,{value:s,type:"mail",name:"Email",id:"email",placeholder:"Email...",onChange:l,required:!0}),r.a.createElement(x.AvFeedback,null,"required"))))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({isOpen:!a.state.isOpen})},a.handleFNameChange=function(e){a.setState({fName:e.target.value})},a.handleLNameChange=function(e){a.setState({lName:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleSubmit=function(e){var t;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.shouldSendAlert()?a.sendProperAlert():(t={first_name:a.state.fName,last_name:a.state.lName,email:a.state.email},E.a.put("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/"+a.props.person.id,t).then((function(e){a.child.updatePersonCourses(t),a.props.refreshParentComponent(),a.setState({isOpen:!1})})).catch((function(e){e.response&&window.alert(e.response.data.message)})));case 1:case"end":return e.stop()}}))},a.shouldSendAlert=function(){return a.hasEmptyFields()||!a.state.email.includes("@")},a.sendProperAlert=function(){a.hasEmptyFields()?window.alert("please fill all the fields"):a.hasInvalidEmail()&&window.alert("invalid email")},a.hasEmptyFields=function(){return""===a.state.fName||""===a.state.lName||""===a.state.email},a.hasInvalidEmail=function(){return!a.state.email.includes("@")},a.state={isOpen:!1,fName:"",lName:"",email:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.person,t=e.first_name,a=e.last_name,n=e.email;this.setState({fName:t,lName:a,email:n})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{color:"primary",onClick:this.toggleModal},"Modify Person"),r.a.createElement(v.a,{isOpen:this.state.isOpen},r.a.createElement(N.a,{toggle:this.toggleModal},"Modifying ",this.props.personFullName),r.a.createElement(b.a,null,r.a.createElement(A,{parentHandleFNameChange:this.handleFNameChange,parentHandleLNameChange:this.handleLNameChange,parentHandleEmailChange:this.handleEmailChange,emailValue:this.state.email,fNameValue:this.state.fName,lNameValue:this.state.lName}),r.a.createElement(F,{person:this.props.person,onRef:function(t){return e.child=t}})),r.a.createElement(P.a,null,r.a.createElement(C.a,{color:"primary",onClick:this.handleSubmit},"Submit"),r.a.createElement(C.a,{color:"secondary",onClick:this.toggleModal},"Cancel"))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({isOpen:!a.state.isOpen}),!1===a.state.isOpen&&a.setState({fName:"",lName:"",email:""})},a.handleFNameChange=function(e){a.setState({fName:e.target.value})},a.handleLNameChange=function(e){a.setState({lName:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleSubmit=function(){if(a.shouldSendAlert())a.sendProperAlert();else{var e={first_name:a.state.fName,last_name:a.state.lName,email:a.state.email};E.a.post("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples",e).then((function(e){a.props.refreshParentComponent(),a.setState({isOpen:!1})})).catch((function(e){e.response&&window.alert(e.response.data.message)}))}},a.shouldSendAlert=function(){return a.hasEmptyFields()||!a.state.email.includes("@")},a.sendProperAlert=function(){a.hasEmptyFields()?window.alert("please fill all the fields"):a.hasInvalidEmail()&&window.alert("invalid email")},a.hasEmptyFields=function(){return""===a.state.fName||""===a.state.lName||""===a.state.email},a.hasInvalidEmail=function(){return!a.state.email.includes("@")},a.state={isOpen:!1,fName:"",lName:"",email:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:"mb-2",color:"primary",onClick:this.toggleModal,autoFocus:!0},"Add New Person"),r.a.createElement(v.a,{isOpen:this.state.isOpen,autoFocus:!1},r.a.createElement(N.a,{toggle:this.toggleModal},"Adding a new person"),r.a.createElement(b.a,null,r.a.createElement(A,{parentHandleFNameChange:this.handleFNameChange,parentHandleLNameChange:this.handleLNameChange,parentHandleEmailChange:this.handleEmailChange,emailValue:this.state.email,fNameValue:this.state.fName,lNameValue:this.state.lName})),r.a.createElement(P.a,null,r.a.createElement(C.a,{color:"primary",onClick:this.handleSubmit},"Submit"),r.a.createElement(C.a,{color:"secondary",onClick:this.toggleModal},"Cancel"))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleModal=function(){a.setState({isOpen:!a.state.isOpen})},a.hideConfirmation=function(){a.props.hideConfirmation(),a.modalIsHiden=!0},a.handleRemove=function(){E.a.delete("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples/"+a.props.person.id).then((function(e){a.props.refreshParentComponent()})).catch((function(e){e.response&&window.alert(e.response.data.message)})),a.modalIsHiden&&(a.modalIsHiden=!1,window.location.reload())},a.state={isOpen:!1,hide:a.props.hideConfirmationState},a.modalIsHiden=!1,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.hide?r.a.createElement(C.a,{color:"danger",onClick:this.handleRemove},"Remove Person"):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{color:"warning",onClick:this.toggleModal},"Remove Person?"),r.a.createElement(v.a,{isOpen:this.state.isOpen},r.a.createElement(N.a,{toggle:this.toggleModal},"Removing ",this.props.personFullName),r.a.createElement(b.a,null,"are you sure that you want to delete ",this.props.personFullName,"?"),r.a.createElement(P.a,null,r.a.createElement(C.a,{color:"danger",className:"m-1",onClick:this.handleRemove},"Yes"),r.a.createElement(C.a,{onClick:this.toggleModal},"No")),r.a.createElement("div",null,r.a.createElement(k.a,{className:"m-2",type:"checkbox",onChange:this.hideConfirmation,defaultChecked:this.state.hide,id:this.props.person.id},"don't show me this message again"))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).hideConfirmation=function(){localStorage.setItem("hideRemovModal",!0)},a.setLastPersonPageFromRestAPI=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(E.a.get("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples").then((function(e){a.lastPersonPageFromRestAPI=e.data.last_page})));case 2:case"end":return e.stop()}}))},a.getPersonFullNameOfRecord=function(e){return e.first_name+" "+e.last_name},a.getPersonsDataFromAllPages=function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(a.setLastPersonPageFromRestAPI());case 2:e=[],t=a.lastPersonPageFromRestAPI;case 5:if(!(t>0)){n.next=16;break}return n.t0=i.a,n.next=9,i.a.awrap(a.getPersonsDataFromPage(t));case 9:return n.t1=function(t){e.push(t)},n.t2=n.sent.forEach(n.t1),n.next=13,n.t0.awrap.call(n.t0,n.t2);case 13:t--,n.next=5;break;case 16:return n.abrupt("return",e);case 17:case"end":return n.stop()}}))},a.refreshComponent=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(a.getPersonsDataFromAllPages());case 2:e=t.sent,a.setState({persons:e});case 4:case"end":return t.stop()}}))},a.getPersonsDataFromPage=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.next=3,i.a.awrap(E.a.get("https://cors-anywhere.herokuapp.com/http://earnezinochea.challenge.trinom.io/api/peoples?page="+e).then((function(e){return t=e.data.data})));case 3:return a.abrupt("return",t);case 4:case"end":return a.stop()}}))},a.columns=[{key:"first_name",text:"First Name",className:"name",align:"left",sortable:!0},{key:"last_name",text:"Last Name",className:"name",align:"left",sortable:!0},{key:"email",text:"Email",className:"postcode",sortable:!0},{key:"Add Courses",text:"Add Courses",className:"action",width:100,align:"left",sortable:!1,cell:function(e){var t=a.getPersonFullNameOfRecord(e);return r.a.createElement(R,{person:e,personFullName:t,refreshParentComponent:a.refreshComponent})}},{key:"Modify",text:"Modify",className:"action",width:100,align:"left",sortable:!1,cell:function(e){var t=a.getPersonFullNameOfRecord(e);return r.a.createElement(j,{person:e,personFullName:t,refreshParentComponent:a.refreshComponent})}},{key:"Remove",text:"Remove",className:"action",width:100,align:"left",sortable:!1,cell:function(e){var t=a.getPersonFullNameOfRecord(e);return r.a.createElement(I,{person:e,personFullName:t,refreshParentComponent:a.refreshComponent,hideConfirmation:a.hideConfirmation,hideConfirmationState:a.state.hideRemoveModals})}}],a.config={page_size:10,length_menu:[10,20,50],button:{excel:!1,print:!1,extra:!1}},a.state={persons:[],hideRemoveModals:localStorage.getItem("hideRemovModal")},a.lastPersonPageFromRestAPI=0,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,i.a.awrap(this.getPersonsDataFromAllPages());case 3:e.t1=e.sent,e.t2={persons:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{refreshParentComponent:this.refreshComponent}),r.a.createElement(g.a,{config:this.config,records:this.state.persons,columns:this.columns}))}}]),t}(n.Component);var H=function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.02a49fb0.chunk.js.map