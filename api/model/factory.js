class Factory {

    // FACTORY DESIGN PATTERN
    static buildFromObject(object) {
        var result = new this()

        for (let key of Object.keys(result)) {
            result[key] = object[key]   
        }

        return result
    }

}


// class DTOv2 {

// }

// class SampleField {
//     value

//     isValid() {
//         if(this.value.length < 3)
//             return 'value too short'
//         return null
//     }
// }
// class SampleModel {
//     field1 = SampleField
// }

module.exports = Factory;