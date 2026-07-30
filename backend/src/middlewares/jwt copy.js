import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret_key";

/**
 * Membuat JWT Token dengan payload id, email, nama
 * @param {string|number} id 
 * @param {string} email 
 * @param {string} nama 
 * @param {string|number} expiresIn Contoh: '1h', '1d', 3600 (dalam detik)
 * @returns {string|null} Token JWT atau null jika gagal
 */
function sign(id, email, nama, expiresIn = "1h") {

   try {

      const payload = { id, email, nama };
    
      const token = jwt.sign(payload, SECRET, { expiresIn });
      return token;
   
   } catch (error) {

      console.error("Gagal membuat token JWT:", error.message);
      return null;
   
   }

}

/**
 * Memverifikasi token JWT
 * @param {string} token 
 * @returns {object|null} Payload dekode jika valid, atau null jika tidak valid/expired
 */
function verify(token) {

   try {

      const decoded = jwt.verify(token, SECRET);
      return decoded;
   
   } catch (error) {

      // Membedakan tipe error untuk debugging
      if (error.name === "TokenExpiredError") {

         console.error("Gagal memverifikasi token: Token sudah kadaluarsa.");
      
      } else if (error.name === "JsonWebTokenError") {

         console.error("Gagal memverifikasi token: Token tidak valid/salah.");
      
      } else {

         console.error("Gagal memverifikasi token:", error.message);
      
      }
    
      return null;
   
   }

}