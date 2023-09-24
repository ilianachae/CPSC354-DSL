Blockly.Blocks['element'] = {
    init: function() {
        this.appendValueInput('Symbol')
            .setCheck("String")
            .appendField("");
        this.setInputsInline(true);
        this.setColour(120);
        this.setTooltip('Enter the chemical symbol for the desired element');
        this.setHelpUrl('https://en.wikipedia.org/wiki/Chemical_symbol');   
    },
    validate: function() {
        const symbol = this.getFieldValue('Symbol');
        const apiUrl = `https://periodic-table-elements-info.herokuapp.com/element/symbol/${symbol}`;
    
        // Use fetch to attempt to fetch the element data
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              // Invalid symbol or API request failed
              this.setWarningText('Invalid symbol. Please enter a valid chemical symbol.');
            } else {
              // Valid symbol and API request succeeded
              this.setWarningText(null); // Clear any previous error message
            }
          })
          .catch(error => {
            console.error('Error:', error);
            this.setWarningText('Error occurred while validating the symbol.');
          });
      },
  };