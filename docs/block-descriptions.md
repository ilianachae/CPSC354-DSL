# Description of Blocks and Their Functions

For more information on specific blocks and other blocks that were originally planned to be added, check [design2.md](https://github.com/ilianachae/CPSC354-DSL/blob/main/docs/design2.md)

## Element Builder Blocks

Blocks in this category are used to define elements and combine elements to form compounds. The number of each element and compound can then also be adjusted by adding a coefficient in front of them.

* element_symbol: Enter the chemical symbol for the desired element. Case sensitive. The element should always start with a capital letter and can be followed by lowercase letters (ex. H, Lu, Uuq)
* element_coefficient: Type the coefficient for the number of the inserted element or compound. Effectively multiplies the number of said element or compound by the selected coefficient.
* compound: Create a compound by inserting two elements or compound. Allows for the create of more complex compunds by adding elements or other compounds together.

## Common Compounds Blocks:

Blocks in this category are preconstructed compounds that users may need to use frequently. More blocks can be added to this category by users if they expect that they'll reuse a compound.

* h2o: Water (H2O).
* o2: Molecular Oxygen (O2).
* co2: Carbon Dioxide (CO2).
* nh3: Ammonia (NH3).
* ch4: Methane (CH4).
* hcl: Hydrochloric Acid (HCl).
* ch3cooh: Acetic Acid (CH3COOH).
* c6h6: Benzene (C6H6).
* doodledemo: Doodle Demo: Caffeine. This block is strictly for attachment to the chemdoodle function block to visualize elements. Provides the MOL data to the chemdoodle block to render a visualization.

## Equation Builder Blocks:
* reactants_or_products: Holds reactants or products for the equation. Should be used when either the reactants side (left hand side) or products side (right hand side) need to have more than one element or compound.
* chemical_equation: Insert reactants into the left side and products onto the right side.

## Functions Blocks:
* molar_masses: Gets the molar mass of the element and serves as a block that can check the validity of each element.  Checks the provided element symbols against the elements dictionary that is currently provided by the elements.js file. This elements dictionary can be replaced in the future with API calls or it can be expanded on by providing more element details.
* check_balance: True or False Output. Parses the left hand side and right hand side of the equation block for element symbols and checks if their quantities are equal. This is done using regular expressions that were created off of the following context free grammar:
    + Equation (root) = React/Prod (Plus React/Prod)* Equals React/Prod (Plus React/Prod)*
    + React/Prod = (ChemElem | Compound | React/Prod) (Plus (ChemElem | Compound | React/Prod))*
    + Compound = Number? (ChemElem | Compound)
    + ChemElem = Number? (Name)
    + Plus = "+"
    + Number = Digit+
    + Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    + Name = Letter (LowerLetter)*
    + Letter = "A" | "B" | ... | "Z"
    + LowerLetter = "a" | "b" | ... | "z"
* chemdoodle: Visualize the compound in ChemDoodle. Currently only accepts the doodledemo block to visualize the structure of caffeine. For additional functionality implementation, a user would need to purchase a license from ChemDoodle to make api calls or they can download the desktop version of chemDoodle and draw their own compounds.

# Dev Testing Block:
* test_block: For DEV testing only. An extra block that can be uncommented in custom_blocks.js and index.html to appear back in the workspace. Allows a user to test a new function they would want to add without needing to define a new block in the workspace. 
