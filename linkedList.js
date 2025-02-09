function linkedList() {
    let head = null;
    let tail = null;
    let current = null;
    let previous = null;
    let size = 0;

    function getHead() {
        return head;
    }

    function getTail() {
        return tail;
    }

    function incrementSizeByOne() {
        size++;
    }

    function getSize() {
        return size;
    }

    function prepend(node) {
        incrementSizeByOne();
        if (head === null) {
            head = node;
            tail = node;
            return;
        } else if (getSize() === 1) {
            tail = head;
        }
        node.next = head;
        head = node;
        return;
    }

    function append(node) {
        incrementSizeByOne();
        if (head === null) {
            head = node;
            tail = node;
            return;
        }
        current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
        tail = node;
        return;
    }

    function at(index) {
        if (index > getSize() - 1) {
            return new Error("The index provided is out of range");
        }
        let pointer = 0;
        let currentNode = head;

        while (pointer != index) {
            currentNode = currentNode.next;
            pointer++;
        }

        return currentNode;
    }

    function parseLinkedList() {
        let pointer = head;
        let sequence = "";
        if (pointer === null) {
            console.log(pointer);
            return;
        }
        while (pointer !== null) {
            sequence += `${pointer.value} -> `;
            pointer = pointer.next;
        }
        sequence += "null";
        console.log(sequence);
    }
    return {
        getHead,
        getTail,
        at,
        prepend,
        append,
        getSize,
        parseLinkedList,
    };
}

function node(value) {
    let next = null;
    function addNextNode(node) {
        next = node;
    }
    return {
        value,
        next,
        addNextNode,
    };
}
