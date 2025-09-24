import {Show} from "@/shows/domain/model/show.entity.js";
import {SourceAssembler} from "@/shows/infrastructure/source.assembler.js";

/**
 * Show Assembler
 * This class is responsible for assembling show data from various sources.
 * It provides methods to set the source of the show data.
 */
export class ShowAssembler {
    static source = null;

    static withSource(source) {
        this.source = source;
        return this;
    }

    /**
     * Converts a resource object from the API into a Show entity.
     * @param resource
     * @returns {Show}
     */
    static toEntityFromResource(resource) {
        const show = new Show(resource);
        if (resource.network) {
            show.source = SourceAssembler.toEntityFromResource(resource.network);
        }

        return show;
    }

    /**
     * Converts a response object from the API into a list of Show entities.
     * @param response
     * @returns {*|*[]}
     */
    static toEntitiesFromResponse(response) {
        return response.data.map(item => {
            return this.toEntityFromResource(item.show);
        });
    }
}