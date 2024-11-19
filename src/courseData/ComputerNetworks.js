const cnModules = [
    {
        id: 1,
        title: "Module 1: Introduction to Networking",
        notes: [
            {
                id: 1,
                title: "Network Models",
                content: (
                    <>
                        <h3 className="note-subheading">OSI and TCP/IP Models</h3>
                        <p className="note-text">The OSI and TCP/IP models standardize network communication. OSI has 7 layers; TCP/IP has 4 layers.</p>
                    </>
                )
            },
            {
                id: 2,
                title: "IP Addressing",
                content: (
                    <>
                        <h3 className="note-subheading">IP Addressing</h3>
                        <p className="note-text">IP addressing uniquely identifies devices on a network. IPv4 uses 32-bit addresses; IPv6 uses 128-bit.</p>
                    </>
                )
            }
        ],
        videos: [
            { id: 1, title: "Network Basics", url: "https://youtu.be/W8TZfCBhBxs" },
            { id: 2, title: "IP Addressing Explained", url: "https://youtu.be/W8TZfCBhBxs" }
        ]
    }
];
export default cnModules;
