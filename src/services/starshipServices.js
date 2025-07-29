const index = async (city) => {
  try {
    const uri = "https://swapi.info/api/starships";
    const res = await fetch(uri);
    const data = await res.json();

    if (!res.ok) {
      // Throw an error if we get a response that doesn't
      // hold valid starship data.
      throw new Error("Failed to fetch starships.");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { index };
