# NewBay

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**NewBay** is an app that connects sellers to buyers. A seller creates her store and add all products she wants to sell from this store. A product has a name, one or more picture(s),a price, a description and/or reviews from previous buyers. A buyer can see all the products, add any of them to their cart, but will be able to complete the buying processs only after she has logged in or signup. After the buyer has paid for a product, the seller will receive a notification about the purchase with the product info and the buyer address info.

<br>

## MVP

_The **NewBay** A working app that shows products that were added by sellers where a buyer can add one of them to her cart and purchased later._

<br>

### Goals

- _Display products from the sellers,_
- _Able to create transaction and buying process._


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _To create the front-end of the app._ |
|   React Router   | _To enable navigations between pages._ |
|   Material UI    | _ Third party UI library._ |
|  Ruby on Rails   | _Back-end framework used._ |
|      Axios       | _For API calls    ._ |


<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Navigation.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ Account.jsx
      |__ Products.jsx
      |__ Product.jsx
      |__ Cart.jsx
      |__ Seller.jsx
      |__ Buyer.jsx
|__ services/
      |__ ApiHelper.js
      |__ User.js
      |__ Products.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Footer     |   class    |   y   |   n   | _The footer will render the contain the info related to the footer._      |
|    Layout    | functional |   n   |   y   | _The layout will contain the header info the Navigation and the footer._ |
|    Account   | functional |   n   |   n   | _The account will user signup or log in._ |
|    Products  | functional |   n   |   n   | _The products will display all the products._               |
|    Product   | functional |   n   |   n   | _The product will display one product though props._       |
|    Cart      |   class    |   y   |   n   | _The cart will allow a buyer to buy._      |
|    Seller    | functional |   n   |   y   | _The seller will be a landing page for the seller ang give her update about sell._ |
|    Buyer     | functional |   n   |   n   | _The buyer will see purchase updates and past purchases._ |


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create lackend      |    H     |     16 hrs      |     - hrs     |    TBD    |
| Create services files |    H     |     3 hrs      |     - hrs     |     TBD     |
| Create layout       |   H      |     3 hrs       |     - hrs     |     TBD    |
| Create users       |   H      |     4 hrs       |     - hrs     |     TBD    |
| Create product      |   H      |     1 hrs       |     - hrs     |     TBD    |
| Create products display |   H      |     3 hrs       |     - hrs     |     TBD    |
| Create cart       |   H      |     6 hrs       |     - hrs     |     TBD    |
| Create seller page       |   H      |     3 hrs       |     - hrs     |     TBD    |
| Create buyer page       |   H      |     3 hrs       |     - hrs     |     TBD    |
| TOTAL               |      H    |     42 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP
- Add reviews

***

## Code Showcase

```
```

## Code Issues & Resolutions

```
```

