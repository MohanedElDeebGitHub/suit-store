import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import NavBar from "../components/Navbar";
import CategoryCarousel from "../components/CategoryCarousel";
import ProductGrid from "../components/ProductGrid";
import { kidsCategories } from "../data/categories";
import { kidsProducts } from "../data/products";

export default function KidsClothingPage() {
  const [tab, setTab] = useState(2); // 2 for Kids
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handlePrev = () => setSelectedCategory((prev) => Math.max(0, prev - 1));
  const handleNext = () => setSelectedCategory((prev) => Math.min(kidsCategories.length - 1, prev + 1));

  return (
    <Box sx={{ background: "#fafbfc", minHeight: "100vh", width: "100vw" }}>
      <NavBar tab={tab} onTabChange={(_, v) => setTab(v)} />
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Box sx={{ mb: 1, fontWeight: 700, fontSize: "1.1rem" }}>
          Brows By Category
        </Box>
        <CategoryCarousel
          categories={kidsCategories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <ProductGrid
          title="Popular Kidswear"
          products={kidsProducts}
          onAdd={(product, size) => alert(`Added ${product.name} (size: ${size})`)}
          onWishlist={(product) => alert(`Wishlisted: ${product.name}`)}
          onShopAll={() => alert("Show all kidswear")}
        />
      </Container>
    </Box>
  );
}