import {Source} from '@/shows/domain/model/source.entity.js';

/**
 * Show entity for shows. It brings the structure for a show object.
 * This encapsulates the data of shows and provide method to interact with it.
 */
export class Show {
    constructor({
        id,
        url,
        name,
        type,
        language,
        genres,
        status,
        runtime,
        averageRuntime,
        premiered,
        ended,
        officialSite,
        schedule,
        rating,
        weight,
        network,
        image,
        summary,
        }) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.type = type;
        this.language = language;
        this.genres = genres || []; //si el genero no viene, entonces será un array vacío
        this.status = status;
        this.runtime = runtime;
        this.averageRuntime = averageRuntime;
        this.premiered = premiered;
        this.ended = ended;
        this.officialSite = officialSite;
        this.schedule = schedule; // {time,days}
        this.rating = rating?.average || null; // si el rating no es average, entonces será vacío
        this.weight = weight;
        this.image = image?.medium || image?.original || null; // si la imagen no es medium, entonces será original o null
        this.summary = summary;

        //Delegamos a Source
        this.network = network ? new Source(network) : null;

    }
}