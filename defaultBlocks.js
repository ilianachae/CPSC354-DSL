var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml">' +
  '<block type="chemical_equation" id="|*nT426^Js?MG3aO+bXD" x="68" y="78">' +

  '<value name="REACTANTS"><block type="reactants_or_products" id="7znB^lm.*76=$cfE_3rX">' +
  '<value name="Element1"><block type="ch4"></block></value>' +
  '<value name="Element2"><block type="element_coefficient" id="_OOsz0y!G?ZALI6*!p:0"><field name="NUMBER">2</field>' +
  '<value name="COEFFICIENT"><block type="o2" id="~y[MCf2?m(5ttw;tYt+z"></block></value></block></value>' +

  '<field name="EquationType">=></field>' + 
  
  '<value name="PRODUCTS"><block type="reactants_or_products" id="k)Q]$^YH;K77M[S%?:31">' + 
  '<value name="Element1"><block type="co2"></block></value>' +
  '<value name="Element2"><block type="element_coefficient" id="A[Y|QmJ8,)wWo6TU-[Xt"><field name="NUMBER">2</field>' +
  '<value name="COEFFICIENT"><block type="h2o" id="sYHQvj3I3*+5jya=0}0("></block></value></block></value>' +
  '</block></value></block>' +
  '</xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
