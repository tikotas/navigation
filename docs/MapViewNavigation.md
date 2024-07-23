# `<MapViewNavigation />` Component API

`MapViewNavigation` is the primary component in map-navigation-v that contains the navigation manager.

## Props

| Prop                       | Type       | Default    | Note                                                                                                                      |
|----------------------------|------------|------------|---------------------------------------------------------------------------------------------------------------------------|
| `apiKey`                   | `string`   | (Required) | A Google API key that has the Direction API enabled. See below for more  information.                                     |
| `language`                 | `string`   |            | A language identifier passed to various submodules. This is useful to show directions in the specific countries language. |
| `map`                      | `function` |            | A function that is called to obtain the map instances.                                                                    |
| `origin`                   | `any`      |            | A string or object that identifies the origin                                                                             |
| `destination`              | `any`      |            | A string or object that identifies the destination                                                                        |
| `maxZoom`                  | `string`   |            |                                                                                                                           | 
| `minZoom`                  | `string`   |            |                                                                                                                           |
| `animationDuration`        | `string`   |            |                                                                                                                           |
| `navigationMode`           | `string`   |            |                                                                                                                           |
| `navigationViewingAngle`   | `string`   |            |                                                                                                                           |
| `navigationZoomLevel`      | `string`   |            |                                                                                                                           |
| `directionZoomQuantifier`  | `string`   |            |                                                                                                                           |
| `routeStepDistance`        | `string`   |            |                                                                                                                           |
| `routeStepInnerTolerance`  | `string`   |            |                                                                                                                           |
| `routeStepCenterTolerance` | `string`   |            |                                                                                                                           |
| `routeStepCourseTolerance` | `string`   |            |                                                                                                                           |
| `displayDebugMarkers`      | `string`   |            |                                                                                                                           |

## Events

| Prop       | Type     | Default | Note                                                                                                                                                                                 |
|------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `provider` | `string` |         | The map framework to use. <br/><br/>Either `"google"` for GoogleMaps, otherwise `null` or `undefined` to use the native map framework (`MapKit` in iOS and `GoogleMaps` in android). |

## Methods

| Method Name     | Arguments                                                                  | Notes               |
|-----------------|----------------------------------------------------------------------------|---------------------|
| `navigateRoute` | `location: LatLng`, `bearing: Number`, `angle: Number`, `duration: Number` | Navigates the route |