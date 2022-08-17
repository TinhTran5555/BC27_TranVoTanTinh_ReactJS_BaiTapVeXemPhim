import {configureStore} from "@reduxjs/toolkit"
import ticketReducer from "./ruducer/ticketReducer";
const store = configureStore ({
    reducer: {
        ticket: ticketReducer
    }
})
export default store