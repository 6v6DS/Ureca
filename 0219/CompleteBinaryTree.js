/*
완전 이진 트리
*/
class CompleteBinaryTree {
    constructor(size) {
      this.SIZE = size;
      this.nodes = new Array(size + 1); // 0번 인덱스는 사용하지 않음
      this.lastIndex = 0;
    }
  
    isEmpty() {
      return this.lastIndex === 0;
    }
  
    isFull() {
      return this.lastIndex === this.SIZE;
    }
  
    add(value) {
      if (this.isFull()) {
        console.error("포화 상태입니다.");
        return;
      }
      this.nodes[++this.lastIndex] = value;
    }
  
    inOrder(current) {
      if (current <= this.lastIndex) {
        this.inOrder(current * 2); // 왼쪽 자식 방문
        process.stdout.write(this.nodes[current] + " "); // 현재 노드 방문
        this.inOrder(current * 2 + 1); // 오른쪽 자식 방문
      }
    }
  
    preOrder(current) {
      if (current <= this.lastIndex) {
        process.stdout.write(this.nodes[current] + " "); // 현재 노드 방문
        this.preOrder(current * 2); // 왼쪽 자식 방문
        this.preOrder(current * 2 + 1); // 오른쪽 자식 방문
      }
    }
  
    postOrder(current) {
      if (current <= this.lastIndex) {
        this.postOrder(current * 2); // 왼쪽 자식 방문
        this.postOrder(current * 2 + 1); // 오른쪽 자식 방문
        process.stdout.write(this.nodes[current] + " "); // 현재 노드 방문
      }
    }
  }
  
  // 테스트 코드
  const size = 9;
  const tree = new CompleteBinaryTree(size);
  for (let i = 0; i < size; i++) {
    tree.add(String.fromCharCode(97 + i)); // 'a'부터 'i'까지 추가
  }
  
  console.log("PreOrder:");
  tree.preOrder(1);
  console.log("\nInOrder:");
  tree.inOrder(1);
  console.log("\nPostOrder:");
  tree.postOrder(1);
  