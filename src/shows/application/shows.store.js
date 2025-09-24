import {ShowsApi} from "@/shows/infrastructure/shows-api.js";
import {reactive} from "vue";
import {Source} from "@/shows/domain/model/source.entity.js";

// Define a reactive store for managing shows data
const showsApi= new ShowsApi()

export const ShowsStore = reactive( {
    sources: [],
    shows: [],
    errors: [],
    currentSource: null,
    setCurrentSource(source){
        if(source instanceof Source) {
            this.currentSource = source;
        }
    }
})
