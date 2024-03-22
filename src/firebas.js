import { getDatabase } from "firebase/database"
export const database = getDatabase(app);
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
const handleSubmit = () =>{
    let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}