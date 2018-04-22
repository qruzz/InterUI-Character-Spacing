function adjustFontForLayer(layer) {
  let fontSize = layer.fontSize();

  let characterSpacings = {
    6: 0.33,
    7: 0.264,
    8: 0.204,
    9: 0.144,
    10: 0.108,
    11: 0.072,
    12: 0.042,
    13: 0.018,
    14: 0.006,
    15: -0.012,
    16: -0.024,
    17: -0.036,
    18: -0.048,
    20: -0.05,
    24: -0.078,
    30: -0.09,
    40: -0.096
  };

  if (characterSpacings[fontSize] != nil) {
    return layer.setCharacterSpacing(characterSpacings[fontSize]);
  }
}

export default function(context) {
  const selectedLayers = context.selection;
  const selectedCount = selectedLayers.length;

  selectedLayers.forEach((layer) => {
    if (layer.isKindOfClass(MSTextLayer)) {
      const fontName = layer.fontPostscriptName();

      if (fontName.hasPrefix("InterUI") || fontName.hasPrefix("Inter UI")) {
        adjustFontForLayer(layer);
        if (selectedCount === 1) {
          context.document.showMessage(`🙌 ${selectedCount} layer was corrected`);
        } else {
          context.document.showMessage(`🙌 ${selectedCount} layers were corrected`);
        }
      }
    } else {
      context.document.showMessage(`Plugin only works on text layers 😁`);
    }
  });
}
