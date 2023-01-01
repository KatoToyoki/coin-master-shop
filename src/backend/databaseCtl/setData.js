import { child, push, ref, update } from "firebase/database";
import { database } from "./firebase";


export function databaseInputWithHash(type, new_item) {
    /*
    input type and insert data
    */
    const updates = {};
    const newItemKey = push(child(ref(database), type)).key;
    updates['/' + type + '/' + newItemKey] = new_item;
    console.log(new_item)
    update(ref(database), updates);
}