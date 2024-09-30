from pydantic import BaseModel


class Product(BaseModel):
    foodName: str
    description: str
    image: str
    price: str