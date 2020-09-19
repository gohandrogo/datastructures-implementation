/** Node is managed by a factory that helps to insert data from a collection of data items */

class Node {
    constructor(key, data){
        this.data = data;
        this.next = null;
        this.key = key;
    }
}

let head = null;
let current = null;

class LinkedList {
    constructor(array){
        this.head = null;
        this.initializeLinkedList(array)
    }
    /**
     * initialize Linked List from an array
     * @param {*} array - array list to be re-implemented as a linked list
     */
    initializeLinkedList(array){
        // make sure head does not have data
        let prev, current, next;
        prev = new Node(array[i]);
        
        for(
            let i = 2; 
            i<=array.length; 
            i++){
                current = new Node(array[i])
                prev.next = current;
        }
    }
    /**
     * prints linked list
     */
    printList(){
        let ptr = head;

        while(ptr != null){
            console.log(`${ptr.key}, ${ptr.data}`)
            ptr = ptr.next;
        }
    }
    /**
     * removes first link in linked list and returns it
     */
    deleteFirst(){
        let tempLink = head;
        head = head.next;
        return tempLink;
    }

    isEmpty(){
        return head == null;
    }
    /**
     * returns the total length of the linked list
     */
    length(){
        let length = 0;
        let current;

        for(
            current = head;
            current !=null;
            current = current.next
            ){
                length++
            }
            return length;
    }

    /**
     * insertNode first
     * @param {Node} key - index in original array
     * @param {*} data - data to be encapsulated
     */
    insertFirst(key, data){
        let link = new Node(key, data);
        link.next = head;
        head = link;
    }

    /**
     * search for a node in linked list given identifier
     * @param {*} key - key to find node based on identifier 
     */
    find(key){
        let current = head;

        if(head == null){
            return null;
        }

        return this.traverse(key);
    }
    /**
     * 
     * @param {*} _key traverse until node matches key and return current and previous node
     */
    traverse(_key){
        let current, previous;
        while(_key !=key){

            if(current.next == null){
                return null;
            } else {
                previous = current;
                current = current.next
            }
        }

        return {previous, current};
    }

    /**
     * traverse linked list until index i equals link no and return it.
     * @param {*} i index of link to return 
     */
    traverseIndex(i){
        let current;
        let index = 0;
        while(index === i || current === null){

            if(current.next == null){
                return null;
            } else {
                current = current.next
                index++;
            }
        }
        return current
    }
    /** 
     * deletes a node in the linked list
     * @param {Node} node - node to be deleted after
     */
    deleteNode(key){
        let current = head;
        let previous = null;

        if(head == null){
            return null;
        }

        const {previous, current} = this.traverse(key);

        if(current == head){
            head = head.next;

        } else {
            previous.next = current.next;
        }

    }
    /**
     * reverse operation traversed to end of list and links head to last element
     */
    reverse(){
        let prev = null;
        let current = this.head;
        let next;

        while(current != null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            this.head = prev;
        }
    }
    /**
     * removes first element
     */
    pop(){
        let temp = this.head.next;
        this.head = this.head.next;
        return temp;
    }
    //  tbd all sorting algos
    // todo: learn how to merge sort a singly linked list
    mergeSort(){
        if(this.length() > 1){
            let mid = traverseIndex(this.length()/2);
            let L = arr.slice(0,mid-1);
            let R = arr.slice(mid);

            this.mergeSort(L);
            this.mergeSort(R);

            i = j = k = 0;

            while( i < ){

            }
        }
    }
    insertionSort(){}
    quickSort()
}


const arr = [1,2,3,4,5,6,7,8,9,10];

const linkedList = new LinkedList(arr);

console.log(linkedList);





