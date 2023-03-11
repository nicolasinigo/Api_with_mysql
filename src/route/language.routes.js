import  Router from "express";
import { methods as lenguajeControllers} from "../controllers/language.controllers";

const router=Router();

router.get('/', lenguajeControllers.getLenguages)

export default router;