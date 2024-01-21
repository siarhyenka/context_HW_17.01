import { CatalogItem } from "../../models/CatalogItemData"

export type CatalogListData = {
    total: number
    skip: number
    limit: number
    products: CatalogItem[]
}



