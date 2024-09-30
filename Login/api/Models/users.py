from pydantic import BaseModel
from typing import Union


class User(BaseModel):
    username: str
    phone: Union[int, None] = None
    password: str