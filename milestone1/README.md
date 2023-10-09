# CPSC354-DSL Milestone 1

## Demo Link
Go to [Demo Site](https://ilianachae.github.io/CPSC354-DSL/)

## How to Run and Test

A compiler from a blockly general chemistry DSL to JavaScript.

The program uses JavaScript variables and functions to implement the equation of chemistry elements and compounds.

### Use Element Builder blocks to make different elements

* You can type a chemical symbol (H, He, Li, Be) in the element block.
* You can enter any integer greater than 2 into the coefficient block and insert an element or compound into it.
 * Elements and compounds without coefficients are treated as if they have a coefficient of 1, which is omitted when printing. 
* You can create a compound by inserting element blocks or compound blocks into the compound block. 

#### Example for creating elements and compounds
1. Create the element H from "Element Builder"
2. Create the element C from "Element Builder"
3. Create a coefficient block with a coefficient of 4 from "Element Builder".
4. Insert the element H block made in step 2 into the coefficient block made in step 3.
5. Create a compound block from "Element Builder" and insert the 4H along with the C into it.
6. You've just created CH4 (represented as C4H), also known as methane!

### Use Equation Builder to write the equation among the elements

* Products/Reactants: You can group elements and compounds together to distinguish which are reactants and which are products.
* Chemical Equation: You can create a model chemical equation with reactants, products and reaction type.
* Single arrow is a forward, one-way reaction and double arrow is an equlilbrium, two-way reaction.

#### Example for creating equations
1. Follow the example for creating elements and compounds to create C4H.
2. Create 2(2(O)) by nesting a coefficient block in another coefficient block and inserting the element O.
3. Create C(2(O)) by creating a compound block to combine the element C with the element O with coefficient 2.
4. Create 2(2(H)O) by creating a coefficient block containing a compound block with 2H and O.
5. Create an equation block (The block with the dropdown arrows) from "Equation Builder".
6. Create two reactants/products blocks (The block with the " + ") from "Equation Builder".
7. In the first reactants/products block, insert the C4H and the 2(2(O)).
8. In the second reactants/products block, insert the C(2(O)) and the 2(2(H)O).
9. Insert the first reactants/products block into the left hole of the equation block.
10. Insert the second reactants/products block into the right hole of the equation block.
11. You've just created the equation for the combustion of methane! CH4 + 2 O2 => CO2 + 2 H2O represented as (C4(H)) + (2(2(O))) => (C2(O)) + (2(2(H)O));

### Generating and Saving Code
* The Generate Code button generates the code that represents the contents of the blockly workspace.
* The Save Code button generates code and allows the user to download and save it as a javascript file to a location of their choosing.
 


