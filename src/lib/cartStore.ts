import { create } from "zustand";

interface CartState {
  productIds: number[]; // Array of product IDs
  addProduct: (id: number) => void; // Function to add a product ID
  removeProduct: (id: number) => void; // Function to remove a product ID
  getProductIds: () => number[]; // Function to get the array of product IDs
}

const useCartStore = create<CartState>((set, get) => ({
  productIds: [],

  // Add a product ID to the cart
  addProduct: (id: number) =>
    set((state) => ({
      productIds: state.productIds.includes(id)
        ? state.productIds
        : [...state.productIds, id],
    })),

  // Remove a product ID from the cart
  removeProduct: (id: number) =>
    set((state) => ({
      productIds: state.productIds.filter((productId) => productId !== id),
    })),

  // Get the array of product IDs
  getProductIds: () => get().productIds,
}));

export default useCartStore;
