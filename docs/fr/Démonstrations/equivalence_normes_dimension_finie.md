# Equivalence des normes en dimension fini

## Théorème

En dimension fini, toutes les [normes]() sont [équivalentes]()

### Preuve

Soit \( E \) un \(\mathbb{K}\text{-ev}\) de dimension finie, i.e. \(\dim(E) = n < +\infty, \ \mathcal{B} = (e_1, \ldots, e_n)\) une base de \(E\) et \(N\) une norme sur \(E\).

Montrons que \(N\) est équivalente à \(N_0\) qui à \(x = \sum_{k=1}^{n} x_k e_k\), associe \(\sup_k |x_k|\).

\[
N(x) = N\left(\sum_{k=1}^n x_k e_k \right) \leq \sum_{k=1}^n N(x_k e_k) \leq \sum_{k=1}^n |x_k| N(e_k) \leq N_0(x) \underbrace{\sum_{k=1}^n N(e_k)}_{= \ a} = a N_0(x)
\]

donc on a :

\[
N(x) \leq a N_0(x)
\]

De plus, en posant :

\[
\begin{array}{rcl}
\phi : (E,N_0) & \to & (\mathbb{R}, |\ . |) \\
x & \mapsto & N(x)
\end{array}
\]

Alors l'inégalité triangulaire nous donne  \(|\phi(x) - \phi(y)| \leq N(x-y) \leq a N_0(x-y)\)

Ainsi \( \phi \) est a-lipschitzienne donc continue

Comme \( S_1 = \{ x \in E \ / \ N_0(x) = 1\} \) est compact (car fermé et borné) alors: 

\[
    \exists x_0 \in S_1 \ / \ \forall x \in S_1, \ \phi(x_0) \leq \phi(x) \ \ ie \ \  N(x_0) \leq N(x)
\]

Ainsi 

\[
    \forall x \in E, \ x \ne 0_E, N(x) = N(\frac{xN_0(x)}{N_0(x)}) = N_0(x)N(\underbrace{\frac{x}{N_0(x)}}_{\in S_1}) \geq N_0(x)\underbrace{N(x_0)}_{= \ b}
\]

Puis il vient

\[
    \forall x \in E, \ bN_0(x) \leq N(x) \leq aN_0(x), \ a > 0, \ b > 0
\]

**CQFD**
