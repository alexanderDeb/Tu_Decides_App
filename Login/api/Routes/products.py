from fastapi import APIRouter, Response
from config.db import conection
from Schemas.product import productEntity, productsEntity
from Models.products import Product
from bson import ObjectId
from starlette.status import HTTP_200_OK

ProductRouter = APIRouter(tags=["Products"])

@ProductRouter.get('/products')
def find_all_suggestions():
    return productsEntity(conection.TuDecides.Products.find())


@ProductRouter.get('/products/{id}')
def get_suggestions(id: str):
    return productEntity(conection.TuDecides.Products.find_one({"_id": ObjectId(id)}))


@ProductRouter.post('/products')
def create_suggestion(product: Product):
    new_user = dict(product)
    id = conection.TuDecides.Products.insert_one(new_user).inserted_id
    suggestionConsult = conection.TuDecides.Products.find_one({"_id": id})
    return productEntity(suggestionConsult)


@ProductRouter.put('/products/{id}')
def update_suggestions(id: str, product: Product):
    edit_user = dict(product)
    conection.TuDecides.Products.find_one_and_update({"_id": ObjectId(id)},{"$set":edit_user})
    return productEntity(conection.TuDecides.Products.find_one({"_id":ObjectId(id)}))


@ProductRouter.delete('/products/{id}')
def delete_suggestions(id: str):
    productEntity(conection.TuDecides.Products.find_one_and_delete({"_id": ObjectId(id)}))
    return Response(status_code=HTTP_200_OK)