import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Art",
    image: "/src/assets/images/categories/Photo & Icon (1).png",
    icon: "/src/assets/icons/PaintBrush.png",
  },
  {
    title: "Collectibles",
    image: "/src/assets/images/categories/Photo & Icon (8).png",
    icon: "/src/assets/icons/Swatches.png",
  },
  {
    title: "Music",
    image: "/src/assets/images/categories/Photo & Icon (2).png",
    icon: "/src/assets/icons/MusicNotes.png",
  },
  {
    title: "Photography",
    image: "/src/assets/images/categories/Photo & Icon (3).png",
    icon: "/src/assets/icons/Camera.png",
  },
  {
    title: "Video",
    image: "/src/assets/images/categories/Photo & Icon (4).png",
    icon: "/src/assets/icons/Camera.png",
  },
  {
    title: "Utility",
    image: "/src/assets/images/categories/Photo & Icon (5).png",
    icon: "/src/assets/icons/MagicWand.png",
  },
  {
    title: "Sport",
    image: "/src/assets/images/categories/Photo & Icon (6).png",
    icon: "/src/assets/icons/Basketball.png",
  },
  {
    title: "Virtual Worlds",
    image: "/src/assets/images/categories/Photo & Icon (9).png",
    icon: "/src/assets/icons/Planet.png",
  },
];

const BrowseCategories = () => {
  return (
    <section className="bg-[#2B2B2B] text-white px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Browse Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            image={cat.image}
            icon={cat.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
