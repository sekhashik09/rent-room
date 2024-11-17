import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router()



router.get('/should-be-logged-in',verifyToken,shouldBeLoggedIn)
router.get('/should-be-admin',shouldBeAdmin)
// router.put('/test', (req, res)=>{
//     console.log('Hello from the test');
// })
// router.delete('/test', (req, res)=>{
//     console.log('Hello from the test');
// })
export default router