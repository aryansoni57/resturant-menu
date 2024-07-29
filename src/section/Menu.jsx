import MenuItem from "../components/MenuItem";
import MenuTitle from "../components/MenuTitle";

const Menu = () => {
  var mainDish = [
    {
      name: "Roast Beef with Vegetable",
      image: "/image/OIP.jpeg",
      desc: "Candied Jerusalem artichokes, truffle",
      price: 3500,
    },
    {
      name: "Grilled Salmon with Dil Sauce",
      image: "/image/salmon.jpg",
      desc: "Candied Jerusalem artichokes, truffle",
      price: 3500,
    },
  ];
  return (
    <div className="container flex justify-between gap-8 mx-auto">
      <div className="">
        <MenuTitle>Main Dish</MenuTitle>
        {mainDish.map((dish) => (
          <MenuItem
            name={dish.name}
            image={dish.image}
            desc={dish.desc}
            price={dish.price}
          />
        ))}
        <div className="h-10"></div>
        <MenuTitle>Main Dish</MenuTitle>
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
      </div>
      <div className="">
        <MenuTitle>Main Dish</MenuTitle>
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <MenuItem
          name="Grilled Salmon with Dil Sauce"
          image={"/image/salmon.jpg"}
          desc={"Candied Jerusalem artichokes, truffle"}
          price={3500}
        />
        <div className="w-full bg-red-500 h-28 mt-28"></div>
      </div>
    </div>
  );
};

export default Menu;
