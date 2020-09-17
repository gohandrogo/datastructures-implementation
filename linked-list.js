/** Node is managed by a factory that helps to insert data from a collection of data items */

export default class Node {
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }
}

export default class LinkedList {
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
        this.head = new Node(array[0])
        for(
            let i = 1; 
            i<=array.length; 
            i++){
                head.nextNode= new Node(array[i]);
        }
    }

    /**
     * insertNode
     * @param {*} data - data to be encapsulated
     * @param {Node} insertAfter - node to be appended by data as new node
     */
    insertNode(data, insertAfter){
        let node = new Node(data);
        node.nextNode = insertAfter.nextNode;
        insertAfter.nextNode = node;
    }
    /**
     * search for a node in linked list given identifier
     * @param {*} key - key to find node based on identifier 
     */
    search(key){
        // todo: search recursively rather than iteratively
        let prevNode = this.head.next;
        while(key !== data){
            prevNode = node.next;
            node = node.next.next;
        }
        return {prevNode, node};
    }
    /** 
     * deletes a node in the linked list
     * @param {Node} node - node to be deleted after
     */
    deleteNode(node, key){
        let { prevNode, node} = this.search(key);
        prevNode.nextNode = nextNode;
        targetNode.next = null;

    }
    /**
     * removes first element
     */
    pop(){}
    /**
     * displays all elements in LL
     */
    display(){}
}