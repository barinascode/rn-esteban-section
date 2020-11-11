import React from 'react'
import { View } from 'react-native'

function index( props ){

  const { ph1, ph2, ph3,ph4, ph5, ph6, ph7, ph8, ph9, ph10,ph11, ph12, ph13, ph14, ph15 } = props
  const { mb10, mb20, mb30, mb40, mb50, mb60, mb70, mb80, mb90, mb100 } = props
  const { mr10, mr20, mr30, mr40, mr50, mr60, mr70, mr80, mr90, mr100 } = props
  const { mh1, mh2, mh3, mh4, mh5, mh6, mh7, mh8, mh9, mh10 } = props
  const { height1, height2, height3, height4, height5, height6, height7, height8, height9, height10 } = props
  const { w1, w2, w3, w4, w45, w5, w6, w7, w8, w9, w10 } = props
  const { fullCenter, children, row, column } = props
  const { jc } = props
  const { alignRight } = props
  const { flex1 } = props
  const { style } = props
  
  const styles = {}

  if( fullCenter ){
    styles.justifyContent= 'center'
    styles.alignItems= 'center'
  }

  if(props.spaceBetween)
    styles.justifyContent = 'space-between'

  if( flex1 )
    styles.flex = 1

  if( jc )
    styles.justifyContent = 'center'

  if( alignRight )
    styles.alignItems = 'flex-end'

  if( alignLeft )
    styles.alignItems = 'flex-start'


  /*
    @Distribuion section
  */
  if( row )
    styles.flexDirection = 'row'

  if( column )
    styles.flexDirection = 'column'




  if( w1 )
    styles.width = '10%'

  if( w2 )
    styles.width = '20%'

  if( w3 )
    styles.width = '30%'

  if( w4 )
    styles.width = '40%'

  if( w45 )
    styles.width = '45%'

  if( w5 )
    styles.width = '50%'

  if( w6 )
    styles.width = '60%'

  if( w7 )
    styles.width = '70%'

  if( w8 )
    styles.width = '80%'

  if( w9 )
    styles.width = '90%'

  if( w10 )
    styles.width = '100%'



  if( mh1 )
    styles.minHeight = 10

  if( mh2 )
    styles.minHeight = 20

  if( mh3 )
    styles.minHeight = 30

  if( mh4 )
    styles.minHeight = 40

  if( mh5 )
    styles.minHeight = 50

  if( mh6 )
    styles.minHeight = 60

  if( mh7 )
    styles.minHeight = 70

  if( mh8 )
    styles.minHeight = 80

  if( mh9 )
    styles.minHeight = 90

  if( mh10 )
    styles.minHeight = 100



  if(mb10)
  styles.marginBottom = 10
  
  if(mb20)
    styles.marginBottom = 20

  if(mb30)
    styles.marginBottom = 30

  if(mb40 )
    styles.marginBottom = 40

  if(mb50 )
    styles.marginBottom = 50

  if(mb60 )
    styles.marginBottom = 60

  if(mb70 )
    styles.marginBottom = 70

  if(mb80 )
    styles.marginBottom = 80

  if(mb90 )
    styles.marginBottom = 90

  if(mb100 )
    styles.marginBottom = 100



  if(mr10)
    styles.marginRight = 10

  if(mr20)
    styles.marginRight = 20

  if(mr30)
    styles.marginRight = 30

  if(mr40 )
    styles.marginRight = 40

  if(mr50 )
    styles.marginRight = 50

  if(mr60 )
    styles.marginRight = 60

  if(mr70 )
    styles.marginRight = 70

  if(mr80 )
    styles.marginRight = 80

  if(mr90 )
    styles.marginRight = 90

  if(mr100 )
    styles.marginRight = 100



  if( ph1 )
    styles.paddingHorizontal = 1

  if( ph2 )
    styles.paddingHorizontal = 2

  if( ph3 )
    styles.paddingHorizontal = 3

  if( ph4 )
    styles.paddingHorizontal = 4

  if( ph5 )
    styles.paddingHorizontal = 5

  if( ph6 )
    styles.paddingHorizontal = 6

  if( ph7 )
    styles.paddingHorizontal = 7

  if( ph8 )
    styles.paddingHorizontal = 8

  if( ph9 )
    styles.paddingHorizontal = 9

  if( ph10 )
    styles.paddingHorizontal = 10

  if( ph11 )
    styles.paddingHorizontal = 11

  if( ph12 )
    styles.paddingHorizontal = 12

  if( ph13 )
    styles.paddingHorizontal = 13

  if( ph14 )
    styles.paddingHorizontal = 14

  if( ph15 )
    styles.paddingHorizontal = 15


  if(height1)
    styles.height = 20
  
  if(height2)
    styles.height = 40
  
  if(height3)
    styles.height = 60

  if(height4)
    styles.height = 80
    
  if(height5)
    styles.height = 100
  
  if(height6)
    styles.height = 120

  if(height7)
    styles.height = 140

  if(height8)
    styles.height = 160

  if(height9)
    styles.height = 180

  if(height10)
    styles.height = 200

    
    return (
        <View style={{ ...styles, ...style }}>
            { children }
        </View>
    )
    
}

export default index