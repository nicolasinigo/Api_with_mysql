import  Router from "express";
import { methods as lenguajeControllers} from "../controllers/language.controllers";

const router=Router();

router.get('/', lenguajeControllers.getLenguages)
router.get('/:id', lenguajeControllers.getLenguage)
router.post('/', lenguajeControllers.addLenguages)
router.put('/:id', lenguajeControllers.updateLenguage)
router.delete('/:id', lenguajeControllers.deleteLenguage)



export default router;