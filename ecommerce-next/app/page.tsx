import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <main className="">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">DEALS OF THE DAYS</h1>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        <div className="">
        </div>
      </section>
    </main>
  );
}
