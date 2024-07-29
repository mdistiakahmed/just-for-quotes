import React from "react";

const SubCategoryPage = ({ params }: any) => {
  const { subcategory } = params;
  return <div>Sub Category {subcategory}</div>;
};

export default SubCategoryPage;
