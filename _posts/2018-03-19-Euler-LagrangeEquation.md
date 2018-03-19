---
layout:     post
title:      Fermat's Principle and Euler-Lagrange Equation 
subtitle:   Calculus of variations
date:       2018-03-19
author:     Oooctopus
header-img: img/img-post-bg-ELEquation.jpg
catalog: true
tags: Calculus-of-variations Underwater Acoustic
---

> The minimum sound travelling time

<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>

## Fermat's Principle
The reflection, refraction, and wave speed of sound may all seem like disconnected or (at best) largely unrelated concepts. But in truth, they are all tied together with a concept known as “Fermat’s Principle”, also known as the “Principle of least time”. This principle states that a wave moving from one point to another follows the path that minimizes its travel time between those two points. Using this principle, we can determine that a wave reflecting off a flat mirror will bounce off at an angle equal to its arrival angle, which is both intuitive and correct. We might also derive the more complex behavior of refraction, which follows a law known as Snell’s law. Without going into the math, this law shows that a wave will bend to steeper angles in slower media, which is often described as “waves bend towards lower speeds”, or, as I often remember it, “waves are lazy”. Of course, if you want to dig into the nitty gritty, Richard Feynman does this much better than I ever could. For more details please see http://acousticstoday.org/10-world-sound-reflection-refraction-principle-least-time/.

## Euler-Lagrange Equation
Euler-Lagrange Equation gives the necessary condition for an extremum of a function of the type
<center> $$I(x) = \int_{a}^{b} F(x(t),x'(t),t)dt$$ </center>
with various types of boundary conditions. The necessary condition is in the form of a differential equation that the extremal curve should satisfy, and this differential equation is called the Euler-Lagrange equation.
The simplest type of boundary conditions, where the curves are allowed to vary between two fixed points.

### The simplest optimisation problem
Let $$F(\alpha,\beta,\gamma)$$ be a function with continuous first and second partial derivatives with respect to $$(\alpha,\beta,\gamma)$$. Then find $$x \in C^1[a,b]$$ such that $$x(a)=y_a$$ and $$x(b)=y_b$$, and which is an extremum for the function
<center> $$I(x) = \int_{a}^{b} F(x(t),x'(t),t)dt$$ </center>
where the class of admissible curves comprises all smooth curves joining two fixed points, see the following figure.
We will apply the necessary condition for an extremum (established in Theorem 1.)
<center>![avatar](C:\Users\Administrator\Desktop\周报_latex\Euler-Lagrange.jpg)</center> 
Theorem 1. Let $$S = \{x \in C^1[a,b] | x(a) = y_a \ \text{and} \ x(b)=y_b\}$$, and let $$I: S \rightarrow \mathbb{R}$$ be a function of the form
<center> $$I(x) = \int_{a}^{b} F(x(t),x'(t),t)dt$$ </center>
If $I$ has an extremum at $x_0 \in S$, then $x_0$ satisfies the Euler-Lagrange equation: 
<center> $$\frac{\partial{F}}{\partial{\alpha}}\big(x_0(t),x'_0(t),t\big) - \frac{d}{dt}\Big(\frac{\partial{F}}{\partial{\beta}}(x_0(t),x'_0(t),t)\Big) = 0, t \in [a,b].$$ </center>
Note that the Euler-Lagrange equation is only a necessary condition for the extremum. However, in many cases, the Euler-Lagrange equation by itself is enough to give a complete solution of the problem. In fact, the existence of
an extremum is sometimes clear from the context of the problem. If in such scenarios, there exists only one solution to the Euler-Lagrange equation, then this solution must a fortiori be the point for which the extremum is achieved.