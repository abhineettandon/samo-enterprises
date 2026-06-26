import { CataloguePage, StoneItem } from "./CataloguePage";

const TILES_ITEMS: StoneItem[] = [
  {
    id: "sm-t1",
    name: "Calcata Gold",
    finish: ["Polish"],
    image: "/img/sm-t1.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t2",
    name: "Calcata Gold Black",
    finish: ["Polish"],
    image: "/img/sm-t2.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t3",
    name: "Slate Grey",
    finish: ["Polish"],
    image: "/img/sm-t3.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t4",
    name: "Bitcoin Beige",
    finish: ["Polish"],
    image: "/img/sm-t4.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t5",
    name: "Calcata Resin",
    finish: ["Polish"],
    image: "/img/sm-t5.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t6",
    name: "Lithico Cream",
    finish: ["Polish"],
    image: "/img/sm-t6.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t7",
    name: "Golden Dune",
    finish: ["Polish"],
    image: "/img/sm-t7.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t8",
    name: "Black Forest",
    finish: ["Polish"],
    image: "/img/sm-t8.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t9",
    name: "Shimmer Gold",
    finish: ["Polish"],
    image: "/img/sm-t9.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t10",
    name: "Shimmer Black Gold",
    finish: ["Polish"],
    image: "/img/sm-t10.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t11",
    name: "Hazelnut",
    finish: ["Polish"],
    image: "/img/sm-t11.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t12",
    name: "Golden Drug",
    finish: ["Polish"],
    image: "/img/sm-t12.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t13",
    name: "Carrera Gold",
    finish: ["Polish"],
    image: "/img/sm-t13.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t14",
    name: "Zed Black",
    finish: ["Polish"],
    image: "/img/sm-t14.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t15",
    name: "Golden Grey Dune",
    finish: ["Polish"],
    image: "/img/sm-t15.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
  {
    id: "sm-t16",
    name: "Wooden Touch",
    finish: ["Polish"],
    image: "/img/sm-t16.png",
    thickness: '2x2 (ft), 2x4 (ft), 32 x 64 (inches)'
  },
]

export function TilesPage() {
  return (
    <CataloguePage
      category="Tiles"
      tagline="From artisan handmade to precision-engineered large format — tiles for every surface and every vision."
      description="Our tile collection ranges from traditional Moroccan zellige and encaustic cement tiles to contemporary large-format porcelain and wood-look planks. We carry ceramic, porcelain, and natural stone tile formats suitable for floors, walls, splashbacks, and exterior applications."
      heroImage="/img/tiles.jpeg"
      heroAlt="Geometric tile pattern arrangement"
      items={TILES_ITEMS}
    />
  );
}
