#### Description
This is a micro components of netodos tools

#### Installation : 

**yarn**: `yarn add rn-esteban-section`

**npm**: `npm install rn-esteban-section`


### Example 1

```jsx
import React from 'react'
import { Section } from 'rn-esteban-section'
import { Text } from 'react-native'

function index(props){
 return (
    <Section>
      <Text>This is a simple section, and nothing happens</Text>
    </Section>
 )
}
```

### Example 2

```jsx
import React from 'react'
import { Section } from 'rn-esteban-section'
import { Text } from 'react-native'

function index(props){

 return (
    <Section flex1 w9 row spaceBetween>
      <Section jc >
         <Text> . . .</Text>
      </Section>
      <Section jc >
        <Text> . . . </Text>
      </Section>
    </Section>
 )
}

export default index



 /*
  This code is equivalent to

 
 return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
         <Text> . . .</Text>
      </View>
      <View style={styles.textContainer}>
        <Text> . . . </Text>
      </View>
    </View>
 )
}


 const style = Style.create({
    container : {
      flex : 1,
      widht : '90%',
      justifyContent : 'space-between',
      flexDirection : row
    },
    textContainer : {
      justifyContent : 'center
    }
  })

 */
```


