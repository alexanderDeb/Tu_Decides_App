FROM python:3.8
WORKDIR /app
COPY requirements.txt .
RUN python3 -m pip install -r requirements.txt
COPY . .
CMD ["uvicorn","main:app","--host","0.0.0.0","--port","80"], "--reload"