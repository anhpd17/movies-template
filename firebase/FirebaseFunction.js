import app from "./FirebaseConfig.js";
// Chứa các phương thức/hàm để sử dụng trong firebase
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// Tạo auth dùng để xác thực
const auth = getAuth();

// Phương thức đăng nhập với google
export const signInWithGoogle = async () => {
    try {
        // Do something
        // Nếu thành công, không có lỗi thì chạy qua bình thường

        // Tạo ggProvider để cung cấp các dịch vụ của google
        const ggProvider = new GoogleAuthProvider(auth);

        // Thực hiện đăng nhập với google
        // Mở popup để đăng nhập, lấy GGprovider để nhận các dịch vụ của GG và xử lý
        // Do cần phải có thời gian để xác thực và đăng nhập
        // => Câu lệnh signIn tốn nhiều thời gian (ở trên Internet)
        // => Chờ câu lệnh này chạy xong => Thông báo được kết quả

        // để chờ 1 câu lệnh hoàn thành => await (chờ)
        // Hàm nào có await => async

        let result = await signInWithPopup(auth, ggProvider);
        console.log("Login successfully");
        console.log(result);
    } catch (error) {
        // Hứng các lỗi xảy ra trong quá trình chạy code trong TRY
        console.error(error);
    }
};

// Đăng ký tài khoản bằng Email & password
export const signUpByEmailPassword = async (email, password) => {
    try {
        // Đăng ký tài khoản bằng thông tin được cung cấp
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Register successfully");
    } catch (error) {
        console.error(error);
    }
};

// Đăng nhập bằng email & password
export const signInByEmailPassword = async (email, password) => {
    try {
        // Đăng nhập tài khoản bằng thông tin được cung cấp
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successfully");
    } catch (error) {
        console.error(error);
    }
};
