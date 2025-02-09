function linkedList() {
    let head = null;
    let tail = null;
    let current = null;
    let previous = null;
    let size = 0;

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
            return;
        }
        node.next = head;
        head = node;
        return;
    }

    function append(node) {
        incrementSizeByOne();
        if (head === null) {
            head = node;
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
        head,
        tail,
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
