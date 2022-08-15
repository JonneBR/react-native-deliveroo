import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://classic.exame.com/wp-content/uploads/2017/05/sushi.jpg?quality=70&strip=info&w=1024"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
        title="Testing2"
      />
      <CategoryCard
        imgUrl="https://img.delicious.com.au/p8SEU2Ia/del/2016/09/big-mac-36177-1.jpg"
        title="Testing3"
      />

      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
        title="Testing3"
      />

      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000"
        title="Testing3"
      />

      <CategoryCard
        imgUrl="https://149401384.v2.pressablecdn.com/wp-content/uploads/2022/07/buttered-noodles-5-scaled.jpg"
        title="Testing3"
      />

      <CategoryCard
        imgUrl="https://d1ralsognjng37.cloudfront.net/c2f8a857-0566-4ea1-bf23-47382fabe78b.jpeg"
        title="Testing3"
      />

      <CategoryCard
        imgUrl="https://www.360-yachting.com/wp-content/uploads/2020/10/Blog-Featured-Image-900x450-11.jpg"
        title="Testing3"
      />
    </ScrollView>
  );
};

export default Categories;
