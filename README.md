Question-1: what is difference between getElementById,getElementByClassName,querySelector,querySelectorAll
Ans: 
getElementBYid:this method is used to find a unique element from html by id. return one unique element
getElementByClassName:this method is used to find all element which is included same class.it ruturns html collection
querySelector:this method is used to find first element from html by using css selector
querySelectorsAll:this method is used to find all matching element from html by using css selector .it returns nodelist

Question-2:how do you create and insert element in DOM? 
Ans: 
step 1: i have to create element :

const new_child=document.createElement('div');

step 2:then add innertext
new_child.innerText="hi,iam shahriar" 
step 3: then new_child is added to parent node using append()funtion
pareny_node.append(new_child)

Question 3:what is the event bubbling and how does it work?

ans: EventBubbling:event bubbling is a technique whenever an event is happened of child element 
then that event move from child element to its parrent element one by one up to top most parrent

Question 4:what is the event delegation in javascript .why is it useful?

Ans: we know that event must move from child element to parents element .
so in many cases reducing event listener we use event listener in parrent node so that we control child element from parent element
as a result we less use event listener this technique is known as event delegation.

Qestion 5:what is the differncenc preventDefault() and stopPropagation()?

Ans: preventDefault(): preventDefault is a method that is used to prevent default refresh when from is submitted ,
it usually used in from submitting stopPropagation(): stoppropagation is a method that is used to stop bubbling .
event is applied on element only that element respons for that event and stoppropagation does not allow to bubble its parent element
