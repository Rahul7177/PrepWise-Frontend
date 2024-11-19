const dataStructureModules = [
    {
      id: 1,
      title: "Module 1: Introduction and Linear Data Structures",
      notes: [
        {
          id: 1,
          title: "Overview of Data Structures and Algorithms",
          content: (
            <>
              <h3 className="note-subheading">Overview of Data Structures and Algorithms</h3>
              <p className="note-text">
                <strong>Definition:</strong><br />
                <span className="definition">Data Structures:</span> Organized formats to store and manage data for efficient processing.<br />
                <span className="definition">Algorithms:</span> A sequence of steps to solve computational problems.
              </p>
              <h4 className="note-subheading">Types:</h4>
              <p className="note-text">
                <strong>Linear Data Structures:</strong> Arrays, Linked Lists, Stacks, Queues.<br />
                <strong>Non-Linear Data Structures:</strong> Trees, Graphs.
              </p>
              <h4 className="note-subheading">Applications:</h4>
              <p className="note-text">
                Efficient search, sorting, and resource management.<br />
                Real-world scenarios: Navigation, databases, operating systems.
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: "Arrays: Representation and Applications",
          content: (
            <>
              <h3 className="note-subheading">Arrays: Representation and Applications</h3>
              <p className="note-text">
                <strong>Definition:</strong><br />
                A collection of elements stored in contiguous memory locations, accessed using indices.
              </p>
              <h4 className="note-subheading">Operations and Code:</h4>
              <p className="note-text">
                <strong>Array Declaration:</strong><br />
                <code>int arr[5]; // Array of size 5</code>
              </p>
              <p className="note-text">
                <strong>Insertion:</strong><br />
                <code>
                  {`void insert(int arr[], int size, int index, int value) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`for (int i = size - 1; i > index; i--) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`arr[i] = arr[i - 1];`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`arr[index] = value;`}<br />
                  {`}`}
                </code>
              </p>
              <p className="note-text">
                <strong>Deletion:</strong><br />
                <code>
                  {`void delete(int arr[], int size, int index) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`for (int i = index; i < size - 1; i++) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`arr[i] = arr[i + 1];`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                  {`}`}
                </code>
              </p>
              <h4 className="note-subheading">Applications:</h4>
              <p className="note-text">
                Storing tabular data.<br />
                Used in algorithms like binary search.
              </p>
            </>
          ),
        },
        {
          id: 3,
          title: "Linked Lists: Singly, Doubly, Circular",
          content: (
            <>
              <h3 className="note-subheading">Linked Lists: Singly, Doubly, Circular</h3>
              <p className="note-text">
                <strong>Definition:</strong><br />
                A sequence of nodes, each containing data and pointers.
              </p>
              <h4 className="note-subheading">Singly Linked List Code:</h4>
              <code>
                {`struct Node {`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`int data;`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* next;`}<br />
                {`}`}<br />
                <code>
                  {`void insertAtHead(struct Node** head, int value) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`newNode->data = value;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`newNode->next = *head;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`*head = newNode;`}<br />
                  {`}`}
                </code>
              </code>
              <h4 className="note-subheading">Doubly Linked List Code:</h4>
              <code>
                {`struct Node {`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`int data;`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* prev;`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* next;`}<br />
                {`}`}<br />
                <code>
                  {`void insertAtEnd(struct Node** head, int value) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`newNode->data = value;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`newNode->next = NULL;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`if (*head == NULL) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`newNode->prev = NULL;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`*head = newNode;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`struct Node* temp = *head;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`while (temp->next != NULL) temp = temp->next;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`temp->next = newNode;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`newNode->prev = temp;`}<br />
                  {`}`}
                </code>
              </code>
              <h4 className="note-subheading">Applications:</h4>
              <p className="note-text">
                Dynamic memory allocation.<br />
                Implementation of stacks, queues.
              </p>
            </>
          ),
        },
        {
          id: 4,
          title: "Stacks",
          content: (
            <>
              <h3 className="note-subheading">Stacks</h3>
              <p className="note-text">
                <strong>Definition:</strong><br />
                A LIFO (Last In, First Out) data structure.
              </p>
              <h4 className="note-subheading">Stack Using Arrays:</h4>
              <code>
                {`#define MAX 100`}<br />
                {`int stack[MAX], top = -1;`}<br />
                <code>
                  {`void push(int value) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`if (top == MAX - 1) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`printf("Stack Overflow\\n");`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`stack[++top] = value;`}<br />
                  {`}`}
                </code>
              </code>
              <h4 className="note-subheading">Applications:</h4>
              <p className="note-text">
                Expression Evaluation:<br />
                Converting infix to postfix.<br />
                Solving postfix expressions.
              </p>
            </>
          ),
        },
        {
          id: 5,
          title: "Queues",
          content: (
            <>
              <h3 className="note-subheading">Queues</h3>
              <p className="note-text">
                <strong>Definition:</strong><br />
                A FIFO (First In, First Out) data structure.
              </p>
              <h4 className="note-subheading">Queue Using Arrays:</h4>
              <code>
                {`#define MAX 100`}<br />
                {`int queue[MAX], front = -1, rear = -1;`}<br />
                <code>
                  {`void enqueue(int value) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`if (rear == MAX - 1) {`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`printf("Queue Overflow\\n");`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return;`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{`queue[++rear] = value;`}<br />
                  {`}`}
                </code>
              </code>
              <h4 className="note-subheading">Applications:</h4>
              <p className="note-text">
                Scheduling tasks in operating systems.<br />
                Managing buffers in networking.
              </p>
            </>
          ),
        },
      ],
    },
  ];
  
  export default dataStructureModules;
  