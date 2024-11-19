const cryptographyModules = [
    {
      id: 1,
      title: "Module 1: Introduction to Cryptography and Number Theory",
      notes: [
        {
          id: 1,
          title: "History and Evolution of Cryptography",
          content: (
            <>
              <h3 className="note-subheading">History and Evolution of Cryptography</h3>
              <p className="note-text">
                Cryptography is the art and science of securing information by transforming it into an unreadable format for unauthorized users while ensuring its accessibility to intended recipients. This process, known as encryption, helps maintain data confidentiality, integrity, and authentication.
              </p>
              <h4 className="note-subheading">Historical Milestones</h4>
              <ul className="note-list">
                <li><b>Ancient Cryptography:</b> Cryptography traces back to 1900 BC with Egyptian hieroglyphs, where symbols conveyed hidden meanings.</li>
                <li><b>The Caesar Cipher:</b> Developed by Julius Caesar, used a simple substitution technique that shifted each letter by a fixed number (e.g., "HELLO" to "KHOOR").</li>
                <li><b>Medieval Cryptography:</b> The Vigenère Cipher introduced a more secure system using multiple substitution alphabets.</li>
                <li><b>Modern Cryptography:</b> The Enigma machine, RSA algorithm, and the introduction of public-key cryptography in the 1970s revolutionized encryption.</li>
              </ul>
            </>
          ),
        },
        {
          id: 2,
          title: "Basics of Number Theory",
          content: (
            <>
              <h3 className="note-subheading">Basics of Number Theory</h3>
              <p className="note-text">
                Number theory is a branch of mathematics that deals with the properties and relationships of numbers, particularly integers. It is fundamental in cryptographic algorithms like RSA.
              </p>
              <h4 className="note-subheading">Modular Arithmetic</h4>
              <p className="note-text">
                Modular arithmetic operates like a clock where numbers reset after reaching a specified modulus. It is crucial for algorithms like RSA.
              </p>
              <p className="note-example"><b>Example:</b> 29 mod 7 = 1 because dividing 29 by 7 leaves a remainder of 1.</p>
              <h4 className="note-subheading">Prime Numbers</h4>
              <p className="note-text">
                Prime numbers are integers greater than 1 that have no divisors other than 1 and themselves. RSA encryption depends on the difficulty of factoring large numbers into primes.
              </p>
              <h4 className="note-subheading">Euler's Theorem</h4>
              <p className="note-text">
                Euler's theorem is used in public-key systems like RSA. It states that if a and n are coprime, then a^φ(n) ≡ 1 mod n.
              </p>
              <p className="note-example"><b>Example:</b> For n = 10, φ(10) = 4, and 3^4 ≡ 1 mod 10.</p>
            </>
          ),
        },
        {
          id: 3,
          title: "Symmetric vs. Asymmetric Encryption",
          content: (
            <>
              <h3 className="note-subheading">Symmetric vs. Asymmetric Encryption</h3>
              <p className="note-text">
                Encryption can be categorized into symmetric (same key for both encryption and decryption) and asymmetric (public-private key pairs) encryption.
              </p>
              <h4 className="note-subheading">Symmetric Encryption</h4>
              <p className="note-text">
                Symmetric encryption uses the same key for both encryption and decryption. A popular example is the Caesar Cipher.
              </p>
              <ul className="note-list">
                <li>Popular Algorithms: DES, AES</li>
                <li>Advantages: Fast and efficient</li>
                <li>Disadvantages: Key distribution is a challenge.</li>
              </ul>
              <h4 className="note-subheading">Asymmetric Encryption</h4>
              <p className="note-text">
                Asymmetric encryption uses a pair of keys. One key is used for encryption, and the other is used for decryption (e.g., RSA).
              </p>
              <ul className="note-list">
                <li>Popular Algorithms: RSA, ECC</li>
                <li>Advantages: Secure key distribution.</li>
                <li>Disadvantages: Slower than symmetric encryption.</li>
              </ul>
            </>
          ),
        },
        {
          id: 4,
          title: "Cryptographic Goals: Confidentiality, Integrity, Authentication",
          content: (
            <>
              <h3 className="note-subheading">Cryptographic Goals</h3>
              <p className="note-text">
                The primary goals of cryptography are confidentiality, integrity, and authentication.
              </p>
              <h4 className="note-subheading">Confidentiality</h4>
              <p className="note-text">Ensures that sensitive information is accessible only to authorized users.</p>
              <h4 className="note-subheading">Integrity</h4>
              <p className="note-text">Ensures that data is not tampered with during transmission or storage.</p>
              <h4 className="note-subheading">Authentication</h4>
              <p className="note-text">Confirms the identity of the sender or receiver to prevent impersonation.</p>
            </>
          ),
        },
        {
          id: 5,
          title: "Applications of Cryptography",
          content: (
            <>
              <h3 className="note-subheading">Applications of Cryptography</h3>
              <ul className="note-list">
                <li><b>Secure Communication:</b> Encrypted communication ensures privacy (e.g., WhatsApp’s end-to-end encryption).</li>
                <li><b>E-Commerce and Banking:</b> Uses encryption and digital signatures to secure transactions (e.g., SSL/TLS).</li>
                <li><b>Authentication Systems:</b> Passwords are stored as salted hashes to prevent unauthorized access.</li>
                <li><b>Blockchain Technology:</b> Cryptographic hashes link blocks in a blockchain, ensuring data integrity (e.g., Bitcoin uses SHA-256).</li>
              </ul>
            </>
          ),
        },
      ],
      videos: [
        { id: 1, title: "Introduction to Cryptography", url: "https://youtu.be/JoeiLuFNBc4?feature=shared" },
        { id: 2, title: "Number Theory Basics", url: "https://youtu.be/5PY2RvI_JnA?feature=shared" },
        { id: 3, title: "Modular Arithmetic", url: "https://youtu.be/M42uDLGRSpI?feature=shared" },
      ]
    },
    {
        id: 2,
        title: "Module 2: Symmetric Key Cryptography",
        notes: [
          {
            id: 1,
            title: "Classical Encryption Techniques",
            content: (
              <>
                <h3 className="note-subheading">Classical Encryption Techniques</h3>
                <h4 className="note-subheading">Caesar Cipher</h4>
                <p className="note-text">
                  A substitution cipher where each letter in the plaintext is shifted by a fixed number of positions in the alphabet.
                </p>
                <p className="note-text"><b>Encryption Formula:</b> E(x) = (x + k) mod 26</p>
                <p className="note-text"><b>Decryption Formula:</b> D(x) = (x - k) mod 26</p>
                <h4 className="note-subheading">Example</h4>
                <p className="note-example">
                  For plaintext "HELLO" with k = 3: <br />
                  Encrypt: "HELLO" → "KHOOR" <br />
                  Decrypt: "KHOOR" → "HELLO"
                </p>
                <h4 className="note-subheading">Vigenère Cipher</h4>
                <p className="note-text">
                  A polyalphabetic substitution cipher that uses a keyword to determine the shift for each letter.
                </p>
                <p className="note-text"><b>Encryption Formula:</b> E(x) = (x + k[i]) mod 26</p>
                <p className="note-text"><b>Decryption Formula:</b> D(x) = (x - k[i]) mod 26</p>
                <h4 className="note-subheading">Example</h4>
                <p className="note-example">
                  For plaintext "HELLO" and keyword "KEY": <br />
                  Repeat the keyword: "KEYKE". <br />
                  Encrypt: "H+K", "E+E", "L+Y", etc. → "RIJVS"
                </p>
                <h4 className="note-subheading">Playfair Cipher</h4>
                <p className="note-text">
                  A digraph substitution cipher that encrypts pairs of letters using a 5x5 grid.
                </p>
                <ul className="note-list">
                  <li><b>Grid:</b> Populate with a keyword, removing duplicate letters and combining I and J.</li>
                  <li><b>Rules:</b> 
                    <ul>
                      <li>If the letters are in the same row, replace each with the letter to its right.</li>
                      <li>If the letters are in the same column, replace each with the letter below it.</li>
                      <li>If neither, form a rectangle and swap the opposite corners.</li>
                    </ul>
                  </li>
                </ul>
                <h4 className="note-subheading">Example</h4>
                <p className="note-example">
                  Keyword: "MONARCHY" <br />
                  Grid: <br />
                  M O N A R <br />
                  C H Y B D <br />
                  E F G I/J K <br />
                  L P Q S T <br />
                  U V W X Z <br />
                  Encrypting "MEET" → "CLQL".
                </p>
              </>
            ),
          },
          {
            id: 2,
            title: "Block Ciphers",
            content: (
              <>
                <h3 className="note-subheading">Block Ciphers</h3>
                <h4 className="note-subheading">Data Encryption Standard (DES)</h4>
                <p className="note-text">
                  A symmetric block cipher that encrypts data in 64-bit blocks using a 56-bit key.
                </p>
                <ul className="note-list">
                  <li>The plaintext is divided into 64-bit blocks.</li>
                  <li>Each block undergoes 16 rounds of substitution and permutation.</li>
                  <li>A final permutation generates the ciphertext.</li>
                </ul>
                <h4 className="note-subheading">Strengths</h4>
                <ul className="note-list">
                  <li>Efficient for small-scale applications.</li>
                </ul>
                <h4 className="note-subheading">Weaknesses</h4>
                <ul className="note-list">
                  <li>Vulnerable to brute force attacks due to its short key length.</li>
                </ul>
                <h4 className="note-subheading">Advanced Encryption Standard (AES)</h4>
                <p className="note-text">
                  A modern symmetric block cipher that encrypts data in 128-bit blocks with key sizes of 128, 192, or 256 bits.
                </p>
                <ul className="note-list">
                  <li>SubBytes: Non-linear substitution of bytes.</li>
                  <li>ShiftRows: Rows are shifted cyclically.</li>
                  <li>MixColumns: Columns are mixed.</li>
                  <li>AddRoundKey: A round key is XORed with the block.</li>
                </ul>
                <h4 className="note-subheading">Advantages</h4>
                <ul className="note-list">
                  <li>Strong security due to large key sizes.</li>
                  <li>Resistant to most known cryptographic attacks.</li>
                </ul>
              </>
            ),
          },
          {
            id: 3,
            title: "Stream Ciphers",
            content: (
              <>
                <h3 className="note-subheading">Stream Ciphers</h3>
                <h4 className="note-subheading">Definition</h4>
                <p className="note-text">
                  Stream ciphers encrypt plaintext one bit or byte at a time, using a pseudorandom key stream.
                </p>
                <h4 className="note-subheading">How It Works</h4>
                <p className="note-text">
                  The plaintext is XORed with the key stream to produce the ciphertext. Decryption involves XORing the ciphertext with the same key stream.
                </p>
                <h4 className="note-subheading">Advantages</h4>
                <ul className="note-list">
                  <li>Faster than block ciphers for real-time encryption.</li>
                  <li>Suitable for applications like secure video streaming.</li>
                </ul>
                <h4 className="note-subheading">Disadvantages</h4>
                <ul className="note-list">
                  <li>Vulnerable if the same key stream is reused (e.g., RC4 is weak under certain conditions).</li>
                </ul>
              </>
            ),
          },
          {
            id: 4,
            title: "Modes of Operation",
            content: (
              <>
                <h3 className="note-subheading">Modes of Operation</h3>
                <h4 className="note-subheading">Electronic Codebook (ECB)</h4>
                <p className="note-text">
                  Each block of plaintext is encrypted independently.
                </p>
                <ul className="note-list">
                  <li>Advantages: Simple and fast.</li>
                  <li>Disadvantages: Identical plaintext blocks produce identical ciphertext blocks, making it insecure for large data.</li>
                </ul>
                <h4 className="note-subheading">Cipher Block Chaining (CBC)</h4>
                <p className="note-text">
                  Each plaintext block is XORed with the previous ciphertext block before encryption.
                </p>
                <ul className="note-list">
                  <li>Advantages: Provides better security by ensuring identical blocks produce different ciphertexts.</li>
                  <li>Disadvantages: Requires an initialization vector (IV).</li>
                </ul>
                <h4 className="note-subheading">Cipher Feedback (CFB)</h4>
                <p className="note-text">
                  Converts a block cipher into a stream cipher.
                </p>
                <ul className="note-list">
                  <li>Advantages: Error propagation is limited to one block.</li>
                </ul>
                <h4 className="note-subheading">Output Feedback (OFB)</h4>
                <p className="note-text">
                  Similar to CFB but encrypts the IV to generate the key stream, which is XORed with the plaintext.
                </p>
                <ul className="note-list">
                  <li>Advantages: Errors do not propagate.</li>
                  <li>Disadvantages: Vulnerable if the same IV is reused.</li>
                </ul>
              </>
            ),
          },
          {
            id: 5,
            title: "Applications of Symmetric Key Cryptography",
            content: (
              <>
                <h3 className="note-subheading">Applications of Symmetric Key Cryptography</h3>
                <ul className="note-list">
                  <li><b>Data Storage:</b> Encrypts files to protect sensitive information on storage devices (e.g., AES encrypts confidential documents).</li>
                  <li><b>Communication Security:</b> Ensures secure transmission of messages over networks (e.g., DES was used in early secure telephone systems).</li>
                  <li><b>Wireless Security:</b> WPA2 encryption for Wi-Fi networks uses AES for robust security.</li>
                </ul>
              </>
            ),
          },
        ],
      },
    {
        id: 3,
        title: "Module 3: Asymmetric Key Cryptography",
        notes: [
          {
            id: 1,
            title: "Concept and Applications",
            content: (
              <>
                <h3 className="note-subheading">Concept and Applications</h3>
                <h4 className="note-subheading">1. Definition</h4>
                <p className="note-text">
                  Asymmetric key cryptography, also known as public-key cryptography, uses a pair of keys:
                </p>
                <ul className="note-list">
                  <li><b>Public Key:</b> Used for encryption.</li>
                  <li><b>Private Key:</b> Used for decryption.</li>
                </ul>
                <h4 className="note-subheading">2. How It Works</h4>
                <p className="note-text">
                  The public key is shared openly, while the private key is kept secret. Data encrypted with the public key can only be decrypted using the corresponding private key.
                </p>
                <h4 className="note-subheading">3. Applications</h4>
                <ul className="note-list">
                  <li><b>Secure Communication:</b> Ensures confidentiality in emails (e.g., PGP).</li>
                  <li><b>Digital Signatures:</b> Verifies the authenticity of a sender.</li>
                  <li><b>Key Exchange:</b> Securely shares symmetric keys over an insecure channel.</li>
                  <li><b>Blockchain:</b> Ensures secure transactions and digital identities.</li>
                </ul>
              </>
            ),
          },
          {
            id: 2,
            title: "RSA Algorithm",
            content: (
              <>
                <h3 className="note-subheading">RSA Algorithm</h3>
                <h4 className="note-subheading">1. Overview</h4>
                <p className="note-text">
                  RSA (Rivest-Shamir-Adleman) is one of the most widely used asymmetric encryption algorithms. It is based on the mathematical difficulty of factoring large prime numbers.
                </p>
                <h4 className="note-subheading">2. Key Generation</h4>
                <ul className="note-list">
                  <li>Select two large prime numbers p and q.</li>
                  <li>Compute n = p × q, where n is the modulus.</li>
                  <li>Calculate ϕ(n) = (p - 1) × (q - 1).</li>
                  <li>Choose an integer e such that 1 less than e less than  phi n  and gcd(e, ϕ(n)) = 1. e is the public exponent.</li>
                  <li>Compute d such that d x e ≡ 1 mod ϕ(n). d is the private exponent.</li>
                  <li>The public key is (e, n), and the private key is (d, n).</li>
                </ul>
                <h4 className="note-subheading">3. Encryption</h4>
                <p className="note-text">
                  To encrypt a message m (where m less than n): c = m^e mod n, where c is the ciphertext.
                </p>
                <h4 className="note-subheading">4. Decryption</h4>
                <p className="note-text">
                  To decrypt ciphertext c: m = c^d mod n.
                </p>
                <h4 className="note-subheading">5. Example</h4>
                <p className="note-example">
                  Select p = 3, q = 11. Compute n = 3 × 11 = 33.<br />
                  ϕ(n) = (3 - 1)(11 - 1) = 20. Choose e = 3 (gcd(3, 20) = 1).<br />
                  Compute d such that d × 3 ≡ 1 mod 20. d = 7.<br />
                  Public key: (3, 33), Private key: (7, 33).<br />
                  Encrypt m = 4: c = 4^3 mod 33 = 64 mod 33 = 31.<br />
                  Decrypt c = 31: m = 31^7 mod 33 = 4.
                </p>
              </>
            ),
          },
          {
            id: 3,
            title: "Diffie-Hellman Key Exchange",
            content: (
              <>
                <h3 className="note-subheading">Diffie-Hellman Key Exchange</h3>
                <h4 className="note-subheading">1. Overview</h4>
                <p className="note-text">
                  The Diffie-Hellman key exchange algorithm enables two parties to securely share a symmetric key over an insecure channel.
                </p>
                <h4 className="note-subheading">2. How It Works</h4>
                <p className="note-text">
                  Both parties agree on a large prime number p and a base g. Each party chooses a private key, computes a public key using g^a mod p, and exchanges the public keys. The shared secret is then computed by raising the received public key to the power of the private key.
                </p>
                <h4 className="note-subheading">3. Example</h4>
                <p className="note-example">
                  Let p = 23 and g = 5.<br />
                  Alice chooses private key a = 6, computes public key A = 5^6 mod 23 = 8.<br />
                  Bob chooses private key b = 15, computes public key B = 5^15 mod 23 = 19.<br />
                  Alice computes shared secret: 19^6 mod 23 = 2.<br />
                  Bob computes shared secret: 8^15 mod 23 = 2.<br />
                  Both parties now share the same secret key.
                </p>
              </>
            ),
          },
          {
            id: 4,
            title: "Elliptic Curve Cryptography (ECC)",
            content: (
              <>
                <h3 className="note-subheading">Elliptic Curve Cryptography (ECC)</h3>
                <h4 className="note-subheading">1. Overview</h4>
                <p className="note-text">
                  ECC is a public-key cryptosystem based on the algebraic structure of elliptic curves over finite fields. It provides the same level of security as RSA but with smaller key sizes.
                </p>
                <h4 className="note-subheading">2. Key Generation</h4>
                <p className="note-text">
                  ECC key generation involves choosing a base point on the elliptic curve, generating a private key, and computing the corresponding public key by multiplying the base point by the private key.
                </p>
                <h4 className="note-subheading">3. Advantages</h4>
                <ul className="note-list">
                  <li>Smaller key sizes for equivalent security.</li>
                  <li>Efficient for mobile devices with limited resources.</li>
                </ul>
              </>
            ),
          },
          {
            id: 5,
            title: "Applications of Asymmetric Key Cryptography",
            content: (
              <>
                <h3 className="note-subheading">Applications of Asymmetric Key Cryptography</h3>
                <ul className="note-list">
                  <li><b>Digital Signatures:</b> Verifies the authenticity and integrity of messages and software.</li>
                  <li><b>Secure Communication:</b> Ensures confidentiality and integrity of communication over insecure channels (e.g., SSL/TLS).</li>
                  <li><b>Blockchain Technology:</b> Secures transactions and validates digital identities.</li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 4,
        title: "Module 4: Cryptographic Hash Functions",
        notes: [
          {
            id: 1,
            title: "Hashing Basics",
            content: (
              <>
                <h3 className="note-subheading">Hashing Basics</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  Hashing is the process of transforming an input (message or data) into a fixed-size string of characters, called a hash or digest, using a mathematical function.
                </p>
                <h4 className="note-subheading">2. Characteristics:</h4>
                <ul className="note-list">
                  <li>The output (hash) is of fixed length, regardless of the input size.</li>
                  <li>Hashing is a one-way function: it is computationally infeasible to retrieve the original data from its hash.</li>
                  <li>Even a small change in input produces a completely different hash (the avalanche effect).</li>
                </ul>
                <h4 className="note-subheading">3. Examples:</h4>
                <ul className="note-list">
                  <li>Input: "hello" → Hash: "5d41402abc4b2a76b9719d911017c592" (MD5).</li>
                  <li>Input: "Hello" → Hash: "8b1a9953c4611296a827abf8c47804d7" (MD5).</li>
                </ul>
                <h4 className="note-subheading">4. Uses in Cryptography:</h4>
                <ul className="note-list">
                  <li>Hash functions ensure data integrity, authenticate digital signatures, and support password storage.</li>
                </ul>
              </>
            ),
          },
          {
            id: 2,
            title: "Properties of Secure Hash Functions",
            content: (
              <>
                <h3 className="note-subheading">Properties of Secure Hash Functions</h3>
                <ul className="note-list">
                  <li><b>Deterministic:</b> The same input always produces the same hash output.</li>
                  <li><b>Preimage Resistance:</b> It is computationally infeasible to find the original input given the hash.</li>
                  <li><b>Second Preimage Resistance:</b> It is computationally infeasible to find another input that produces the same hash.</li>
                  <li><b>Collision Resistance:</b> It is computationally infeasible to find two different inputs that produce the same hash.</li>
                  <li><b>Avalanche Effect:</b> A small change in input causes a significant change in the hash output.</li>
                  <li><b>Efficiency:</b> Hashing algorithms must process data quickly for large-scale use cases.</li>
                </ul>
              </>
            ),
          },
          {
            id: 3,
            title: "SHA Family (SHA-1, SHA-256)",
            content: (
              <>
                <h3 className="note-subheading">SHA Family (SHA-1, SHA-256)</h3>
                <h4 className="note-subheading">1. SHA (Secure Hash Algorithm):</h4>
                <p className="note-text">
                  A family of cryptographic hash functions designed by the NSA and published by NIST.
                </p>
                <h4 className="note-subheading">2. SHA-1:</h4>
                <ul className="note-list">
                  <li>Produces a 160-bit hash value.</li>
                  <li>Example: Input: "hello" → SHA-1 Hash: "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d".</li>
                  <li>Weaknesses: Vulnerable to collision attacks. Considered insecure for cryptographic use.</li>
                </ul>
                <h4 className="note-subheading">3. SHA-256:</h4>
                <ul className="note-list">
                  <li>Produces a 256-bit hash value, part of the SHA-2 family.</li>
                  <li>Example: Input: "hello" → SHA-256 Hash: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824".</li>
                  <li>Strengths: Collision resistance. Widely used in blockchain (e.g., Bitcoin), digital signatures, and secure protocols.</li>
                </ul>
                <h4 className="note-subheading">4. Comparison:</h4>
                <ul className="note-list">
                  <li><b>SHA-1:</b> Fast but insecure.</li>
                  <li><b>SHA-256:</b> Slower but secure against modern attacks.</li>
                </ul>
              </>
            ),
          },
          {
            id: 4,
            title: "Applications of Cryptographic Hash Functions",
            content: (
              <>
                <h3 className="note-subheading">Applications of Cryptographic Hash Functions</h3>
                <ul className="note-list">
                  <li><b>Digital Signatures:</b> A hash of the original message is encrypted with the sender’s private key to create a digital signature. The recipient verifies the signature by decrypting it with the sender’s public key and comparing the hash with the computed hash of the message.</li>
                  <li><b>Message Integrity:</b> Hash functions ensure that a message has not been altered during transmission. Example: Verifying a file’s integrity by comparing its hash before and after download.</li>
                  <li><b>Password Security:</b> Passwords are stored as hashed values in databases. Even if a database is compromised, passwords cannot be easily reversed. Example: Hashing a password "mypassword" → "5f4dcc3b5aa765d61d8327deb882cf99" (MD5).</li>
                  <li><b>Blockchain Technology:</b> Cryptographic hashes link blocks in a blockchain, ensuring immutability and preventing tampering. Example: Bitcoin uses SHA-256 to secure transactions.</li>
                  <li><b>Certificate Verification:</b> Hash functions are used in SSL/TLS certificates to ensure secure communication between a client and a server.</li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        id: 5,
        title: "Module 5: Advanced Topics and Applications",
        notes: [
          {
            id: 1,
            title: "Digital Signatures",
            content: (
              <>
                <h3 className="note-subheading">Digital Signatures</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  A digital signature is a cryptographic technique used to verify the authenticity and integrity of digital messages or documents.
                </p>
                <h4 className="note-subheading">2. How It Works:</h4>
                <ul className="note-list">
                  <li>The sender computes a hash of the message.</li>
                  <li>The hash is encrypted with the sender’s private key to create the digital signature.</li>
                  <li>The recipient decrypts the signature using the sender’s public key to verify its authenticity and compares it with the hash of the received message.</li>
                </ul>
                <h4 className="note-subheading">3. Applications:</h4>
                <ul className="note-list">
                  <li>Ensures authenticity in online transactions.</li>
                  <li>Used in email encryption and secure software distribution.</li>
                </ul>
              </>
            ),
          },
          {
            id: 2,
            title: "Digital Certificates",
            content: (
              <>
                <h3 className="note-subheading">Digital Certificates</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  A digital certificate binds a public key to an entity, such as a person, organization, or website.
                </p>
                <h4 className="note-subheading">2. Structure of a Certificate:</h4>
                <ul className="note-list">
                  <li>Entity information (e.g., name, domain).</li>
                  <li>Public key.</li>
                  <li>Validity period.</li>
                  <li>CA’s signature.</li>
                </ul>
                <h4 className="note-subheading">3. Applications:</h4>
                <ul className="note-list">
                  <li>Enables secure communication using HTTPS.</li>
                  <li>Prevents man-in-the-middle attacks by authenticating servers.</li>
                </ul>
              </>
            ),
          },
          {
            id: 3,
            title: "Public Key Infrastructure (PKI)",
            content: (
              <>
                <h3 className="note-subheading">Public Key Infrastructure (PKI)</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  PKI is a framework that manages digital keys and certificates to enable secure communication over the internet.
                </p>
                <h4 className="note-subheading">2. Components:</h4>
                <ul className="note-list">
                  <li>Certificate Authority (CA): Issues and revokes digital certificates.</li>
                  <li>Registration Authority (RA): Verifies the identity of certificate requesters.</li>
                  <li>Certificate Repository: Stores issued certificates and public keys.</li>
                  <li>Certificate Revocation List (CRL): Lists invalid or revoked certificates.</li>
                </ul>
                <h4 className="note-subheading">3. How It Works:</h4>
                <ul className="note-list">
                  <li>A user requests a certificate from the CA.</li>
                  <li>The RA verifies the user’s identity.</li>
                  <li>The CA issues the certificate, which is used to secure communication or transactions.</li>
                </ul>
                <h4 className="note-subheading">4. Applications:</h4>
                <ul className="note-list">
                  <li>Secures websites using SSL/TLS.</li>
                  <li>Manages authentication in enterprise systems.</li>
                  <li>Facilitates secure email and document signing.</li>
                </ul>
              </>
            ),
          },
          {
            id: 4,
            title: "Cryptanalysis Techniques",
            content: (
              <>
                <h3 className="note-subheading">Cryptanalysis Techniques</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  Cryptanalysis is the study of analyzing cryptographic systems to break or weaken them.
                </p>
                <h4 className="note-subheading">2. Types of Attacks:</h4>
                <ul className="note-list">
                  <li><b>Brute Force Attack:</b> Tries all possible keys until the correct one is found. <i>Countermeasure:</i> Use long, complex keys.</li>
                  <li><b>Ciphertext-Only Attack:</b> The attacker has access only to the ciphertext and attempts to deduce the plaintext or key.</li>
                  <li><b>Known-Plaintext Attack:</b> The attacker has both plaintext and ciphertext pairs to analyze the encryption process.</li>
                  <li><b>Chosen-Plaintext Attack:</b> The attacker chooses plaintexts and obtains their ciphertexts to deduce the key.</li>
                  <li><b>Man-in-the-Middle Attack:</b> Intercepts communication between two parties to manipulate or read the data. <i>Countermeasure:</i> Use strong authentication methods, like digital signatures.</li>
                </ul>
                <h4 className="note-subheading">3. Modern Cryptanalysis:</h4>
                <p className="note-text">
                  Focuses on breaking RSA, AES, and ECC using advanced computational techniques. <i>Example:</i> Side-channel attacks analyze power consumption or electromagnetic emissions to deduce encryption keys.
                </p>
              </>
            ),
          },
          {
            id: 5,
            title: "Applications in Blockchain and Internet Security",
            content: (
              <>
                <h3 className="note-subheading">Applications in Blockchain and Internet Security</h3>
                <h4 className="note-subheading">1. Blockchain Technology:</h4>
                <ul className="note-list">
                  <li>Cryptography secures the integrity and immutability of blockchain data.</li>
                  <li><b>Hash Functions:</b> Cryptographic hashes link blocks together. Example: Bitcoin uses SHA-256 to secure transactions.</li>
                  <li><b>Digital Signatures:</b> Transactions are signed using private keys and verified using public keys.</li>
                  <li><b>Consensus Algorithms:</b> Proof of Work (PoW) and Proof of Stake (PoS) ensure trustless and decentralized networks.</li>
                </ul>
                <h4 className="note-subheading">2. Internet Security:</h4>
                <ul className="note-list">
                  <li><b>Secure Web Browsing:</b> HTTPS secures communication between browsers and servers using SSL/TLS.</li>
                  <li><b>Email Security:</b> Protocols like S/MIME and PGP encrypt email content and attachments.</li>
                  <li><b>Two-Factor Authentication (2FA):</b> Combines passwords with cryptographic tokens for enhanced security.</li>
                  <li><b>VPNs:</b> Encrypts internet traffic to protect against eavesdropping.</li>
                </ul>
              </>
            ),
          },
          {
            id: 6,
            title: "Quantum Cryptography Basics",
            content: (
              <>
                <h3 className="note-subheading">Quantum Cryptography Basics</h3>
                <h4 className="note-subheading">1. Definition:</h4>
                <p className="note-text">
                  Quantum cryptography uses principles of quantum mechanics to secure data against potential future attacks from quantum computers.
                </p>
                <h4 className="note-subheading">2. Quantum Threat to Cryptography:</h4>
                <ul className="note-list">
                  <li>Quantum computers can break traditional cryptographic algorithms like RSA and ECC using Shor’s algorithm.</li>
                  <li>Symmetric algorithms like AES are more resistant but may require longer key sizes.</li>
                </ul>
                <h4 className="note-subheading">3. Quantum Key Distribution (QKD):</h4>
                <ul className="note-list">
                  <li>Uses quantum mechanics to securely exchange cryptographic keys.</li>
                  <li>Example: BB84 protocol transmits quantum bits (qubits) over a quantum channel.</li>
                  <li>If an eavesdropper attempts to intercept the qubits, their quantum state collapses, alerting the parties to a security breach.</li>
                </ul>
                <h4 className="note-subheading">4. Post-Quantum Cryptography:</h4>
                <p className="note-text">
                  Developing cryptographic algorithms resistant to quantum attacks. <i>Example:</i> Lattice-based cryptography.
                </p>
                <h4 className="note-subheading">5. Applications:</h4>
                <ul className="note-list">
                  <li>Secure government communications.</li>
                  <li>Protecting financial transactions in a post-quantum world.</li>
                </ul>
              </>
            ),
          },
        ],
      },
  ];
  
  export default cryptographyModules;
  