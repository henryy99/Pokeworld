export const getPokemon = async (req, res) => {
  const { id } = req.query;

  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await result.json();

    const pokemon = {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      height: data.height,
      weight: data.weight,
      order: data.order,
    };
    return res.status(200).json(pokemon);
  } catch (error) {
    console.log("Fail to fetch");
    return res.status(500).json({ message: "Server Error" });
  }
};
