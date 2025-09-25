import {Source} from "@/shows/domain/model/source.entity.js";

/**
 * Source Assembler
 * This class is responsible for assembling source data from various sources.
 * It provides methods to set the source of the show data.
 */
export class SourceAssembler {
    static toEntityFromResource(resource) {
        return new Source({
            id: resource.id,
            name: resource.name,
            country: resource.country?.name,
            timezone: resource.country?.timezone,
            officialSite: resource.officialSite || null
        });
    }

    /**
     * Converts a response object from the API into a list of Source entities.
     * @param response
     * @returns {*|*[]}
     */
    static fromEntitiesFromResponse(response) {
        if (!Array.isArray(response)) {
            return [];
        }
        return response.map(resource => this.toEntityFromResource(resource));
    }

}