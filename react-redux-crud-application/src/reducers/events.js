import _ from "lodash";
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
} from "../actions"


export default (events={}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data;
            // 先にconsole.log(action.response.data)でデータの構造を確認するとよい
            return { ...events, [data.id]: data }
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