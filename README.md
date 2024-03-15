# Switchboard SDK WebAudio Extension Template

> [!NOTE]
> To create a Switchboard SDK extension from C++ code please check out [switchboard-sd/cpp-extension-template](https://github.com/switchboard-sdk/cpp-extension-template).

Welcome to the Switchboard SDK Extension Template repository! This repository provides a starting point for developers looking to create WebAudio extensions for the Switchboard SDK. By using this template, you can quickly set up your development environment and begin building custom functionality for the Switchboard SDK.

## Getting Started

This template repository creates a simple Gain node with the following name: `GainTemplateExtension.GainTemplateNode`. To test the extension with the Switchboard SDK, you can initialize it with the following extension config:

```js
const EXTENSIONS_CONFIG = [
    {
        namespace: "GainTemplateExtension",
        path: `${window.location.origin}/extensions/GainTemplateExtension`,
    }
]
const audioEngine = new WebAudioEngine(EXTENSIONS_CONFIG, SWITCHBOARD_WASM_LOCATION);
```

> [!NOTE]
> For more information about how to use the JS Switchboard SDK, please visit [https://docs.switchboard.audio](https://docs.switchboard.audio).

## Building the Extension

Run the following command to build the extension package:

```bash
npm run build
```


## License

See the LICENSE.txt file for details.

## Contact

If you have any questions or need assistance with the Switchboard SDK or this template, please don't hesitate to contact us:

Email: [hello@synervoz.com](mailto:hello@synervoz.com)

Website: [https://docs.switchboard.audio](https://docs.switchboard.audio)

Happy coding! 🚀
