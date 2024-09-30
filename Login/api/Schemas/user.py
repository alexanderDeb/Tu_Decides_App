def userEntity(item) -> dict:
    return{
        "id": str(item['_id']),
        'username': item['username'],
        'phone': item['phone'],
        'password': item['password']
    }


def usersEntity(entity) -> list:
    return [userEntity(item) for item in entity]