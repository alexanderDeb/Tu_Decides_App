def suggestionEntity(item) -> dict:
    return{
        "id": str(item['_id']),
        'foodName': item['foodName'],
        'description': item['description'],
        'image': item['image']
    }


def suggestionsEntity(entity) -> list:
    return [suggestionEntity(item) for item in entity]