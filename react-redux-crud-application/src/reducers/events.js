import _ from "lodash";
import {
    READ_EVENTS,
    DELETE_EVENT,
} from "../actions"


export default (events={}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // 配列ではなくオブジェクトの形にする
            return _.mapKeys(action.response.data, "id")
        case DELETE_EVENT:
            delete events[action.id];
            // スプレッド構文で返す
            return{...events}
        default:
            return events
    }
}