import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveNewItem = async (data) => {
  try {
    await addDoc(collection(firestore, "foodItems"), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getFoodItems = async () => {
  try {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
