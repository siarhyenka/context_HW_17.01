import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CatalogItem } from "../models/CatalogItemData";
import './CatalogProductsItem.css'

export const CatalogProductsItem = () => {
    const {itemId} = useParams();
    const [catalog, useCatalog] = useState<CatalogItem>();
    const navigate = useNavigate();

    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${itemId}`)
        .then(Response => Response.json())
        .then((data: CatalogItem)=> {
            useCatalog(data)
        })

    }, [itemId])

    const goBackButtonClick = ()=> {
        navigate('../../catalog')
    }



    return <div className="container">
                {catalog && <div className="container">
                                <button className="go__back__btn" onClick={goBackButtonClick}>go back</button>
                                <h1 className="item__title">{catalog.title}</h1>
                                <div className="item__description">{catalog.description}</div>
                                <div className="item__price"><span>Цена:</span> {catalog.price}</div>
                                <div className="item__rating"><span>Рейтинг:</span> {catalog.rating}</div>
                                <p className="item__brand"><span>Бренд:</span> {catalog.brand}</p>
                                <p className="item__category"><span>Категория:</span> {catalog.category}</p>
                                
                                <div className="images">
                                    {catalog.images.map((images)=> <img src={images} key={images}/>)}
                                </div>
                            </div>}

            </div>
}