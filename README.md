# CPSC354-DSL

## Introduction
**Group Project: General Chemistry DSL**

**Group Members:** Iliana Chae, Andrew Kwon, Jaden Suh

An important aspect of both chemistry research and chemistry education is being able to understand and share the reactions between molecules of elements. When looking at a chemical equation, you can check that its balance, calculate the reaction stoichiometry and separate the equation into partial reactions. While there are many more interesting things that can be performed on chemical equations, such as visualizations, our group is interested in creating a chemistry DSL that would start by focusing on inputs and manipulations for chemical equations.

We will be creating this project in Blockly. In this Blockly-based interface, users would be able to snap blocks together to create chemical equations. Other blocks could be snapped onto the chemical equations to perform different functions like calculating stoichiometric values or checking for balance. This would require parsing and interpretation of input to accomplish.

The creation of chemical equations would be performed through parsing of the blocks. Just as in code where a parser would analyze a string of input and separate it into the language relevant components, the parsing here would anaylze the blocks used to create the chemical equations and determine which elements and molecules are involved, how many of each element and molecule is involved, and the type of equation that is being created. Interpretation of those blocks would be done to perform operations and maintain the logic of chemistry by transforming the block-based representation of chemiscal equations into the desired chemical operations. In the case of interpretation, the blocks would be similar to a high-level language.

## Blockly Demo Link
We're currently having trouble managing the conversion of blockly code to js but we managed to make some blocks although in the demo you can't really interact with them yet to customize inputs\
[Demo Link](https://jadensuh.github.io/)

For testing the program and fixing some minor issues of the program, we are working on the demo program at [Public Git Repository of Demo Program](https://github.com/JadenSuh/JadenSuh.github.io).

We are going to move the program after we fix some issues.
