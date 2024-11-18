// implementation of linked list in javascript

// make our node
class Node {
        constructor(data){
                this.data = data;
                this.next = null;
        }
}

// make our linked list
class LinkedList {
        constructor(){
                this.head = null
        }

        // adding to our head
        addFirst(data){
                const newNode = new Node(data) // creating our new node
                newNode.next = this.head // our previous head should be newNode next
                this.head = newNode     // our newNode should be the head 

        }

        // adding the node in the last of the linked list
        addLast(data){
                const newNode = new Node(data)
                // if our linked list is null then store this newNode at the first of the linked list
                if (!this.head){
                        this.head = newNode
                        return
                }
                // traverse over the linked list
                let current = this.head // take first is the current
                while (current.next){ // whenever current.next isnot null this loop will be on
                       current = current.next 
                }
                current.next = newNode // when get the next to be null then newNode should be store here
        }       

        // print our linked list
        printList(){
                let current = this.head
                while(current){
                        console.log(current.data)
                        current = current.next
                }
        }
}

const list = new LinkedList()


list.addLast(100)
list.addFirst(10)
list.addFirst(20)
list.addFirst(50)
list.printList()


