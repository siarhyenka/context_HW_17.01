import { Route, Routes } from "react-router-dom"
import { CatalogItems } from "./CatalogItems"
import { CatalogProductsItem } from "./CatalogItem/CatalogProductsItem"


export const Catalog = () => {
    return <Routes>
                <Route index element={<CatalogItems />} />
                <Route path="/:itemId" element={<CatalogProductsItem/>} />
            </Routes>
    
}