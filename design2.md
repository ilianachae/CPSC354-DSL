# Preliminary Design 2
## Components of the Chemical Equation
### Element Block:
* Used to represent an individual chemical element's atomic symbol (ex. H, He, Li, Be)
* Currently allows the user to type in a string. If the string is longer than 2 characters, it should automatically be rejected. The string is then verified.
* Add an alternative dropdown option where the names are spelled out for those less familiar with chemistry.
1. Get the value from the input block labeled "SYMBOL".
2. Store this value in a variable named "symbol".
3. Create an "Element" object with the "symbol" value.
4. Output the "Element" object with type Element.

### Element Coefficient Block:
* Used to add coefficients in front of elements
* Users can input a number and attach the block in front of elements and molecules
* Could be used for balancing chemical equations
1. Get the numerical value (coefficient) from the field of this block.
2. Output the numerical value as a coefficient.

### Molecule (Compound) Block:
* Used to represent molecules composed of atoms of two or more elements (ex. H2O, O2, NO3)
* Takes 2 inputs of either type Element or Compound
* The lack of a coefficient (to serve as a subscript for elements) and the default value is considered to be 1.
1. Create an empty list called "elements" to store element and quantity pairs.
2. For each sub-block connected to this block:
   a. If it's an "Element" block:
      i. Get the element symbol from the sub-block.
      ii. Get the quantity (e.g., coefficient) from the connected "Element Coefficient" block.
      iii. Add a pair of (element, quantity) to the "elements" list.
   b. If it's another "Molecule" block:
      i. Recursively generate Blockly code for the nested "Molecule" block.
3. Create a "Molecule" object using the "elements" list.
4. Output the "Molecule" object.

### Equation Reactants or Products Block:
* Takes reactants-or-products, molecules and element inputs to form one side of a chemical equation.
1. Get the first element/compound from the first input.
2. Get the second element/compound from the second input.
3. If a sub-block connected to this block is a reactants-or-products block:
     a. Recursively generate Blockly code for the nested "Reactants or Products" block.
5. Combine the two elements/compounds with a plus sign (+) in between.
6. Output the combined elements/compounds as reactants or products.

### Equation Block:
* Takes two reactants or products blocks and forms an equation. The left side is the reactants and the right side is the products.
* Single arrow for a one-way reaction and a double arrow for equilibrium reactions
* Serves as a separater for reactants and products
1. Get the reactants from the first input.
2. Get the selected equation type (forward or equilibrium) from the dropdown.
3. Get the products from the second input.
4. Combine reactants, equation type, and products to form a chemical equation.
5. Output the chemical equation.

## Functional Blocks
### Balance the Equation Block:
* Used to allow the user to have the program balance a chemical equation
1. Get the chemical equation block
2. Parse the equation by the two input blocks to separate reactants and products.
3. Count the number of each type of element on both sides.
     a. Molecules can provide their elements list
     b. Elements are taken with their coefficients, with a default of 1 for no coefficient.
5. Create a system of linear equations based on element counts.
6. Solve the system of linear equations to balance the equation.
7. Output the balanced chemical equation.

### Element and Compound Information Block:
* Used to display individual element information
* Can be helpful in testing to make sure each element is being interpreted properly and that the properties of each element are correct
1. Get the name or symbol of the element or compound as input.
3. Check if the input corresponds to an element or a compound by the type.
4. If it's an element, retrieve information such as atomic number, atomic mass, and symbol through use of the periodic table API.
5. If it's a compound, retrieve information such as molecular formula, molar mass, and common name.
6. Output the retrieved information.

### Equation Information Block: 
* Used to display a description of the equation.
* Type of reaction
* Number of reactants and products
* If the equation is balanced
* Number of atoms on each side
* Bring up the element and compound information blocks
1. Get a chemical equation as input.
2. Parse the input equation to separate reactants and products.
3. Calculate the total number of atoms for each element in the reactants and products.
4. Determine if the equation is balanced or unbalanced based on the atom counts.
5. If the equation is balanced, output a message indicating it's balanced.
6. If the equation is unbalanced, calculate the coefficients to balance it.
7. Output the balanced equation and coefficients.

### Stoichiometry Block(s):
* Could be broken down into other options
* Should only be able to be attached to balanced chemical equations (so through the balance the equation block which should output type BalancedEquation)
* Determine molar ratios of reactants and products
1. Get the mass (in grams) and molar mass (in g/mol) of a substance as input.
2. Calculate the number of moles using the formula: moles = mass / molar mass.
3. Output the calculated number of moles.
* Determine limiting reagent if one exists
1. Get the coefficients and number of moles of reactants as input.
2. Calculate the mole ratio based on the coefficients of reactants.
3. Determine the limiting reactant by comparing the mole ratios.
4. Output the limiting reactant.
* Determine the theoretical yield of a product
1. Get the theoretical yield (in moles) and the actual yield (in moles) as input.
2. Calculate the percent yield using the formula: yield (%) = (actual yield / theoretical yield) * 100.
3. Output the calculated percent yield.
* Convert between mass and moles of a substance
1. Get the number of moles or mass as input.
2. Get the molar mass from data
3. Calculate the mass (in grams) using the formula: mass = moles * molar mass.
4. Output the calculated mass.
* Could add enthalpy calculations in the future
* Could add PVnRT options in the future

## Visualization
![visualization](preliminaryDesignVisual.png)

# Description of Data the Project Needs to Maintain or Interact With
* Data regarding the chemical information of each element needs to be accessible to the project.
* Mainly want access to for the scope of this design:
    * atomic number
    * symbol
    * name
    * atomic mass
* Other information is available on the periodic table elements API:
    * electronicConfiguration
    * electronegativity
    * atomicRadius
    * ionRadius
    * vanDerWaalsRadius
    * ionizationEnergy
    * electronAffinity
    * oxidationStates
    * standardState
    * bondingType
    * meltingPoint
    * boilingPoint
    * density
    * groupBlock
    * yearDiscovered
    * block
    * cpkHexColor
    * period

