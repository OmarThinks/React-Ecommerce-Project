# React-Ecommerce-Task

Building an Ecommerce Application using React for a task

The task is to implement this design in react following these rules:

- File types should be js + jsx ✅ (1/1)
  - Not only js and jsx, but actually all the files are `.tsx`
  - This means that I've used TypeScript for type safety
- File types should be scss ✅ (1/1)
  - I am specialized React Native developer. So I don't use SASS
- Folder structure:
  - public/images for static images. ✅ (1/1)
  - src/images for dynamic images (dummy data images). ✅ (1/1)
  - src/services for api calls (dummy data for the test).
  - src/components for other react components. ✅ (1/1)
  - src/pages for router pages. ✅ (1/1)
- Data should be passed via props or returned by an api. ⚠️ (0/1)
- Should depend on two colors in css variables ( --primary-color , --secondary-color ). ✅ (1/1)
- Should use lazy loading at least at one component. ✅ (1/1)
- Shouldn't use hooks. ⚠️ (0/1)
- Shouldn't use redux. ✅ (1/1)
- The only required functionality is “add to cart”. add to cart functionality can be divided in 2 cases:
  - Empty cart:
    - Cart icon should have a badge containing 0 when cart is empty ✅ (1/1)
    - Clicking on the top cart icon should show the empty cart dropdown ✅ (1/1)
  - Non empty cart:
    - Cart icon should have a badge containing the number of cart items ✅ (1/1)
    - Clicking on the top cart icon should show cart items dropdown ✅ (1/1)
  - In both cases Pressing the "Add to cart" button should increment the items at cart by quantity. ✅ (1/1)
- Task should be delivered as a github public repository ✅ (1/1)
- Task should be deployed to github pages ⚠️ (0/1)

https://github.com/OmarThinks/React-Ecommerce-Project/blob/c4050dbb49739c5328a7032721276397596a743a/app/src/clientComponents/Cart/Cart.tsx#L8
https://github.com/OmarThinks/React-Ecommerce-Project/blob/c4050dbb49739c5328a7032721276397596a743a/app/src/clientComponents/Cart/Cart.tsx#L9
