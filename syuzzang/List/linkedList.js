class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        let newNode =new Node(value);
        if(!this.head){
            this.head =newNode
        }else{
            let current = this.head;
            while(current.next){
                current =current.next
            }
            current.next =newNode
        }
    }
    display() {
        let elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.display();

