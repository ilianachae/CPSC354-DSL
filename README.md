# CPSC354-DSL

## Introduction
**Group Project: General Chemistry DSL**

**Group Members:** Iliana Chae, Andrew Kwon, Jaden Suh

An important aspect of both chemistry research and chemistry education is being able to understand and share the reactions between molecules of elements. When looking at a chemical equation, you can check that its balanced, calculate the reaction stoichiometry and separate the equation into partial reactions. While there are many more interesting things that can be performed on chemical equations, such as visualizations, our group is interested in creating a chemistry DSL that would start by focusing on inputs and manipulations for chemical equations.

This project was created in Blockly. In this Blockly-based interface, users are able to snap blocks representing chemical elements and compounds together to create chemical equations. Just as the elements serve as the building blocks of chemistry, elements serve as the building blocks for this project. Chemical equations are separated into a left-hand side to represent the reactants, and a right-hand side to represent the products. When the equation is built, the balance check block should be applied to ensure that the equation is valid. From the balanced state, other function blocks can be attached to perform different operations on the blocks.

The focus of the project is to create the building blocks of a chemistry DSL and provide a foundation for any future work on the topic. The chemical equations are parsed using regular expressions to  

The creation of chemical equations would be performed through parsing of the blocks. Just as in code where a parser would analyze a string of input and separate it into the language relevant components, the parsing here would anaylze the blocks used to create the chemical equations and determine which elements and molecules are involved, how many of each element and molecule is involved, and the type of equation that is being created. Interpretation of those blocks would be done to perform operations and maintain the logic of chemistry by transforming the block-based representation of chemiscal equations into the desired chemical operations. In the case of interpretation, the blocks would be similar to a high-level language.

Context Free Grammar for Elements:


## Blockly Demo Link
[Demo Link](https://ilianachae.github.io/CPSC354-DSL/) \
[Source Link](https://github.com/ilianachae/CPSC354-DSL/tree/main/milestone1/design-blocks)

## Final Version
[Program Link]()


