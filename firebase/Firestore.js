// Code chứa các hàm liên quan đến Cơ sở dữ liệu

import app from "./FirebaseConfig.js";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// Tạo kết nối đến Firestore
const db = getFirestore(app);

// Hàm lấy dữ liệu từ firebase
export async function getDataFromFirebase(collectionName) {
    // Lấy ra collection cần tìm trong firestore
    const dataCol = collection(db, collectionName);
    // Lấy các dữ liệu bên trong collection đó
    const dataSnapshot = await getDocs(dataCol);
    const dataList = dataSnapshot.docs.map((doc) => {
        return {
            ...doc.data(), // Lấy ra ảnh, tên, giá
            id: doc.id, // Thêm id vào
        };
    });
    return dataList;
}

// Hàm thêm dữ liệu lên Firebase
export async function addDataToFirebase(collectionName, data) {
    // Lấy ra collection cần tìm trong firestore
    const dataCol = collection(db, collectionName);
    // Thêm dữ liệu mới vào collection
    await addDoc(dataCol, data);
}

// Hàm sửa dữ liệu trong Firebase
export async function updateDataInFirebase(collectionName, docId, data) {
    await updateDoc(doc(db, collectionName, docId), data);
}

// Hàm xoá dữ liệu trong Firebase
export async function deleteDataFromFirebase(collectionName, docId) {
    await deleteDoc(doc(db, collectionName, docId));
}
