var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="reactants_or_products" id="})D1%$Y{Z9R%r+HfjGzi" x="22" y="18"><field name="TYPE">reactants</field></block><block type="chemical_equation" id="VcV6v-xvz*r?X^Fb}C0E"><field name="EquationType">=></field><value name="REACTANTS"><block type="reactants_or_products" id="2$y,^7eEveY(gvRhdder"></block></value><value name="PRODUCTS"><block type="reactants_or_products" id="Q}V3y4St4k1{k*5ZxJGT"></block></value></block></xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
