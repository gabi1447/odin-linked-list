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

    function pop() {
        const listLength = getSize();
        if (listLength === 0) {
            return "The list is empty, you can't pop any elements";
        } else if (listLength === 1) {
            head = null;
            size--;
            return;
        }
        const secondToLastNode = at(listLength - 2);
        secondToLastNode.next = null;
        size--;
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
        pop,
        getSize,
        parseLinkedList,
    };
}

function node(value) {
    let next = null;
    return {
        value,
        next,
    };
}
