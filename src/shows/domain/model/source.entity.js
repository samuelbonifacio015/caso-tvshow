/**
 * Source entity for shows. It brings the structure for a source object.
 * This encapsulates the data and provide methods to interact with it.
 * @property {string} id - Unique identifier for the source.
 * @property {string} name - Name of the source.
 * @property {Object} country - Country information of the source.
 * @property {string} country.name - Name of the country.
 * @property {string} country.code - Country code.
 * @property {string} country.timezone - Timezone of the country.
 * @property {string} officialSite - Official website of the source.
 */

export class Source {
    constructor( { id, name, country, officialSite } ) {
        this.id = id;
        this.name = name;
        this.officialSite = officialSite;
        this.country = country
            ? {
            name: country.name,
            code: country.code,
            timezone: country.timezone,
        }
        :null;
    }
}