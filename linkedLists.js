class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);

      temp = temp.next;
    }
  }
  push(new_data) {
    let newNode = new Node(new_data);

    newNode.next = this.head;
    this.head = newNode;
  }
  insertAfter(prevNode, newData) {
    if (prevNode == null) {
      console.log("Tugun mavjud emas");
      return;
    }

    let newNode = new Node(newData);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  append(newData) {
    let newNode = new Node(newData);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
  }

  delete(key) {
    let temp = this.head;
    if (temp && temp.data == key) {
      this.head = temp.next;
      temp = null;
      return;
    }
    let prev = temp;

    while (temp) {
      if (temp.data === key) {
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    if (temp === null) {
      return;
    }

    prev.next = temp.next;
    temp === null;
  }
}

let llist = new LinkedList();

llist.head = new Node("Dushanba");

let tuesday = new Node("Seshanba");
let wednesday = new Node("Chorshanba");

llist.head.next = tuesday;
tuesday.next = wednesday;

llist.push("Yakshanba");
llist.insertAfter(llist.head, "Dushanba 2");
llist.append("Shanba");
llist.delete("Seshanba");
llist.printList();
