var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="reactants_or_products" id="g=,kZ]3ID*JqX6)CwYh" x="68" y="78"><value name="TYPE"><block type="element_symbol" id="gf#f6O3$Cy7d=9FtMvL5"><field name="NAME">C</field></block></value><value name="COEFFICIENT"><block type="element_coefficient" id="]8LW%PcWVjh;]46C6B2L"><field name="NAME">1</field></block></value></block><block type="chemical_equation" id="!~4i`|:K78!Ba0*P,dN6"><field name="EquationType">=></field><value name="REACTANTS"><block type="reactants_or_products" id="iHtc4=U^Svv,*f2Ea]1x"><value name="TYPE"><block type="element_symbol" id="n/m,%g1{[v8z)T1ErzNi"><field name="NAME">H</field></block></value><value name="COEFFICIENT"><block type="element_coefficient" id="pkW(dEz10!*V_M!WiVd8"><field name="NAME">4</field></block></value></block></value><value name="PRODUCTS"><block type="reactants_or_products" id="e~V_0N%jyfZjtB/4wEl8"><value name="TYPE"><block type="element_symbol" id="`pQcnIRHbGmaPk!YJ^L["><field name="NAME">CH</field></block></value><value name="COEFFICIENT"><block type="element_coefficient" id="6L1E[uz0gNBbsaJ,o+fE"><field name="NAME">4</field></block></value></block></value></block></value></block></xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);