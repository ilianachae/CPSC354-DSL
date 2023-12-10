var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml">' +
'<block type="chemical_equation" id="|*nT426^Js?MG3aO+bXD" x="68" y="78">' +
'<field name="EquationType">=></field>' +
'<value name="REACTANTS"><block type="reactants_or_products"></block></value>' +
'<value name="PRODUCTS"><block type="reactants_or_products"></block></value>' +
'</block>' +
'</xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
