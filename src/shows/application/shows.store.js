import {ShowsApi} from "@/shows/infrastructure/shows-api.js";
import {reactive} from "vue";
import {Source} from "@/shows/domain/model/source.entity.js";
import {SourceAssembler} from "@/shows/infrastructure/source.assembler.js";
import {ShowAssembler} from "@/shows/infrastructure/show.assembler.js";

// Define a reactive store for managing shows data
const showsApi= new ShowsApi()

/**
 * Shows Store
 * This store manages the state related to show sources and shows.
 * @type {Reactive<{sources: *[], shows: *[], errors: *[], currentSource: null, setCurrentSource(*): void, loadSources(): void}>}
 */
export const ShowsStore = reactive( {
    sources: [],
    shows: [],
    errors: [],
    currentSource: null,
    setCurrentSource(source){
        if(source instanceof Source) {
            this.currentSource = source;
        }
    },

    /**
     * Load Sources
     * This method fetches the list of shows sources from Shows API.
     * In this method, it's necessary to transform the response into Source entities.
     */
    loadSources() {
        this.errors = [];
        showsApi.getSources().then(response => {
            this.sources = SourceAssembler.fromEntitiesFromResponse(response);
            if (this.sources.length > 0) {
                this.setCurrentSource(this.sources[0]);
                this.loadShowsForCurrentSource();
            }
        }).catch(error => {
            this.errors.push(error);
            this.sources = [];
        });
    },
    /**
     * Load Shows for Current Source
     * This method fetches the list of shows for the currently selected source.
     */
    loadShowsForCurrentSource() {
        if (this.currentSource == null) return;
        try {
            const response = showsApi.getShowsBySource(this.currentSource);
            this.shows = ShowAssembler.withSource(this.currentSource)
                .toEntitiesFromResponse(response);
        } catch (error) {
            this.errors.push(error);
            this.shows = [];
        }
    }
})