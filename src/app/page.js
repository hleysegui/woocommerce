import Products from "@/components/products";
import { getProductsData } from "@/utils/wc-get-products";
import { cookies } from 'next/headers';

export default async function Home({products}) {

  products = await getProductsData()

  return (
    <main className="">
      <div>
        <p>Liste des produits : </p>
        <Products products={products}/>
      </div>
    </main>
  );
}
