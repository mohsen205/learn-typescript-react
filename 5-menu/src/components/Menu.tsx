import { Container, Grid } from "@mui/material";
import data from "../data";
import { useState, useEffect } from "react";
import { Food } from "./Type";
import SingleMenu from "./SingleMenu";
type MenuType = {
  category: string | null;
};

const Menu = ({ category }: MenuType) => {
  const [food, setFood] = useState<Food[]>(data);
  useEffect(() => {
    setFood(
      category === null ? data : data.filter((f) => f.category === category)
    );
  }, [category]);
  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Grid container spacing={2}>
        {food.map((f) => {
          return (
            <Grid item xs={12} lg={6} key={f.id}>
              <SingleMenu
                id={f.id}
                category={f.category}
                desc={f.desc}
                img={f.img}
                price={f.price}
                title={f.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Menu;
