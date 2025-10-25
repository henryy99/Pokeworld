import express from "express";
import { getPokemon } from "../controllers/pokedexController.js";
const router = express.Router();

router.get("/random", getPokemon);
export default router;
