import express from "express";
import { getPokemon } from "../controllers/pokedexController.js";
const router = express.Router();

router.get("/google", getPokemon);
export default router;
