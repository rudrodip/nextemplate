interface DoublyLinkedNode {
  id: number;
  text: string;
  prev?: DoublyLinkedNode | null;
  next?: DoublyLinkedNode | null;
}

export class DoublyLinkedList {
  private head: DoublyLinkedNode | null = null;

  constructor(items: { id: number; text: string }[]) {
    for (let i = items.length - 1; i >= 0; i--) {
      this.insert(items[i]);
    }
  }

  insert(item: { id: number; text: string }) {
    const newNode: DoublyLinkedNode = {
      ...item,
      prev: null,
      next: this.head,
    };

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  toArray(): DoublyLinkedNode[] {
    const result: DoublyLinkedNode[] = [];
    let current = this.head;

    while (current) {
      result.push({ ...current });
      current = current.next || null;
    }

    return result;
  }

  moveNode(id: number, targetId: number) {
    if (id === targetId) {
      return;
    }

    let current = this.head;
    let prev: DoublyLinkedNode | null = null;

    while (current && current.id !== id) {
      prev = current;
      current = current.next || null;
    }

    if (current) {
      if (prev) {
        prev.next = current.next;
        if (current.next) {
          current.next.prev = prev;
        }
      } else {
        this.head = current.next || null;
        if (current.next) {
          current.next.prev = null;
        }
      }

      let targetPrev: DoublyLinkedNode | null = null;
      let targetNode = this.head;

      while (targetNode && targetNode.id !== targetId) {
        targetPrev = targetNode;
        targetNode = targetNode.next || null;
      }

      if (targetNode) {
        current.prev = targetPrev;
        current.next = targetNode.next;
        targetNode.next = current;

        if (current.next) {
          current.next.prev = current;
        } else {
          current.prev = targetNode;
        }
      } else {
        current.next = this.head;
        current.prev = null;

        if (this.head) {
          this.head.prev = current;
        }

        this.head = current;
      }
    }
  }
}
