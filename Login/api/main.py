from fastapi import FastAPI
from Routes.Suggestions import SuggestionsRouter
from Routes.products import ProductRouter
from Routes.users import usersRouter
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(
    title="Tu Decides Api",
    description="Tu Decides es una aplicación diseñada específicamente para estudiantes universitarios, que les permite participar y tener voz en la elección de los alimentos que se ofrecen en la cafetería de su campus. Con esta aplicación, los estudiantes podrán votar por los alimentos que desean ver disponibles en la cafetería, brindando a los administradores y al personal de la cafetería información directa y en tiempo real sobre las preferencias de los estudiantes.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(SuggestionsRouter)
app.include_router(ProductRouter)
app.include_router(usersRouter)