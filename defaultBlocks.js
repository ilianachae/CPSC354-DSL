var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml">' +
  '<block type="chemical_equation" id="|*nT426^Js?MG3aO+bXD" x="68" y="78">' +
  '<field name="EquationType">=></field>' +
  '<value name="REACTANTS"><block type="reactants_or_products"> +
   '<value name="Element1"><block type="element_symbol"><field name="NAME">C</field></block></value>' +
   '<value name="Element2"><block type="element_symbol"><field name="NAME">H4</field></block></value>' +
  '</block></value>' +
  '<value name="PRODUCTS"><block type="reactants_or_products">' + 
    '<block type="element_symbol"><field name="NAME">CH4</field></block></value>' +
    '<value name="Element2"><block type="element_coefficient"><field name="NUMBER">2</field>' +
    '<value name="COEFFICIENT"><block type="element_symbol"><field name="NAME">O2</field></block></value>' +
    '</block></value></block></value>' +
  '</block></value>' +
  '</block>' +
  '</xml>';

// '<block type=""></block>' +

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
