# Thematic Tutorial
## An experimental way of documentation for the future
This Github repo which takes names from the Sage Theoretic Tutorial documentation and intend to implement the knowl functionality. More precisely, We have the following goals in mind

- Modular basic knowledge in a field. It could look like a CS project documentation with library-like collections of classes of objects, concepts, definitions and nuances. For example,    
    - Field: Algebraic Geometry                
    - Classes and functions: realizations objects/classes of schemes, coherent sheaves; with possible operations: push-forward, pull-back, in which main objects of interest and subtle details are explained, such as what is a sheaf and why a sheaf with locally constant rank might not be a locally free sheaf on a non-reduced scheme. I actually have an old project called "Examples and counterexamples in algebraic geometry", which could serve as some kind of input. This part serves as a more modern way to learn/review  a certain subject. SageMath already does a very good job in certain branches (like group theory and character theory of finite groups), but as you mentioned in the CollScientiae documentation, this could be vastly generalized. 
    
- Database for main tools, methods in different fields. Still take algebraic geometry as an example, this part contains things like
    - Topics: one possible topic is Riemann-Roch type theorems
    - Contents: modular collections of different types of Riemann-Roch theorem: 
        - Grothendieck Riemann-Roch theorem and all its specializations.
        - Arithmetic Riemann-Roch theorem.
        - Equivariant Riemann-Roch theorem
        - Riemann-Roch theorem for stacks, etc.

As in practice, after getting familiar enough with a subject, we don't actually think about the very details that much, instead we use mains tools/methods from it, thus we need another "database of main tools". This part should serve as some kind of users' manual, it contains demonstrations about how to apply certain tool/method/functionality correctly in different situations, with the help of interesting examples and clarifications of common misunderstandings. 

- Thematic tutorials.

This part is based on SageMath's Thematic tutorials part. Personally, I find it very nice to go to SageMath Thematic Tutorial Page, and get a general view/review of a subject and important constructions in the subject without being bothered too much by all the subtle details. For example, the [Lie Methods and Related Combinatorics in Sage](https://doc.sagemath.org/html/en/thematic_tutorials/lie.html) is very nice, if it has the knowl functionality, it could be even better. 

- Projects catalog/War stories.

In real research, we always take knowledge and tools from different branches and create new ones to attack a certain problem, however the "trails" or "paths" are always buried in and blured by tons of related papers/books. It would be nice if we have a catalog of nice porjects (like [War stories catalog](http://www.algorist.com/)), which could serve as a guide for students and young researchers to get a feeling of real researches and appreciate certain project more with the help of all modern tools like SageMath. 

An example comes to my mind is Deligne's proof of the Weil conjectures, where representation theory of semi-simple Lie groups, l-adic sheaves and cohomology in algebraic geometry, L-functions, Frobenius traces and exponential sums from number theory, and newly created concepts like Deiligne's weights are combined in such a nice way to give a proof of Weil conjectures. With related knowledge/tools in different branches being modularized, it should be easy to collect/arrange needed materials in a project in a dynamic and modern way, on the one hand, it shows the actual "journey" more clearly, on the other hand, people can get hands dirty by working out certain aspect with the help of SageMath-like tools, such as computing Rankin-Selberg convolution associated to the tensor product of two representations explicity.  


As a first ambitious goal, a concrete incarnation of the ideals above could be
- A CS-flavoured implementation and/or documentation of basic algebraic geometry. This could be a modern version of Hartshorne GTM52.
- A tool database. This contains topics like spectral sequences and trace formulas, localizations in algebraic geometry.
- A thematic tutorial on basic algebraic geometry. This contains a bird-eye view of different aspects of algebraic geometry such as cohomological/homological aspect, moduli aspect, birational aspect etc. With an introduction/demonstration to related computational tools provided by SageMath, Macaulay2, Mathematica, etc.
- A project catalog. This contains chapters about, say, Deligne's proof of the Weil conjectures, proof of the Verlinde formulae, etc. 

And when people do their own study/research, they can always contribute to the modularized knowledge database. Although we already have things like Wikipedia, SageMath, Google, but I really think something like CollScientiae should be the future.
