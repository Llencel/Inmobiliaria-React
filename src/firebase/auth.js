import { getAuth } from "firebase/auth";
import { db, storage } from "./config";

export const auth = getAuth();
