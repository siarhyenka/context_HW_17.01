import { useEffect, useState } from "react"
import { CatalogItem } from "../models/CatalogItemData"
import { CatalogListData } from './models/CatalogListData'
import './CatalogItems.css'
import { Link } from "react-router-dom"

export const CatalogItems = () => {
    const [catalog, setCatalog] = useState<CatalogItem[]>([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(Response => Response.json())
        .then((data: CatalogListData) => {
            setCatalog(data.products)
            console.log(data);
            
        })
    }, [])

    console.log(catalog);
    

    return <div className="container catalog__container">
                {catalog.length !== 0 && catalog.map((catalogItem) => 
                    <div className="catalog__item" key={catalogItem.id}>
                        <div className="catalog__number">{catalogItem.id}</div>
                        <div className="catalog__title">{
                            <Link to={`/catalog/${catalogItem.id}`} className="link">{catalogItem.title}</Link>
                        }</div>
                    </div>
                )}

            </div>
}