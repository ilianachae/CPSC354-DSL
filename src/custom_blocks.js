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
		  .appendField(new Blockly.FieldDropdown([["=>"/*"→"*/,"=>"], ["<==>"/*"⇌"*/,"<==>"]]), "EquationType");
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
	var code = 'H2(O)';
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
	var code = '2(O)';
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
	var code = 'C2(O)';
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
	var code = 'N3(H)';
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
	var code = 'C4(H)';
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
	var code = 'HCl';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['(ch3)2co'] = {
	init: function() {
			this.appendDummyInput()
			  .appendField("(CH3)2CO");
			this.setOutput(true, "Compound");
			this.setColour(120);
			this.setTooltip("Acetone (CH3)2CO");
			this.setHelpUrl("https://en.wikipedia.org/wiki/Acetone");
	}
};

Blockly.JavaScript['(ch3)2co'] = function(block) {
	var code = '2(C3(H))CO';
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
	var code = 'C3(H)COOH';
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
	var code = '6(C)6(H)';
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
