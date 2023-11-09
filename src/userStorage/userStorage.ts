import { Films } from "../redux/slices/filmsSlice";

export const userStorage = {
    storage: localStorage,

    initialStorage() {
        if (!JSON.parse(this.storage.getItem('MovieCatalog') as string)) {
            this.storage.setItem('MovieCatalog', JSON.stringify({ favorite: [] }));
        }
    },

    addFavorite(favorite: { favorite: Films[] }) {
        this.storage.setItem('MovieCatalog', JSON.stringify(favorite));
    },
    
    storageLoadFavorite() {
        try {
            return JSON.parse(this.storage.getItem('MovieCatalog') as string)
          } catch (e) {
            throw new Error('Invalid data');
          }
    },
    
    removeFavorite() {
        this.storage.removeItem('MovieCatalog')
    },
};