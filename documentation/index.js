var table = require('markdown-table')
let fs = require("fs")
 


// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'w1', '10%' ],
//         [ 'w2', '20%' ],
//         [ '...', '...' ],
//         [ 'w10', '100%' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )

// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'mb1', '10' ],
//         [ 'mb2', '20' ],
//         [ '...', '...' ],
//         [ 'mb10', '100' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )


// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'mh1', '10' ],
//         [ 'mh2', '20' ],
//         [ '...', '...' ],
//         [ 'mh100', '100' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )




// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'mr1', '10' ],
//         [ 'mr2', '20' ],
//         [ '...', '...' ],
//         [ 'mr10', '100' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )


// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'ph1', '1' ],
//         [ 'ph2', '2' ],
//         [ '...', '...' ],
//         [ 'ph15', '15' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )


let output = table(
    [
        [ 'Prop', 'Value', 'Style modifier' ],
        [ 'row', 'true', 'flexDirection' ],
        [ 'column', 'true', 'flexDirection' ],
    ],
    {align: [ 'l', 'r' ]}
    )


// let output = table(
//     [
//         [ 'Prop', 'Value' ],
//         [ 'height1', '20' ],
//         [ 'height2', '40' ],
//         [ '...', '...' ],
//         [ 'height10', '200' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )


// let output = table(
//     [
//         [ 'Color props', 'Theme value' ],
//         [ 'primary', 'primaryColor' ],
//         [ 'primaryContrast', 'primaryColorContrast'],
//         [ 'negativeContrast', 'negativeContrast' ],
//         [ 'disabledContrast', 'disabledColorContrast' ],
//         [ 'disabled', 'disabledBgColor' ],
//         [ 'white', 'white color' ],
//         [ 'black', 'black color' ]
//     ],
//     {align: [ 'l', 'r' ]}
//     )


// let output = table(
//     [
//         [ 'Other props', 'Value', 'Description' ],
//         [ 'center', 'center', 'Center text' ],
//         [ 'left', 'left', 'Align to left'],
//         [ 'right', 'right', 'Align to right' ],
//         [ 'bold', 'bold', 'set text to bold' ],
//     ],
//     {align: [ 'l', 'r' ]}
//     )







    fs.writeFileSync("demo.md", output)

    // let a = {
    //     primaryColor: '#002E86',
    //     primaryColorContrast : '#20F8F8',
    //     negativeContrast : 'red',
    //     disabledColorContrast : 'red',
    //     disabledBgColor : 'grey'
    // }