# Details Fixture

The details fixture adds a panel to RAMP that displays in-depth information about any specific data point on the map. It can be opened by performing an identify query either on the map or through the RAMP API.

## Panels
The details fixture consists of three sections:

1. The __Layer List__ is the vertical column of icons along the left side of the panel. It contains a list of map layers participating in the identify and displays how many results were found for each layer. Clicking on one of these icons will display results for that layer.
2. The __Feature Info__ view displays information about a single result item. This screen will look different depending on the format of the information returned by the identify query. This is also the screen that can be customized using custom templates (see below). Scroll controls can move the view to other results in the layer. The "See List" button will switch to __List View__.
3. The __List View__ contains a list of all results found for the selected layer. Clicking on an item in this list will bring you to the __Feature Info__ screen.

## Creating a Custom Template

If you don't want to use the provided templates for your layer results, you can create your own. The process is simple. All you need to do is create a Vue component and then add the layer-to-template binding to the RAMP configuration file.

The example below explains how to create a basic template for the details panel.

### Example: Creating a Custom Template

__1.__ The first thing you should do is create the Vue component that you want to use as the template. You can do this in various ways, but this example will make use of template literals. If you need to include Javascript that contains more than a single expression, use the `methods` option, as shown below.

To keep this example simple, the template created here will display the name of the point when it is clicked on and call a method to display the point's symbol, if it has one.

```js
rInstance.$element.component('My_Custom_Component', {
        props: ['identifyData'],
        template: `
            <div>
                <span>The feature name is: {{this.identifyData.data['name']}}</span>
                <div v-html="displaySymbol()"/>
            </div>
        `,
        methods: {
            displaySymbol() {
                if (this.identifyData.data['Symbol']) {
                    return `
                        <span>The feature symbol is: ${this.identifyData.data['Symbol']}</span>
                    `;
                }
            }
        }
    }
});
```

__Note:__ it is important that you include the `identifyData` prop in the component since the details fixture will populate it with the results from the identify query. The `identifyData` prop is necessary in order to access the results.


__2.__ Once the custom component has been created, you will want to add your layer to RAMP and set the new component as a custom template in the details fixture. You can do both of these in the configuration file:

```js
const rInstance = RAMP.createInstance(document.getElementById("map"), {
    map: { ... },
    layers: [
        {
            id: 'My_New_Layer',
            layerType: 'esri-feature',
            url: 'http://my-website.example/path/to/esri/layer',
            fixtures: {
                details: {
                    template: 'My_Custom_Template'
                }
            }
        }
    ]
});
```

As shown in the config snippet above, template bindings should be placed under the layer's details fixture configuration. When the details panel first loads, it looks for any template bindings in here. Note that the `template` should match the name of the custom component that you registered on the host page.

After completing these two steps, the custom component should now be displayed when requesting data from `My_New_Layer`.

### Zoom Button Configuration
It is possible to change the icon for the zoom button in the details fixture by using the system variable `zoomIcon`. There are two built-in icons: `globe` and `magnify`. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.

Note that if the grid fixture is added, the zoom icon will be modified there as well.

Example usage which sets the zoom icon to the magnifying glass:
```
{
    configs: {
        en: {
            system: { zoomIcon: 'magnify' }
        }
    }
}
