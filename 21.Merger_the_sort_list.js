const prompt = require('prompt-sync')();

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var mergeTwoLists = (list1,list2) =>{
  const dummyHead = new ListNode();;
  let current = dummyHead;
  
  while(list1 && list2){
    if(list1.val < list2.val){
      current.next = list1;
      list1 = list1.next;
    }
    else{
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;

  return dummyHead.next;
}

list1 = [1,2,3,4];
list2 = [2,4,6,8];
console.log(mergeTwoLists(list1,list2));