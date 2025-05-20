import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import NavBar from "../components/Navbar";
import CategoryCarousel from "../components/CategoryCarousel";
import ProductGrid from "../components/ProductGrid";
import { menCategories } from "../data/categories";
import { menProducts } from "../data/products";

export default function MenClothingPage() {
  const [tab, setTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handlePrev = () => setSelectedCategory((prev) => Math.max(0, prev - 1));
  const handleNext = () => setSelectedCategory((prev) => Math.min(menCategories.length - 1, prev + 1));

  return (
    <Box sx={{ background: "#fafbfc", minHeight: "100vh", width: "100vw" }}>
      <NavBar tab={tab} onTabChange={(_, v) => setTab(v)} />
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Box sx={{ mb: 1, fontWeight: 700, fontSize: "1.1rem" }}>
          Brows By Category
        </Box>
        <CategoryCarousel
          categories={menCategories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <ProductGrid
          title="Popular Suit"
          products={menProducts}
          onAdd={(product, size) => alert(`Added ${product.name} (size: ${size})`)}
          onWishlist={(product) => alert(`Wishlisted: ${product.name}`)}
          onShopAll={() => alert("Show all suits")}
        />
      </Container>
    </Box>
  );
}