class DTO {

    // FACTORY DESIGN PATTERN
    static buildFromObject(object) {
        var result = new this()

        for (let key of Object.keys(result)) {
            result[key] = object[key]   
        }

        return result
    }

}

module.exports = DTO;