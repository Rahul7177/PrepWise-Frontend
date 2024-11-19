const dbmsModules = [
    {
        id: 1,
        title: "Module 1: Introduction to Databases",
        notes: [
            {
                id: 1,
                title: "Database Concepts",
                content: (
                    <>
                        <h3 className="note-subheading">Databases</h3>
                        <p className="note-text">A database stores structured data. DBMS manages access, storage, and retrieval of data.</p>
                        <ul className="note-list">
                            <li>Relational DBMS: Data organized in tables with SQL.</li>
                        </ul>
                    </>
                )
            },
            {
                id: 2,
                title: "Normalization",
                content: (
                    <>
                        <h3 className="note-subheading">Data Normalization</h3>
                        <p className="note-text">Normalization organizes database to reduce redundancy, using normal forms.</p>
                    </>
                )
            }
        ],
        videos: [
            { id: 1, title: "Database Fundamentals", url: "https://youtu.be/OZCM10pA5GY" },
            { id: 2, title: "SQL Basics", url: "https://youtu.be/JtJgaMiVbXs" }
        ]
    }
];
export default dbmsModules;
