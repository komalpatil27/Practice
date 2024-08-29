import React from "react";

const StringPollyFill = () => {

    let stringToManipulate = 'aa bb cc aa b c'

    // Remove the duplicates from string

    // let removedDuplicates = [...new Set(stringToManipulate.split(" "))].join(' ')
    // console.log(removedDuplicates , 'checking removed duplicated')

    // Write a PollyFill
    // Question asked in EPAM interview
    String.prototype.removeDuplicates = function(){
        let resultString = ''
        resultString = [...new Set(this.split(" "))].join(" ")
        return resultString
    }
    console.log(stringToManipulate.removeDuplicates() , 'checking')


    return(
        <>
        StringPolly
        </>
    )
}
export default StringPollyFill