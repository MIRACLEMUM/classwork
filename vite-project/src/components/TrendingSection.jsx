import Card from "./Card";

const TrendingCollection = () => {
  return (
    <section className="bg-[#2B2B2B] text-white px-6 md:px-20 py-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="font-bold text-3xl md:text-4xl mb-2">
          Trending Collection
        </h2>
        <p className="text-gray-400 text-lg">
          Checkout Our Weekly Updated Trending Collection.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - always visible */}
        <Card
          mainImage="/src/assets/images/Primary Photo Placeholder (1).png"
          thumbnails={[
            "/src/assets/images/Secondary Photo Placeholder.png",
            "/src/assets/images/Secondary Photo Placeholder (2).png",
          ]}
          count={1025}
          title="DSGN Animals"
          creatorName="MrFox"
          avatar="/src/assets/images/Avatar.png"
        />

        {/* Card 2 - hidden on mobile */}
        <div className="hidden sm:block">
          <Card
            mainImage="/src/assets/images/Primary Photo Placeholder (3).png"
            thumbnails={[
              "/src/assets/images/Secondary Photo Placeholder (3).png",
              "/src/assets/images/Secondary Photo Placeholder (4).png",
            ]}
            count={1025}
            title="Magic Mushrooms"
            creatorName="Shroomie"
            avatar="/src/assets/images/Avatar (1).png"
          />
        </div>

        {/* Card 3 - only visible on large screens */}
        <div className="hidden lg:block">
          <Card
            mainImage="/src/assets/images/Primary Photo Placeholder (4).png"
            thumbnails={[
              "/src/assets/images/Secondary Photo Placeholder (5).png",
              "/src/assets/images/Secondary Photo Placeholder (6).png",
            ]}
            count={1025}
            title="Disco Machines"
            creatorName="BeKind2Robots"
            avatar="/src/assets/images/Avatar (2).png"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
