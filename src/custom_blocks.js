/* Define custom blocks using Blockly.Blocks object */
  
Blockly.Blocks['element_symbol'] = {
	init: function() {
		this.appendDummyInput()
		  .appendField("Element: ") /* Name that appears on block piece */
		  .appendField(new Blockly.FieldTextInput("H"), "NAME");
		this.setInputsInline(true, "String");
		this.setOutput(true, "Element"); /* output type to allow block connections */
		this.setColour(120);
		this.setTooltip("Enter the chemical symbol for the desired element");
		this.setHelpUrl("https://en.wikipedia.org/wiki/Chemical_symbol");
	}
};

Blockly.Blocks['element_coefficient'] = {
	init: function() {
		this.appendValueInput("COEFFICIENT")
		  .setCheck(["Element", "Compound"])
		  .appendField(new Blockly.FieldNumber(2, 2), "NUMBER");
		this.setInputsInline(true);
		this.setOutput(true, "Compound");
		this.setColour(180);
		this.setTooltip("Type the coefficient for the number the inserted element");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['compound'] = {
	init: function() {
		this.appendValueInput("ELEMENT1")
		  .setCheck(["Element", "Compound"])
		  .appendField("Comp");
		this.appendValueInput("ELEMENT2")
		  .setCheck(["Element", "Compound"]);
		this.setInputsInline(true);
		this.setOutput(true, "Compound");
		this.setColour(120);
		this.setTooltip("Create a compound by inserting two elements");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['reactants_or_products'] = {
	init: function() {
		this.appendValueInput("Element1")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.appendDummyInput()
		  .appendField("+");
		this.appendValueInput("Element2")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.setInputsInline(true);
		this.setOutput(true, "EquationInput");
		this.setColour(230);
		this.setTooltip("Holds reactants or products for the equation");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['chemical_equation'] = {
	init: function() {
		this.appendValueInput("REACTANTS")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["=>"/*"â†’"*/,"=>"], ["<==>"/*"â‡Œ"*/,"<==>"]]), "EquationType");
		this.appendValueInput("PRODUCTS")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.setInputsInline(true);
		this.setOutput(true, "EquationOutput");
		this.setColour(230);
		this.setTooltip("Insert reactants into the left side and products onto the right side side");
		this.setHelpUrl("");
	}
};

/* Code Generator Functions */

Blockly.JavaScript['element_symbol'] = function(block) {
	var var_name = block.getFieldValue('NAME');
	var code = var_name;
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['element_coefficient'] = function(block) {
	var num = block.getFieldValue('NUMBER');
	var ele_name = Blockly.JavaScript.valueToCode(block, 'COEFFICIENT', Blockly.JavaScript.ORDER_NONE);
	if (ele_name) {
		ele_name = '((' + ele_name + '))';
	}
	var code = num + ele_name;
  	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['compound'] = function(block) {
	var element1 = Blockly.JavaScript.valueToCode(block, 'ELEMENT1', Blockly.JavaScript.ORDER_NONE);
	var element2 = Blockly.JavaScript.valueToCode(block, 'ELEMENT2', Blockly.JavaScript.ORDER_NONE);
	var com = element1 + element2;
	var code = com.replace(/ /g, "")
  	return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['reactants_or_products'] = function(block) {
	var element1 = Blockly.JavaScript.valueToCode(block, 'Element1', Blockly.JavaScript.ORDER_ATOMIC);
	var element2 = Blockly.JavaScript.valueToCode(block, 'Element2', Blockly.JavaScript.ORDER_ATOMIC);
	var code = element1 + " + " + element2;
  	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['chemical_equation'] = function(block) {
  var reactants = Blockly.JavaScript.valueToCode(block, 'REACTANTS', Blockly.JavaScript.ORDER_ATOMIC);
  var equationType = block.getFieldValue('EquationType');
  var products = Blockly.JavaScript.valueToCode(block, 'PRODUCTS', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Check if reactants and products are empty
  if (!reactants || !products) {
    return '';
  }
  
  // Format the chemical equation string
  var equation = reactants + ' ' + equationType + ' ' + products;
  
  return [equation, Blockly.JavaScript.ORDER_NONE];
};

/* Premade Compounds */
/* When adding premade compounds, ensure that the code output from the block is valid
   subscripts go in front of parentheses that contain the element or compound that would normally have that subscript */

Blockly.Blocks['h2o'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("H2O");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Water (H2O)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Water");
	}
};

Blockly.JavaScript['h2o'] = function(block) {
	var code = '((2(H)O))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['o2'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("O2");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Molecular Oxygen (O2)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Oxygen");
	}
};

Blockly.JavaScript['o2'] = function(block) {
	var code = '(2(O))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['co2'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("CO2");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Carbon Dioxide (CO2)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Carbon_dioxide");
	}
};

Blockly.JavaScript['co2'] = function(block) {
	var code = '(C2(O))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['nh3'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("NH3");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Ammonia (NH3)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Ammonia");
	}
};

Blockly.JavaScript['nh3'] = function(block) {
	var code = '(N3(H))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['ch4'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("CH4");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Methane (CH4)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Methane");
	}
};

Blockly.JavaScript['ch4'] = function(block) {
	var code = '(C4(H))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['hcl'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("HCl");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Hydrochloric Acid (HCl)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Hydrochloric_acid");
	}
};

Blockly.JavaScript['hcl'] = function(block) {
	var code = '(HCl)';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['ch3cooh'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("CH3COOH");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Acetic Acid (CH3COOH)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Acetic_acid");
	}
};

Blockly.JavaScript['ch3cooh'] = function(block) {
	var code = '(C3(H)COOH)';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['c6h6'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("C6H6");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Benzene (C6H6)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Benzene");
	}
};

Blockly.JavaScript['c6h6'] = function(block) {
	var code = '(6(C)6(H))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['doodledemo'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("Doodle Demo: Caffeine");
			this.setOutput(true, "doodledemo");
			this.setColour(120);
			this.setTooltip("Caffeine (C8H10N4O2)");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Caffeine");
	}
};

Blockly.JavaScript['doodledemo'] = function(block) {
	var code = '(8(C)10(H)4(N)2(O))';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/* ChemDoodle Block */
Blockly.Blocks['chemdoodle'] = {
    init: function() {
        this.appendValueInput("Compound")
            .setCheck("doodledemo") // Now only accepts 'doodledemo' type
            .appendField("ChemDoodle");
        // this.setPreviousStatement(true, "EquationOutput"); // This line is removed to disallow top connection
        this.setColour(230);
        this.setTooltip("Visualize the compound in ChemDoodle");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['chemdoodle'] = function(block) {
    var compound = Blockly.JavaScript.valueToCode(block, 'COMPOUND', Blockly.JavaScript.ORDER_ATOMIC);
    // The actual visualization code will depend on the ChemDoodle API and how it's implemented
    var code = 'visualizeCompound(' + compound + ');';
    return code;
};

// Placeholder function for visualizing the compound using ChemDoodle
function visualizeCompound(compound) {
    console.log('Visualizing compound:', compound);
}

/* Functions */
Blockly.Blocks['balance_equation'] = {
	init: function() {
		this.appendValueInput("BALANCEDEQUATION")
			.setCheck("EquationOutput")
			.appendField("Balance Equation");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setColour(230);
		this.setTooltip("Insert a chemical equation to check for balance");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['balance_equation'] = function(block) {
	var equation = Blockly.JavaScript.valueToCode(block, 'BALANCEDEQUATION', Blockly.JavaScript.ORDER_ATOMIC);
	var separatedEquation = splitEquation(equation);
	var lhs = separatedEquation.r;
	var rhs = separatedEquation.p;
	/* Still need to balance using gaussian elimination */
	return equation
};

Blockly.Blocks['check_balance'] = {
	init: function() {
		this.appendValueInput("BALANCEDEQUATION")
			.setCheck("EquationOutput")
			.appendField("Check Balance: ");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null); // Allow this block to connect to blocks above it
		this.setNextStatement(true, null); // Enables bottom connection if enabled
		this.setColour(230);
		this.setTooltip("True or False Output");
		this.setHelpUrl("");
	}
};

Blockly.JavaScript['check_balance'] = function(block) {
	var equation = Blockly.JavaScript.valueToCode(block, 'BALANCEDEQUATION', Blockly.JavaScript.ORDER_ATOMIC);
	var separatedEquation = splitEquation(equation);
	var lhs = splitByCompounds(separatedEquation.r);
	var rhs = splitByCompounds(separatedEquation.p);
	var balanced = checkBalance(countElements(lhs), countElements(rhs)).toString();
	return balanced;
}; 

Blockly.Blocks['molar_masses'] = {
    init: function() {
        this.appendValueInput("ELEMENT")
            .setCheck("Element")
            .appendField("Get Molar Mass");
		this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip("Gets the molar mass of the element");
        this.setHelpUrl("https://en.wikipedia.org/wiki/Molar_mass");
    }
};

Blockly.JavaScript['molar_masses'] = function(block) {
    var elementSymbol = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC);
    var code;
    if (elements.hasOwnProperty(elementSymbol)) {
        var elementData = elements[elementSymbol];
        if (elementData && elementData.molarMass) {
            var molarMass = elementData.molarMass;
            code = "Molar Mass of " + elementSymbol + ": " + molarMass.toString() + ";\n";
        } else {
            // Handle the case where the molar mass data is not found
            console.error('Molar mass data not found for element:', elementSymbol);
            code = "console.error('Molar Mass data not available for " + elementSymbol + "');\n";
        }
    } else {
        // Handle the case where the element is not found in elements.js and thus not an element (Or a newly discoverd one!)
        console.error('Invalid element:', elementSymbol);
        code = "console.error('Invalid element: " + elementSymbol + "');\n";
		if (elementSymbol.length == 1) {
			console.error('Invalid element:', elementSymbol);
        	code = "console.error('Invalid element: " + elementSymbol + ". Be careful of case sensitivity.');\n";
		}
    }
    return code;
};

// Block definition for dev testing
Blockly.Blocks['test_block'] = {
	init: function() {
		this.appendValueInput("BALANCEDEQUATION")
			.setCheck("EquationOutput")
			.appendField("TEST BLOCK");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setColour(230);
		this.setTooltip("For DEV testing only");
		this.setHelpUrl("");
	}
};

// Block function for dev testing
Blockly.JavaScript['test_block'] = function(block) {
	var equation = Blockly.JavaScript.valueToCode(block, 'BALANCEDEQUATION', Blockly.JavaScript.ORDER_ATOMIC);
	var separatedEquation = splitEquation(equation);
	var lhs = splitByCompounds(separatedEquation.r);
	var rhs = splitByCompounds(separatedEquation.p);
	var balanced = checkBalance(countElements(lhs), countElements(rhs)).toString();
	return balanced;
};

// Splits and equation into its reactants and products
function splitEquation(equation) {
	var equationSplit = equation.split(/<==>|=>/)
	var reactants = equationSplit[0].trim();
	var products = equationSplit[1].trim();
	return {r: reactants, p: products};
}

function splitByCompounds(compounds) {
    return compounds.split('+').map(compound => compound.trim());
}

function countElements(compoundsArray) {
	var elementCounts = {};
	//var toMultiplyElements = {};
	console.log(compoundsArray);
	compoundsArray.forEach(function(compound) {
	  // Match elements and groups with optional leading coefficients
	  var matches = compound.match(/(\d*)(\([A-Za-z0-9]+\)|[A-Z][a-z]*)/g);
	  var leadingCoefArray= compound.match(/(\(\(\(\d+)/);
	  var leadingCoef = null;
	  if (leadingCoefArray) {
		leadingCoef = leadingCoefArray[1].match(/\d+/);
		console.log("LEADING COEF: " + leadingCoef);
		//console.log("matches: " + matches);
		// Code that tries to allow for a leading coefficient to only be applied to the first part of the compound.
		/* var position = compound.indexOf(leadingCoef);
		var lastOpenParenth = -1;
		var lastCloseParenth = -1;
		var openParenthCount = 0;
		var closeParenthCount = 0;
		var ignoreNextClosingParenth = 0;
		console.log("POSITION: " + position);
		for (var i = position; i < compound.length; i++) {
		  if (compound[i] === '(') {
			lastOpenParenth = i;
			openParenthCount += 1;
		  }
		  else if (compound[i] === ')') {
			if (ignoreNextClosingParenth == 1) {
			  ignoreNextClosingParenth = 0
			} else {
			  lastCloseParenth = i;
			  closeParenthCount += 1;
			}
			
		  }
		} */
	  }
	  if (matches) {
		matches.forEach(function(match) {
		  //console.log("Group");
		  //console.log("MATCH: " + match);
		  var groupMatch = match.match(/(\d*)\(([A-Za-z0-9]+)\)/);
		  if (groupMatch) {
			//console.log("GROUP MATCH: " + groupMatch);
			// Distribute the coefficient to each element in the group
			var groupCoefficient = parseInt(groupMatch[1]) || 1;
			//console.log("GROUP COEF: " + groupCoefficient);
			var elementsInGroup = groupMatch[2].match(/(\d*)([A-Z][a-z]*)/g);
			elementsInGroup.forEach(function(element) {
			  var elementMatch = element.match(/(\d*)([A-Z][a-z]*)/);
			  var count = (parseInt(elementMatch[1]) || 1) * groupCoefficient;
			  var elementName = elementMatch[2];
			  if (leadingCoef) {
				  //console.log("GROUP COUNT: " + count);
				  count = count * leadingCoef;
				//console.log("NEW GROUP COUNT: " + count);
			  }
			  elementCounts[elementName] = (elementCounts[elementName] || 0) + count;
			});
		  } else {
			// Single element with or without coefficient
			var elementMatch = match.match(/(\d*)([A-Z][a-z]*)/);
			var count = parseInt(elementMatch[1]) || 1;
			var elementName = elementMatch[2];
			if (leadingCoef) {
				  //console.log("SINGLE COUNT: " + count);
				  count = count * leadingCoef;
				//console.log("NEW SINGLE COUNT: " + count);
			  }
			elementCounts[elementName] = (elementCounts[elementName] || 0) + count;
		  }
		});
	  }
	});
	console.log(elementCounts);
	return elementCounts;
  }

function checkBalance(lhsCounts, rhsCounts) {
    // Get all unique elements from both sides
    const allElements = new Set([...Object.keys(lhsCounts), ...Object.keys(rhsCounts)]);
    for (const element of allElements) {
        if (lhsCounts[element] !== rhsCounts[element]) {
            return false; // Counts are not the same, equation is not balanced
        }
    }
    return true; // elements and counts are equal so equation is balanced
}

/*
	const hydrogen = elements['H'];
	var test = hydrogen.atomicNumber.toString();
	console.log(hydrogen.atomicNumber);
	return test;
*/

function getMolarMass(element) {
    var molarMasses = element.molarMass;
    return molarMasses;
}
