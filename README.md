# General Chemistry DSL

## Introduction

**Group Project: General Chemistry DSL**

**Group Members:** Iliana Chae, Andrew Kwon, Jaden Suh

## Blockly Program

* What the project is about [Video 1](https://github.com/ilianachae/CPSC354-DSL/tree/main/docs)
* Technical introduction [Video 2](https://youtu.be/vulkog4fGq8)
* [Program](https://ilianachae.github.io/CPSC354-DSL/)
* [Source](https://github.com/ilianachae/CPSC354-DSL/tree/main/src)

## Motivation and Description

A crucial element in both chemistry research and education lies in the ability to comprehend and communicate the interactions between molecules of various elements. When examining a chemical equation, one can verify its balance, compute the reaction stoichiometry, and dissect the equation into partial reactions. Students may find these chemical equations complex and researchers may find their complex research tedious to translate into a digitial medium. Depending on the website or digital tool that is used, chemical elements and their reactions need to be formatted in different ways for the digital tool or website to properly parse the equation. Since our group is comprised of computer science students and a chemistry student, we wanted to explore the development of a chemistry Domain-Specific Language (DSL). This DSL would initially concentrate on inputs and operations related to chemical equations to find an intuitivate way for users to combine elements and represent their reactions. Then behind-the-scenes, the DSL would be able to parse the input to take note of how many atoms of each element are involved in the reaction and perform various analysis and examinations on the components.

### **Functionality, with links to documentation:**

This project was created in Blockly and is currently completely compatible in most web browsers with no additional installations required. In this Blockly-based interface, users are able to snap blocks representing chemical elements and compounds together to create chemical equations. Just as the elements serve as the building blocks of chemistry, elements serve as the building blocks for this project. These building blocks can be seen in [custom_blocks.js](https://github.com/ilianachae/CPSC354-DSL/blob/main/src/custom_blocks.js) where the simplest building block is the individual element itself. These elements can be built into compounds and compounds can be nested within one another to create more complex compounds. Once the desired elements and compounds are constructed, the reactants and products of the desired chemical equation can be defined. Chemical equations are separated into a left-hand side to represent the reactants, and a right-hand side to represent the products. When the equation is built, the equation can be checked for if its in a balanced state by using the check balance block. This block uses a parser defined from the context free grammar that is defined in [block-descriptions](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/block-descriptions.md). Using regular expressions, the input is parsed to check the counts of the elements on both sides of the equation. From a balanced state, other function blocks can be attached to perform different operations on the blocks. Currently, the molar mass block supports checking the molar mass of individual elements by taking the input and trying to find a valid match in the [elements.js](https://github.com/ilianachae/CPSC354-DSL/blob/main/src/elements.js) file. The ChemDoodle block also currently has limited functionality that allows for a 2D visualization of the caffeine compound by using the data in the MOL file for the caffeine compound. The links to MOL file anatomy and ChemDoodle can be found in the [references](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/annotated-references.md). Finally, the workspace is given a default block that represents the balanced equation for the combustion of methane. Instructions for how one could build this equation from scratch in this project can be found [here](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/README.md).

## Future Work

This project can be expanded in countless directions to go with any subfield of chemistry. Some next steps for this project are to finish what was originally planned in the [design plan](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/design2.md) under the functional blocks section.
* The current check balance block is an abbreviated version of the balance the equation block where the current functionality allows the program to parse the block for all of its component elements and count them to check if both the reactant and product sides of the equation are equal. The balance functionality can be implemented by setting up a homogenous linear system using the chemical equation and the counts of the elements. A matrix representation of this homogenous linear system can then be solved using Gauss-Jordan Elimination and the resulting solution can be simplified by the euclidean gcd algorithm. 
* The molar mass block is the implemented version of the element and compound information block. As more information of each element is needed for more complicated chemical analysis, more blocks can be added to obtain different element information from the elements in an equation. Best practice would be to implement each property of elements as a separate block like the molar mass block so users can customize what information they want to retrieve about the elements of an equation by connecting the relevant blocks to the balanced equation.
* The stiochiometry block was not able to be implemented due to time constraints. Therefore, any implementation of stochiometric blocks can be pursued by future contributors to the project.
* Further implementation of compound visualization through ChemDoodle. Current implementation has the framework for loading MOL files so future implementation would focus on adding to that framework. This Will require purchase of a license to make api calls and generate MOL files for visualizations. ChemDoodle does support both 2D and 3D modeling so the modeling could be upgraded to include 3D models as well. 

## Contributions

### Iliana Chae
* Setting up git pages deployment and managing the git repository for [demo](https://ilianachae.github.io/CPSC354-DSL/)
* Created the [preliminary design visual](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/preliminaryDesignVisual.png)
* Bugfixing for program blocks in [custom_blocks.js](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/design-blocks/custom_blocks.js)
* Created the default blocks based program loaded automatically in [defaultBlocks.js](https://github.com/ilianachae/CPSC354-DSL/blob/main/src/defaultBlocks.js)
* Visual of the overall program in [html](https://github.com/ilianachae/CPSC354-DSL/blob/main/src/index.html) and [css](https://github.com/ilianachae/CPSC354-DSL/blob/main/src/styles.css)
* Cleaned up the descriptions in and added the examples to [README.md](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/README.md)
* Presentation [Slides](https://docs.google.com/presentation/d/1HfpvlxIXDG2GBLlXe_3FHCobishMmQMX5mJrZWaJhj0/edit?usp=sharing)
 
### Andrew Kwon
* Testing and bugfixing for program blocks in [custom_blocks.js](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/design-blocks/custom_blocks.js)
* Updated on How to Run and Test [README.md](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/README.md)
* Created the rough draft of [preliminary design visual](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/preliminaryDesignVisual.png)
* Presentation [Slides](https://docs.google.com/presentation/d/1HfpvlxIXDG2GBLlXe_3FHCobishMmQMX5mJrZWaJhj0/edit?usp=sharing)
* Presenter of the Presentation

### Jaden Suh
* Assigned project tasks to group members
* Provided chemistry knowledge
* Technical documentation and video
* Created the groundwork for the blockly-based DSL [design blocks](https://github.com/ilianachae/CPSC354-DSL/tree/main/milestone1/design-blocks)
  * Older history can be found at the now unused [testing repo](https://github.com/JadenSuh/JadenSuh.github.io/tree/main)   
* Future work section and final editing of [README.md](https://github.com/ilianachae/CPSC354-DSL/blob/main/milestone1/README.md)
* Preliminary designs [1](https://github.com/ilianachae/CPSC354-DSL/blob/main/design.md) and [2](https://github.com/ilianachae/CPSC354-DSL/blob/main/design2.md)
* Creation and maintenance of [demo branch](https://github.com/ilianachae/CPSC354-DSL/tree/demo)
* Presenter of the Presentation
