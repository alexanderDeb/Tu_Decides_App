from fastapi import APIRouter, Response
from config.db import conection
from Schemas.Suggestion import suggestionEntity, suggestionsEntity
from Models.Suggestions import Suggestion
from bson import ObjectId
from starlette.status import HTTP_200_OK

SuggestionsRouter = APIRouter(tags=["Suggestion"])

@SuggestionsRouter.get('/suggestions')
def find_all_suggestions():
    return suggestionsEntity(conection.TuDecides.Suggestion.find())


@SuggestionsRouter.get('/suggestions/{id}')
def get_suggestions(id: str):
    return suggestionEntity(conection.TuDecides.Suggestion.find_one({"_id": ObjectId(id)}))


@SuggestionsRouter.post('/suggestions')
def create_suggestion(suggestion: Suggestion):
    new_user = dict(suggestion)
    id = conection.TuDecides.Suggestion.insert_one(new_user).inserted_id
    suggestionConsult = conection.TuDecides.Suggestion.find_one({"_id": id})
    return suggestionEntity(suggestionConsult)


@SuggestionsRouter.put('/suggestions/{id}')
def update_suggestions(id: str, suggestion: Suggestion):
    edit_user = dict(suggestion)
    conection.TuDecides.Suggestion.find_one_and_update({"_id": ObjectId(id)},{"$set":edit_user})
    return suggestionEntity(conection.TuDecides.Suggestion.find_one({"_id":ObjectId(id)}))


@SuggestionsRouter.delete('/suggestions/{id}')
def delete_suggestions(id: str):
    suggestionEntity(conection.TuDecides.Suggestion.find_one_and_delete({"_id": ObjectId(id)}))
    return Response(status_code=HTTP_200_OK)