from fastapi import APIRouter, Response
from config.db import conection
from Schemas.user import userEntity, usersEntity
from Models.users import User
from bson import ObjectId
from starlette.status import HTTP_204_NO_CONTENT

usersRouter = APIRouter(tags=["Users"])

@usersRouter.get('/user')
def find_all_user():
    return usersEntity(conection.TuDecides.Users.find())


@usersRouter.get('/user/{id}')
def Get_User(id: str):
    return userEntity(conection.TuDecides.Users.find_one({"_id": ObjectId(id)}))


@usersRouter.post('/user')
def create_user(user: User):
    new_user = dict(user)
    id = conection.TuDecides.Users.insert_one(new_user).inserted_id
    user = conection.TuDecides.Users.find_one({"_id": id})
    return userEntity(user)


@usersRouter.put('/user/{id}')
def update_user(id: str, user: User):
    edit_user = dict(user)
    conection.TuDecides.Users.find_one_and_update({"_id": ObjectId(id)},{"$set":edit_user})
    return userEntity(conection.TuDecides.Users.find_one({"_id":ObjectId(id)}))


@usersRouter.delete('/user/{id}')
def delete_user(id: str):
    userEntity(conection.TuDecides.Users.find_one_and_delete({"_id": ObjectId(id)}))
    return Response(status_code=HTTP_204_NO_CONTENT)