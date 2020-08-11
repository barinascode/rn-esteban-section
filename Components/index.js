import React from 'react'
import { View } from 'react-native'

function index( props ){

    const { 
      fullCenter, children, row, column,
      flex1,
        w1, w2, w3, w4, w45, w5, w6, w7, w8, w9, w10, 
        ph1, ph2, ph3,ph4, ph5, ph6, ph7, ph8, ph9, ph10,ph11, ph12, ph13, ph14, ph15
      } = props
      
      const { mb10, mb20, mb30, mb40, mb50, mb60, mb70, mb80, mb90, mb100 } = props

    const style = {}

    if( fullCenter ){
      style.justifyContent= 'center'
      style.alignItems= 'center'
    }

    if(props.spaceBetween){
      style.justifyContent = 'space-between'
    }

    if( flex1 ){
      style.flex = 1
    }

    if( row )
    style.flexDirection = 'row'
    
    if( column )
    style.flexDirection = 'column'
    
    if( w1 )
    style.width = '10%'
    
    if( w2 )
    style.width = '20%'

    if( w3 )
    style.width = '30%'

    if( w4 )
    style.width = '40%'
    if( w45 )
    style.width = '45%'

    if( w5 )
    style.width = '50%'

    if( w6 )
    style.width = '60%'

    if( w7 )
    style.width = '70%'

    if( w8 )
    style.width = '80%'

    if( w9 )
    style.width = '90%'

    if( w10 )
    style.width = '100%'


    if(mb10)
    style.marginBottom = 10
  
  if(mb20)
    style.marginBottom = 20

  if(mb30)
    style.marginBottom = 30

  if(mb40 )
    style.marginBottom = 40

  if(mb50 )
    style.marginBottom = 50

  if(mb60 )
    style.marginBottom = 60

  if(mb70 )
    style.marginBottom = 70

  if(mb80 )
    style.marginBottom = 80

  if(mb90 )
    style.marginBottom = 90

  if(mb100 )
    style.marginBottom = 100


    


    if( ph1 )
    style.paddingHorizontal = 1

    if( ph2 )
    style.paddingHorizontal = 2

    if( ph3 )
    style.paddingHorizontal = 3

    if( ph4 )
    style.paddingHorizontal = 4

    if( ph5 )
    style.paddingHorizontal = 5

    if( ph6 )
    style.paddingHorizontal = 6

    if( ph7 )
    style.paddingHorizontal = 7

    if( ph8 )
    style.paddingHorizontal = 8

    if( ph9 )
    style.paddingHorizontal = 9

    if( ph10 )
    style.paddingHorizontal = 10

    if( ph11 )
    style.paddingHorizontal = 11

    if( ph12 )
    style.paddingHorizontal = 12

    if( ph13 )
    style.paddingHorizontal = 13

    if( ph14 )
    style.paddingHorizontal = 14

    if( ph15 )
    style.paddingHorizontal = 15


    return (
        <View style={style}>
            { children }
        </View>
    )
    


}

export default index