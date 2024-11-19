const calculusModules = [
    {
        id: 1,
        title: 'Limits and Continuity',
        notes: [
            {
                id: '1.1',
                content: (
                    <>
                        <h3>Concept of a Limit</h3>
                        <p>
                            The limit of a function f(x) as x approaches c is the value that f(x) approaches as x gets arbitrarily close to c. Represented as: <br />
                            <code>lim x → c f(x) = L</code> where L is the limit of f(x) as x → c.
                        </p>
                        <h4>Key Points:</h4>
                        <ul>
                            <li>A limit may exist even if f(c) is undefined.</li>
                            <li>A left-hand limit (<code>lim x → c⁻</code>) considers x approaching c from the left.</li>
                            <li>A right-hand limit (<code>lim x → c⁺</code>) considers x approaching c from the right.</li>
                            <li>For the limit to exist: <code>lim x → c⁻ f(x) = lim x → c⁺ f(x) = L</code></li>
                        </ul>
                        <h4>Examples:</h4>
                        <ul>
                            <li><code>lim x → 2 (3x + 5) = 11</code></li>
                            <li><code>lim x → 0 (sin x / x) = 1</code></li>
                        </ul>
                        <h4>Properties:</h4>
                        <ul>
                            <li><strong>Linearity:</strong> <code>lim x → c [a f(x) + b g(x)] = a lim x → c f(x) + b lim x → c g(x)</code></li>
                            <li><strong>Product:</strong> <code>lim x → c [f(x) * g(x)] = (lim x → c f(x)) * (lim x → c g(x))</code></li>
                            <li><strong>Quotient:</strong> <code>lim x → c (f(x) / g(x)) = (lim x → c f(x)) / (lim x → c g(x)), if lim x → c g(x) ≠ 0</code></li>
                        </ul>
                    </>
                ),
            },
            {
                id: '1.2',
                content: (
                    <>
                        <h3>Continuity and Discontinuity</h3>
                        <h4>Continuity:</h4>
                        <p>
                            A function f(x) is continuous at x = c if:
                            <ul>
                                <li>f(c) is defined.</li>
                                <li><code>lim x → c f(x)</code> exists.</li>
                                <li><code>lim x → c f(x) = f(c)</code>.</li>
                            </ul>
                        </p>
                        <h4>Types of Discontinuity:</h4>
                        <ul>
                            <li><strong>Removable Discontinuity:</strong> Occurs when <code>lim x → c f(x)</code> exists, but f(c) is undefined or not equal to the limit.</li>
                            <li><strong>Jump Discontinuity:</strong> Occurs when <code>lim x → c⁻ f(x) ≠ lim x → c⁺ f(x)</code>.</li>
                            <li><strong>Infinite Discontinuity:</strong> Occurs when <code>f(x) → ∞</code> or <code>f(x) → -∞</code> as x → c.</li>
                        </ul>
                        <h4>Examples:</h4>
                        <ul>
                            <li><strong>Continuous:</strong> <code>f(x) = x² + 3x - 5</code> is continuous for all x in R.</li>
                            <li><strong>Discontinuous:</strong> <code>f(x) =  x + 1 if x ≠ 2; 5 if x = 2 </code> has a removable discontinuity at x = 2.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: '1.3',
                content: (
                    <>
                        <h3>Properties of Continuous Functions</h3>
                        <h4>Arithmetic Operations:</h4>
                        <p>If f(x) and g(x) are continuous at x = c, then:</p>
                        <ul>
                            <li><code>f(x) + g(x)</code> is continuous.</li>
                            <li><code>f(x) * g(x)</code> is continuous.</li>
                            <li><code>f(x) / g(x)</code> is continuous if <code>g(c) ≠ 0</code>.</li>
                        </ul>
                        <h4>Intermediate Value Property:</h4>
                        <p>A continuous function takes every value between f(a) and f(b) for a lessthan b.</p>
                        <h4>Examples:</h4>
                        <ul>
                            <li><strong>Polynomial functions:</strong> <code>f(x) = x² + 2x + 1</code> are continuous everywhere.</li>
                            <li><strong>Rational functions:</strong> <code>f(x) = x / (x + 1)</code> are continuous except where the denominator is zero.</li>
                        </ul>
                    </>
                ),
            },
            {
                id: '1.4',
                content: (
                    <>
                        <h3>Intermediate Value Theorem</h3>
                        <h4>Statement:</h4>
                        <p>
                            If f(x) is continuous on the interval [a, b] and f(a) ≠ f(b), then for any value L between f(a) and f(b), there exists at least one c in (a, b) such that: 
                            <code>f(c) = L</code>.
                        </p>
                        <h4>Applications:</h4>
                        <ul>
                            <li><strong>Existence of Roots:</strong> If <code>f(a) lessthan 0</code> and <code>f(b) greaterthan 0</code>, then <code>f(x) = 0</code> for some x in (a, b).</li>
                        </ul>
                    </>
                ),
            },
            {
                id: '1.5',
                content: (
                    <>
                        <h3>Applications of Limits and Continuity</h3>
                        <h4>Physics:</h4>
                        <p><strong>Instantaneous Velocity:</strong> Velocity at a specific point is defined as: <br />
                            <code>v = lim Δt → 0 (Δs / Δt)</code>
                        </p>
                        <h4>Engineering:</h4>
                        <p><strong>Stress-Strain Analysis:</strong> Continuous functions model material properties under load.</p>
                        <h4>Optimization Problems:</h4>
                        <p><strong>Continuity</strong> is crucial for applying optimization methods like finding maxima or minima.</p>
                        <h4>Economics:</h4>
                        <p><strong>Marginal cost or revenue functions</strong> rely on limits and continuity for accurate modeling.</p>
                    </>
                ),
            },
        ],
        videos: [
            {
                id: '1',
                title: 'Introduction to Limits',
                url: 'https://www.youtube.com/watch?v=JZpt7m5vYYs',
            },
            {
                id: '2',
                title: 'Understanding Continuity in Functions',
                url: 'https://www.youtube.com/watch?v=U9gGeEcn5-k',
            },
        ],
    },
];

export default calculusModules;