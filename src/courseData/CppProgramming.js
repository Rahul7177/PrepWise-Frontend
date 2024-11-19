const cppModules = [
    {
        id: 1,
        title: "Module 1: Introduction to C++",
        notes: [
            {
                id: 1,
                title: "Basic Syntax",
                content: (
                    <>
                        <h3 className="note-subheading">Syntax and Data Types</h3>
                        <p className="note-text">C++ syntax includes basic constructs like variables, data types, and control structures.</p>
                    </>
                )
            },
            {
                id: 2,
                title: "OOP in C++",
                content: (
                    <>
                        <h3 className="note-subheading">Object-Oriented Programming</h3>
                        <p className="note-text">OOP principles include encapsulation, inheritance, and polymorphism, key for reusable and modular code.</p>
                    </>
                )
            }
        ],
        videos: [
            { id: 1, title: "C++ Basics", url: "https://youtu.be/ZzaPdXTrSb8" },
            { id: 2, title: "Object-Oriented Programming in C++", url: "https://youtu.be/wN0x9eZLix4" }
        ]
    }
];
export default cppModules;
