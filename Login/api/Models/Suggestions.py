from pydantic import BaseModel


class Suggestion(BaseModel):
    foodName: str
    description: str
    image: str