import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import CarPanel from "@/components/CarPanel";
import { TravelCard } from "@/components/TravelCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        {/* <div style={{margin:"20px", width: "100%", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap"}}>
          <ProductCard carName='Honda Civic' imgSrc='/img/civic.jpg'/>
          <ProductCard carName='Honda Accord' imgSrc='/img/accord.jpg'/>
          <ProductCard carName='Toyota Fortuner' imgSrc='/img/fortuner.jpg'/>
          <ProductCard carName='Tesla Model 3' imgSrc='/img/tesla.jpg'/>
        </div> */}
        {/* <CarPanel/> */}
        <TravelCard></TravelCard>
      </main>
    </div>
  );
}
