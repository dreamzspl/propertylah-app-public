# Module 4 Project - PropertyLah Mobile App (iOS/Android)

## Background

This is a clone app of PropertyGuru.

## Architecture File/Folder Structure

### Screens

The app uses Drawer as the primary navigation structure and the following screens are registered:

1. AuthScreen (Daniel)
1. PropertiesScreen (Xin Kai)
1. QnAScreen (Poh Liang and Tino)
1. ArticlesScreen (Melissa)

You may nest stack navigators as needed in your own folders.

### Components

Resuable components can be placed in the components folder.

### Images

All app images can be stored in assets/images. For other images e.g. property images, it will be stored on the server and loaded using the uri method.

## APIs

An instance of propertylah backend will be setup for CRUD operations.

To be updated...

## Styling

For consistent, uniform styles throughout the entire app, we can load the common styles file from styles/common
`import { styles, textStyles } from "../../styles/common";`

The color palette from can be loaded from common/colors.js
`import Colors from "../../constants/colors";`

You can also use your own custom styles or merge with the app-wide styles.

Please see screens/sample/SampleScreen.js for a basic example.

## Platform Specific UI/Component

To be worked on later...
