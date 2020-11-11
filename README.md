# React Native Esteban Section

React Native primitive View section component for theme creation.

## Warning 
This is not a complete documentation of this component, please explore the component code to show more props or feel free to make a pull request for add more style modifiers.

## installation
You only need 1 steps to get started

Step 1) 
```bash
npm install rn-esteban-section
```

## Usage


```jsx
import React from 'react'
import { Section } from 'rn-esteban-section'


function index(props){
 return (
    <Section row w10>
      <Section w5 mh5>
        ...
      </Section>
      <Section w5 mh5>
        ...
      </Section>
    </Section>
 )
}
export default index
```

## flexDirection
| Prop   | Value | Style modifier |
| :----- | ----: | -------------- |
| row    |  true | flexDirection  |
| column |  true | flexDirection  |

## Width

| Prop | Value |
| :--- | ----: |
| w1   |   10% |
| w2   |   20% |
| ...  |   ... |
| w10  |  100% |

## marginBottom

| Prop | Value |
| :--- | ----: |
| mb1  |    10 |
| mb2  |    20 |
| ...  |   ... |
| mb10 |   100 |

## minHeight

| Prop  | Value |
| :---- | ----: |
| mh1   |    10 |
| mh2   |    20 |
| ...   |   ... |
| mh100 |   100 |


## marginRight

| Prop | Value |
| :--- | ----: |
| mr1  |    10 |
| mr2  |    20 |
| ...  |   ... |
| mr10 |   100 |


## paddingHorizontal

| Prop | Value |
| :--- | ----: |
| ph1  |     1 |
| ph2  |     2 |
| ...  |   ... |
| ph15 |    15 |



## height
| Prop     | Value |
| :------- | ----: |
| height1  |    20 |
| height2  |    40 |
| ...      |   ... |
| height10 |   200 |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)