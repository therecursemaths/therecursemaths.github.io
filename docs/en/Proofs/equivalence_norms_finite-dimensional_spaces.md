# Equivalence of Norms in Finite-Dimensional Spaces

## Theorem

In a finite-dimensional vector space, all [norms]() are [equivalent]().

### Proof

Let \( E \) be a \(\mathbb{K}\)-vector space of finite dimension, i.e. \(\dim(E) = n < +\infty\), with \(\mathcal{B} = (e_1, \ldots, e_n)\) a basis of \(E\), and let \(N\) be a norm on \(E\).

We aim to show that \(N\) is equivalent to \(N_0\), defined by associating to \(x = \sum_{k=1}^{n} x_k e_k\) the value \(\sup_k |x_k|\).

\[
N(x) = N\left(\sum_{k=1}^n x_k e_k \right) \leq \sum_{k=1}^n N(x_k e_k) \leq \sum_{k=1}^n |x_k| N(e_k) \leq N_0(x) \underbrace{\sum_{k=1}^n N(e_k)}_{= \ a} = a N_0(x)
\]

Therefore, we have:

\[
N(x) \leq a N_0(x)
\]

Moreover, consider the function:

\[
\begin{array}{rcl}
\phi : (E,N_0) & \to & (\mathbb{R}, |\cdot|) \\
x & \mapsto & N(x)
\end{array}
\]

The triangle inequality gives us:

\[
|\phi(x) - \phi(y)| \leq N(x - y) \leq a N_0(x - y)
\]

Hence, \(\phi\) is **a-Lipschitz**, and therefore continuous.

Since the unit sphere

\[
S_1 = \{ x \in E \mid N_0(x) = 1 \}
\]

is compact (because it is closed and bounded), we have:

\[
\exists x_0 \in S_1 \text{ such that } \forall x \in S_1, \ N(x_0) \leq N(x)
\]

Then, for all \(x \in E\), with \(x \ne 0_E\), we get:

\[
N(x) = N\left(\frac{x N_0(x)}{N_0(x)}\right) = N_0(x) \cdot N\left(\frac{x}{N_0(x)}\right) \geq N_0(x) \underbrace{N(x_0)}_{= \ b}
\]

Therefore:

\[
\forall x \in E, \quad b N_0(x) \leq N(x) \leq a N_0(x), \quad \text{with } a > 0, \ b > 0
\]

**Q.E.D.**
