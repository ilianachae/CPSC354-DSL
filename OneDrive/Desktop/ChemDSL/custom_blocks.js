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
		  .setCheck(["Element", "Compound"]);
		this.appendDummyInput()
		  .appendField("+");
		this.appendValueInput("Element2")
		  .setCheck(["Element", "Compound"]);
		this.setInputsInline(true);
		this.setOutput(true, "EquationInput");
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['chemical_equation'] = {
	init: function() {
		this.appendValueInput("REACTANTS")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([["→","=>"], ["⇌","<==>"]]), "EquationType");
		this.appendValueInput("PRODUCTS")
		  .setCheck(["EquationInput", "Element", "Compound"]);
		this.setInputsInline(true);
		this.setOutput(true, "EquationOutput");
		this.setColour(230);
		this.setTooltip("Insert reactants_or_products onto each side");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['balance_equation'] = {
	init: function() {
		this.appendValueInput("BALANCEDEQUATION")
			.setCheck("EquationOutput")
			.appendField("EQ Balance");
		this.setInputsInline(true);
		this.setOutput(true, "ChemFunction");
		this.setColour(230);
		this.setTooltip("Insert a chemical equation to check for balance");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['demo_function'] = {
	init: function() {
		this.appendStatementInput("NAME")
			.setCheck("ChemFunction");
		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setColour(230);
		this.setTooltip("Dummy Test Function");
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
		ele_name = '(' + ele_name + ')';
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
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
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

Blockly.JavaScript['balance_equation'] = function(block) {
  var equation = Blockly.JavaScript.valueToCode(block, 'BALANCEDEQUATION', Blockly.JavaScript.ORDER_ATOMIC);
  var counts = countElements(equation);
  var reactants = counts.reactants;
  var products = counts.products;

  // Check if the equation is balanced
  var unbalancedElements = [];
  for (var element in reactants) {
    if (reactants[element] !== products[element]) {
      unbalancedElements.push(element);
    }
  }

  // Output the balanced equation or a JavaScript object indicating which elements are not balanced
  var code;
  if (unbalancedElements.length === 0) {
    code = '{equation: "' + equation + '"}';
  } else {
    code = '{error: "The equation is not balanced. Unbalanced elements: ' + unbalancedElements.join(', ') + '"}';
  }

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['demo_function'] = function(block) {
	var contents = Blockly.JavaScript.valueToCode(block, 'REACTANTS', Blockly.JavaScript.ORDER_ATOMIC);
	var code = "This is how a function would work on: " + contents;
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/* Put more custom blocks here */

/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
/*
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};
var workspace = Blockly.inject('blocklyDiv', options);

var workspaceBlocks = document.getElementById("toolbox"); 

Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
*/
function countElements(equation) {
  var sides = equation.split('=>');
  var reactants = sides[0].split('+');
  var products = sides[1].split('+');

  var reactantCounts = {};
  var productCounts = {};

  reactants.forEach(function(reactant) {
    var elements = reactant.match(/[A-Z][a-z]*/g);
    elements.forEach(function(element) {
      if (reactantCounts[element]) {
        reactantCounts[element]++;
      } else {
        reactantCounts[element] = 1;
      }
    });
  });

  products.forEach(function(product) {
    var elements = product.match(/[A-Z][a-z]*/g);
    elements.forEach(function(element) {
      if (productCounts[element]) {
        productCounts[element]++;
      } else {
        productCounts[element] = 1;
      }
    });
  });

  return {
    reactants: reactantCounts,
    products: productCounts
  };
}
