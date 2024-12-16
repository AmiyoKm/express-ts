import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/users";

const router = Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById)

export default router;