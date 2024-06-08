import Card from "./Card";

const products = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        images: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        images: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    },
    {
        id: 3,
        title: "Powder Canister",
        images: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    },
    {
        id: 4,
        title: "Red Lipstick",
        images: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    },
    {
        id: 5,
        title: "Red Nail Polish",
        images: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    },
    {
        id: 6,
        title: "Calvin Klein CK One",
        images: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    },
    {
        id: 7,
        title: "Chanel Coco Noir Eau De",
        images: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    },
    {
        id: 8,
        title: "Dior J'adore",
        images: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    },
    {
        id: 9,
        title: "Dolce Shine Eau de",
        images: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
    },
    {
        id: 10,
        title: "Gucci Bloom Eau de",
        images: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    },
];

function Main() {
    return (
        <main>
            {products.map((product) => {
                return <Card title={product.title} url={product.images} />;
            })}
        </main>
    );
}

export default Main;
