const DEBUG = false;

/**
 * A vendor defined Switchboard Web SDK Extension
 * @property {string} namespace - The namespace of the extension
 * @property {AudioNode} webAudioNode - The audio node which gets connected up by the engine
 */
class GainTemplateNode {
  namespace = "GainTemplateExtension";
  customGuiDomNode;
  webAudioNode;

  /**
   * Here we setup our extension and save it's duplex node to this.webaudioNode.
   * This is required.
   * @param {AudioContext} audioContext - The audio engines context to operate within
   * @param {object} config - The audio engines context to operate within
   * @param {string} className - The className to initialise within the extension namespace
   * @param {string} publicExtensionsPath - The base path of the publically acessible extension folder
   * @param {fn} populateInitialParametersCallback - The callback to populate the UI's parameters
   * @param {object} eventEmitter - The event emitter used emit events to the audio engine
   *
   */
  async setupExtension(
    audioContext,
    config,
    className,
    publicExtensionsPath,
    populateInitialNodeStateCallback,
    eventEmitter
  ) {
    if (DEBUG)
      console.log(
        "[GainTemplateExtension] - setupModule",
        audioContext,
        config,
        className,
        publicExtensionsPath,
        populateInitialNodeStateCallback,
        eventEmitter
      );

    // This is the node whuch gets connected up to the web audio graph
    this.webAudioNode = audioContext.createGain();

    // Here we populate what paramters to show in the UI
    populateInitialNodeStateCallback({
      title: "Gain",
      parameters: [
        {
          id: "gain",
          label: "Gain",
          description: "A gain parameter",
          template: "vertical-slider",
          step: 0.01,
          defaultValue: 1,
          min: 0,
          max: 1,
        },
      ],
    });
  }

  /**
   * Called when the parameters are changed, you should apply the changes to the extension
   * @param {object} params - An object containing key/pairs of the parameters to be applied
   * This is required.
   */
  setParameters(params) {
    if (DEBUG) console.log("[GainTemplateExtension] setParameters", params);
    if (params.gain) this.webAudioNode.gain.value = params.gain;
  }

  /**
   * If any dynamic values need to be populated, this function is called on requestAnimationFrame
   * All dynamic values that needs updating should be called with dynamicValueUpdateCallback(dynamicValueID, value);
   * * @param {fn} dynamicValueUpdateCallback - The callback to call with updated dynamic values
   *
   * This is required, returns nothing
   */
  requestDynamicValueUpdate(dynamicValueUpdateCallback) {
    if (DEBUG) console.log("[GainTemplateExtension] - requestDynamicValueUpdate");
  }

  /**
   * If you'd like to display your own GUI element, then make sure to include this method.
   *
   * @returns {HTMLElement} - The custom GUI DOM node to be displayed 
   */
  getCustomGuiDomNode() {
    return this.customGuiDomNode;
  }
}

export default GainTemplateNode;
