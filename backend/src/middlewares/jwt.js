import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function sign (payload){

   return jwt.sign(payload, SECRET, {
      expiresIn
   });

}

function verify (token) {

   return jwt.verify(token, SCRET);

}

// import jwt from "jsonwebtoken";

// const ACCESS_SECRET = process.env.JWT_SECRET || "default_access_secret";
// const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "default_refresh_secret";

// function signAccessToken(id, email, nama, expiresIn = "15m") {
//   try {
//     const payload = { id, email, nama };
//     return jwt.sign(payload, ACCESS_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Access Token:", error.message);
//     return null;
//   }
// }

// function signRefreshToken(id, expiresIn = "7d") {
//   try {
//     const payload = { id };
//     return jwt.sign(payload, REFRESH_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Refresh Token:", error.message);
//     return null;
//   }
// }

// function verifyAccessToken(token) {
//   try {
//     return jwt.verify(token, ACCESS_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Access Token kadaluarsa.");
//     } else {
//       console.error("Access Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }

// function verifyRefreshToken(token) {
//   try {
//     return jwt.verify(token, REFRESH_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Refresh Token kadaluarsa.");
//     } else {
//       console.error("Refresh Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }

// import jwt from "jsonwebtoken";

// const ACCESS_SECRET = process.env.JWT_SECRET || "default_access_secret";
// const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "default_refresh_secret";

// function signAccessToken(id, email, nama, expiresIn = "15m") {
//   try {
//     const payload = { id, email, nama };
//     return jwt.sign(payload, ACCESS_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Access Token:", error.message);
//     return null;
//   }
// }

// function signRefreshToken(id, expiresIn = "7d") {
//   try {
//     const payload = { id };
//     return jwt.sign(payload, REFRESH_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Refresh Token:", error.message);
//     return null;
//   }
// }

// function verifyAccessToken(token) {
//   try {
//     return jwt.verify(token, ACCESS_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Access Token kadaluarsa.");
//     } else {
//       console.error("Access Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }

// function verifyRefreshToken(token) {
//   try {
//     return jwt.verify(token, REFRESH_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Refresh Token kadaluarsa.");
//     } else {
//       console.error("Refresh Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }

// import jwt from "jsonwebtoken";

// const ACCESS_SECRET = process.env.JWT_SECRET || "default_access_secret";
// const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "default_refresh_secret";

// function signAccessToken(id, email, nama, expiresIn = "15m") {
//   try {
//     const payload = { id, email, nama };
//     return jwt.sign(payload, ACCESS_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Access Token:", error.message);
//     return null;
//   }
// }

// function signRefreshToken(id, expiresIn = "7d") {
//   try {
//     const payload = { id };
//     return jwt.sign(payload, REFRESH_SECRET, { expiresIn });
//   } catch (error) {
//     console.error("Gagal membuat Refresh Token:", error.message);
//     return null;
//   }
// }

// function verifyAccessToken(token) {
//   try {
//     return jwt.verify(token, ACCESS_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Access Token kadaluarsa.");
//     } else {
//       console.error("Access Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }

// function verifyRefreshToken(token) {
//   try {
//     return jwt.verify(token, REFRESH_SECRET);
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Refresh Token kadaluarsa.");
//     } else {
//       console.error("Refresh Token tidak valid:", error.message);
//     }
//     return null;
//   }
// }