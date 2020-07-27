import React from 'react'
import { View } from 'react-native'

function index( props ){

    const { 
        children, row, column, 
        w1, w2, w3, w4, w45, w5, w6, w7, w8, w9, w10, 
        mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8, mb9, mb10, mb11, mb12, mb13, mb14, mb15,
        ph1, ph2, ph3,ph4, ph5, ph6, ph7, ph8, ph9, ph10,ph11, ph12, ph13, ph14, ph15
    } = props

    const style = {}

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


    if( mb1 )
    style.marginBottom = 1

    if( mb2 )
    style.marginBottom = 2

    if( mb3 )
    style.marginBottom = 3

    if( mb4 )
    style.marginBottom = 4

    if( mb5 )
    style.marginBottom = 5

    if( mb6 )
    style.marginBottom = 6

    if( mb7 )
    style.marginBottom = 7

    if( mb8 )
    style.marginBottom = 8

    if( mb9 )
    style.marginBottom = 9

    if( mb10 )
    style.marginBottom = 10

    if( mb11 )
    style.marginBottom = 11

    if( mb12 )
    style.marginBottom = 12

    if( mb13 )
    style.marginBottom = 13

    if( mb14 )
    style.marginBottom = 14

    if( mb15 )
    style.marginBottom = 15


    


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


    style.justifyContent = 'space-between'

    return (
        <View style={ style }>
            { children }
        </View>
    )
    


}

export default index