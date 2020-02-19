var sketch = require('sketch');

const IDEAL_VALUES = {
  6: { characterSpacing: 0.043, lineHeight: 8 },
  7: { characterSpacing: 0.032, lineHeight: 10 },
  8: { characterSpacing: 0.024, lineHeight: 11 },
  9: { characterSpacing: 0.016, lineHeight: 13 },
  10: { characterSpacing: 0.01, lineHeight: 14 },
  11: { characterSpacing: 0.005, lineHeight: 15 },
  12: { characterSpacing: 0, lineHeight: 17 },
  13: { characterSpacing: -0.0025, lineHeight: 18 },
  14: { characterSpacing: -0.006, lineHeight: 20 },
  15: { characterSpacing: -0.009, lineHeight: 21 },
  16: { characterSpacing: -0.011, lineHeight: 22 },
  17: { characterSpacing: -0.013, lineHeight: 24 },
  18: { characterSpacing: -0.014, lineHeight: 25 },
  20: { characterSpacing: -0.017, lineHeight: 28 },
  24: { characterSpacing: -0.019, lineHeight: 34 },
  30: { characterSpacing: -0.021, lineHeight: 42 },
  40: { characterSpacing: -0.022, lineHeight: 56 },
  80: { characterSpacing: -0.022, lineHeight: 112 }
};

(function() {
  const document = sketch.getSelectedDocument();

  const selectedLayers = document.selectedLayers;
  const selectedCount = selectedLayers.length;

  if (selectedCount !== 0) {
    console.log('Selected layers:');
    selectedLayers.forEach(function(layer) {
      if (layer.type === 'Text') {
        adjustFontForLayer(layer);
        sketch.UI.message(
          `🙌 ${selectedCount} layer${
            selectedCount === 1 ? '' : 's'
          } was corrected`
        );
      } else {
        sketch.UI.message('😁 This plugin only works on text layers.');
      }
    });
  } else {
    sketch.UI.message(
      '😊 Please select the text layer that you want to adjust.'
    );
  }
})();

function adjustFontForLayer(layer) {
  const idealValues = IDEAL_VALUES[layer.style.fontSize];
  if (idealValues) {
    layer.style.lineHeight = idealValues.lineHeight;
    layer.style.kerning = idealValues.characterSpacing;
  }
}
