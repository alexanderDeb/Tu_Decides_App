def productEntity(item) -> dict:
    return{
        "id": str(item['_id']),
        'foodName': item['foodName'],
        'description': item['description'],
        'image': item['image'],
        'price': item['price']
    }


def productsEntity(entity) -> list:
    return [productEntity(item) for item in entity]